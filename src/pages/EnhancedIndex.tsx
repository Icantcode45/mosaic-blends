import HeroSection from "@/components/HeroSection";
import EnhancedTrustBarSection from "@/components/EnhancedTrustBarSection";
import EnhancedServicesSection from "@/components/EnhancedServicesSection";
import LifestyleShowcase from "@/components/LifestyleShowcase";
import EnhancedStatsSection from "@/components/EnhancedStatsSection";
import TelehealthSection from "@/components/TelehealthSection";
import SupplementsSection from "@/components/SupplementsSection";
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
      
      {/* 2. Trust Indicators - Build immediate credibility */}
      <EnhancedTrustBarSection />
      
      {/* 3. Services Overview - Show what we offer */}
      <EnhancedServicesSection />
      
      {/* 4. Lifestyle Experience - Show the premium mobile experience */}
      <LifestyleShowcase />
      
      {/* 5. Results & Stats - Prove effectiveness with data */}
      <EnhancedStatsSection />
      
      {/* 6. Telehealth Services - Additional service offering */}
      <TelehealthSection />
      
      {/* 7. Supplements - Complementary products */}
      <SupplementsSection />
      
      {/* 8. Membership Plans - Convert visitors with pricing */}
      <EnhancedMembershipSection />
      
      {/* 9. Partners & Certifications - Additional credibility */}
      <EnhancedPartnersSection />
      
      {/* 10. FAQ - Address common concerns */}
      <FAQSection />
      
      {/* 11. Newsletter - Capture leads */}
      <NewsletterSection />
      
      {/* 12. Contact - Make it easy to get in touch */}
      <EnhancedContactSection />
    </div>
  );
};

export default EnhancedIndex;