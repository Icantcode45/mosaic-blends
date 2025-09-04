import { useEffect, useRef } from 'react';

interface PayPalButtonProps {
  buttonId?: string;
  className?: string;
}

const PayPalButton = ({ buttonId = "F57XQYU8N33BJ", className = "" }: PayPalButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Render hosted button if PayPal SDK is available
    if (window.paypal && containerRef.current) {
      window.paypal.HostedButtons({
        hostedButtonId: buttonId,
      }).render(`#paypal-container-${buttonId}`);
    }
  }, [buttonId]);

  return (
    <div className={className}>
      {/* Hosted Button Container */}
      <div id={`paypal-container-${buttonId}`} ref={containerRef}></div>
      
      {/* Fallback Form */}
      <div className="mt-4">
        <style>{`.pp-${buttonId}{text-align:center;border:none;border-radius:1.5rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#0061fe;color:#ffffff;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}`}</style>
        <form 
          ref={formRef}
          action={`https://www.paypal.com/ncp/payment/${buttonId}`} 
          method="post" 
          target="_blank" 
          style={{display:"inline-grid", justifyItems:"center", alignContent:"start", gap:"0.5rem"}}
        >
          <input className={`pp-${buttonId}`} type="submit" value="Pay Now" />
          <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
          <section style={{fontSize: "0.75rem"}}> 
            Powered by <img 
              src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" 
              alt="paypal" 
              style={{height:"0.875rem", verticalAlign:"middle"}}
            />
          </section>
        </form>
      </div>
    </div>
  );
};

// Extend Window interface for PayPal
declare global {
  interface Window {
    paypal?: any;
  }
}

export default PayPalButton;