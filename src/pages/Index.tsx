import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title>IV Therapy Scottsdale | Mobile IV Drips | NAD+ Peptides | Stay Dripped</title>
        <meta name="description" content="Premium mobile IV therapy in Scottsdale, AZ. NAD+ therapy, vitamin injections, peptide treatments delivered to your location. Licensed medical professionals, same-day service." />
        <meta name="keywords" content="IV therapy Scottsdale, mobile IV drips Arizona, NAD+ therapy Phoenix, vitamin injections Scottsdale, peptide therapy Arizona, hangover IV Phoenix, Myers cocktail Scottsdale, mobile wellness Arizona, hydration therapy Phoenix, immune boost IV Scottsdale" />
        
        {/* Local SEO */}
        <meta name="geo.region" content="US-AZ" />
        <meta name="geo.placename" content="Scottsdale" />
        <meta name="geo.position" content="33.4942;-111.9261" />
        <meta name="ICBM" content="33.4942, -111.9261" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="IV Therapy Scottsdale | Mobile IV Drips | NAD+ Peptides | Stay Dripped" />
        <meta property="og:description" content="Premium mobile IV therapy in Scottsdale, AZ. NAD+ therapy, vitamin injections, peptide treatments delivered to your location. Licensed medical professionals, same-day service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://staydrippediv.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Stay Dripped IV & Wellness Co." />
        
        {/* Enhanced Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@staydrippediv" />
        <meta name="twitter:creator" content="@staydrippediv" />
        
        {/* Enhanced Structured Data for MedicalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Stay Dripped IV & Wellness Co.",
            "image": "https://staydrippediv.com/assets/stay-dripped-main-logo.webp",
            "telephone": "+1-602-688-9825",
            "email": "info@staydrippediv.com",
            "url": "https://staydrippediv.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Scottsdale",
              "addressRegion": "AZ",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.4942",
              "longitude": "-111.9261"
            },
            "areaServed": [
              "Scottsdale, AZ",
              "Phoenix, AZ",
              "Paradise Valley, AZ",
              "Tempe, AZ",
              "Mesa, AZ"
            ],
            "medicalSpecialty": [
              "IV Therapy",
              "NAD+ Therapy", 
              "Vitamin Injections",
              "Peptide Therapy",
              "Wellness Medicine"
            ],
            "serviceType": "Mobile Medical Services",
            "description": "Premium mobile IV therapy and wellness services in Scottsdale, Arizona",
            "priceRange": "$99-$700",
            "acceptsReservations": true,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "500+"
            }
          })}
        </script>
        
        {/* Service-specific structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile IV Therapy",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "Stay Dripped IV & Wellness Co."
            },
            "areaServed": "Scottsdale, AZ",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceType": "Mobile Service",
              "availableLanguage": "English"
            },
            "category": "Medical Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "IV Therapy Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Myers Cocktail IV"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "NAD+ Therapy"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Vitamin Injections"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <div className="animate-fade-up">
        {/* Trust Bar at the top */}
        <TrustBar />
        
        {/* 1. Ultra-Modern Hero Section */}
        <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <UltraModernHero />
        </div>
        
        {/* 2. Premium Trust Section */}
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <PremiumTrustSection />
        </div>
        
        {/* 3. Advanced Services Showcase */}
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <AdvancedServicesShowcase />
        </div>
        
        {/* 4. Innovative Process Section */}
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <InnovativeProcessSection />
        </div>
        
        {/* 5. Client Testimonials */}
        <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <TestimonialsSection />
        </div>
        
        {/* 6. Results & Stats - Prove effectiveness with data */}
        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <EnhancedStatsSection />
        </div>
        
        {/* 7. Telehealth Services - Additional service offering */}
        <div className="animate-fade-up" style={{ animationDelay: '0.7s' }}>
          <TelehealthSection />
        </div>
        
        {/* 8. Membership Plans - Convert visitors with pricing */}
        <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <EnhancedMembershipSection />
        </div>
        
        {/* 9. Partners & Certifications - Additional credibility */}
        <div className="animate-fade-up" style={{ animationDelay: '0.9s' }}>
          <EnhancedPartnersSection />
        </div>
        
        {/* 10. Newsletter - Capture leads */}
        <div className="animate-fade-up" style={{ animationDelay: '1.0s' }}>
          <NewsletterSection />
        </div>
        
        {/* 11. BBB Accreditation - Trust and credibility */}
        <div className="animate-fade-up" style={{ animationDelay: '1.1s' }}>
          <BBBAccreditation />
        </div>
      </div>
    </>
  );
};

export default Index;
