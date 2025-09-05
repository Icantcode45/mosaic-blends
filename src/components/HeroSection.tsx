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
            
            {/* Trust indicators */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> 
                Board-certified providers
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-2">HIPAA secure</span>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/10 to-white border border-gray-100 shadow-elev-2 flex items-center justify-center">
              <div className="text-8xl">💧</div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 max-w-xs">
              <div className="bg-white rounded-2xl p-4 shadow-elev-2 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Same-day availability</div>
                    <div className="text-xs text-muted-foreground">Book now, feel better today</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 max-w-xs">
              <div className="bg-white rounded-2xl p-4 shadow-elev-2 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg">⭐</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">4.9 from patients</div>
                    <div className="text-xs text-muted-foreground">Trusted by thousands</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
