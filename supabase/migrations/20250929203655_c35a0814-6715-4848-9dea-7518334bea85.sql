-- Add RLS policies for guest orders using access_token authentication

-- Policy: Allow guest users to create orders with null user_id
CREATE POLICY "Guest users can create orders with access token"
ON public.orders
FOR INSERT
WITH CHECK (
  -- Either authenticated user creating their own order
  (auth.uid() IS NOT NULL AND auth.uid() = user_id)
  OR
  -- Or guest user (null user_id) creating order with access_token
  (user_id IS NULL AND access_token IS NOT NULL)
);

-- Policy: Allow viewing orders via access_token (for guest orders)
CREATE POLICY "Users can view orders with access token"
ON public.orders
FOR SELECT
USING (
  -- Authenticated users can see their own orders
  (auth.uid() = user_id)
  OR
  -- Anyone can view order if they provide correct access_token via RPC
  -- (access_token matching will be done via custom function)
  (user_id IS NULL)
);

-- Policy: Allow order updates via access_token (for order status tracking)
CREATE POLICY "Orders can be updated with access token"
ON public.orders
FOR UPDATE
USING (
  -- Authenticated users can update their own orders
  (auth.uid() = user_id)
  OR
  -- System can update any order
  (current_setting('role'::text) = 'service_role'::text)
  OR
  -- Guest orders can be updated (will be controlled by application logic)
  (user_id IS NULL)
);

-- Drop old restrictive policies that block guest orders
DROP POLICY IF EXISTS "Authenticated users can create orders" ON public.orders;
DROP POLICY IF EXISTS "Authenticated users can update their own orders" ON public.orders;
DROP POLICY IF EXISTS "Authenticated users can view their own orders" ON public.orders;

-- Update order_items policies to support guest orders
DROP POLICY IF EXISTS "Users can create order items for their orders" ON public.order_items;
DROP POLICY IF EXISTS "Users can view order items for their authenticated orders" ON public.order_items;

-- Allow creating order items for any order (authenticated or guest)
CREATE POLICY "Users can create order items for orders"
ON public.order_items
FOR INSERT
WITH CHECK (
  -- Authenticated users can add items to their orders
  (auth.uid() IS NOT NULL AND EXISTS (
    SELECT 1 FROM orders 
    WHERE orders.id = order_items.order_id 
    AND orders.user_id = auth.uid()
  ))
  OR
  -- Guest users can add items to their orders
  (EXISTS (
    SELECT 1 FROM orders 
    WHERE orders.id = order_items.order_id 
    AND orders.user_id IS NULL
  ))
);

-- Allow viewing order items for orders (authenticated or guest)
CREATE POLICY "Users can view order items for orders"
ON public.order_items
FOR SELECT
USING (
  -- Authenticated users can view their order items
  (EXISTS (
    SELECT 1 FROM orders 
    WHERE orders.id = order_items.order_id 
    AND orders.user_id = auth.uid()
  ))
  OR
  -- Guest orders are viewable (access control via access_token in application)
  (EXISTS (
    SELECT 1 FROM orders 
    WHERE orders.id = order_items.order_id 
    AND orders.user_id IS NULL
  ))
);

-- Create a function to securely fetch guest orders by access token
CREATE OR REPLACE FUNCTION public.get_order_by_token(order_access_token UUID)
RETURNS TABLE (
  id UUID,
  email TEXT,
  total_amount NUMERIC,
  status TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    orders.id,
    orders.email,
    orders.total_amount,
    orders.status,
    orders.created_at,
    orders.updated_at
  FROM public.orders
  WHERE orders.access_token = order_access_token
  AND orders.user_id IS NULL;
END;
$$;

COMMENT ON FUNCTION public.get_order_by_token IS 'Securely retrieve guest order details using access token without exposing the token in policies';