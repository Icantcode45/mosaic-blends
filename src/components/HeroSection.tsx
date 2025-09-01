import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ivHeroImage from "@/assets/iv-therapy-hero.jpg";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge variant="secondary" className="bg-primary text-primary-foreground">
            MORE THAN WELLNESS
          </Badge>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Stay Dripped IV & Wellness
            </h1>
            <p className="text-lg text-primary font-semibold">
              #1 WELLNESS COMPANY IN ARIZONA
            </p>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed">
            At Stay Dripped, we offer diverse wellness services united by a shared goal: 
            better outcomes through more personalized care. No matter your needs, we're here to 
            support your journey with precision medicine and people-first partnership.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book Treatment
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          <div className="bg-secondary/50 p-4 rounded-lg">
            <div className="text-sm text-muted-foreground mb-2">Good Faith Exam</div>
            <div className="text-xs text-primary">Powered By Qualiphy</div>
          </div>
        </div>

        <div className="relative">
          <img 
            src={ivHeroImage} 
            alt="Professional IV therapy treatment in progress"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;