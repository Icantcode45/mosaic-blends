import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import IntakeQWidget from "@/components/IntakeQWidget";
import EmbeddedServiceBooking from "@/components/EmbeddedServiceBooking";
import NADIVBagCard from "@/components/NADIVBagCard";

// Image assets (use imports so they work in production builds)
import heroBg from "@/assets/iv-therapy-hero-new.jpg";
import rehydrateBag from "@/assets/iv-bags/rehydrate-bag.png";
import rehydratePlusBag from "@/assets/iv-bags/rehydrate-plus-bag.png";
import jrMyersBag from "@/assets/iv-bags/jr-myers-bag.png";
import myersCocktailBag from "@/assets/iv-bags/myers-cocktail-bag.png";
import hangoverBag from "@/assets/iv-bags/hangover-bag.png";
import sunDevilBag from "@/assets/iv-bags/sun-devil-bag.png";
import dBookBag from "@/assets/iv-bags/d-book-bag.png";
import diamondbackBag from "@/assets/iv-bags/diamondback-bag.png";
import scottsdaleBeautyBagPng from "@/assets/iv-bags/scottsdale-beauty-bag.png";
import scottsdaleBeautyBagJpeg from "@/assets/iv-bags/scottsdale-beauty-bag.jpeg";
import arizonaDetoxBag from "@/assets/iv-bags/arizona-detox-bag.png";
import diamondNadBag from "@/assets/iv-bags/diamond-nad-bag.png";
import eliteNadBag from "@/assets/iv-bags/elite-nad-bag.png";
import goldHydrationBag from "@/assets/iv-bags/gold-hydration-bag.png";
import nadInjection from "@/assets/vials/nad-injection.webp";

const IVTherapy = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('any');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  useEffect(() => {
    document.title = "IV Therapy Services | Stay Dripped IV & Wellness Co.";
  }, []);

  const categories = [
    { id: 'all', name: 'All IV Therapy', label: 'All Therapies' },
    { id: 'basic', name: 'Basic IV Therapy', label: 'Basic Hydration' },
    { id: 'standard', name: 'Standard IV Therapy', label: 'Standard Wellness' },
    { id: 'specialty', name: 'Specialty IV Therapy', label: 'Specialty Treatments' },
    { id: 'premium', name: 'Premium IV Therapy', label: 'Premium Therapies' },
    { id: 'nad', name: 'NAD+ IV Therapy', label: 'NAD+ Therapy' }
  ];

  const ivTherapyServices = {
    basic: [
      {
        id: 'hangover',
        name: 'The "Day After" Hangover Relief IV Drip',
        category: 'Basic Hydration',
        price: '$189',
        badge: 'Hangover Relief',
        description: 'Rapid recovery from hangovers with targeted hydration and detoxification support.',
        features: [
          'Normal Saline 1000ml',
          'Vitamin B-Complex',
          'Vitamin B12',
          'Ketorolac (Anti-nausea)',
          'Magnesium Chloride',
          'Ondansetron (Anti-nausea)'
        ]
      },
      {
        id: 'jr-myers',
        name: 'Jr Myers Cocktail IV',
        category: 'Basic Hydration',
        price: '$189',
        badge: 'Jr Formula',
        description: 'A lighter version of the classic Myers Cocktail, perfect for first-time patients.',
        features: [
          'Normal Saline 500ml',
          'Vitamin B-Complex',
          'Vitamin B12',
          'Vitamin C (250mg)',
          'Glutathione'
        ]
      },
      {
        id: 'myers',
        name: 'Myers Cocktail IV',
        category: 'Basic Hydration',
        price: '$184.99',
        badge: 'Classic Formula',
        description: 'The classic Myers Cocktail formula with essential vitamins and minerals for overall wellness.',
        features: [
          'Normal Saline 1000ml',
          'Vitamin B-Complex',
          'Vitamin B12',
          'Vitamin C (500mg)',
          'Zinc Sulfate',
          'Glutathione',
          'Magnesium Chloride'
        ]
      }
    ],
    standard: [
      {
        id: 'anti-inflammatory',
        name: 'Anti-Inflammatory IV',
        category: 'Standard Wellness',
        price: '$225',
        description: 'Powerful anti-inflammatory formula to reduce inflammation and promote healing.',
        features: [
          'Normal Saline 1000ml',
          'Glutathione',
          'Vitamin C',
          'Magnesium Chloride',
          'Anti-inflammatory support'
        ]
      },
      {
        id: 'mental-clarity',
        name: 'Mental Clarity IV',
        category: 'Standard Wellness',
        price: '$225',
        description: 'Cognitive enhancement formula for improved focus, memory, and mental performance.',
        features: [
          'B-Complex for cognition',
          'Magnesium support',
          'Amino acid blend',
          'Enhanced focus',
          'Memory support'
        ]
      },
      {
        id: 'd-book',
        name: 'The Performance Booster IV Bag',
        category: 'Standard Wellness',
        price: '$225',
        description: 'Elite athletic performance formula for professional-level optimization.',
        features: [
          'Normal Saline 1000ml',
          'Vitamin B6',
          'Vitamin B12',
          'Vitamin C',
          'Glutathione',
          'Magnesium Chloride'
        ]
      },
      {
        id: 'diamondback',
        name: 'The Immune Booster IV Bag',
        category: 'Standard Wellness',
        price: '$225',
        badge: 'Immunity',
        description: 'Powerful immune system support with high-dose vitamins and antioxidants.',
        features: [
          'Normal Saline 1000ml',
          'Vitamin B-Complex',
          'High-dose Vitamin C',
          'Vitamin B12',
          'Zinc Sulfate',
          'Glutathione'
        ]
      },
      {
        id: 'sun-devil',
        name: 'The "Sun Devil" Energy Boost IV',
        category: 'Standard Wellness',
        price: '$245',
        badge: 'Performance',
        description: 'High-energy formula designed for peak performance and endurance.',
        features: [
          'Normal Saline 1000ml',
          'B-Complex vitamins',
          'Vitamin B12',
          'Amino acid complex',
          'Magnesium Chloride',
          'Energy optimization'
        ]
      }
    ],
    specialty: [
      {
        id: 'weight-management',
        name: 'Weight Management Support IV',
        category: 'Specialty Treatments',
        price: '$269',
        badge: 'Metabolism',
        description: 'Metabolic support formula designed to enhance weight management and energy.',
        features: [
          'L-Carnitine blend',
          'B-Complex Vitamins',
          'Amino acid complex',
          'Metabolism enhancement',
          'Energy optimization'
        ]
      },
      {
        id: 'arizona-detox',
        name: 'The "Arizona" Ultimate Hydration & Recovery IV',
        category: 'Specialty Treatments',
        price: '$269',
        badge: 'Detox',
        description: 'Comprehensive detoxification and recovery formula for total body wellness.',
        features: [
          'Normal Saline 1000ml',
          'Vitamin B-Complex',
          'Alpha Lipoic Acid',
          'Vitamin C',
          'Zinc Sulfate',
          'Glutathione'
        ]
      },
      {
        id: 'scottsdale-beauty',
        name: 'The Beauty Bag',
        category: 'Specialty Treatments',
        price: '$269',
        badge: 'Beauty',
        description: 'Beauty and anti-aging formula for radiant skin and enhanced vitality.',
        image_url: scottsdaleBeautyBagJpeg,
        features: [
          'Normal Saline 1000ml',
          'Vitamin B-Complex',
          'Vitamin B12',
          'Vitamin C',
          'Zinc Sulfate',
          'Glutathione'
        ]
      },
      {
        id: 'stress-relief',
        name: 'Stress Relief IV',
        category: 'Specialty Treatments',
        price: '$319',
        description: 'Calming formula to reduce stress and promote relaxation and mental clarity.',
        features: [
          'Magnesium Chloride',
          'B-Complex vitamins',
          'Taurine',
          'Stress reduction',
          'Mental clarity enhancement'
        ]
      },
      {
        id: 'gold-hydration',
        name: 'The "Gold" Hydration IV',
        category: 'Specialty Treatments',
        price: '$319',
        badge: 'Premium',
        description: 'Premium hydration therapy with essential vitamins and minerals for superior wellness.',
        features: [
          'Normal Saline 1000ml',
          'B-Complex Vitamins',
          'Vitamin C',
          'Magnesium Chloride',
          'Premium Recovery'
        ]
      },
      {
        id: 'stay-dripped',
        name: 'The "Stay Dripped" Special IV',
        category: 'Specialty Treatments',
        price: '$345',
        badge: 'Signature',
        description: 'Our signature blend combining the best of all our treatments for ultimate wellness.',
        features: [
          'Normal Saline 1000ml',
          'Comprehensive vitamin blend',
          'Premium amino acids',
          'Antioxidant complex',
          'Complete wellness formula',
          'Signature therapeutic blend'
        ]
      }
    ],
    premium: [
      {
        id: 'platinum-hydration',
        name: 'The "Platinum" Hydration IV',
        category: 'Premium Therapies',
        price: '$395',
        badge: 'Ultra Premium',
        description: 'Our most comprehensive hydration therapy with advanced nutrient blend.',
        features: [
          'Normal Saline 1000ml',
          'Advanced B-Complex',
          'High-Dose Vitamin C',
          'Magnesium + Calcium',
          'Premium Electrolyte Blend',
          'Ultimate Recovery'
        ]
      },
      {
        id: 'fountain-youth',
        name: 'The "Fountain Of Youth" IV',
        category: 'Premium Therapies',
        price: '$400',
        badge: 'Beauty + NAD+',
        description: 'Enhanced beauty and anti-aging formula with premium nutrients for youthful vitality.',
        features: [
          'Normal Saline 1000ml',
          'Vitamin B-Complex',
          'Vitamin C (500mg)',
          'Glutathione',
          'Zinc Sulfate',
          'Biotin',
          'Advanced anti-aging complex'
        ]
      }
    ],
    nad: [
      {
        id: 'nad-therapy',
        name: 'NAD+ Therapy IV (250mg)',
        category: 'NAD+ Therapy',
        price: '$500',
        badge: 'Standard NAD+',
        description: 'Standard NAD+ therapy with 250mg dose for cellular repair and energy restoration.',
        image_url: nadInjection,
        features: [
          'Normal Saline 500ml',
          'NAD+ 250mg',
          'Cellular energy restoration',
          'Anti-aging support',
          '2-3 hour treatment'
        ]
      },
      {
        id: 'diamond-nad',
        name: 'The "Diamond" NAD+ Therapy IV',
        category: 'NAD+ Therapy',
        price: '$525',
        badge: 'Diamond Elite',
        description: 'Our exclusive Diamond NAD+ therapy with comprehensive wellness support.',
        features: [
          'Normal Saline 500ml',
          'Premium NAD+ dose',
          'Complete vitamin complex',
          'Advanced amino blend',
          'Maximum glutathione',
          'Elite anti-aging support',
          '3-4 hour treatment'
        ]
      },
      {
        id: 'platinum-nad',
        name: 'The "Platinum" NAD+ Therapy IV',
        category: 'NAD+ Therapy',
        price: '$700',
        badge: 'Premium NAD+',
        description: 'Premium NAD+ therapy combining hydration with high-dose NAD+ for maximum benefits.',
        features: [
          'Normal Saline 1000ml',
          'NAD+ (premium dose)',
          'B-Complex vitamins',
          'Vitamin C',
          'Glutathione',
          'Premium anti-aging blend',
          '3-4 hour treatment'
        ]
      }
    ]
  };

  const getCurrentServices = () => {
    if (selectedCategory === 'all') {
      // Return all services from all categories
      return Object.values(ivTherapyServices).flat();
    }
    return ivTherapyServices[selectedCategory as keyof typeof ivTherapyServices] || [];
  };

  const getCategoryId = (category: string) => {
    const categoryMapping: Record<string, string> = {
      'basic': '76b7e0a3-c252-479f-982a-a841edbfdda5',
      'standard': '19872648-7926-447a-97cd-24e1e44f8579', 
      'specialty': '314c20c9-4f5c-47f5-b58d-9e7f557598b4',
      'premium': '0fd23879-ea54-45f3-9b7e-204d87b3fd2c',
      'nad': 'dc59af69-156c-4431-a8a1-f9af17b4e286'
    };
    return categoryMapping[category];
  };

  return (
    <>
      <Helmet>
        <title>IV Therapy Scottsdale | Mobile IV Drips Phoenix | Hangover IV Arizona | Myers Cocktail</title>
        <meta name="description" content="Premium mobile IV therapy in Scottsdale, AZ. Hangover relief, Myers cocktail, immune boost, NAD+ therapy, hydration drips delivered. Licensed nurses, same-day service available." />
        <meta name="keywords" content="IV therapy Scottsdale, mobile IV drips Phoenix, hangover IV Arizona, Myers cocktail Scottsdale, hydration therapy Phoenix, immune boost IV Arizona, NAD+ therapy Scottsdale, vitamin IV drips Phoenix, mobile IV service Arizona, IV hydration Scottsdale" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://staydrippediv.com/iv-therapy" />
        
        {/* Local Business SEO */}
        <meta name="geo.region" content="US-AZ" />
        <meta name="geo.placename" content="Scottsdale, Phoenix" />
        <meta name="geo.position" content="33.4942;-111.9261" />
        <meta name="ICBM" content="33.4942, -111.9261" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IV Therapy Scottsdale | Mobile IV Drips Phoenix | Hangover IV Arizona" />
        <meta property="og:description" content="Premium mobile IV therapy in Scottsdale, AZ. Hangover relief, Myers cocktail, immune boost, NAD+ therapy, hydration drips delivered. Licensed nurses, same-day service available." />
        <meta property="og:url" content="https://staydrippediv.com/iv-therapy" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Stay Dripped IV & Wellness Co." />
        
        {/* Enhanced Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@staydrippediv" />
        <meta name="twitter:title" content="IV Therapy Scottsdale | Mobile IV Drips Phoenix | Hangover IV Arizona" />
        <meta name="twitter:description" content="Premium mobile IV therapy in Scottsdale, AZ. Hangover relief, Myers cocktail, immune boost, NAD+ therapy, hydration drips delivered. Licensed nurses, same-day service available." />
        
        {/* Service-specific structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Stay Dripped IV & Wellness Co. - IV Therapy",
            "image": "https://staydrippediv.com/assets/iv-therapy-hero-new.jpg",
            "telephone": "+1-602-688-9825",
            "url": "https://staydrippediv.com/iv-therapy",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Scottsdale",
              "addressRegion": "AZ",
              "addressCountry": "US"
            },
            "areaServed": ["Scottsdale, AZ", "Phoenix, AZ", "Paradise Valley, AZ", "Tempe, AZ"],
            "serviceType": "Mobile IV Therapy",
            "medicalSpecialty": "IV Therapy",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "IV Therapy Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hangover Relief IV",
                    "description": "Rapid hangover recovery with targeted hydration"
                  },
                  "price": "$189",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Myers Cocktail IV",
                    "description": "Classic vitamin and mineral wellness blend"
                  },
                  "price": "$184.99",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "NAD+ Therapy IV",
                    "description": "Cellular energy restoration and anti-aging"
                  },
                  "price": "$500",
                  "priceCurrency": "USD"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${heroBg})` }} />
        
        <div className="container relative z-10 mx-auto px-4 py-32 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Premium IV Therapy Services
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl font-light leading-relaxed opacity-90">
            Professional mobile IV treatments delivered to your location in Scottsdale, AZ
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold uppercase tracking-wide"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Services
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold uppercase tracking-wide border-white text-white hover:bg-white hover:text-slate-800" asChild>
              <a href="tel:+1-602-688-9825">Call (602) 688-9825</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-muted/50 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="font-semibold text-foreground">Filter by Category:</span>
            
            <div className="relative">
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="flex items-center justify-between min-w-[200px] px-4 py-2 bg-card border-2 border-border rounded-lg hover:border-primary transition-colors"
              >
                <span>{categories.find(cat => cat.id === selectedCategory)?.label || 'All Categories'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showCategoryDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card border-2 border-border rounded-lg shadow-lg z-50">
                  <ul className="py-2">
                    {categories.map(category => (
                      <li key={category.id}>
                        <button
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setShowCategoryDropdown(false);
                          }}
                          className={`w-full px-4 py-2 text-left hover:bg-primary/10 hover:text-primary transition-colors ${
                            selectedCategory === category.id ? 'bg-primary text-primary-foreground font-semibold' : ''
                          }`}
                        >
                          {category.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <span className="font-semibold text-foreground">Sort by Price:</span>
            
            <div className="relative">
              <button
                onClick={() => setShowPriceDropdown(!showPriceDropdown)}
                className="flex items-center justify-between min-w-[150px] px-4 py-2 bg-card border-2 border-border rounded-lg hover:border-primary transition-colors"
              >
                <span>Any Price</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showPriceDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showPriceDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card border-2 border-border rounded-lg shadow-lg z-50">
                  <ul className="py-2">
                    <li><button className="w-full px-4 py-2 text-left hover:bg-primary/10 hover:text-primary transition-colors">Any Price</button></li>
                    <li><button className="w-full px-4 py-2 text-left hover:bg-primary/10 hover:text-primary transition-colors">Low to High</button></li>
                    <li><button className="w-full px-4 py-2 text-left hover:bg-primary/10 hover:text-primary transition-colors">High to Low</button></li>
                    <li><button className="w-full px-4 py-2 text-left hover:bg-primary/10 hover:text-primary transition-colors">Under $200</button></li>
                    <li><button className="w-full px-4 py-2 text-left hover:bg-primary/10 hover:text-primary transition-colors">$200-$300</button></li>
                    <li><button className="w-full px-4 py-2 text-left hover:bg-primary/10 hover:text-primary transition-colors">Over $300</button></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              Our IV Therapy Menu
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Choose from our comprehensive selection of IV therapy treatments, each designed to address specific wellness goals.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="capitalize"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-2">
              {categories.find(cat => cat.id === selectedCategory)?.name}
            </h3>
            <div className="w-16 h-1 bg-primary rounded mx-auto"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {getCurrentServices().map((service) => {
              // Define custom styling for each specific treatment
              const getServiceStyle = (serviceId: string) => {
                switch (serviceId) {
                  case 'rehydrate':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-sky-900',
                      badgeColor: 'bg-sky-500',
                      title: 'REHYDRATE',
                      subtitle: '',
                      bagImage: rehydrateBag
                    };
                  case 'rehydrate-plus':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-cyan-900',
                      badgeColor: 'bg-cyan-500',
                      title: 'REHYDRATE PLUS',
                      subtitle: '',
                      bagImage: rehydratePlusBag
                    };
                  case 'jr-myers':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-green-900',
                      badgeColor: 'bg-green-500',
                      title: 'JR MYERS',
                      subtitle: 'COCKTAIL',
                      bagImage: jrMyersBag
                    };
                  case 'myers':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-pink-900',
                      badgeColor: 'bg-pink-500',
                      title: 'MYERS',
                      subtitle: 'COCKTAIL',
                      bagImage: myersCocktailBag
                    };
                  case 'hangover':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-yellow-900',
                      badgeColor: 'bg-yellow-500',
                      title: 'THE DAY-AFTER',
                      subtitle: '"HANGOVER BAG"',
                      bagImage: hangoverBag
                    };
                  case 'sun-devil':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-red-900',
                      badgeColor: 'bg-red-500',
                      title: 'THE SUN DEVIL',
                      subtitle: 'ENERGY BOOST',
                      bagImage: sunDevilBag
                    };
                  case 'd-book':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-purple-900',
                      badgeColor: 'bg-purple-500',
                      title: 'THE PERFORMANCE BOOSTER',
                      subtitle: 'PERFORMANCE BAG',
                      bagImage: dBookBag
                    };
                  case 'diamondback':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-pink-900',
                      badgeColor: 'bg-pink-500',
                      title: 'THE IMMUNE BOOSTER',
                      subtitle: 'IMMUNITY BOOST',
                      bagImage: diamondbackBag
                    };
                  case 'scottsdale-beauty':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-pink-900', 
                      badgeColor: 'bg-pink-500',
                      title: 'THE BEAUTY',
                      subtitle: 'BAG',
                      bagImage: scottsdaleBeautyBagPng
                    };
                  case 'arizona-detox':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-cyan-900',
                      badgeColor: 'bg-cyan-500',
                      title: 'THE ARIZONA',
                      subtitle: 'DETOX & CLEANSE',
                      bagImage: arizonaDetoxBag
                     };
                   case 'nad-plain':
                     return {
                       bgGradient: 'from-white to-white',
                       titleColor: 'text-purple-900',
                       badgeColor: 'bg-purple-500',
                       title: 'NAD+ IV DRIP',
                       subtitle: 'PLAIN SALINE',
                      bagImage: nadInjection
                     };
                   case 'fountain-youth':
                     return {
                       bgGradient: 'from-white to-white',
                       titleColor: 'text-rose-900',
                       badgeColor: 'bg-rose-500',
                       title: 'FOUNTAIN OF YOUTH',
                       subtitle: 'NAD+ BEAUTY',
                       bagImage: nadInjection
                     };
                   case 'diamond-nad':
                     return {
                       bgGradient: 'from-white to-white',
                       titleColor: 'text-teal-900',
                       badgeColor: 'bg-teal-500',
                       title: 'THE DIAMOND',
                       subtitle: 'NAD+ THERAPY BAG',
                       bagImage: diamondNadBag
                     };
                   case 'elite-nad':
                     return {
                       bgGradient: 'from-white to-white',
                       titleColor: 'text-slate-900',
                       badgeColor: 'bg-slate-500',
                       title: 'THE ELITE',
                       subtitle: 'NAD+ THERAPY BAG',
                       bagImage: eliteNadBag
                     };
                   case 'gold':
                     return {
                       bgGradient: 'from-white to-white',
                       titleColor: 'text-amber-900',
                       badgeColor: 'bg-amber-500',
                       title: 'THE GOLD',
                       subtitle: 'HYDRATION & RECOVERY',
                       bagImage: goldHydrationBag
                     };
                   default:
                     return {
                       bgGradient: 'from-white to-white',
                       titleColor: 'text-foreground',
                       badgeColor: 'bg-accent',
                       title: service.name.split(' ').slice(0, 2).join(' ').toUpperCase(),
                       subtitle: service.name.split(' ').slice(2).join(' ').toUpperCase(),
                       bagImage: undefined
                     };
                }
              };

              const style = getServiceStyle(service.id);

              // Use NAD+ component for specific NAD+ services with dosage options
              if (service.id === 'diamond-nad' || service.id === 'elite-nad') {
                return (
                  <NADIVBagCard
                    key={service.id}
                    service={service}
                    serviceStyle={style}
                    categoryId={getCategoryId(selectedCategory)}
                  />
                );
              }

              return (
                <div key={service.id} className="group relative overflow-hidden rounded-2xl bg-card shadow-lg border transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                  <div className={`h-48 bg-gradient-to-br ${style.bgGradient} relative overflow-hidden`}>
                    {/* IV Bag image */}
                    {style.bagImage ? (
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <img 
                          src={style.bagImage}
                          alt={`${service.name} IV Bag`}
                          className="h-full w-auto object-contain drop-shadow-2xl"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMDAgMTBDOTAgMTAgODAgMjAgODAgMzBMODAgMTcwQzgwIDE4MCA5MCAxOTAgMTAwIDE5MEMxMTAgMTkwIDEyMCAxODAgMTIwIDE3MEwxMjAgMzBDMTIwIDIwIDExMCAxMCAxMDAgMTBaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] bg-center bg-no-repeat opacity-20" />
                    )}
                    
                    {service.badge && (
                      <div className={`absolute top-4 right-4 z-10 rounded-full ${style.badgeColor} px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white`}>
                        {service.badge}
                      </div>
                    )}
                  </div>
                
                  <div className="p-6">
                    <div className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
                      {service.category}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-foreground">
                      {service.name}
                    </h3>
                    <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="text-secondary">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <EmbeddedServiceBooking 
                        serviceId={service.id} 
                        serviceName={service.name} 
                        serviceCategory={service.category}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 p-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-foreground">
              Ready for Your IV Therapy Treatment?
            </h3>
            <p className="mb-8 text-lg text-muted-foreground">
              Schedule your mobile IV therapy session today and experience the benefits of professional hydration and nutrient therapy in the comfort of your own location.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold" asChild>
                <Link to="/first-time-patients">Book Treatment</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold" asChild>
                <a href="tel:+1-602-688-9825">Call (602) 688-9825</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IVTherapy;