import { useEffect, useRef, useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function PayPalCheckout() {
  const { state, clearCart, getTotalPrice } = useCart();
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
          
          // Create order in database
          const { data: order, error: orderError } = await supabase
            .from('orders')
            .insert({
              email: details.payer?.email_address || 'guest@example.com',
              total_amount: getTotalPrice(),
              status: 'paid',
              paypal_payment_id: details.id,
            })
            .select()
            .single();

          if (orderError) throw orderError;

          // Create order items
          const orderItems = state.items.map(item => ({
            order_id: order.id,
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
            description: `Your order has been confirmed. Order ID: ${order.id.slice(0, 8)}`,
          });

          clearCart();
        } catch (error) {
          console.error('Error processing order:', error);
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
        console.error('PayPal error:', err);
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