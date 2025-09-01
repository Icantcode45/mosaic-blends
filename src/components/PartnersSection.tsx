import { Badge } from "@/components/ui/badge";

const PartnersSection = () => {
  const partners = [
    "AUGMENT",
    "CuraTurf",
    "Partner 3",
    "Partner 4", 
    "Partner 5",
    "Partner 6"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                PARTNERS
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Trusted by popular brands from USA
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="h-16 bg-background rounded-lg shadow-sm flex items-center justify-center"
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;