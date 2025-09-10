import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden radial-fade">
      {/* Decorative background elements */}
      <div className="absolute -right-24 -top-24 rounded-full w-[28rem] h-[28rem] bg-primary/5 blur-3xl"></div>
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 rounded-full w-[20rem] h-[20rem] bg-accent/5 blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-20 md:py-28">
          
          {/* Left Column - Content */}
          <div>
            <p className="text-sm font-semibold text-primary mb-3">Premium Mobile Wellness</p>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-tighter leading-tight mb-6 text-foreground">
              Hydration, recovery & care—delivered to you.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-10">
              Medical-grade IV therapy, telehealth, and curated supplements. Join the membership for VIP pricing & perks.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Button asChild size="lg" className="px-6 py-3 rounded-full bg-black text-white hover:bg-primary transition">
                <Link to="/first-time-patients">Book Mobile IV</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-6 py-3 rounded-full border border-gray-200 hover:border-gray-300">
                <Link to="/#pricing">Explore Membership</Link>
              </Button>
            </div>
            
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/10 to-white border border-gray-100 shadow-elev-2 overflow-hidden">
              <img 
                src="/lovable-uploads/b0faa61f-22ef-4eed-bb90-b544636afd28.png" 
                alt="IV Therapy Lifestyle Experience - Friends enjoying mobile IV therapy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
