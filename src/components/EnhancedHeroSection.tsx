import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Users, CheckCircle, Clock, Shield, Award } from "lucide-react";
import { scrollToSection } from "@/utils/scrollToSection";
import heroImage from "@/assets/stay-dripped-hero-logo.png";

const EnhancedHeroSection = () => {
  const trustIndicators = [
    { icon: Users, text: "5,000+ Happy Clients", color: "text-blue-600" },
    { icon: Star, text: "5.0 Star Rating", color: "text-yellow-500" },
    { icon: Shield, text: "Licensed Medical Team", color: "text-green-600" },
    { icon: Clock, text: "Same-Day Service", color: "text-purple-600" }
  ];

  const services = [
    { 
      title: "IV Hydration", 
      description: "Rapid recovery & wellness",
      gradient: "from-blue-500 to-teal-500",
      icon: "💧"
    },
    { 
      title: "Vitamin Injections", 
      description: "Quick nutrient boost",
      gradient: "from-orange-500 to-red-500", 
      icon: "💉"
    },
    { 
      title: "NAD+ Therapy", 
      description: "Cellular regeneration",
      gradient: "from-purple-500 to-indigo-500",
      icon: "🧬"
    },
    { 
      title: "Peptide Therapy", 
      description: "Advanced wellness",
      gradient: "from-green-500 to-emerald-500",
      icon: "🔬"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-brand-teal/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-brand-teal/20 to-transparent rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8 animate-fade-up">
              
              {/* Badge */}
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  #1 Rated Mobile IV Service
                </Badge>
              </div>
              
              {/* Hero Headlines */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
                  IV therapy{" "}
                  <span className="bg-gradient-to-r from-primary to-brand-teal bg-clip-text text-transparent">
                    personalized to you
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Licensed medical professionals deliver personalized IV treatments to your door. 
                  Customized care starts here.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex flex-col items-center text-center space-y-2 p-3 rounded-xl bg-card/50 border border-border/50 hover:bg-card transition-all duration-300">
                    <indicator.icon className={`w-6 h-6 ${indicator.color}`} />
                    <span className="text-sm font-medium text-foreground">{indicator.text}</span>
                  </div>
                ))}
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-brand-teal hover:from-primary-hover hover:to-brand-teal/90 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/iv-therapy">Start consultation</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                >
                  Explore treatments
                </Button>
              </div>
              
            </div>

            {/* Right Column - Visual */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              {/* Hero Logo */}
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-brand-teal/20 rounded-full blur-3xl animate-pulse-soft"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-border/10">
                  <img 
                    src={heroImage} 
                    alt="Stay Dripped - Premier IV Therapy & Wellness Company" 
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute inset-0 pointer-events-none">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className={`absolute animate-bounce-soft bg-white rounded-2xl p-4 shadow-xl border border-border/10 ${
                      index === 0 ? 'top-10 left-0 w-40' :
                      index === 1 ? 'top-20 right-0 w-44' :
                      index === 2 ? 'bottom-32 left-4 w-42' :
                      'bottom-10 right-8 w-40'
                    }`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-lg`}>
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">{service.title}</h4>
                        <p className="text-xs text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;