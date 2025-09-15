import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { scrollToSection } from "@/utils/scrollToSection";
import heroImage from "@/assets/stay-dripped-hero-logo.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-background">
      <div className="relative">
        <div className="section-hero-professional">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - Content */}
              <div className="space-y-8 animate-fade-up">
                
                {/* Trust Badge */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Licensed Providers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Mobile Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Same Day Booking</span>
                  </div>
                </div>
                
                {/* Hero Headlines */}
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
                    Professional IV therapy
                    <br />
                    delivered to your location
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                    Licensed medical professionals provide personalized IV treatments. 
                    Safe, effective, and convenient healthcare.
                  </p>
                </div>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button asChild size="lg" className="shadow-sm">
                    <Link to="/iv-therapy">Start consultation</Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection('services')}
                  >
                    View services
                  </Button>
                </div>
                
              </div>

              {/* Right Column - Visual */}
              <div className="relative lg:h-[500px] flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="bg-card rounded-lg p-6 shadow-medium border border-border">
                    <img 
                      src={heroImage} 
                      alt="Stay Dripped - Professional IV Therapy Services" 
                      className="w-full h-auto rounded-md"
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
