import { useEffect, useRef, useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PayPalCheckout() {
  const { state, clearCart, getTotalPrice } = useCart();
  const { user, session } = useAuth();
  const { toast } = useToast();
  const paypalRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  useEffect(() => {
    // Check if PayPal SDK is loaded
    if (window.paypal) {
      setPaypalLoaded(true);
      renderPayPalButton();
    } else {
      // If not loaded, wait for it
      const checkPayPal = setInterval(() => {
        if (window.paypal) {
          setPaypalLoaded(true);
          renderPayPalButton();
          clearInterval(checkPayPal);
        }
      }, 100);

      return () => clearInterval(checkPayPal);
    }
  }, [state.items]);

  const renderPayPalButton = () => {
    if (!paypalRef.current || !window.paypal || state.items.length === 0) return;

    // Clear any existing PayPal buttons
    paypalRef.current.innerHTML = '';

    window.paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: getTotalPrice().toFixed(2),
              currency_code: 'USD'
            },
            description: `Order with ${state.items.length} items`,
            items: state.items.map(item => ({
              name: item.product.name,
              unit_amount: {
                currency_code: 'USD',
                value: item.product.price.toFixed(2)
              },
              quantity: item.quantity.toString()
            }))
          }]
        });
      },
      onApprove: async (data: any, actions: any) => {
        setIsLoading(true);
        try {
          const details = await actions.order.capture();
          
          // Create order in database (now requires authentication)
          const orderId = crypto.randomUUID();
          const { error: orderError } = await supabase
            .from('orders')
            .insert({
              id: orderId,
              user_id: user?.id,
              email: user?.email || details.payer?.email_address || 'guest@example.com',
              total_amount: getTotalPrice(),
              status: 'paid',
              paypal_payment_id: details.id,
            });

          if (orderError) throw orderError;

          // Create order items
          const orderItems = state.items.map(item => ({
            order_id: orderId,
            product_id: item.product.id,
            quantity: item.quantity,
            price: item.product.price,
          }));

          const { error: itemsError } = await supabase
            .from('order_items')
            .insert(orderItems);

          if (itemsError) throw itemsError;

          toast({
            title: "Payment successful!",
            description: `Your order has been confirmed. Order ID: ${orderId.slice(0, 8)}`,
          });

          clearCart();
        } catch (error) {
          // Log error for debugging in development
          if (process.env.NODE_ENV === 'development') {
            console.error('Error processing order:', error);
          }
          
          toast({
            title: "Payment error",
            description: "There was an issue processing your order. Please try again.",
            variant: "destructive",
          });
        } finally {
          setIsLoading(false);
        }
      },
      onError: (err: any) => {
        // Log error for debugging in development
        if (process.env.NODE_ENV === 'development') {
          console.error('PayPal error:', err);
        }
        
        toast({
          title: "Payment error",
          description: "There was an issue with PayPal. Please try again.",
          variant: "destructive",
        });
      },
      style: {
        layout: 'vertical',
        color: 'blue',
        shape: 'rect',
        label: 'checkout'
      }
    }).render(paypalRef.current);
  };

  if (!paypalLoaded) {
    return (
      <Button disabled className="w-full">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading PayPal...
      </Button>
    );
  }

  // Require authentication for checkout
  if (!user || !session) {
    return (
      <div className="w-full p-4 border border-warning/20 rounded-lg bg-warning/5">
        <div className="flex items-center gap-2 mb-2">
          <ShieldAlert className="h-5 w-5 text-warning" />
          <h3 className="font-semibold text-warning">Authentication Required</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Please sign in to complete your purchase securely.
        </p>
        <Link to="/auth">
          <Button variant="outline" className="w-full">
            Sign In to Continue
          </Button>
        </Link>
      </div>
    );
  }

  if (state.items.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {isLoading && (
        <div className="text-center text-sm text-muted-foreground mb-2">
          Processing your payment...
        </div>
      )}
      <div ref={paypalRef} className="w-full" />
    </div>
  );
}