import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Zap, 
  Brain, 
  Shield, 
  Clock, 
  Star,
  ChevronRight,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import ServiceBookingButton from "./ServiceBookingButton";

// Import all IV bag images
import rehydrateBagNew from "@/assets/iv-bags/rehydrate-bag-new.png";
import rehydratePlusBagNew from "@/assets/iv-bags/platinum-hydration-recovery-new.png";
import dBookPerformanceBag from "@/assets/iv-bags/d-book-performance-bag.png";
import eliteNadTherapyBag from "@/assets/iv-bags/fountain-of-youth-antiage.png";

const InteractiveServicesGrid = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: "rehydrate",
      icon: Droplets,
      title: "Rehydrate IV",
      subtitle: "Plain Saline Solution",
      price: "Starting at $149",
      duration: "30-45 min",
      description: "Fast-acting hydration therapy with essential electrolytes for immediate energy and wellness recovery.",
      benefits: [
        "Immediate hydration boost",
        "Enhanced energy levels", 
        "Improved mental clarity",
        "Faster recovery from dehydration"
      ],
      image: rehydrateBagNew,
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
      popular: true
    },
    {
      id: "rehydrate-plus",
      icon: Zap,
      title: "Rehydrate Plus IV",
      subtitle: "Lactated Ringers + B-Complex",
      price: "Starting at $199",
      duration: "45-60 min",
      description: "Enhanced hydration with lactated ringers and vitamin B-complex for superior recovery and energy.",
      benefits: [
        "Superior hydration formula",
        "B-vitamin energy boost",
        "Enhanced electrolyte balance",
        "Accelerated recovery"
      ],
      image: rehydratePlusBagNew, 
      color: "from-teal-400 to-cyan-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
      popular: false
    },
    {
      id: "dbook-performance",
      icon: Brain,
      title: "D-Book Performance IV",
      subtitle: "Elite Athletic Formula",
      price: "Starting at $299",
      duration: "60-90 min",
      description: "Premium performance blend with B-vitamins, glutathione, amino acids, and magnesium for peak performance.",
      benefits: [
        "Enhanced athletic performance",
        "Faster muscle recovery",
        "Improved mental focus",
        "Antioxidant protection"
      ],
      image: dBookPerformanceBag,
      color: "from-purple-500 to-indigo-600", 
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      popular: true
    },
    {
      id: "nad-therapy",
      icon: Shield,
      title: "NAD+ Anti-Aging",
      subtitle: "Cellular Regeneration",
      price: "Starting at $475",
      duration: "2-4 hours",
      description: "Advanced NAD+ therapy for cellular repair, anti-aging, and cognitive enhancement.",
      benefits: [
        "Enhanced cellular repair",
        "Improved cognitive function",
        "Anti-aging benefits",
        "Increased energy at cellular level"
      ],
      image: eliteNadTherapyBag,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50", 
      popular: false
    }
  ];

  const currentService = services[activeService];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">
            <Droplets className="w-4 h-4 mr-2" />
            Professional IV Therapy
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Personalized Treatments for{" "}
            <span className="bg-gradient-to-r from-primary to-brand-teal bg-clip-text text-transparent">
              Your Wellness Goals
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive menu of IV therapies, each designed by medical professionals 
            to address your specific health and wellness needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Service Selection Grid */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">Select Your Treatment</h3>
            
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? 'border-primary bg-primary/5 shadow-glow-primary'
                    : hoveredService === index
                    ? 'border-primary/30 bg-primary/2 shadow-medium'
                    : 'border-border/50 bg-background hover:border-border hover:bg-muted/30 shadow-subtle'
                }`}
                onClick={() => setActiveService(index)}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 -right-3 bg-primary text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{service.title}</h4>
                      <span className="text-sm font-medium text-primary">{service.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{service.subtitle}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                    activeService === index ? 'rotate-90 text-primary' : ''
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Service Details */}
          <div className="sticky top-8">
            <div className={`relative rounded-3xl p-8 ${currentService.bgColor} border border-border/20 shadow-large transition-all duration-500`}>
              
              {/* Service Image/Visual */}
              <div className="relative aspect-[4/3] rounded-2xl mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img 
                    src={currentService.image} 
                    alt={currentService.title}
                    className="w-full h-full object-contain iv-bag-visual floating-3d"
                    style={{ maxHeight: '280px' }}
                  />
                </div>
                
                {/* Enhanced floating badges with 3D icons */}
                <div className="absolute top-4 right-4 premium-glass rounded-xl px-4 py-2 text-xs font-medium text-foreground">
                  <div className="flex items-center gap-2">
                    <img src="/src/assets/icons/3d-calendar.png" alt="Calendar icon" className="w-4 h-4" loading="lazy" />
                    {currentService.duration}
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 premium-glass rounded-xl px-4 py-2 text-xs font-medium text-primary">
                  <div className="flex items-center gap-2">
                    <img src="/src/assets/icons/3d-shield.png" alt="Shield security icon" className="w-4 h-4" loading="lazy" />
                    Licensed Medical Team
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 premium-glass rounded-xl px-4 py-2 text-xs font-medium text-emerald-600">
                  <div className="flex items-center gap-2">
                    <img src="/src/assets/icons/3d-checkmark.png" alt="Checkmark success icon" className="w-4 h-4" loading="lazy" />
                    FDA Approved
                  </div>
                </div>
              </div>

              {/* Service Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{currentService.title}</h3>
                  <p className="text-muted-foreground">{currentService.description}</p>
                </div>

                {/* Benefits List */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Treatment Benefits:</h4>
                  <div className="space-y-2">
                    {currentService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div>
                    <div className="text-2xl font-bold text-foreground">{currentService.price}</div>
                    <div className="text-sm text-muted-foreground">Per treatment</div>
                  </div>
                  
                  <ServiceBookingButton 
                    serviceId={currentService.id}
                    serviceName={currentService.title}
                    serviceCategory="IV Therapy"
                  />
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-muted/30 rounded-2xl">
              <p className="text-sm text-muted-foreground text-center">
                All treatments are administered by licensed medical professionals and customized to your individual needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServicesGrid;