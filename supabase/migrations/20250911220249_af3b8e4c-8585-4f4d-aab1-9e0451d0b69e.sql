-- Secure orders and order_items RLS by removing public token-based access
-- and restricting updates to authenticated owners only.

-- Orders: remove insecure public SELECT via access_token
DROP POLICY IF EXISTS "Orders can be accessed via secure token" ON public.orders;

-- Orders: replace broad update policy with owner-only updates
DROP POLICY IF EXISTS "Secure order updates" ON public.orders;

CREATE POLICY "Authenticated users can update their own orders"
ON public.orders
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Order items: remove insecure public SELECT via token
DROP POLICY IF EXISTS "Order items accessible via secure token" ON public.order_items;

-- Notes:
-- We keep existing policies:
--   - "Authenticated users can view their own orders" (SELECT on orders)
--   - "System order updates" (UPDATE on orders for service_role)
--   - "Secure order creation" (INSERT on orders permitting guest inserts when unauthenticated)
--   - "Users can view order items for their authenticated orders" (SELECT on order_items)
--   - "Anyone can create order items" (INSERT on order_items) to preserve guest checkout functionality
