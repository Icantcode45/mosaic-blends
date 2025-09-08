import HeroSection from "@/components/HeroSection";

import EnhancedServicesSection from "@/components/EnhancedServicesSection";
import LifestyleShowcase from "@/components/LifestyleShowcase";
import EnhancedStatsSection from "@/components/EnhancedStatsSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import TelehealthSection from "@/components/TelehealthSection";

import EnhancedMembershipSection from "@/components/EnhancedMembershipSection";
import EnhancedPartnersSection from "@/components/EnhancedPartnersSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import EnhancedContactSection from "@/components/EnhancedContactSection";

const EnhancedIndex = () => {
  return (
    <div>
      {/* 1. Hero Section - Primary value proposition */}
      <HeroSection />
      
      
      {/* 3. Services Overview - Show what we offer */}
      <EnhancedServicesSection />
      
      {/* 4. Lifestyle Experience - Show the premium mobile experience */}
      <LifestyleShowcase />
      
      {/* 5. Results & Stats - Prove effectiveness with data */}
      <EnhancedStatsSection />
      
      {/* 6. Client Reviews - Showcase perfect 5.0 rating */}
      <GoogleReviewsSection />
      
      {/* 7. Telehealth Services - Additional service offering */}
      <TelehealthSection />
      
      
      {/* 9. Membership Plans - Convert visitors with pricing */}
      <EnhancedMembershipSection />
      
      {/* 10. Partners & Certifications - Additional credibility */}
      <EnhancedPartnersSection />
      
      {/* 11. FAQ - Address common concerns */}
      <FAQSection />
      
      {/* 12. Newsletter - Capture leads */}
      <NewsletterSection />
      
      {/* 13. Contact - Make it easy to get in touch */}
      <EnhancedContactSection />
    </div>
  );
};

export default EnhancedIndex;