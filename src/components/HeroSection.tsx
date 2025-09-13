import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      {/* Minimal background elements */}
      <div className="absolute -right-48 -top-48 rounded-full w-96 h-96 bg-blue-50 blur-3xl opacity-30"></div>
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 rounded-full w-64 h-64 bg-gray-50 blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-24 md:py-32">
          
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Premium Mobile Wellness
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6 text-gray-900">
              Hydration,{" "}
              <span className="text-blue-600">recovery</span> & care—delivered to you.
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Medical-grade IV therapy, telehealth, and curated supplements. Join the membership for VIP pricing & perks.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Rapid Response</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Mobile Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Licensed Providers</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-white font-semibold">
                <Link to="/first-time-patients">Book Mobile IV</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-semibold">
                <a href="#pricing">Explore Membership</a>
              </Button>
            </div>
            
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:pl-8">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-blue-50 to-gray-50 border border-gray-100 shadow-xl overflow-hidden">
              <img 
                src="/src/assets/stay-dripped-cowboy-logo-main.png" 
                alt="Stay Dripped IV & Wellness Co. - Premier IV therapy with cowboy on horseback logo" 
                className="w-full h-full object-cover"
                width="786"
                height="777"
                loading="eager"
                {...({ fetchpriority: "high" } as any)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
