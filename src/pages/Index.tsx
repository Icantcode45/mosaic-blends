import UltraModernHero from "@/components/UltraModernHero";
import PremiumTrustSection from "@/components/PremiumTrustSection";
import AdvancedServicesShowcase from "@/components/AdvancedServicesShowcase";
import InnovativeProcessSection from "@/components/InnovativeProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnhancedStatsSection from "@/components/EnhancedStatsSection";
import TelehealthSection from "@/components/TelehealthSection";
import EnhancedMembershipSection from "@/components/EnhancedMembershipSection";
import EnhancedPartnersSection from "@/components/EnhancedPartnersSection";
import NewsletterSection from "@/components/NewsletterSection";
import BBBAccreditation from "@/components/BBBAccreditation";
import TrustBar from "@/components/navigation/TrustBar";

const Index = () => {
  return (
    <div>
      {/* Trust Bar at the top */}
      <TrustBar />
      
      {/* 1. Ultra-Modern Hero Section */}
      <UltraModernHero />
      
      {/* 2. Premium Trust Section */}
      <PremiumTrustSection />
      
      {/* 3. Advanced Services Showcase */}
      <AdvancedServicesShowcase />
      
      {/* 4. Innovative Process Section */}
      <InnovativeProcessSection />
      
      {/* 5. Client Testimonials */}
      <TestimonialsSection />
      
      {/* 6. Results & Stats - Prove effectiveness with data */}
      <EnhancedStatsSection />
      
      {/* 7. Telehealth Services - Additional service offering */}
      <TelehealthSection />
      
      {/* 8. Membership Plans - Convert visitors with pricing */}
      <EnhancedMembershipSection />
      
      {/* 9. Partners & Certifications - Additional credibility */}
      <EnhancedPartnersSection />
      
      {/* 10. Newsletter - Capture leads */}
      <NewsletterSection />
      
      {/* 11. BBB Accreditation - Trust and credibility */}
      <BBBAccreditation />
    </div>
  );
};

export default Index;
