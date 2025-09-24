import React from "react";
import headerLogo from "@/assets/stay-dripped-header-logo.jpeg";

interface BrandLogoProps {
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = "h-8 lg:h-10" }) => {
  return (
    <div className="shrink-0">
      <img
        src={headerLogo}
        alt="Stay Dripped Mobile IV Service logo"
        className={`${className} w-auto object-contain transition-all duration-300`}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        draggable={false}
      />
    </div>
  );
};

export default BrandLogo;
