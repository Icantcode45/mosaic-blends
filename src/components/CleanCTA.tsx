import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, Calendar, MapPin } from "lucide-react";

const CleanCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-brand-teal/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <Badge variant="outline" className="mb-6 bg-primary/5 text-primary border-primary/20">
          <Star className="w-4 h-4 mr-2" />
          Ready to feel your best?
        </Badge>

        {/* Main Content */}
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Book your treatment
          <br />
          <span className="bg-gradient-to-r from-primary to-brand-teal bg-clip-text text-transparent">
            in under 2 minutes
          </span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Same-day appointments available. Licensed medical professionals. 
          Mobile service across Scottsdale and Phoenix.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Book Online Now
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-border/50 px-8 py-4 text-lg"
            asChild
          >
            <a href="tel:+1-602-688-9825">
              <Phone className="mr-2 w-5 h-5" />
              Call (602) 688-9825
            </a>
          </Button>
        </div>

        {/* Service Areas */}
        <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Service Areas</span>
          </div>
          <p className="text-muted-foreground">
            Scottsdale • Phoenix • Paradise Valley • Tempe • Mesa • North Phoenix • Cave Creek
          </p>
        </div>
      </div>
    </section>
  );
};

export default CleanCTA;