-- Fix critical security vulnerability: Remove direct access to guest orders
-- Guest orders should ONLY be accessible via get_order_by_token() function

-- Drop the insecure SELECT policy on orders
DROP POLICY IF EXISTS "Users can view orders with access token" ON public.orders;

-- Create a secure SELECT policy that only allows users to see their own authenticated orders
CREATE POLICY "Users can view their own orders" ON public.orders
  FOR SELECT
  USING (auth.uid() = user_id);

-- Drop the insecure UPDATE policy that allows any user to update guest orders
DROP POLICY IF EXISTS "Orders can be updated with access token" ON public.orders;

-- Create a secure UPDATE policy that only allows users to update their own orders
-- Service role can still update any order (needed for payment processing)
CREATE POLICY "Users can update their own orders" ON public.orders
  FOR UPDATE
  USING (
    (auth.uid() = user_id) 
    OR (current_setting('role'::text) = 'service_role'::text)
  );

-- Fix order_items SELECT policy to align with orders table
DROP POLICY IF EXISTS "Users can view order items for orders" ON public.order_items;

-- Create secure policy for viewing order items (only for user's own orders)
CREATE POLICY "Users can view their own order items" ON public.order_items
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE orders.id = order_items.order_id 
      AND orders.user_id = auth.uid()
    )
  );

-- Fix order_items INSERT policy to remove guest order access
DROP POLICY IF EXISTS "Users can create order items for orders" ON public.order_items;

-- Create secure policy for inserting order items (only for user's own orders)
CREATE POLICY "Users can create order items for their orders" ON public.order_items
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE orders.id = order_items.order_id 
      AND orders.user_id = auth.uid()
    )
  );

-- Note: Guest orders are now ONLY accessible via the get_order_by_token() function
-- which uses SECURITY DEFINER and requires the correct access_token
-- This prevents unauthorized access to customer email addresses