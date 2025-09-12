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
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Medical-grade IV therapy, telehealth, and curated supplements. Join the membership for VIP pricing & perks.
            </p>
            
            {/* Key Benefits with 3D Icons */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/1845c426-94c3-4d3b-b1d0-8d8c7c205410.png" 
                  alt="Fast Service" 
                  className="w-5 h-5" 
                  width="20" 
                  height="20"
                  loading="eager"
                />
                <span className="text-sm font-medium">Rapid Response</span>
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/e41d24f9-14f6-4efb-adf0-5b53c1901fc1.png" 
                  alt="Mobile Service" 
                  className="w-5 h-5" 
                  width="20" 
                  height="20"
                  loading="eager"
                />
                <span className="text-sm font-medium">Mobile Service</span>
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/a498444a-fff1-4bd4-98b3-2dca2244bc5f.png" 
                  alt="Licensed" 
                  className="w-5 h-5" 
                  width="20" 
                  height="20"
                  loading="eager"
                />
                <span className="text-sm font-medium">Licensed Providers</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Button asChild size="lg" className="px-6 py-3 rounded-full bg-black text-white hover:bg-primary transition">
                <Link to="/first-time-patients">Book Mobile IV</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-6 py-3 rounded-full border border-gray-200 hover:border-gray-300">
                <a href="#pricing">Explore Membership</a>
              </Button>
            </div>
            
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border border-gray-100 shadow-elev-2 overflow-hidden">
              <img 
                src="/lovable-uploads/34c99661-1ae3-4de4-a24f-48d93504109b.png" 
                alt="Premium IV therapy in luxury outdoor setting" 
                className="w-full h-full object-cover"
                width="786"
                height="777"
                loading="eager"
                {...({ fetchpriority: "high" } as any)}
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
