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
import GradientBlobSection from "@/components/GradientBlobSection";

const EnhancedIndex = () => {
  return (
    <div>
      {/* 1. Hero Section - Primary value proposition */}
      <HeroSection />
      
      {/* 2. Gradient Blob Cards - Interactive feature showcase */}
      <GradientBlobSection />
      
      {/* 3. Services - Treatment options */}
      <ServicesSection />
      
      {/* 4. Lifestyle Experience - Show the premium mobile experience */}
      <LifestyleShowcase />
      
      {/* 5. Results & Stats - Prove effectiveness with data */}
      <EnhancedStatsSection />
      
      {/* 6. Telehealth Services - Additional service offering */}
      <TelehealthSection />
      
      {/* 7. Membership Plans - Convert visitors with pricing */}
      <EnhancedMembershipSection />
      
      {/* 8. Partners & Certifications - Additional credibility */}
      <EnhancedPartnersSection />
      
      {/* 9. Client Reviews - Showcase perfect 5.0 rating */}
      <GoogleReviewsSection />
      
      {/* 10. Newsletter - Capture leads */}
      <NewsletterSection />
      
      {/* 11. BBB Accreditation - Trust and credibility */}
      <BBBAccreditation />
    </div>
  );
};

export default EnhancedIndex;