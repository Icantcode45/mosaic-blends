import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Zap, Shield, Sparkles, Heart, Brain, Star } from "lucide-react";

const ModernServicesShowcase = () => {
  const services = [
    {
      icon: Droplets,
      title: "IV Hydration Therapy",
      description: "Rapid rehydration with essential electrolytes for optimal cellular function and energy restoration.",
      features: ["Immediate hydration", "Electrolyte balance", "Hangover relief", "Athletic recovery"],
      price: "Starting at $149",
      popular: false,
      color: "text-blue-500",
      gradient: "from-blue-500/10 to-blue-600/5"
    },
    {
      icon: Zap,
      title: "Energy & Performance",
      description: "B-vitamin complex and amino acids to boost energy, enhance focus, and improve physical performance.",
      features: ["Energy boost", "Mental clarity", "Performance enhancement", "Fatigue relief"],
      price: "Starting at $179",
      popular: true,
      color: "text-yellow-500",
      gradient: "from-yellow-500/10 to-orange-600/5"
    },
    {
      icon: Shield,
      title: "Immune Support",
      description: "High-dose vitamin C, zinc, and antioxidants to strengthen your immune system and fight illness.",
      features: ["Immune boost", "Illness prevention", "Antioxidant support", "Recovery acceleration"],
      price: "Starting at $199",
      popular: false,
      color: "text-green-500",
      gradient: "from-green-500/10 to-emerald-600/5"
    },
    {
      icon: Sparkles,
      title: "Beauty & Anti-Aging",
      description: "Glutathione, biotin, and collagen-supporting nutrients for radiant skin and healthy hair.",
      features: ["Skin brightening", "Hair health", "Anti-aging", "Collagen support"],
      price: "Starting at $229",
      popular: false,
      color: "text-pink-500",
      gradient: "from-pink-500/10 to-rose-600/5"
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Nootropic nutrients and B-vitamins to enhance cognitive function and mental performance.",
      features: ["Focus enhancement", "Memory support", "Stress reduction", "Mental clarity"],
      price: "Starting at $199",
      popular: false,
      color: "text-purple-500",
      gradient: "from-purple-500/10 to-indigo-600/5"
    },
    {
      icon: Heart,
      title: "NAD+ Therapy",
      description: "Advanced anti-aging and cellular repair therapy to boost energy and promote longevity.",
      features: ["Cellular repair", "Anti-aging", "Energy boost", "Mental clarity"],
      price: "Starting at $399",
      popular: false,
      color: "text-red-500",
      gradient: "from-red-500/10 to-pink-600/5"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-6 px-4 py-2 text-sm font-semibold">
              COMPREHENSIVE WELLNESS
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-6">
              Professional IV Therapy
              <span className="text-primary"> Treatments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medical">
              Choose from our comprehensive menu of medically-supervised IV treatments, each formulated by healthcare professionals for optimal results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`service-tile relative overflow-hidden animate-fade-in group bg-gradient-to-br ${service.gradient}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-background/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 font-heading">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medical">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text-', 'bg-')}`}></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-4 border-t border-border/30">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground">{service.price}</span>
                      <Button 
                        size="sm" 
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        variant="outline"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-primary/10 via-background to-secondary/10 rounded-3xl border border-border/50">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-foreground mb-2">Need a Custom Treatment?</h3>
                <p className="text-muted-foreground">Our medical professionals can create personalized IV formulations for your specific needs.</p>
              </div>
              <Button size="lg" className="professional-cta whitespace-nowrap">
                Consult with Specialist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernServicesShowcase;