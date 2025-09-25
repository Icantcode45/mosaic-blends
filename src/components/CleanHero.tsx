import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock, CheckCircle } from "lucide-react";

const CleanHero = () => {
  const trustMetrics = [
    "Licensed medical professionals",
    "Same-day appointments available", 
    "FDA-regulated ingredients",
    "Trusted by 10,000+ clients"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Trust Bar */}
      <div className="bg-muted/30 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-3 space-x-8 overflow-hidden">
            {trustMetrics.map((metric, index) => (
              <div key={index} className="flex items-center space-x-2 flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                <Star className="w-4 h-4 mr-2" />
                #1 Mobile IV Therapy in Scottsdale
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Premium IV Therapy
                <br />
                <span className="bg-gradient-to-r from-primary to-brand-teal bg-clip-text text-transparent">
                  Delivered to You
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                Professional mobile IV therapy, NAD+ treatments, and vitamin injections 
                delivered to your location in Scottsdale and Phoenix.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-brand-teal/20 border-2 border-background"
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center space-x-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium">Trusted by 10,000+ clients</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg"
              >
                Book Treatment Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/50 px-8 py-4 text-lg"
              >
                View All Services
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30min</div>
                <div className="text-sm text-muted-foreground">Average visit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Same Day</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5 Star</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-brand-teal/10 p-8">
              {/* Main IV Bag Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/src/assets/iv-bags/myers-cocktail-bag.png" 
                  alt="IV Therapy" 
                  className="w-3/4 h-3/4 object-contain floating-3d"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 glass-effect rounded-xl px-4 py-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>FDA Approved</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 glass-effect rounded-xl px-4 py-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>30-45 min</span>
                </div>
              </div>
              
              <div className="absolute top-8 left-8 glass-effect rounded-xl px-4 py-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Licensed Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanHero;