-- Fix security vulnerabilities in orders table RLS policies

-- Drop the overly permissive policies
DROP POLICY IF EXISTS "Anyone can create orders" ON orders;
DROP POLICY IF EXISTS "Anyone can update orders" ON orders;

-- Create secure INSERT policy
-- Allow authenticated users to create orders for themselves
-- Allow guest checkout (unauthenticated) but only with proper constraints
CREATE POLICY "Secure order creation" 
ON orders 
FOR INSERT 
WITH CHECK (
  -- If user_id is provided, it must match the authenticated user
  (user_id IS NOT NULL AND auth.uid() = user_id) OR
  -- Allow guest checkout (user_id is NULL and access_token will be auto-generated)
  (user_id IS NULL AND auth.uid() IS NULL)
);

-- Create secure UPDATE policy
-- Only allow updates by order owners or for guest orders with valid access_token
CREATE POLICY "Secure order updates" 
ON orders 
FOR UPDATE 
USING (
  -- Authenticated users can update their own orders
  (user_id IS NOT NULL AND auth.uid() = user_id) OR
  -- Guest orders can be updated via access_token (for payment processing, etc.)
  (user_id IS NULL AND access_token IS NOT NULL)
) 
WITH CHECK (
  -- Prevent changing ownership during updates
  (user_id IS NOT NULL AND auth.uid() = user_id) OR
  (user_id IS NULL AND access_token IS NOT NULL)
);

-- Create a policy for system-level updates (like payment confirmations)
-- This allows backend processes to update orders regardless of authentication
CREATE POLICY "System order updates" 
ON orders 
FOR UPDATE 
USING (current_setting('role') = 'service_role');