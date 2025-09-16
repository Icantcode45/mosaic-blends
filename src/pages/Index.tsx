import TrustBar from "@/components/navigation/TrustBar";
import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import EnhancedBookingSection from "@/components/EnhancedBookingSection";
import ComprehensiveServicesSection from "@/components/ComprehensiveServicesSection";
import EnhancedTrustSection from "@/components/EnhancedTrustSection";
import ProcessVisualization from "@/components/ProcessVisualization";
import MedicalTeamShowcase from "@/components/MedicalTeamShowcase";
import LifestyleShowcase from "@/components/LifestyleShowcase";
import TelehealthSection from "@/components/TelehealthSection";
import EnhancedMembershipSection from "@/components/EnhancedMembershipSection";
import SupplementsSection from "@/components/SupplementsSection";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div>
      {/* Trust Metrics Bar */}
      <TrustBar />
      
      {/* 1. Enhanced Hero with Testimonial */}
      <EnhancedHeroSection />
      
      {/* 2. Enhanced Booking Section */}
      <EnhancedBookingSection />
      
      {/* 3. Comprehensive Services */}
      <ComprehensiveServicesSection />
      
      {/* 4. Trust & Social Proof Section */}
      <EnhancedTrustSection />
      
      {/* 5. Process Visualization - How It Works */}
      <ProcessVisualization />
      
      {/* 6. Medical Team Showcase - Credibility */}
      <MedicalTeamShowcase />
      
      {/* 7. Enhanced Membership Plans */}
      <EnhancedMembershipSection />
      
      {/* 8. Lifestyle Experience */}
      <LifestyleShowcase />
      
      {/* 9. Telehealth Services */}
      <TelehealthSection />
      
      {/* 10. Products & Supplements */}
      <SupplementsSection />
      
      {/* 11. Partners & Certifications */}
      <PartnersSection />
      
      {/* 12. FAQ Section */}
      <FAQSection />
      
      {/* 13. Newsletter Signup */}
      <NewsletterSection />
      
      {/* 14. Contact Information */}
      <ContactSection />
    </div>
  );
};

export default Index;
