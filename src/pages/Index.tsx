import ModernHeroSection from "@/components/ModernHeroSection";
import ProfessionalTrustSection from "@/components/ProfessionalTrustSection";
import ModernServicesShowcase from "@/components/ModernServicesShowcase";
import ProcessStepsSection from "@/components/ProcessStepsSection";
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
      
      {/* 1. Modern Hero Section - Primary value proposition with trust indicators */}
      <ModernHeroSection />
      
      {/* 2. Professional Trust Section - Credibility and certifications */}
      <ProfessionalTrustSection />
      
      {/* 3. Modern Services Showcase - Treatment options with modern design */}
      <ModernServicesShowcase />
      
      {/* 4. Process Steps - How it works professionally */}
      <ProcessStepsSection />
      
      {/* 5. Client Testimonials - Social proof and reviews */}
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
