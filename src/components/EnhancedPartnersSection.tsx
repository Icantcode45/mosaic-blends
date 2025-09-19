import { Badge } from "@/components/ui/badge";
import stayDrippedLogo from "@/assets/partners/stay-dripped-cowboy-logo.png";
import nelkboysLogo from "@/assets/partners/nelkboys-logo.png";
import fullSendLogo from "@/assets/partners/full-send-logo.png";
import fightReadyLogo from "@/assets/partners/fight-ready-logo.png";
import arizonaCombatSportsLogo from "@/assets/partners/arizona-combat-sports-logo.png";
import sleLogo from "@/assets/partners/sle-logo.png";
import bulldogLogo from "@/assets/partners/bulldog-logo.png";
import socialScottsdaleLogo from "@/assets/partners/social-scottsdale-logo.jpeg";
import curaTurfLogo from "@/assets/partners/curaturf-logo.webp";
import augmentWellnessLogo from "@/assets/partners/augment-wellness-logo.webp";

const EnhancedPartnersSection = () => {
  const partners = [
    { 
      name: "NelkBoys", 
      category: "Content Creators", 
      description: "Lifestyle and wellness collaboration",
      logo: nelkboysLogo
    },
    { 
      name: "Full Send Golf", 
      category: "Golf & Lifestyle", 
      description: "Golf community wellness partnership",
      logo: fullSendLogo
    },
    { 
      name: "Fight Ready MMA", 
      category: "Combat Sports", 
      description: "Recovery partner for professional fighters",
      logo: fightReadyLogo
    },
    { 
      name: "Arizona Combat Sports", 
      category: "MMA & Muay Thai", 
      description: "Performance and recovery optimization",
      logo: arizonaCombatSportsLogo
    },
    { 
      name: "Steve Levine Entertainment", 
      category: "Event Production", 
      description: "Event wellness and recovery services",
      logo: sleLogo
    },
    { 
      name: "Queen Creek High School Athletics", 
      category: "High School Sports", 
      description: "Supporting student athlete recovery",
      logo: bulldogLogo
    },
    { 
      name: "Augment Wellness", 
      category: "Wellness Partnership", 
      description: "Comprehensive wellness and recovery services",
      logo: augmentWellnessLogo
    },
    { 
      name: "CuraTurf", 
      category: "Artificial Grass", 
      description: "#1 Artificial grass cleaning services",
      logo: curaTurfLogo
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Partners Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 mb-6 px-4 py-2 text-sm font-semibold">
              TRUSTED PARTNERSHIPS
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold text-foreground font-heading mb-6 animate-fade-in">
              Partnered with <span className="text-gradient-animated">Elite Brands</span> Across Arizona
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We collaborate with top athletes, content creators, and premium brands to deliver the highest standard of mobile IV therapy and wellness services.
            </p>
          </div>

          {/* Enhanced Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Logo container with larger size */}
                  <div className="flex items-center justify-center h-20 w-full">
                    {partner.logo && (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    )}
                  </div>
                  
                  {/* Partner info */}
                  <div className="text-center space-y-3">
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">
                      {partner.category}
                    </div>
                    <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {partner.name}
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {partner.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Partner With Stay Dripped
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Join Arizona's leading mobile IV therapy network and expand your business offerings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                Partnership Inquiry
              </button>
              <button className="px-8 py-4 border border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300">
                View Partnership Benefits
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnhancedPartnersSection;
