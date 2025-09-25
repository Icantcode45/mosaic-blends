import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Star, 
  Phone, 
  Calendar, 
  MapPin, 
  Clock, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react";

const PremiumCTA = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Executive",
      text: "The NAD+ therapy completely transformed my energy levels. Professional service!",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Mike R.", 
      role: "Athlete",
      text: "Best mobile IV service in Arizona. Fast, professional, and effective.",
      rating: 5,
      image: "🏃‍♂️"
    },
    {
      name: "Jessica L.",
      role: "Entrepreneur", 
      text: "Incredible results from the Myers Cocktail. I feel amazing!",
      rating: 5,
      image: "👩‍💻"
    }
  ];

  const benefits = [
    { icon: Clock, text: "Same-day appointments", color: "text-emerald-500" },
    { icon: Shield, text: "Licensed medical team", color: "text-blue-500" },
    { icon: MapPin, text: "Mobile service", color: "text-purple-500" },
    { icon: CheckCircle, text: "FDA regulated", color: "text-teal-500" }
  ];

  const serviceAreas = [
    "Scottsdale", "Phoenix", "Paradise Valley", "Tempe", 
    "Mesa", "North Phoenix", "Cave Creek", "Fountain Hills"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-brand-teal/5 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
        
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Card */}
        <Card className={`relative overflow-hidden bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl rounded-3xl ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-brand-teal/5" />
          
          <div className="relative p-8 md:p-12 text-center">
            
            {/* Badge */}
            <Badge 
              variant="outline" 
              className="mb-8 bg-gradient-to-r from-primary/10 to-brand-teal/10 text-primary border-primary/20 backdrop-blur-sm animate-bounce-soft"
            >
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Ready to transform your wellness?
            </Badge>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Book your treatment
              <br />
              <span className="bg-gradient-to-r from-primary via-brand-teal to-primary bg-clip-text text-transparent animate-shimmer bg-300%">
                in under 2 minutes
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied clients who've experienced the future of wellness. 
              Premium mobile IV therapy delivered anywhere in the Scottsdale area.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`flex flex-col items-center p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/20 hover:bg-background/80 transition-all duration-300 group ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <benefit.icon className={`w-8 h-8 ${benefit.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-medium text-foreground text-center">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg"
                className="relative group bg-gradient-to-r from-primary to-primary-hover text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-lg hover:shadow-glow-primary transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <span className="relative flex items-center">
                  <Calendar className="mr-3 w-6 h-6" />
                  Book Online Now
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="relative group border-2 border-border/50 hover:border-primary/30 px-12 py-6 text-xl font-semibold rounded-2xl backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all duration-300"
                asChild
              >
                <a href="tel:+1-602-688-9825">
                  <Phone className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                  Call (602) 688-9825
                </a>
              </Button>
            </div>

            {/* Testimonial Carousel */}
            <div className="mb-12">
              <div className="relative h-32 overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      currentTestimonial === index 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-4'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">{testimonial.image}</div>
                      <div className="flex justify-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-lg font-medium text-foreground mb-2">
                        "{testimonial.text}"
                      </blockquote>
                      <cite className="text-sm text-muted-foreground">
                        - {testimonial.name}, {testimonial.role}
                      </cite>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Testimonial Indicators */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <Card className="bg-background/50 backdrop-blur-sm border border-border/30 p-6 rounded-2xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl font-semibold text-foreground">Service Areas</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {serviceAreas.map((area, index) => (
                  <Badge 
                    key={area}
                    variant="outline" 
                    className={`bg-background/50 border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 ${
                      isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {area}
                  </Badge>
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Mobile service available throughout the greater Phoenix metropolitan area
              </p>
            </Card>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center space-x-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span>Licensed Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Same Day Service</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PremiumCTA;