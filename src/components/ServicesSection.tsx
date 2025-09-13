import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const treatments = [
    {
      icon: "⚡",
      title: "Energy IV",
      description: "B-complex, B12 and hydration to beat fatigue fast.",
      bgColor: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      textColor: "text-yellow-600"
    },
    {
      icon: "🧠",
      title: "NAD⁺ & Peptides", 
      description: "Support cellular repair, focus and longevity.",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100", 
      textColor: "text-blue-600"
    },
    {
      icon: "⚖️",
      title: "Weight & Hormones",
      description: "GLP-1 programs and hormone optimization.",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      icon: "❤️",
      title: "Sexual Wellness",
      description: "Evidence-based treatment for confidence & performance.",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
      textColor: "text-pink-600"
    }
  ];

  const anchorIds: Record<string, string> = { "NAD⁺ & Peptides": "nad", "Sexual Wellness": "sexual-wellness" };

  return (
    <section id="treatments" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Popular treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-lg">
              Choose from our most requested wellness solutions
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden md:flex text-blue-600 hover:text-blue-700">
            <a href="#contact">Talk to a provider →</a>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <Card 
              id={anchorIds[treatment.title] || undefined} 
              key={index} 
              className={`${treatment.bgColor} rounded-2xl p-8 border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer group`}
            >
              <div className={`w-12 h-12 ${treatment.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="text-xl">{treatment.icon}</span>
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-900">{treatment.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{treatment.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
          <Button variant="outline" asChild>
            <a href="#contact">Talk to a provider</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
