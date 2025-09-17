import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import chatIcon from "@/assets/icons/chat-icon.png";
import nadVialIcon from "@/assets/peptides/nad-vial.png";
import vitaCombinedIcon from "@/assets/vials/vita-complex-injection.webp";
import { Link } from "react-router-dom";
import { Clock, MapPin, Calendar, Users, Star, Shield, CheckCircle } from "lucide-react";

const EnhancedBookingSection = () => {
  const bookingOptions = [
    {
      type: "IV Therapy",
      title: "Hydration & Recovery",
      description: "Custom IV drips for optimal wellness",
      image: chatIcon,
      features: ["Myers Cocktail", "Immunity Boost", "Energy Boost", "Hangover Relief"],
      price: "Starting at $149",
      link: "/iv-therapy",
      gradient: "from-blue-500 to-teal-500"
    },
    {
      type: "Peptide Therapy", 
      title: "Advanced Wellness",
      description: "Cutting-edge peptide treatments",
      image: nadVialIcon,
      features: ["NAD+ Therapy", "BPC-157", "PT-141", "Custom Protocols"],
      price: "Starting at $299",
      link: "/nad-peptides",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      type: "Vitamin Injections",
      title: "Quick Nutrient Boost", 
      description: "Fast-acting vitamin shots",
      image: vitaCombinedIcon,
      features: ["B12 Energy", "Glutathione", "Vitamin D3", "Biotin"],
      price: "Starting at $49",
      link: "/vitamin-injections",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const whyChooseUs = [
    { icon: Shield, text: "Licensed medical team", color: "text-green-600" },
    { icon: Clock, text: "Same-day service available", color: "text-blue-600" },
    { icon: MapPin, text: "Mobile service to your location", color: "text-purple-600" },
    { icon: Star, text: "4.9/5 customer satisfaction", color: "text-yellow-500" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-6">
            Book Your Treatment
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get care today for 
            <span className="bg-gradient-to-r from-primary to-brand-teal bg-clip-text text-transparent ml-2">
              optimal wellness
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive menu of IV therapies, peptide treatments, and vitamin injections. 
            All delivered by licensed medical professionals.
          </p>
        </div>

        {/* Booking Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {bookingOptions.map((option, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative">
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-r ${option.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-6">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {option.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <img src={option.image} alt={option.title} className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{option.title}</h3>
                    <p className="text-muted-foreground">{option.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-foreground">{option.price}</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Same-day available</span>
                      </div>
                    </div>
                    <Button asChild className="w-full bg-gradient-to-r from-primary to-brand-teal hover:from-primary-hover hover:to-brand-teal/90 text-white">
                      <Link to={option.link}>Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Why Choose Stay Dripped?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <span className="font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedBookingSection;