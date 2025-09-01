import { Card } from "@/components/ui/card";

const ServicesSection = () => {
  const treatments = [
    {
      icon: "⚡",
      title: "Energy IV",
      description: "B-complex, B12 and hydration to beat fatigue fast.",
      bgColor: "bg-primary/10"
    },
    {
      icon: "🧠",
      title: "NAD⁺ & Peptides", 
      description: "Support cellular repair, focus and longevity.",
      bgColor: "bg-accent/10"
    },
    {
      icon: "⚖️",
      title: "Weight & Hormones",
      description: "GLP-1 programs and hormone optimization.",
      bgColor: "bg-secondary/10"
    },
    {
      icon: "❤️",
      title: "Sexual Wellness",
      description: "Evidence-based treatment for confidence & performance.",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-heading text-4xl sm:text-5xl tracking-tight text-foreground">
            Popular treatments
          </h2>
          <a href="#contact" className="text-primary hover:text-foreground font-semibold transition-colors">
            Talk to a provider →
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <Card key={index} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-elev-1 hover:shadow-elev-2 transition-shadow">
              <div className="text-4xl mb-3">{treatment.icon}</div>
              <h3 className="font-semibold text-lg mb-1 text-foreground">{treatment.title}</h3>
              <p className="text-muted-foreground text-sm">{treatment.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
