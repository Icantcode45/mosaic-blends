import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/iv-therapy-hero-professional.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Subtle background gradients like Hims */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-brand-peach/10"></div>
      
      <div className="relative">
        <div className="section-hero-medical">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - Content */}
              <div className="space-y-8 animate-fade-up">
                
                {/* Trust Badge */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Licensed Providers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Mobile Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Same Day Booking</span>
                  </div>
                </div>
                
                {/* Hero Headlines */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                    IV therapy
                    <br />
                    <span className="text-gradient-peach">personalized to you</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                    Licensed medical professionals deliver personalized IV treatments to your door. 
                    Customized care starts here.
                  </p>
                </div>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" variant="medical" className="text-white font-bold shadow-large">
                    <Link to="/iv-therapy">Start consultation</Link>
                  </Button>
                  <Button asChild variant="medical-outline" size="lg" className="font-bold">
                    <a href="#services">Explore treatments</a>
                  </Button>
                </div>
                
              </div>

              {/* Right Column - Visual */}
              <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-up animate-stagger-2">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-peach rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-extra">
                    <img 
                      src={heroImage} 
                      alt="Professional IV therapy treatment setup" 
                      className="w-full h-auto rounded-2xl"
                      loading="eager"
                    />
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
