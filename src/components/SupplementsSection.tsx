import { Card } from "@/components/ui/card";
import PayPalButton from "./PayPalButton";

const SupplementsSection = () => {
  const supplements = [
    {
      category: "Probiotics & Gut Health",
      description: "Clinically‑validated strains for GI balance and immunity."
    },
    {
      category: "Vitamins & Minerals", 
      description: "Foundational nutrients with practitioner dosing."
    },
    {
      category: "Test Kits & Panels",
      description: "At‑home collection with clear results & guidance."
    }
  ];

  return (
    <section id="supplements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Physician‑trusted supplements
          </h2>
          <a href="#shop" className="hidden sm:inline-flex text-primary font-medium hover:text-primary/80">
            View catalog →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {supplements.map((supplement, index) => (
            <Card key={index} className="p-6">
              <div className="text-sm font-medium text-primary">Featured</div>
              <h3 className="mt-2 font-semibold text-lg text-foreground">{supplement.category}</h3>
              <p className="mt-1 text-muted-foreground">{supplement.description}</p>
              <div className="mt-3 space-y-2">
                <a href="#shop" className="inline-flex text-primary font-medium hover:text-primary/80">
                  Shop →
                </a>
                <PayPalButton className="w-full" />
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <a href="#shop" className="text-primary font-medium hover:text-primary/80">
            View catalog →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupplementsSection;