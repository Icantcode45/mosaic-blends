import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Shield, Clock } from "lucide-react";
import ClientPortalLoginButton from "./ClientPortalLoginButton";
import heroImage from "@/assets/iv-therapy-hero-professional.jpg";

const ModernHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="trust-indicator flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Trusted by 10,000+ clients</span>
                </div>
                <div className="trust-indicator flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Licensed medical professionals</span>
                </div>
                <div className="trust-indicator flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Available 7 days a week</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-sm px-4 py-2 font-medium">
                  #1 MOBILE IV THERAPY IN ARIZONA
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold font-heading text-foreground leading-tight">
                  Premium IV Therapy
                  <span className="block text-primary">
                    Delivered to You
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-muted-foreground font-medical leading-relaxed max-w-xl">
                  Professional mobile IV hydration, vitamin therapy, and wellness treatments administered by licensed medical professionals in the comfort of your location.
                </p>

                {/* Rating Display */}
                <div className="flex items-center gap-4 p-6 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 max-w-md">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-foreground">5.0</span>
                    <span className="text-sm text-muted-foreground">Perfect Rating</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Based on 500+ reviews
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="professional-cta text-lg px-8 py-6 h-auto">
                  Book Treatment Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 h-auto border-2 border-primary/20 hover:border-primary hover:bg-primary/5"
                >
                  View All Services
                </Button>
                <ClientPortalLoginButton />
              </div>

              {/* Quick Services */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {[
                  { name: "Hydration", icon: "💧" },
                  { name: "Energy Boost", icon: "⚡" },
                  { name: "Immune Support", icon: "🛡️" },
                  { name: "Beauty & Wellness", icon: "✨" }
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <div className="text-sm font-medium text-foreground">{service.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroImage} 
                    alt="Professional IV therapy administration by licensed medical professional"
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Overlay Stats */}
                  <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-md rounded-2xl p-4 border border-border/30">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Safe & Effective</div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-md rounded-2xl p-4 border border-border/30">
                    <div className="text-2xl font-bold text-primary">30min</div>
                    <div className="text-sm text-muted-foreground">Average Treatment</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default ModernHeroSection;