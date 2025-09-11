import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import IntakeQWidget from "@/components/IntakeQWidget";
import ServiceBookingButton from "@/components/ServiceBookingButton";

const IVTherapy = () => {
  const [selectedCategory, setSelectedCategory] = useState('basic');
  const [priceFilter, setPriceFilter] = useState('any');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  useEffect(() => {
    document.title = "IV Therapy Services | Stay Dripped IV & Wellness Co.";
  }, []);

  const categories = [
    { id: 'basic', name: 'Basic IV Therapy', label: 'Basic Hydration' },
    { id: 'standard', name: 'Standard IV Therapy', label: 'Standard Wellness' },
    { id: 'specialty', name: 'Specialty IV Therapy', label: 'Specialty Treatments' },
    { id: 'premium', name: 'Premium IV Therapy', label: 'Premium Therapies' },
    { id: 'nad', name: 'NAD+ IV Therapy', label: 'NAD+ Therapy' }
  ];

  const ivTherapyServices = {
    basic: [
      {
        id: 'rehydrate',
        name: 'Rehydrate IV Drip',
        category: 'Basic Hydration',
        price: '$125',
        badge: 'Most Popular',
        description: 'Basic hydration therapy with essential electrolytes for rapid rehydration and energy restoration.',
        features: [
          'Normal Saline 1000ml',
          'Essential Electrolytes',
          'Rapid Hydration',
          'Energy Restoration',
          '30-minute treatment'
        ]
      },
      {
        id: 'rehydrate-plus',
        name: 'Rehydrate Plus IV Drip',
        category: 'Enhanced Hydration',
        price: '$150',
        description: 'Enhanced hydration with vitamins and minerals for superior wellness support.',
        features: [
          'Normal Saline 1000ml',
          'B-Complex Vitamins',
          'Vitamin C',
          'Magnesium',
          'Enhanced Recovery'
        ]
      }
    ],
    standard: [
      {
        id: 'jr-myers',
        name: "Jr. Myers' Cocktail IV Drip",
        category: 'Standard Wellness',
        price: '$175',
        badge: 'Foundation',
        description: 'Foundational nutrient blend for general wellness and immune support.',
        features: [
          'Vitamin B-Complex',
          'Vitamin B12',
          'Vitamin C',
          'Glutathione'
        ]
      },
      {
        id: 'myers',
        name: "Myers' Cocktail IV Drip",
        category: 'Standard Wellness',
        price: '$200',
        badge: 'Classic',
        description: 'The classic Myers\' formula for comprehensive nutrient support and wellness optimization.',
        features: [
          'Vitamin B-Complex',
          'Vitamin B12',
          'Vitamin C',
          'Zinc',
          'Glutathione',  
          'Magnesium'
        ]
      },
      {
        id: 'mega-myers',
        name: "Mega Myers' Cocktail IV Drip",
        category: 'Standard Wellness',
        price: '$250',
        description: 'Maximum strength Myers\' formula for intensive wellness support and recovery.',
        features: [
          'High-Dose Vitamin C',
          'B-Complex + B12',
          'Magnesium + Calcium',
          'Zinc + Selenium',
          'Maximum Potency'
        ]
      },
      {
        id: 'hangover',
        name: 'The Day After Hangover Relief IV Drip',
        category: 'Standard Wellness',
        price: '$175',
        badge: 'Hangover Relief',
        description: 'Rapid recovery from hangovers with targeted hydration and detoxification support.',
        features: [
          'Vitamin B-Complex',
          'Vitamin B12',
          'Anti-Nausea Medication',
          'Glutathione',
          'Vitamin C'
        ]
      }
    ],
    specialty: [
      {
        id: 'sun-devil',
        name: 'The "Sun Devil" Energy Booster IV Drip',
        category: 'Specialty Treatments',
        price: '$225',
        badge: 'Performance',
        description: 'High-energy formula designed for peak performance and endurance.',
        features: [
          'Energy B-Vitamins',
          'Amino Acids',
          'Magnesium',
          'Performance Enhancers',
          'Endurance Support'
        ]
      },
      {
        id: 'd-book',
        name: 'The "D-Book" Performance Booster IV Drip',
        category: 'Specialty Treatments',
        price: '$275',
        description: 'Elite athletic performance formula for professional-level optimization.',
        features: [
          'Vitamin B6',
          'Vitamin B12',
          'Vitamin C',
          'Glutathione',
          'Amino Blend',
          'Magnesium'
        ]
      },
      {
        id: 'diamond-back',
        name: 'The "Diamond-Back" Immune Booster IV Drip',
        category: 'Specialty Treatments',
        price: '$200',
        badge: 'Immunity',
        description: 'Powerful immune system support with high-dose vitamins and antioxidants.',
        features: [
          'High-Dose Vitamin C',
          'Zinc + Selenium',
          'Immune Boosters',
          'Antioxidant Protection',
          'Cold & Flu Defense'
        ]
      },
      {
        id: 'scottsdale',
        name: 'The "Scottsdale" Beauty IV Bag',
        category: 'Specialty Treatments',
        price: '$250',
        badge: 'Beauty',
        description: 'Beauty and anti-aging formula for radiant skin and enhanced vitality.',
        features: [
          'Vitamin B-Complex',
          'Vitamin B12',
          'MICC',
          'Zinc',
          'Glutathione',
          'Biotin'
        ]
      },
      {
        id: 'arizona-detox',
        name: 'The "Arizona" Detox & Cleanse IV Drip',
        category: 'Specialty Treatments',
        price: '$225',
        badge: 'Detox',
        description: 'Comprehensive detoxification formula to cleanse and revitalize your body.',
        features: [
          'Vitamin B-Complex',
          'Alpha Lipoic Acid',
          'Vitamin C',
          'Zinc',
          'Glutathione',
          'Magnesium'
        ]
      },
      {
        id: 'stress-relief',
        name: 'The Stress Relief IV Drip',
        category: 'Specialty Treatments',
        price: '$200',
        description: 'Calming formula to reduce stress and promote relaxation and mental clarity.',
        features: [
          'Magnesium for Relaxation',
          'B-Complex for Stress',
          'Taurine',
          'Stress Reduction',
          'Mental Clarity'
        ]
      },
      {
        id: 'mental-clarity',
        name: 'The Mental Clarity IV Drip',
        category: 'Specialty Treatments',
        price: '$225',
        description: 'Cognitive enhancement formula for improved focus, memory, and mental performance.',
        features: [
          'Nootropic Nutrients',
          'B-Complex for Brain',
          'Phosphatidylcholine',
          'Enhanced Focus',
          'Memory Support'
        ]
      },
      {
        id: 'anti-inflammatory',
        name: 'The Anti-Inflammatory IV Drip',
        category: 'Specialty Treatments',
        price: '$275',
        description: 'Powerful anti-inflammatory formula to reduce inflammation and promote healing.',
        features: [
          'Curcumin',
          'Glutathione',
          'Vitamin C',
          'Anti-Inflammatory Support',
          'Pain Relief'
        ]
      },
      {
        id: 'stay-dripped',
        name: 'The Stay Dripped Special IV Drip',
        category: 'Specialty Treatments',
        price: '$325',
        badge: 'Signature',
        description: 'Our signature blend combining the best of all our treatments for ultimate wellness.',
        features: [
          'Comprehensive Vitamin Blend',
          'Premium Nutrients',
          'Antioxidant Complex',
          'Complete Wellness',
          'Signature Formula'
        ]
      }
    ],
    premium: [
      {
        id: 'gold',
        name: 'The "Gold" Ultimate Hydration & Recovery IV Drip',
        category: 'Premium Therapies',
        price: '$300',
        badge: 'Premium',
        description: 'Premium hydration and recovery formula with advanced nutrient blend.',
        features: [
          'Advanced Hydration Formula',
          'Recovery Amino Acids',
          'Premium Vitamins',
          'Electrolyte Optimization',
          'Ultimate Recovery'
        ]
      }
    ],
    nad: [
      {
        id: 'nad-iv',
        name: 'NAD+ IV Infusion',
        category: 'NAD+ Therapy',
        price: '$299',
        badge: 'Anti-Aging',
        description: 'Advanced NAD+ therapy for cellular repair and anti-aging benefits.',
        features: [
          'NAD+ 250-500mg',
          'Cellular Energy Restoration',
          'Anti-Aging Support',
          'Mental Clarity Enhancement',
          '3-4 hour treatment'
        ]
      }
    ]
  };

  const getCurrentServices = () => {
    return ivTherapyServices[selectedCategory as keyof typeof ivTherapyServices] || [];
  };

  return (
    <>
      <Helmet>
        <title>IV Therapy Services | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Premium mobile IV therapy treatments in Scottsdale, AZ. Hydration, energy, immunity, detox, and custom vitamin infusions delivered to your location." />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://staydrippediv.com/iv-therapy" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IV Therapy Services | Stay Dripped IV & Wellness Co." />
        <meta property="og:description" content="Premium mobile IV therapy treatments in Scottsdale, AZ. Hydration, energy, immunity, detox, and custom vitamin infusions delivered to your location." />
        <meta property="og:url" content="https://staydrippediv.com/iv-therapy" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IV Therapy Services | Stay Dripped IV & Wellness Co." />
        <meta name="twitter:description" content="Premium mobile IV therapy treatments in Scottsdale, AZ. Hydration, energy, immunity, detox, and custom vitamin infusions delivered to your location." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/ed8aafa4-26e1-49c7-b39e-ba28edd0824c.png')] bg-cover bg-center opacity-30" />
        
        <div className="container relative z-10 mx-auto px-4 py-32 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Premium IV Therapy Services
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl font-light leading-relaxed opacity-90">
            Professional mobile IV treatments delivered to your location in Scottsdale, AZ
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold uppercase tracking-wide" asChild>
              <a href="#services">View Services</a>
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
                      bagImage: '/lovable-uploads/e81e5847-0fe3-48b2-bee5-10a1d7b6665f.png'
                    };
                  case 'rehydrate-plus':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-cyan-900',
                      badgeColor: 'bg-cyan-500',
                      title: 'REHYDRATE PLUS',
                      subtitle: '',
                      bagImage: '/lovable-uploads/63791b25-36b1-4a68-8b2b-4de6ec40c35f.png'
                    };
                  case 'jr-myers':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-green-900',
                      badgeColor: 'bg-green-500',
                      title: 'JR MYERS',
                      subtitle: 'COCKTAIL',
                      bagImage: '/lovable-uploads/535cce13-e549-426e-9562-da1e83740c9e.png'
                    };
                  case 'myers':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-pink-900',
                      badgeColor: 'bg-pink-500',
                      title: 'MYERS',
                      subtitle: 'COCKTAIL',
                      bagImage: '/lovable-uploads/5e166b5e-d73a-4a58-8f6c-b653d9ebb5b1.png'
                    };
                  case 'hangover':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-yellow-900',
                      badgeColor: 'bg-yellow-500',
                      title: 'THE DAY-AFTER',
                      subtitle: '"HANGOVER BAG"',
                      bagImage: '/lovable-uploads/0ab0b2fc-eb5e-4c68-bc62-48374b5a46f6.png'
                    };
                  case 'sun-devil':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-red-900',
                      badgeColor: 'bg-red-500',
                      title: 'THE SUN DEVIL',
                      subtitle: 'ENERGY BOOST',
                      bagImage: '/lovable-uploads/7551a773-d7e4-4584-a6e9-e6c5fdd49f50.png'
                    };
                  case 'd-book':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-purple-900',
                      badgeColor: 'bg-purple-500',
                      title: 'THE D-BOOK',
                      subtitle: 'PERFORMANCE BAG',
                      bagImage: '/lovable-uploads/a5d1ca6c-d9ad-4fe6-861d-dc838db70801.png'
                    };
                  case 'scottsdale':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-pink-900', 
                      badgeColor: 'bg-pink-500',
                      title: 'THE SCOTTSDALE',
                      subtitle: 'BEAUTY BAG',
                      bagImage: '/lovable-uploads/8c4a3599-d5d5-4493-83f7-d4058876e25d.png'
                    };
                  case 'arizona-detox':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-cyan-900',
                      badgeColor: 'bg-cyan-500',
                      title: 'THE ARIZONA',
                      subtitle: 'DETOX & CLEANSE',
                      bagImage: '/lovable-uploads/bcef40ff-face-4462-965d-5f9d26ee8403.png'
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
                      <ServiceBookingButton serviceId={service.id} serviceName={service.name} />
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