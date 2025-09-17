import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LifestyleShowcase from "@/components/LifestyleShowcase";
import EnhancedStatsSection from "@/components/EnhancedStatsSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import TelehealthSection from "@/components/TelehealthSection";
import EnhancedMembershipSection from "@/components/EnhancedMembershipSection";
import EnhancedPartnersSection from "@/components/EnhancedPartnersSection";
import NewsletterSection from "@/components/NewsletterSection";
import BBBAccreditation from "@/components/BBBAccreditation";

const EnhancedIndex = () => {
  return (
    <div>
      {/* 1. Hero Section - Primary value proposition */}
      <HeroSection />
      
      {/* 2. Services - Treatment options */}
      <ServicesSection />
      
      {/* 3. Lifestyle Experience - Show the premium mobile experience */}
      <LifestyleShowcase />
      
      {/* 4. Results & Stats - Prove effectiveness with data */}
      <EnhancedStatsSection />
      
      {/* 5. Telehealth Services - Additional service offering */}
      <TelehealthSection />
      
      {/* 6. Membership Plans - Convert visitors with pricing */}
      <EnhancedMembershipSection />
      
      {/* 7. Partners & Certifications - Additional credibility */}
      <EnhancedPartnersSection />
      
      {/* 8. Client Reviews - Showcase perfect 5.0 rating */}
      <GoogleReviewsSection />
      
      {/* 9. Newsletter - Capture leads */}
      <NewsletterSection />
      
      {/* 10. BBB Accreditation - Trust and credibility */}
      <BBBAccreditation />
    </div>
  );
};

export default EnhancedIndex;