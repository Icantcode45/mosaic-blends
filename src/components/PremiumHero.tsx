import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, Users, Shield, Award, Play } from "lucide-react";
import { Link } from "react-router-dom";

const PremiumHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: "10,000+", label: "Patients Treated" },
    { icon: Star, value: "4.9/5", label: "Patient Rating" },
    { icon: Shield, value: "100%", label: "Licensed Team" },
    { icon: Award, value: "A+", label: "BBB Rating" }
  ];

  const trustBadges = [
    "Licensed Medical Team",
    "HIPAA Compliant",
    "Same-Day Service",
    "FDA-Regulated Pharmacy"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-primary/2 to-secondary/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="bg-background/80 backdrop-blur-sm border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {badge}
                </Badge>
              ))}
            </div>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] tracking-tight">
                IV Therapy
                <br />
                <span className="bg-gradient-to-r from-primary via-brand-teal to-primary bg-clip-text text-transparent">
                  Delivered
                </span>
                <br />
                to You
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                Professional IV therapy, vitamin injections, and NAD+ treatments delivered by licensed medical professionals to your location.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 py-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                      <span className="text-xs">👤</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Trusted by 10,000+ patients</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group font-medium bg-primary hover:bg-primary-hover text-white h-14 px-8 rounded-2xl shadow-glow-primary hover:shadow-glow-soft transition-all duration-300"
                asChild
              >
                <Link to="/first-time-patients">
                  Book Your Treatment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group font-medium h-14 px-8 rounded-2xl border-primary/30 hover:border-primary/50 hover:bg-primary/5"
                onClick={() => setVideoPlaying(true)}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch How It Works
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-bold text-2xl text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Main Visual Card */}
            <div className="relative bg-gradient-to-br from-background to-primary/5 rounded-3xl p-8 shadow-premium border border-border/50 backdrop-blur-sm">
              
              {/* Video/Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  {!videoPlaying ? (
                    <button 
                      onClick={() => setVideoPlaying(true)}
                      className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-large hover:scale-110 transition-all duration-300 group"
                    >
                      <Play className="w-8 h-8 text-primary ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                  ) : (
                    <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                      <span className="text-lg text-primary">Video Playing...</span>
                    </div>
                  )}
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-success text-white rounded-full p-3 shadow-large animate-bounce-soft">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-full p-3 shadow-large animate-bounce-soft" style={{ animationDelay: '1s' }}>
                  <Shield className="w-6 h-6" />
                </div>
              </div>

              {/* Service Highlights */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Professional IV Therapy</h3>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="text-center p-3 bg-background/50 rounded-xl">
                    <div className="text-2xl mb-1">💧</div>
                    <div className="font-medium">Hydration</div>
                  </div>
                  <div className="text-center p-3 bg-background/50 rounded-xl">
                    <div className="text-2xl mb-1">⚡</div>
                    <div className="font-medium">Energy</div>
                  </div>
                  <div className="text-center p-3 bg-background/50 rounded-xl">
                    <div className="text-2xl mb-1">🧬</div>
                    <div className="font-medium">NAD+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 bg-background rounded-2xl p-4 shadow-large border border-border/50 backdrop-blur-sm animate-float">
              <div className="text-3xl font-bold text-primary">45min</div>
              <div className="text-sm text-muted-foreground">Avg Treatment</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-4 shadow-large border border-border/50 backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-bold text-success">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default PremiumHero;