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
import { Link } from "react-router-dom";

const InteractiveServicesGrid = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: "hydration",
      icon: Droplets,
      title: "IV Hydration Therapy",
      subtitle: "Rapid Rehydration",
      price: "Starting at $149",
      duration: "30-45 min",
      description: "Fast-acting hydration therapy with essential electrolytes and vitamins for immediate energy and wellness.",
      benefits: [
        "Immediate hydration boost",
        "Enhanced energy levels", 
        "Improved mental clarity",
        "Faster recovery from dehydration"
      ],
      image: "/lovable-uploads/hydration-service.jpg",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      popular: true
    },
    {
      id: "energy",
      icon: Zap,
      title: "Energy Boost IV",
      subtitle: "B-Complex + B12",
      price: "Starting at $179",
      duration: "45-60 min",
      description: "High-dose B vitamins and nutrients designed to boost energy, improve focus, and enhance performance.",
      benefits: [
        "Sustained energy increase",
        "Better focus and concentration",
        "Metabolic support",
        "Mood enhancement"
      ],
      image: "/lovable-uploads/energy-service.jpg", 
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50",
      popular: false
    },
    {
      id: "immune",
      icon: Shield,
      title: "Immune Support IV",
      subtitle: "High-Dose Vitamin C",
      price: "Starting at $199",
      duration: "45-60 min",
      description: "Powerful immune system support with high-dose vitamin C, zinc, and antioxidants.",
      benefits: [
        "Strengthened immune system",
        "Antioxidant protection",
        "Faster illness recovery",
        "Preventive wellness support"
      ],
      image: "/lovable-uploads/immune-service.jpg",
      color: "from-green-500 to-emerald-500", 
      bgColor: "bg-green-50",
      popular: false
    },
    {
      id: "nad",
      icon: Brain,
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
      image: "/lovable-uploads/nad-service.jpg",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50", 
      popular: true
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
              <div className="relative aspect-[4/3] bg-gradient-to-br from-white/50 to-transparent rounded-2xl mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${currentService.color} flex items-center justify-center shadow-large`}>
                    <currentService.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-foreground">
                  {currentService.duration}
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-primary">
                  Licensed Medical Team
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
                  
                  <Button 
                    className="bg-primary hover:bg-primary-hover text-white group"
                    asChild
                  >
                    <Link to="/first-time-patients">
                      Book Treatment
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
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