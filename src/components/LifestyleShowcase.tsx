import { Card } from "@/components/ui/card";

const LifestyleShowcase = () => {
  const lifestyleImages = [
    {
      src: "/lovable-uploads/b0faa61f-22ef-4eed-bb90-b544636afd28.png",
      alt: "Friends enjoying IV therapy together in luxury setting",
      title: "Social Wellness",
      description: "Share the experience with friends"
    },
    {
      src: "/lovable-uploads/1fac1b4b-2289-4274-b058-98ac68b44e03.png",
      alt: "Professional IV therapy in modern comfortable environment",
      title: "Luxury Experience",
      description: "Unwind in your preferred setting"
    },
    {
      src: "/lovable-uploads/a2316986-ad33-4422-b338-f02dcd158a69.png",
      alt: "Professional IV therapy service with medical supervision",
      title: "Professional Care",
      description: "Expert treatment wherever you are"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience Wellness Your Way
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mobile IV therapy brings premium wellness directly to your preferred location
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {lifestyleImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {image.title}
                </h3>
                <p className="text-muted-foreground">
                  {image.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleShowcase;