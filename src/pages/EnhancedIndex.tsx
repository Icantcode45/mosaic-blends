import HeroSection from "@/components/HeroSection";
import EnhancedTrustBarSection from "@/components/EnhancedTrustBarSection";
import EnhancedServicesSection from "@/components/EnhancedServicesSection";
import EnhancedStatsSection from "@/components/EnhancedStatsSection";
import TeamSection from "@/components/TeamSection";
import TelehealthSection from "@/components/TelehealthSection";
import SupplementsSection from "@/components/SupplementsSection";
import EnhancedPartnersSection from "@/components/EnhancedPartnersSection";
import EnhancedMembershipSection from "@/components/EnhancedMembershipSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import EnhancedContactSection from "@/components/EnhancedContactSection";

const EnhancedIndex = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Enhanced Trust Bar with Company Logos */}
      <EnhancedTrustBarSection />
      
      {/* Enhanced Services Section with Comprehensive Programs */}
      <EnhancedServicesSection />
      
      {/* Enhanced Stats Section with Multiple Metrics */}
      <EnhancedStatsSection />
      
      
      {/* Telehealth Section */}
      <TelehealthSection />
      
      {/* Supplements Section */}
      <SupplementsSection />
      
      {/* Enhanced Partners Section with Logos and Certifications */}
      <EnhancedPartnersSection />
      
      {/* Enhanced Membership Section with Detailed Pricing */}
      <EnhancedMembershipSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Newsletter Section */}
      <NewsletterSection />
      
      {/* Enhanced Contact Section with Business Hours */}
      <EnhancedContactSection />
    </div>
  );
};

export default EnhancedIndex;
