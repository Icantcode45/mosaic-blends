import { Card } from "@/components/ui/card";

const ServicesSection = () => {
  const treatments = [
    {
      icon: "💧",
      title: "Hydration & Recovery",
      description: "Bounce back fast from travel, illness, or training with hydration & electrolytes.",
      bgColor: "bg-primary/10"
    },
    {
      icon: "🧪",
      title: "NAD⁺ & Peptides", 
      description: "Cellular support and performance formulations tailored to your goals.",
      bgColor: "bg-accent/10"
    },
    {
      icon: "⚖️",
      title: "Hormones & Weight",
      description: "Evidence‑based programs for balance, energy, and sustainable change.",
      bgColor: "bg-secondary/10"
    },
    {
      icon: "❤️",
      title: "Sexual Wellness",
      description: "Discreet, provider‑guided options to support libido, vitality, and recovery.",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Targeted Treatments
          </h2>
          <a href="#contact" className="hidden sm:inline-flex text-primary font-medium hover:text-primary/80">
            Book a nurse →
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {treatments.map((treatment, index) => (
            <Card key={index} className="p-6">
              <div className={`h-12 w-12 rounded-xl ${treatment.bgColor} grid place-items-center mb-4`}>
                {treatment.icon}
              </div>
              <h3 className="font-semibold text-lg text-foreground">{treatment.title}</h3>
              <p className="mt-1 text-muted-foreground">{treatment.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <a href="#contact" className="text-primary font-medium hover:text-primary/80">
            Book a nurse →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;