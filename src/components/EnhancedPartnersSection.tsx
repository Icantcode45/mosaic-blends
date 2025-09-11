import { Badge } from "@/components/ui/badge";

const EnhancedPartnersSection = () => {
  const partners = [
    { 
      name: "Arizona State Athletics", 
      category: "Sports Partnership", 
      description: "Official IV therapy partner for ASU athletics",
      logo: "/lovable-uploads/f9b4e15f-3ba4-492d-9673-b9dd33979fbd.png"
    },
    { 
      name: "Fight Ready MMA", 
      category: "Combat Sports", 
      description: "Recovery partner for professional fighters",
      logo: "/lovable-uploads/a0611a04-5ce8-48f5-af4b-e3dd5916fcf5.png"
    },
    { 
      name: "Queen Creek High School Athletics", 
      category: "High School Sports", 
      description: "Supporting student athlete recovery",
      logo: "/lovable-uploads/7b84226a-c816-411c-9f4e-373be221089d.png"
    },
    { 
      name: "Arizona Combat Sports", 
      category: "MMA & BJJ", 
      description: "Performance and recovery optimization",
      logo: "/lovable-uploads/ffa52aa5-4204-44f6-9e66-1c8e6618f6f8.png"
    },
    { 
      name: "Social Scottsdale", 
      category: "Entertainment Venue", 
      description: "Wellness partnership in Scottsdale",
      logo: "/lovable-uploads/335fb85f-581d-43bb-9dab-00583c6b2e9e.png"
    },
    { 
      name: "Steve Levine Entertainment", 
      category: "Event Production", 
      description: "Event wellness and recovery services",
      logo: "/lovable-uploads/335fb85f-581d-43bb-9dab-00583c6b2e9e.png"
    },
    { 
      name: "NelkBoys & Fullsend Golf", 
      category: "Content & Golf", 
      description: "Lifestyle and wellness collaboration",
      logo: "/lovable-uploads/335fb85f-581d-43bb-9dab-00583c6b2e9e.png"
    },
    { 
      name: "Augment Health & Wellness", 
      category: "Health & Wellness", 
      description: "Comprehensive wellness partnership",
      logo: "/lovable-uploads/6e06577a-5945-4079-92bf-743d5a2a807b.png"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Partners Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                TRUSTED PARTNERSHIPS
              </Badge>
              
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading">
                Partnered with leading brands across Arizona
              </h2>
              
              <p className="text-lg text-muted-foreground">
                We collaborate with top healthcare institutions, sports organizations, and technology companies to deliver the highest standard of care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-xl shadow-elev-1 p-6 hover:shadow-elev-2 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                        {partner.category}
                      </div>
                      {partner.logo && (
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`} 
                          className="h-8 w-auto object-contain"
                        />
                      )}
                    </div>
                    <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {partner.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {partner.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnhancedPartnersSection;
