import React from "react";
import webpLogo from "@/assets/stay-dripped-main-logo.webp";
import pngLogo from "@/assets/stay-dripped-hero-logo.png";
import jpegLogo from "@/assets/stay-dripped-main-logo.jpeg";

interface BrandLogoProps {
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = "h-8 lg:h-10" }) => {
  return (
    <div className="shrink-0">
      <picture>
        <source srcSet={webpLogo} type="image/webp" />
        <source srcSet={pngLogo} type="image/png" />
        <img
          src={jpegLogo}
          alt="Stay Dripped IV & Wellness Co. logo"
          className={`${className} w-auto object-contain transition-all duration-300`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable={false}
        />
      </picture>
    </div>
  );
};

export default BrandLogo;
