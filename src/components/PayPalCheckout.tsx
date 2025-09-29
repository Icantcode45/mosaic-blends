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

    // Safely clear any existing PayPal buttons
    while (paypalRef.current.firstChild) {
      paypalRef.current.removeChild(paypalRef.current.firstChild);
    }

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
          
          // Create order in database (supports both authenticated and guest users)
          const orderId = crypto.randomUUID();
          const accessToken = crypto.randomUUID(); // Generate access token for order tracking
          
          const { data: orderData, error: orderError } = await supabase
            .from('orders')
            .insert({
              id: orderId,
              user_id: user?.id || null, // null for guest checkout
              email: user?.email || details.payer?.email_address || 'guest@example.com',
              total_amount: getTotalPrice(),
              status: 'paid',
              paypal_payment_id: details.id,
              access_token: accessToken,
            })
            .select()
            .single();

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

          // Show success message with order tracking info
          const orderRef = orderId.slice(0, 8);
          const trackingMessage = user 
            ? `Your order has been confirmed. Order #${orderRef}` 
            : `Order #${orderRef} confirmed! Save this access code to track your order: ${accessToken.slice(0, 13)}...`;

          toast({
            title: "Payment successful!",
            description: trackingMessage,
            duration: user ? 5000 : 10000, // Longer duration for guest orders
          });

          // Store access token in localStorage for guest users
          if (!user) {
            const guestOrders = JSON.parse(localStorage.getItem('guest_orders') || '[]');
            guestOrders.push({
              orderId,
              accessToken,
              orderRef,
              date: new Date().toISOString()
            });
            localStorage.setItem('guest_orders', JSON.stringify(guestOrders));
          }

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

  // Guest checkout is now supported with access tokens

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