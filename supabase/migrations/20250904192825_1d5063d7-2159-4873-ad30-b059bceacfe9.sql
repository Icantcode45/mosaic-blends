-- Create products table
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  category TEXT,
  stock_quantity INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  paypal_payment_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create order_items table
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create cart_items table for persistent cart (optional)
CREATE TABLE public.cart_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id TEXT, -- For guest users
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;

-- Products policies (public read access)
CREATE POLICY "Anyone can view products" ON public.products
  FOR SELECT USING (true);

-- Orders policies
CREATE POLICY "Users can view their own orders" ON public.orders
  FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Anyone can create orders" ON public.orders
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update orders" ON public.orders
  FOR UPDATE USING (true);

-- Order items policies
CREATE POLICY "Users can view order items for their orders" ON public.order_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.orders 
      WHERE orders.id = order_items.order_id 
      AND (orders.user_id = auth.uid() OR orders.user_id IS NULL)
    )
  );

CREATE POLICY "Anyone can create order items" ON public.order_items
  FOR INSERT WITH CHECK (true);

-- Cart items policies
CREATE POLICY "Users can manage their cart items" ON public.cart_items
  FOR ALL USING (
    auth.uid() = user_id OR 
    (user_id IS NULL AND session_id IS NOT NULL)
  );

-- Insert sample products
INSERT INTO public.products (name, description, price, category, stock_quantity, image_url) VALUES
('Probiotics Advanced Formula', 'Clinically-validated probiotic strains for optimal digestive health and immune support', 49.99, 'Probiotics & Gut Health', 100, 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400'),
('Vitamin D3 + K2', 'High-potency vitamin D3 with K2 for bone health and immune function', 29.99, 'Vitamins & Minerals', 150, 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400'),
('Omega-3 Fish Oil', 'Premium omega-3 fatty acids for heart and brain health', 39.99, 'Vitamins & Minerals', 80, 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400'),
('Comprehensive Health Panel', 'At-home testing kit for complete health analysis', 199.99, 'Test Kits & Panels', 25, 'https://images.unsplash.com/photo-1584362917165-526a968579a8?w=400'),
('Gut Microbiome Test', 'Advanced microbiome analysis with personalized recommendations', 149.99, 'Test Kits & Panels', 40, 'https://images.unsplash.com/photo-1582719201952-6b0af449ca35?w=400'),
('Magnesium Complex', 'Highly absorbable magnesium for muscle and nerve function', 24.99, 'Vitamins & Minerals', 200, 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for timestamp updates
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_cart_items_updated_at
  BEFORE UPDATE ON public.cart_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();