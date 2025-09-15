import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import EnhancedTrustSection from "@/components/EnhancedTrustSection";
import EnhancedServicesGrid from "@/components/EnhancedServicesGrid";
import ProcessVisualization from "@/components/ProcessVisualization";
import MedicalTeamShowcase from "@/components/MedicalTeamShowcase";
import LifestyleShowcase from "@/components/LifestyleShowcase";
import TelehealthSection from "@/components/TelehealthSection";
import SupplementsSection from "@/components/SupplementsSection";
import PartnersSection from "@/components/PartnersSection";
import MembershipSection from "@/components/MembershipSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div>
      {/* 1. Enhanced Hero with Trust Indicators & Personalization */}
      <EnhancedHeroSection />
      
      {/* 2. Trust & Social Proof Section */}
      <EnhancedTrustSection />
      
      {/* 3. Enhanced Services Grid with Modern Design */}
      <EnhancedServicesGrid />
      
      {/* 4. Process Visualization - How It Works */}
      <ProcessVisualization />
      
      {/* 5. Medical Team Showcase - Credibility */}
      <MedicalTeamShowcase />
      
      {/* 6. Lifestyle Experience */}
      <LifestyleShowcase />
      
      {/* 7. Telehealth Services */}
      <TelehealthSection />
      
      {/* 8. Products & Supplements */}
      <SupplementsSection />
      
      {/* 9. Membership Plans */}
      <MembershipSection />
      
      {/* 10. Partners & Certifications */}
      <PartnersSection />
      
      {/* 11. FAQ Section */}
      <FAQSection />
      
      {/* 12. Newsletter Signup */}
      <NewsletterSection />
      
      {/* 13. Contact Information */}
      <ContactSection />
    </div>
  );
};

export default Index;
