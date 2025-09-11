import { useEffect } from 'react';

const IntakeQWidget = () => {
  useEffect(() => {
    // Set up IntakeQ configuration
    (window as any).intakeq = "68b14c4e0b7b143488664c75";
    (window as any).intakeqClientArea = true;

    // Create and load the IntakeQ script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://intakeq.com/js/widget.min.js?1";
    document.head.appendChild(script);

    // Cleanup function to remove script on unmount
    return () => {
      const existingScript = document.querySelector('script[src="https://intakeq.com/js/widget.min.js?1"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div 
        id="intakeq" 
        style={{ maxWidth: "720px", width: "100%" }}
        className="mx-auto"
      />
    </div>
  );
};

export default IntakeQWidget;