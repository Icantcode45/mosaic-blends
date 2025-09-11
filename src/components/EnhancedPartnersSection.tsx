import { Badge } from "@/components/ui/badge";

const EnhancedPartnersSection = () => {
  const partners = [
    { name: "Arizona State Athletics", category: "Sports Partnership", description: "Official IV therapy partner for ASU athletics" },
    { name: "Fight Ready MMA", category: "Combat Sports", description: "Recovery partner for professional fighters" },
    { name: "Queen Creek High School Athletics", category: "High School Sports", description: "Supporting student athlete recovery" },
    { name: "Arizona Combat Sports", category: "MMA & BJJ", description: "Performance and recovery optimization" },
    { name: "Social Scottsdale", category: "Entertainment Venue", description: "Wellness partnership in Scottsdale" },
    { name: "Steve Levine Entertainment", category: "Event Production", description: "Event wellness and recovery services" },
    { name: "NelkBoys & Fullsend Golf", category: "Content & Golf", description: "Lifestyle and wellness collaboration" },
    { name: "Augment Health & Wellness", category: "Health & Wellness", description: "Comprehensive wellness partnership" }
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
                    <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {partner.category}
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
