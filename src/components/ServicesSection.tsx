import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ServicesSection = () => {
  const features = [
    "Licensed RNs & NPs",
    "Same-day availability", 
    "HIPAA-compliant"
  ];

  return (
    <section className="py-16 container mx-auto px-6">
      <div className="max-w-4xl">
        <div className="space-y-6 mb-12">
          <Badge variant="secondary" className="bg-muted text-muted-foreground">
            HYDRATION • RECOVERY • WELLNESS
          </Badge>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mobile IV Therapy in Scottsdale
            </h2>
            <p className="text-lg text-muted-foreground">
              Licensed clinicians deliver hydration and vitamin drips to your home,
              hotel, or event. Book in minutes, feel better fast.
            </p>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Browse Treatments
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="px-4 py-2 bg-muted/50">
              <span className="text-sm text-muted-foreground">{feature}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;