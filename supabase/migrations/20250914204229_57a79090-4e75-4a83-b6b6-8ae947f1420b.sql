-- Create user profiles table for authenticated users
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  first_name TEXT,
  last_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create profiles policies
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = id);

-- Add trigger for automatic profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Update orders table to require authentication for sensitive operations
DROP POLICY IF EXISTS "Secure order creation" ON public.orders;
DROP POLICY IF EXISTS "System order updates" ON public.orders;

-- Only authenticated users can create orders
CREATE POLICY "Authenticated users can create orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Only allow system-level updates for payment processing
CREATE POLICY "System order updates for payments" 
ON public.orders 
FOR UPDATE 
USING (current_setting('role'::text) = 'service_role'::text);

-- Update order_items policies to be more secure
DROP POLICY IF EXISTS "Anyone can create order items" ON public.order_items;

-- Only authenticated users can create order items for their own orders
CREATE POLICY "Users can create order items for their orders" 
ON public.order_items 
FOR INSERT 
WITH CHECK (
  auth.uid() IS NOT NULL AND
  EXISTS (
    SELECT 1 FROM public.orders 
    WHERE orders.id = order_items.order_id 
    AND orders.user_id = auth.uid()
  )
);

-- Update cart_items to require user_id for authenticated users
ALTER TABLE public.cart_items ALTER COLUMN user_id SET NOT NULL;

-- Update cart_items policy
DROP POLICY IF EXISTS "Users can manage their cart items" ON public.cart_items;

CREATE POLICY "Authenticated users can manage their cart items" 
ON public.cart_items 
FOR ALL 
USING (auth.uid() = user_id);