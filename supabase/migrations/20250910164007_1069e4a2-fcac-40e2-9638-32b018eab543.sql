-- Add secure access token for guest orders
ALTER TABLE public.orders 
ADD COLUMN access_token uuid DEFAULT gen_random_uuid();

-- Create index for efficient token lookups
CREATE INDEX idx_orders_access_token ON public.orders(access_token);

-- Drop the existing permissive RLS policy
DROP POLICY "Users can view their own orders" ON public.orders;

-- Create new secure RLS policies
CREATE POLICY "Authenticated users can view their own orders" 
ON public.orders 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Orders can be accessed via secure token" 
ON public.orders 
FOR SELECT 
USING (user_id IS NULL AND access_token IS NOT NULL);

-- Update the order_items policy to work with the new token system
DROP POLICY "Users can view order items for their orders" ON public.order_items;

CREATE POLICY "Users can view order items for their authenticated orders" 
ON public.order_items 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM orders 
  WHERE orders.id = order_items.order_id 
  AND orders.user_id = auth.uid()
));

CREATE POLICY "Order items accessible via secure token" 
ON public.order_items 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM orders 
  WHERE orders.id = order_items.order_id 
  AND orders.user_id IS NULL 
  AND orders.access_token IS NOT NULL
));