import { Card } from "@/components/ui/card";
import premiumQualityImg from "@/assets/premium-quality-icon.png";
import luxuryOutdoorImg from "@/assets/lifestyle/luxury-outdoor-setting.png";
import professionalCareImg from "@/assets/lifestyle/professional-care-service.png";

const LifestyleShowcase = () => {
  const lifestyleImages = [
    {
      src: luxuryOutdoorImg,
      alt: "Premium IV therapy in luxury outdoor setting",
      title: "Luxury Experience",
      description: "Unwind in your preferred setting"
    },
    {
      src: professionalCareImg,
      alt: "Professional IV therapy service with medical supervision",
      title: "Professional Care",
      description: "Expert treatment wherever you are"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <img 
              src={premiumQualityImg} 
              alt="Premium Quality" 
              className="w-12 h-12" 
              width="48" 
              height="48"
              loading="lazy"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience Wellness Your Way
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mobile IV therapy brings premium wellness directly to your preferred location
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {lifestyleImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width="490"
                  height="304"
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