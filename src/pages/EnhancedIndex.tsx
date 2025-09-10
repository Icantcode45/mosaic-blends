import HeroSection from "@/components/HeroSection";

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
      
      {/* 2. Lifestyle Experience - Show the premium mobile experience */}
      <LifestyleShowcase />
      
      {/* 3. Results & Stats - Prove effectiveness with data */}
      <EnhancedStatsSection />
      
      {/* 4. Client Reviews - Showcase perfect 5.0 rating */}
      <GoogleReviewsSection />
      
      {/* 5. Telehealth Services - Additional service offering */}
      <TelehealthSection />
      
      
      {/* 6. Membership Plans - Convert visitors with pricing */}
      <EnhancedMembershipSection />
      
      {/* 7. Partners & Certifications - Additional credibility */}
      <EnhancedPartnersSection />
      
      {/* 8. FAQ - Address common concerns */}
      <FAQSection />
      
      {/* 9. Newsletter - Capture leads */}
      <NewsletterSection />
      
      {/* 10. Contact - Make it easy to get in touch */}
      <EnhancedContactSection />
    </div>
  );
};

export default EnhancedIndex;