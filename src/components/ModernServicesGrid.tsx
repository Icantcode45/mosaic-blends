import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Droplets, 
  Zap, 
  Brain, 
  Shield, 
  Star,
  CheckCircle,
  ArrowRight,
  Timer,
  Sparkles,
  TrendingUp
} from "lucide-react";
import ServiceBookingButton from "./ServiceBookingButton";

const ModernServicesGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: "rehydrate",
      icon: Droplets,
      title: "Rehydrate IV",
      subtitle: "Essential Hydration Therapy",
      price: "$149",
      originalPrice: "$199",
      duration: "30 min",
      description: "Fast-acting hydration therapy with essential electrolytes for immediate energy and wellness recovery.",
      features: ["Immediate hydration boost", "Enhanced energy levels", "Mental clarity improvement"],
      image: "/src/assets/iv-bags/rehydrate-bag-updated.png",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      category: "Basic Hydration",
      popular: false,
      trending: true,
      satisfaction: 98
    },
    {
      id: "rehydrate-plus", 
      icon: Zap,
      title: "Rehydrate Plus",
      subtitle: "Enhanced Hydration + B-Complex", 
      price: "$199",
      originalPrice: "$249",
      duration: "45 min",
      description: "Superior hydration with lactated ringers and B-vitamin complex for enhanced recovery and sustained energy.",
      features: ["Superior hydration formula", "B-vitamin energy boost", "Accelerated recovery"],
      image: "/src/assets/iv-bags/rehydrate-plus-bag-updated.png",
      gradient: "from-teal-400 via-cyan-500 to-blue-600",
      category: "Enhanced Hydration",
      popular: true,
      trending: false,
      satisfaction: 99
    },
    {
      id: "myers",
      icon: Brain,
      title: "Myers Cocktail",
      subtitle: "Complete Wellness Formula",
      price: "$249", 
      originalPrice: "$299",
      duration: "60 min",
      description: "Comprehensive vitamin and mineral blend featuring B-complex, Vitamin C, and magnesium for total wellness.",
      features: ["Complete nutrition support", "Immune system boost", "Sustained energy increase"],
      image: "/src/assets/iv-bags/jr-myers-cocktail-bag-new.png",
      gradient: "from-purple-500 via-indigo-600 to-blue-700",
      category: "Standard Wellness",
      popular: true,
      trending: false,
      satisfaction: 97
    },
    {
      id: "elite-nad",
      icon: Shield,
      title: "NAD+ Therapy", 
      subtitle: "Anti-Aging & Cellular Repair",
      price: "$475",
      originalPrice: "$599",
      duration: "2-4 hrs",
      description: "Advanced NAD+ therapy for cellular regeneration, longevity, and cognitive enhancement with premium ingredients.",
      features: ["Cellular repair & regeneration", "Anti-aging benefits", "Enhanced cognitive function"],
      image: "/src/assets/iv-bags/elite-nad-therapy-bag-updated.png",
      gradient: "from-emerald-500 via-teal-600 to-cyan-700",
      category: "NAD+ Therapy",
      popular: false,
      trending: true,
      satisfaction: 100
    },
    {
      id: "scottsdale-beauty",
      icon: Sparkles,
      title: "Scottsdale Beauty",
      subtitle: "Skin & Beauty Enhancement", 
      price: "$299",
      originalPrice: "$349",
      duration: "60 min",
      description: "Specialized blend with glutathione, biotin, and vitamin C for radiant skin and beauty enhancement.",
      features: ["Glowing, radiant skin", "Hair & nail health", "Beauty from within"],
      image: "/src/assets/iv-bags/scottsdale-beauty-bag-new.png",
      gradient: "from-pink-400 via-rose-500 to-purple-600",
      category: "Premium Therapies",
      popular: false,
      trending: false,
      satisfaction: 96
    },
    {
      id: "hangover",
      icon: TrendingUp,
      title: "Hangover Relief",
      subtitle: "Rapid Recovery Formula",
      price: "$199", 
      originalPrice: "$249",
      duration: "45 min",
      description: "Fast hangover relief with hydration, anti-nausea medication, and energy-boosting vitamins.",
      features: ["Rapid symptom relief", "Nausea reduction", "Energy restoration"],
      image: "/src/assets/iv-bags/hangover-bag-new.png",
      gradient: "from-orange-400 via-amber-500 to-yellow-600",
      category: "Enhanced Hydration",
      popular: true,
      trending: false,
      satisfaction: 95
    },
    {
      id: "gold-hydration",
      icon: Star,
      title: "Gold Hydration & Recovery",
      subtitle: "Premium Recovery Formula",
      price: "$299",
      originalPrice: "$349", 
      duration: "60 min",
      description: "Premium hydration therapy with B-complex vitamins, anti-nausea, glutathione, and magnesium for complete recovery.",
      features: ["Premium hydration blend", "Complete recovery support", "Enhanced nutrient absorption"],
      image: "/src/assets/iv-bags/gold-hydration-recovery-bag-updated.png",
      gradient: "from-yellow-400 via-orange-500 to-red-600",
      category: "Premium Therapies",
      popular: false,
      trending: false,
      satisfaction: 97
    },
    {
      id: "d-book-performance",
      icon: TrendingUp,
      title: "D-Book Performance",
      subtitle: "Athletic Performance Enhancement",
      price: "$349",
      originalPrice: "$399",
      duration: "75 min", 
      description: "High-performance blend with B6, B12, Vitamin C, glutathione, amino blend, and magnesium for peak athletic performance.",
      features: ["Enhanced athletic performance", "Rapid muscle recovery", "Increased endurance"],
      image: "/src/assets/iv-bags/d-book-performance-bag-new.png",
      gradient: "from-purple-500 via-violet-600 to-purple-700",
      category: "Performance Therapies",
      popular: false,
      trending: true,
      satisfaction: 98
    },
    {
      id: "diamond-nad",
      icon: Shield,
      title: "Diamond NAD+ Therapy",
      subtitle: "Ultimate Anti-Aging Treatment",
      price: "$599",
      originalPrice: "$699",
      duration: "3-4 hrs",
      description: "Our most advanced NAD+ therapy with premium ingredients for maximum cellular regeneration and longevity benefits.",
      features: ["Maximum cellular repair", "Premium anti-aging benefits", "Ultimate cognitive enhancement"],
      image: "/src/assets/iv-bags/diamond-nad-therapy-bag-new.png",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      category: "NAD+ Therapy",
      popular: true,
      trending: true,
      satisfaction: 100
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <Badge 
            variant="outline" 
            className="mb-6 bg-gradient-to-r from-primary/10 to-brand-teal/10 text-primary border-primary/20 backdrop-blur-sm animate-fade-in"
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Premium IV Therapy Menu
          </Badge>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Treatments
            <span className="block bg-gradient-to-r from-primary via-brand-teal to-primary bg-clip-text text-transparent animate-shimmer bg-300%">
              personalized to you
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of wellness with our scientifically-formulated IV therapies, 
            each designed by medical professionals for your unique health goals.
          </p>
        </div>

        {/* Featured Services Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Treatments</h3>
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-4" ref={scrollRef}>
              {services.slice(0, 3).map((service, index) => (
                <Card 
                  key={service.id}
                  className={`min-w-80 p-6 border-2 transition-all duration-500 cursor-pointer backdrop-blur-sm ${
                    activeIndex === index
                      ? 'border-primary bg-gradient-to-br from-primary/5 to-brand-teal/5 shadow-glow-primary scale-105'
                      : 'border-border/30 hover:border-primary/30 hover:shadow-large'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
              <div className="flex items-start justify-between mb-4">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border/50 flex items-center justify-center shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{service.price}</div>
                  <div className="text-sm text-muted-foreground line-through">{service.originalPrice}</div>
                </div>
              </div>
                  
                  <h4 className="text-xl font-bold text-foreground mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{service.subtitle}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Timer className="w-3 h-3" />
                      {service.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      {service.satisfaction}%
                    </div>
                  </div>
                  
                  <ServiceBookingButton 
                    serviceId={service.id}
                    serviceName={service.title}
                    serviceCategory={service.category}
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* All Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="group relative overflow-hidden border-border/30 hover:border-primary/20 hover:shadow-glow-primary transition-all duration-500 bg-background/50 backdrop-blur-sm"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                {service.popular && (
                  <Badge className="bg-primary text-white shadow-lg animate-bounce-soft">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                {service.trending && (
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>

              <div className="relative p-6">
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-3xl bg-gradient-to-br from-background to-muted/30 border border-border/50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-foreground">{service.price}</span>
                      <span className="text-lg text-muted-foreground line-through">{service.originalPrice}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{service.duration} treatment</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-foreground">{service.satisfaction}%</span>
                    </div>
                    <div className="text-xs text-muted-foreground">satisfaction</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Book Button */}
                <div className="relative overflow-hidden rounded-2xl">
                  <ServiceBookingButton 
                    serviceId={service.id}
                    serviceName={service.title}
                    serviceCategory={service.category}
                  />
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-brand-teal/5 opacity-0 transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : ''
              }`} />
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Treatments Delivered", value: "15,000+", icon: "💉" },
              { label: "Client Satisfaction", value: "98%", icon: "⭐" },
              { label: "Licensed Professionals", value: "24/7", icon: "👨‍⚕️" },
              { label: "Same Day Service", value: "Available", icon: "🚀" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/20 hover:bg-background/80 transition-all duration-300 group"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServicesGrid;