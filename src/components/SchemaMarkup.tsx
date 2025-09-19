import { Helmet } from "react-helmet";

interface SchemaMarkupProps {
  type: 'LocalBusiness' | 'MedicalBusiness' | 'Service' | 'Product' | 'Article';
  data: any;
}

const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  // Add common business data for business types
  if (type === 'LocalBusiness' || type === 'MedicalBusiness') {
    const businessData = {
      name: "Stay Dripped IV & Wellness Co.",
      image: "https://staydrippediv.com/assets/stay-dripped-main-logo.webp",
      telephone: "+1-602-688-9825",
      email: "info@staydrippediv.com",
      url: "https://staydrippediv.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Scottsdale",
        addressRegion: "AZ",
        postalCode: "85251",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "33.4942",
        longitude: "-111.9261"
      },
      areaServed: [
        "Scottsdale, AZ",
        "Phoenix, AZ", 
        "Paradise Valley, AZ",
        "Tempe, AZ",
        "Mesa, AZ",
        "Fountain Hills, AZ",
        "Cave Creek, AZ",
        "Carefree, AZ"
      ],
      openingHours: "Mo-Su 07:00-21:00",
      paymentAccepted: ["Cash", "Credit Card", "Check", "Insurance"],
      currenciesAccepted: "USD",
      priceRange: "$99-$700",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "500",
        bestRating: "5",
        worstRating: "1"
      },
      ...data
    };

    Object.assign(baseSchema, businessData);
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
    </Helmet>
  );
};

// Predefined schema templates
export const IVTherapyServiceSchema = {
  serviceType: "Mobile IV Therapy",
  medicalSpecialty: ["IV Therapy", "Hydration Therapy", "Vitamin Therapy"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IV Therapy Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Myers Cocktail IV",
          description: "Classic vitamin and mineral wellness blend"
        },
        price: "184.99",
        priceCurrency: "USD"
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "Hangover Relief IV",
          description: "Rapid hangover recovery with targeted hydration"
        },
        price: "189",
        priceCurrency: "USD"
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "NAD+ Therapy IV",
          description: "Cellular energy restoration and anti-aging"
        },
        price: "500",
        priceCurrency: "USD"
      }
    ]
  }
};

export const VitaminInjectionsSchema = {
  serviceType: "Mobile Vitamin Injection Services",
  medicalSpecialty: ["Vitamin Therapy", "Injection Therapy", "Wellness Medicine"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Vitamin Injection Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vitamin B12 Injection",
          description: "Energy-boosting methylcobalamin B12 injection"
        },
        price: "13",
        priceCurrency: "USD"
      },
      {
        "@type": "Offer", 
        itemOffered: {
          "@type": "Service",
          name: "Vitamin D3 Injection",
          description: "High-dose vitamin D3 for immune support"
        },
        price: "28",
        priceCurrency: "USD"
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "Glutathione Injection",
          description: "Master antioxidant for detox and skin health"
        },
        price: "48",
        priceCurrency: "USD"
      }
    ]
  }
};

export const PeptideTherapySchema = {
  serviceType: "Mobile Peptide Therapy Services",
  medicalSpecialty: ["Peptide Therapy", "NAD+ Therapy", "Anti-Aging Medicine", "Regenerative Medicine"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Peptide Therapy Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "NAD+ Therapy",
          description: "Cellular energy restoration and anti-aging therapy"
        },
        category: "Anti-Aging Medicine"
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BPC-157 Peptide",
          description: "Recovery and tissue repair peptide therapy"
        },
        category: "Recovery Medicine"
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PT-141 Peptide",
          description: "FDA-approved sexual wellness peptide therapy"
        },
        category: "Wellness Medicine"
      }
    ]
  }
};

export default SchemaMarkup;