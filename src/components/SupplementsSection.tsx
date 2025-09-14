import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useCart, type Product } from "@/contexts/CartContext";
import ProductCard from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

const SupplementsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { openCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
      } catch (error) {
        // Log error for debugging but don't expose to user
        console.error('Error fetching products:', error);
        
        // Show user-friendly error message
        setProducts([]);
      } finally {
      setLoading(false);
    }
  };

  return (
    <section id="supplements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Premium Supplements
          </h2>
          <button 
            onClick={openCart}
            className="hidden sm:inline-flex text-primary font-medium hover:text-primary/80"
          >
            View cart →
          </button>
        </div>
        
        {loading ? (
          <div className="grid md:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="aspect-square w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        
        <div className="mt-8 sm:hidden">
          <button 
            onClick={openCart}
            className="text-primary font-medium hover:text-primary/80"
          >
            View cart →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupplementsSection;