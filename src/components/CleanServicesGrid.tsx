import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Zap, 
  Brain, 
  Shield, 
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import ServiceBookingButton from "./ServiceBookingButton";

// Import all IV bag images
import rehydrateBagNew from "@/assets/iv-bags/rehydrate-bag-new.png";
import rehydratePlusBagNew from "@/assets/iv-bags/rehydrate-plus-bag-new.png";
import myersCocktailBag from "@/assets/iv-bags/myers-cocktail-bag.png";
import eliteNadTherapyBag from "@/assets/iv-bags/elite-nad-therapy-bag-final.png";
import scottsdaleBeautyBagImg from "@/assets/iv-bags/scottsdale-beauty-bag.png";
import hangoverBagNew from "@/assets/iv-bags/hangover-bag.png";

const CleanServicesGrid = () => {
  const services = [
    {
      id: "rehydrate",
      icon: Droplets,
      title: "Rehydrate IV",
      subtitle: "Essential Hydration",
      price: "$149",
      duration: "30 min",
      description: "Fast-acting hydration therapy with essential electrolytes.",
      features: ["Immediate hydration", "Enhanced energy", "Mental clarity"],
      image: rehydrateBagNew,
      gradient: "from-cyan-400 to-blue-500",
      popular: false,
      category: "Basic Hydration"
    },
    {
      id: "rehydrate-plus", 
      icon: Zap,
      title: "Rehydrate Plus",
      subtitle: "Enhanced Hydration + B-Complex", 
      price: "$199",
      duration: "45 min",
      description: "Superior hydration with lactated ringers and B-vitamins.",
      features: ["Superior hydration", "B-vitamin boost", "Faster recovery"],
      image: rehydratePlusBagNew,
      gradient: "from-teal-400 to-cyan-500", 
      popular: true,
      category: "Enhanced Hydration"
    },
    {
      id: "myers",
      icon: Brain,
      title: "Myers Cocktail",
      subtitle: "Complete Wellness Formula",
      price: "$249", 
      duration: "60 min",
      description: "Comprehensive vitamin and mineral blend for total wellness.",
      features: ["Complete nutrition", "Immune support", "Energy boost"],
      image: myersCocktailBag,
      gradient: "from-purple-500 to-indigo-600",
      popular: true,
      category: "Standard Wellness"
    },
    {
      id: "elite-nad",
      icon: Shield,
      title: "NAD+ Therapy", 
      subtitle: "Anti-Aging & Cellular Repair",
      price: "$475",
      duration: "2-4 hrs",
      description: "Advanced NAD+ therapy for cellular regeneration and longevity.",
      features: ["Cellular repair", "Anti-aging", "Cognitive enhancement"],
      image: eliteNadTherapyBag,
      gradient: "from-emerald-500 to-teal-600",
      popular: false,
      category: "NAD+ Therapy"
    },
    {
      id: "scottsdale-beauty",
      icon: Star,
      title: "Scottsdale Beauty",
      subtitle: "Skin & Beauty Enhancement", 
      price: "$299",
      duration: "60 min",
      description: "Specialized blend for radiant skin and beauty enhancement.",
      features: ["Glowing skin", "Hair & nail health", "Beauty boost"],
      image: scottsdaleBeautyBagImg,
      gradient: "from-pink-400 to-rose-500",
      popular: false,
      category: "Premium Therapies"
    },
    {
      id: "hangover",
      icon: Zap,
      title: "Hangover Relief",
      subtitle: "Rapid Recovery Formula",
      price: "$199", 
      duration: "45 min",
      description: "Fast hangover relief with hydration and anti-nausea medication.",
      features: ["Rapid relief", "Nausea reduction", "Energy restoration"],
      image: hangoverBagNew,
      gradient: "from-orange-400 to-amber-500",
      popular: true,
      category: "Enhanced Hydration"
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Treatments
            <span className="bg-gradient-to-r from-primary to-brand-teal bg-clip-text text-transparent">
              {" "}personalized to you
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our menu of IV therapies, each designed by medical professionals 
            for your specific wellness goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-background rounded-3xl border border-border/50 p-6 hover:border-primary/20 hover:shadow-large transition-all duration-300"
            >
              {service.popular && (
                <Badge className="absolute -top-3 -right-3 bg-primary text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              )}

              {/* Service Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Price & Duration */}
              <div className="flex items-center justify-between mb-6 pt-4 border-t border-border/30">
                <div>
                  <div className="text-xl font-bold text-foreground">{service.price}</div>
                  <div className="text-xs text-muted-foreground">{service.duration} treatment</div>
                </div>
              </div>

              {/* Book Button */}
              <ServiceBookingButton 
                serviceId={service.id}
                serviceName={service.title}
                serviceCategory={service.category}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            All treatments administered by licensed medical professionals
          </p>
          <Button variant="outline" size="lg">
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CleanServicesGrid;