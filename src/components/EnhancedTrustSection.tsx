import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Award, CheckCircle, Clock, Shield } from "lucide-react";

const EnhancedTrustSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Athletic Recovery Client",
      content: "The convenience of having this service come to my home is unmatched. I've felt more energized and healthier than ever.",
      rating: 5,
      treatment: "Myers Cocktail IV"
    },
    {
      name: "Michael R.", 
      role: "Business Executive",
      content: "Professional, efficient, and results-driven. The NAD+ therapy has completely transformed my energy levels and mental clarity.",
      rating: 5,
      treatment: "NAD+ Therapy"
    },
    {
      name: "Jennifer K.",
      role: "Wellness Enthusiast", 
      content: "I get my weekly vitamin injections and couldn't be happier. The team is knowledgeable and the results speak for themselves.",
      rating: 5,
      treatment: "B12 Injections"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Happy Clients", icon: Users, color: "text-blue-600" },
    { number: "50,000+", label: "Treatments Delivered", icon: CheckCircle, color: "text-green-600" },
    { number: "4.9", label: "Average Rating", icon: Star, color: "text-yellow-500" },
    { number: "24/7", label: "Customer Support", icon: Clock, color: "text-purple-600" }
  ];

  const trustBadges = [
    { text: "Licensed Medical Professionals", icon: Shield },
    { text: "FDA-Approved Treatments", icon: Award },
    { text: "Same-Day Service Available", icon: Clock },
    { text: "100% Mobile Service", icon: CheckCircle }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Trusted by Thousands Across Arizona
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {trustBadges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="px-6 py-2 text-sm font-medium">
                <badge.icon className="w-4 h-4 mr-2" />
                {badge.text}
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-4 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xl font-semibold text-foreground ml-2">4.9/5</span>
            </div>
            <p className="text-muted-foreground">Based on 500+ verified reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.treatment}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EnhancedTrustSection;