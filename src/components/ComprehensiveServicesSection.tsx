import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Droplets, 
  Zap, 
  Shield, 
  Heart, 
  Brain, 
  Dumbbell, 
  Sparkles, 
  Target,
  Clock,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ComprehensiveServicesSection = () => {
  const serviceCategories = [
    {
      icon: Droplets,
      title: "IV Hydration Therapy",
      description: "Rapid nutrient delivery for optimal wellness",
      services: ["Myers Cocktail", "Immunity Boost", "Energy Enhancement", "Hangover Relief", "Athletic Recovery", "Beauty Glow"],
      color: "text-blue-600",
      gradient: "from-blue-500 to-teal-500",
      link: "/iv-therapy"
    },
    {
      icon: Zap,
      title: "Vitamin Injections", 
      description: "Quick-acting nutrient shots for immediate benefits",
      services: ["B12 Energy", "Glutathione Antioxidant", "Vitamin D3", "Biotin Beauty", "B-Complex", "Taurine Focus"],
      color: "text-orange-600",
      gradient: "from-orange-500 to-red-500", 
      link: "/vitamin-injections"
    },
    {
      icon: Target,
      title: "Peptide Therapy",
      description: "Advanced cellular optimization treatments",
      services: ["NAD+ Anti-Aging", "BPC-157 Healing", "PT-141 Wellness", "Setmelanotide", "Custom Protocols", "Longevity Support"],
      color: "text-purple-600",
      gradient: "from-purple-500 to-indigo-500",
      link: "/nad-peptides"
    },
    {
      icon: Dumbbell,
      title: "Athletic Performance",
      description: "Optimize recovery and enhance performance",
      services: ["Pre-Workout IV", "Post-Workout Recovery", "Endurance Support", "Muscle Recovery", "Hydration Therapy", "Performance Optimization"],
      color: "text-green-600",
      gradient: "from-green-500 to-emerald-500",
      link: "/nad-peptides"
    },
    {
      icon: Sparkles,
      title: "Beauty & Wellness",
      description: "Look and feel your absolute best",
      services: ["Beauty Glow IV", "Hair & Nail Support", "Skin Brightening", "Anti-Aging Therapy", "Collagen Boost", "Detox Cleanse"],
      color: "text-pink-600",
      gradient: "from-pink-500 to-rose-500",
      link: "/products"
    },
    {
      icon: Shield,
      title: "Immune Support",
      description: "Strengthen your natural defenses",
      services: ["Immune Boost IV", "Cold & Flu Prevention", "High-Dose Vitamin C", "Zinc Support", "Seasonal Protection", "Travel Immunity"],
      color: "text-indigo-600", 
      gradient: "from-indigo-500 to-blue-500",
      link: "/iv-therapy"
    }
  ];

  const conditions = [
    "Fatigue", "Dehydration", "Hangovers", "Immune Support", "Athletic Recovery", 
    "Jet Lag", "Stress", "Low Energy", "Seasonal Allergies", "Chronic Fatigue",
    "Poor Sleep", "Brain Fog", "Muscle Soreness", "Vitamin Deficiency", "Skin Issues",
    "Hair Loss", "Weight Management", "Anti-Aging", "Performance Enhancement"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-6">
            Comprehensive Care
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get care today for 
            <span className="block mt-2">
              <span className="animate-pulse">optimal wellness</span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Our licensed medical professionals provide personalized treatments for a wide range of health and wellness needs.
          </p>

          {/* Conditions Ticker */}
          <div className="bg-muted/30 rounded-2xl p-6 mb-12">
            <h3 className="font-semibold text-foreground mb-4">Conditions We Treat:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {conditions.map((condition, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {condition}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className="relative">
                {/* Gradient Header */}
                <div className={`h-24 bg-gradient-to-r ${category.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  </div>

                  {/* Services List */}
                  <div className="space-y-2">
                    {category.services.slice(0, 4).map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                    {category.services.length > 4 && (
                      <div className="text-sm text-muted-foreground">
                        +{category.services.length - 4} more treatments
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border">
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <Link to={category.link} className="flex items-center justify-center">
                        Learn More 
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-brand-teal/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to optimize your health?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our licensed medical team is ready to provide personalized care at your location. 
              Same-day appointments available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-brand-teal hover:from-primary-hover hover:to-brand-teal/90 text-white">
                <Link to="/iv-therapy">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServicesSection;