import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import IntakeQWidget from "@/components/IntakeQWidget";
import EmbeddedServiceBooking from "@/components/EmbeddedServiceBooking";
import NADIVBagCard from "@/components/NADIVBagCard";

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
        category: 'Basic Hydration',
        price: '$150',
        description: 'Enhanced hydration with vitamins and minerals for superior wellness support.',
        features: [
          'Normal Saline 1000ml',
          'B-Complex Vitamins',
          'Vitamin C',
          'Magnesium',
          'Enhanced Recovery'
        ]
      },
      {
        id: 'rehydrate-deluxe',
        name: 'Rehydrate Deluxe IV Drip',
        category: 'Basic Hydration',
        price: '$175',
        badge: 'Premium Hydration',
        description: 'Deluxe hydration therapy with premium vitamins and electrolytes for maximum wellness support.',
        features: [
          'Normal Saline 1000ml',
          'Premium B-Complex',
          'High-Dose Vitamin C',
          'Magnesium + Calcium',
          'Enhanced Electrolytes',
          'Superior Recovery'
        ]
      }
    ],
    standard: [
      {
        id: 'anti-inflammatory',
        name: 'Anti-Inflammatory IV Drip',
        category: 'Standard Wellness',
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
        id: 'weight-management',
        name: 'Weight Management IV Drip',
        category: 'Standard Wellness',
        price: '$225',
        badge: 'Metabolism',
        description: 'Metabolic support formula designed to enhance weight management and energy.',
        features: [
          'L-Carnitine',
          'B-Complex Vitamins',
          'Chromium',
          'Metabolism Boosters',
          'Energy Enhancement'
        ]
      },
      {
        id: 'stress-relief',
        name: 'Stress Relief IV Drip',
        category: 'Standard Wellness',
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
        name: 'Mental Clarity IV Drip',
        category: 'Standard Wellness',
        price: '$225',
        description: 'Cognitive enhancement formula for improved focus, memory, and mental performance.',
        features: [
          'Nootropic Nutrients',
          'B-Complex for Brain',
          'Phosphatidylcholine',
          'Enhanced Focus',
          'Memory Support'
        ]
      }
    ],
    specialty: [
      {
        id: 'hangover',
        name: 'The Day After "Hangover" IV Drip',
        category: 'Specialty Treatments',
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
      },
      {
        id: 'sun-devil',
        name: 'The "Sun Devil" Energy Boost IV Drip',
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
        id: 'diamondback',
        name: 'The "Diamondback" Immunity Boost IV Drip',
        category: 'Specialty Treatments',
        price: '$200',
        badge: 'Immunity',
        description: 'Powerful immune system support with high-dose vitamins and antioxidants.',
        features: [
          'Vitamin B-Complex',
          'Vitamin D3',
          'Vitamin C',
          'Vitamin B12',
          'Zinc',
          'Immune System Support'
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
        id: 'd-book',
        name: 'The "D-Book" Performance IV Drip',
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
        id: 'scottsdale-beauty',
        name: 'The Scottsdale Beauty Bag IV Drip',
        category: 'Specialty Treatments',
        price: '$250',
        badge: 'Beauty',
        description: 'Beauty and anti-aging formula for radiant skin and enhanced vitality.',
        image_url: '/src/assets/iv-bags/scottsdale-beauty-bag.jpeg',
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
        id: 'myers',
        name: 'Myers Cocktail IV Drip',
        category: 'Specialty Treatments',
        price: '$275',
        badge: 'Classic Formula',
        description: 'The classic Myers Cocktail formula with essential vitamins and minerals for overall wellness.',
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
        id: 'jr-myers',
        name: 'Jr Myers Cocktail IV Drip',
        category: 'Specialty Treatments',
        price: '$225',
        badge: 'Jr Formula',
        description: 'A lighter version of the classic Myers Cocktail, perfect for first-time patients.',
        features: [
          'Vitamin B-Complex',
          'Vitamin B12',
          'Vitamin C',
          'Glutathione'
        ]
      }
    ],
    premium: [
      {
        id: 'gold',
        name: 'The "Gold" Ultimate Hydration IV Drip',
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
      },
      {
        id: 'platinum',
        name: 'The "Platinum" Ultimate Hydration IV Drip',
        category: 'Premium Therapies',
        price: '$400',
        badge: 'Ultra Premium',
        description: 'Our most comprehensive hydration and wellness formula with premium nutrients.',
        features: [
          'Ultra Premium Hydration',
          'Complete Amino Complex',
          'Maximum Vitamin Blend',
          'Advanced Antioxidants',
          'Elite Recovery Support'
        ]
      },
      {
        id: 'stay-dripped',
        name: 'The "Stay Dripped" Special IV Drip',
        category: 'Premium Therapies',
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
    nad: [
      {
        id: 'nad-plain',
        name: 'The NAD+ IV Drip (Plain Saline + Single 50mg Dose of NAD+)',
        category: 'NAD+ Therapy',
        price: '$299',
        badge: 'Basic NAD+',
        description: 'Pure NAD+ therapy with plain saline for cellular repair and energy restoration.',
        image_url: '/src/assets/vials/nad-injection.webp',
        features: [
          'Plain Saline 500ml',
          'NAD+ 50mg',
          'Cellular Energy Restoration',
          'Basic Anti-Aging Support',
          '2-3 hour treatment'
        ]
      },
      {
        id: 'fountain-youth',
        name: 'The "Fountain Of Youth" NAD+ IV Drip',
        category: 'NAD+ Therapy',
        price: '$549',
        badge: 'Beauty + NAD+',
        description: 'Same ingredients as the Scottsdale Beauty Bag IV Drip plus 50mg NAD+ for enhanced anti-aging.',
        features: [
          'Vitamin B-Complex',
          'Vitamin B12',
          'MICC',
          'Zinc',
          'Glutathione',
          'Biotin',
          'NAD+ 50mg',
          'Anti-Aging Complex'
        ]
      },
      {
        id: 'elite-nad',
        name: 'The "Elite" NAD+ IV Drip',
        category: 'NAD+ Therapy',
        price: '$799',
        badge: 'Ultimate NAD+',
        description: 'The Platinum Ultimate Hydration IV Drip plus NAD+ for maximum anti-aging benefits.',
        features: [
          'Ultra Premium Hydration',
          'Complete Amino Complex',
          'Maximum Vitamin Blend',
          'Advanced Antioxidants',
          'NAD+ (customizable dosage)',
          'Elite Anti-Aging Support',
          '4-6 hour treatment'
        ]
      },
      {
        id: 'diamond-nad',
        name: 'The "Diamond" NAD+ IV Drip',
        category: 'NAD+ Therapy',
        price: '$999',
        badge: 'Diamond Elite',
        description: 'Our most exclusive NAD+ therapy with premium hydration and maximum anti-aging support.',
        features: [
          'Diamond Premium Hydration',
          'Maximum NAD+ Dosage',
          'Complete Vitamin Complex',
          'Advanced Amino Complex',
          'Elite Antioxidant Blend',
          'Ultimate Anti-Aging',
          '6-8 hour treatment'
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
                      bagImage: '/src/assets/iv-bags/rehydrate-bag.png'
                    };
                  case 'rehydrate-plus':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-cyan-900',
                      badgeColor: 'bg-cyan-500',
                      title: 'REHYDRATE PLUS',
                      subtitle: '',
                      bagImage: '/src/assets/iv-bags/rehydrate-plus-bag.png'
                    };
                  case 'jr-myers':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-green-900',
                      badgeColor: 'bg-green-500',
                      title: 'JR MYERS',
                      subtitle: 'COCKTAIL',
                      bagImage: '/src/assets/iv-bags/jr-myers-bag.png'
                    };
                  case 'myers':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-pink-900',
                      badgeColor: 'bg-pink-500',
                      title: 'MYERS',
                      subtitle: 'COCKTAIL',
                      bagImage: '/src/assets/iv-bags/myers-cocktail-bag.png'
                    };
                  case 'hangover':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-yellow-900',
                      badgeColor: 'bg-yellow-500',
                      title: 'THE DAY-AFTER',
                      subtitle: '"HANGOVER BAG"',
                      bagImage: '/src/assets/iv-bags/hangover-bag.png'
                    };
                  case 'sun-devil':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-red-900',
                      badgeColor: 'bg-red-500',
                      title: 'THE SUN DEVIL',
                      subtitle: 'ENERGY BOOST',
                      bagImage: '/src/assets/iv-bags/sun-devil-bag.png'
                    };
                  case 'd-book':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-purple-900',
                      badgeColor: 'bg-purple-500',
                      title: 'THE D-BOOK',
                      subtitle: 'PERFORMANCE BAG',
                      bagImage: '/src/assets/iv-bags/d-book-bag.png'
                    };
                  case 'diamondback':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-pink-900',
                      badgeColor: 'bg-pink-500',
                      title: 'THE DIAMONDBACK',
                      subtitle: 'IMMUNITY BOOST',
                      bagImage: '/src/assets/iv-bags/diamondback-bag.png'
                    };
                  case 'scottsdale-beauty':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-pink-900', 
                      badgeColor: 'bg-pink-500',
                      title: 'THE SCOTTSDALE',
                      subtitle: 'BEAUTY BAG',
                      bagImage: '/src/assets/iv-bags/scottsdale-beauty-bag.png'
                    };
                  case 'arizona-detox':
                    return {
                      bgGradient: 'from-white to-white',
                      titleColor: 'text-cyan-900',
                      badgeColor: 'bg-cyan-500',
                      title: 'THE ARIZONA',
                      subtitle: 'DETOX & CLEANSE',
                      bagImage: '/src/assets/iv-bags/arizona-detox-bag.png'
                     };
                   case 'nad-plain':
                     return {
                       bgGradient: 'from-white to-white',
                       titleColor: 'text-purple-900',
                       badgeColor: 'bg-purple-500',
                       title: 'NAD+ IV DRIP',
                       subtitle: 'PLAIN SALINE',
                       bagImage: '/src/assets/vials/nad-injection.webp'
                     };
                   case 'fountain-youth':
                     return {
                       bgGradient: 'from-white to-white',
                       titleColor: 'text-rose-900',
                       badgeColor: 'bg-rose-500',
                       title: 'FOUNTAIN OF YOUTH',
                       subtitle: 'NAD+ BEAUTY',
                       bagImage: '/src/assets/vials/nad-injection.webp'
                     };
                   case 'diamond-nad':
                     return {
                       bgGradient: 'from-white to-white',
                       titleColor: 'text-teal-900',
                       badgeColor: 'bg-teal-500',
                       title: 'THE DIAMOND',
                       subtitle: 'NAD+ THERAPY BAG',
                       bagImage: '/src/assets/iv-bags/diamond-nad-bag.png'
                     };
                   case 'elite-nad':
                     return {
                       bgGradient: 'from-white to-white',
                       titleColor: 'text-slate-900',
                       badgeColor: 'bg-slate-500',
                       title: 'THE ELITE',
                       subtitle: 'NAD+ THERAPY BAG',
                       bagImage: '/src/assets/iv-bags/elite-nad-bag.png'
                     };
                   case 'gold':
                     return {
                       bgGradient: 'from-white to-white',
                       titleColor: 'text-amber-900',
                       badgeColor: 'bg-amber-500',
                       title: 'THE GOLD',
                       subtitle: 'HYDRATION & RECOVERY',
                       bagImage: '/src/assets/iv-bags/gold-hydration-bag.png'
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