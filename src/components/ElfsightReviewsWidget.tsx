import { useEffect } from "react";

const ElfsightReviewsWidget = () => {
  useEffect(() => {
    // Load the Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="elfsight-app-0b06184e-88ba-488f-9d5e-789f8787d167" data-elfsight-app-lazy></div>
    </div>
  );
};

export default ElfsightReviewsWidget;