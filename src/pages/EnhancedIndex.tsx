import ModernInteractiveHero from "@/components/ModernInteractiveHero";
import PremiumTrustSection from "@/components/PremiumTrustSection";
import AdvancedServicesShowcase from "@/components/AdvancedServicesShowcase";
import InnovativeProcessSection from "@/components/InnovativeProcessSection";
import ModernTestimonials from "@/components/ModernTestimonials";
import EnhancedStatsSection from "@/components/EnhancedStatsSection";
import TelehealthSection from "@/components/TelehealthSection";
import EnhancedMembershipSection from "@/components/EnhancedMembershipSection";
import EnhancedPartnersSection from "@/components/EnhancedPartnersSection";
import NewsletterSection from "@/components/NewsletterSection";
import BBBAccreditation from "@/components/BBBAccreditation";
import ComprehensiveServicesSection from "@/components/ComprehensiveServicesSection";
import EnhancedBookingSection from "@/components/EnhancedBookingSection";

const EnhancedIndex = () => {
  return (
    <div>
      {/* 1. Modern Interactive Hero Section */}
      <ModernInteractiveHero />
      
      {/* 2. Premium Trust Section */}
      <PremiumTrustSection />
      
      {/* 3. Advanced Services Showcase */}
      <AdvancedServicesShowcase />
      
      {/* 4. Comprehensive Services */}
      <ComprehensiveServicesSection />
      
      {/* 5. Enhanced Booking Section */}
      <EnhancedBookingSection />
      
      {/* 6. Innovative Process Section */}
      <InnovativeProcessSection />
      
      {/* 7. Modern Testimonials */}
      <ModernTestimonials />
      
      {/* 8. Results & Stats - Prove effectiveness with data */}
      <EnhancedStatsSection />
      
      {/* 9. Telehealth Services - Additional service offering */}
      <TelehealthSection />
      
      {/* 10. Membership Plans - Convert visitors with pricing */}
      <EnhancedMembershipSection />
      
      {/* 11. Partners & Certifications - Additional credibility */}
      <EnhancedPartnersSection />
      
      {/* 12. Newsletter - Capture leads */}
      <NewsletterSection />
      
      {/* 13. BBB Accreditation - Trust and credibility */}
      <BBBAccreditation />
    </div>
  );
};

export default EnhancedIndex;