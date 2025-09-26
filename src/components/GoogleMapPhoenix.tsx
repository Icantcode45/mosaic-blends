import React from "react";

const GoogleMapPhoenix: React.FC = () => {
  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-border/30">
      <iframe
        title="Phoenix Metro Area Map"
        src="https://maps.google.com/maps?q=Phoenix+Scottsdale+Tempe+Mesa+Chandler+Gilbert+Queen+Creek,+AZ&t=m&z=9&output=embed&iwloc=near"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5" />
    </div>
  );
};

export default GoogleMapPhoenix;
