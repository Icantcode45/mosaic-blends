import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock, CheckCircle, ArrowRight, Sparkles, Users, Zap, Phone } from "lucide-react";
import usersIcon from "@/assets/icons/3d-thumbs-up.png";
import starIcon from "@/assets/icons/3d-star.png";
import clockIcon from "@/assets/icons/3d-calendar.png";
import rocketIcon from "@/assets/icons/3d-medal.png";
import eliteNadTherapyBag from "@/assets/iv-bags/elite-nad-therapy-bag-final.png";

const EnhancedHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { name: "Sarah M.", text: "Life-changing NAD+ therapy experience!", rating: 5 },
    { name: "Mike R.", text: "Best mobile IV service in Scottsdale", rating: 5 },
    { name: "Jessica L.", text: "Professional team, amazing results", rating: 5 }
  ];

  const stats = [
    { value: "15K+", label: "Happy Clients", icon: usersIcon, color: "from-blue-500 to-teal-500" },
    { value: "98%", label: "Satisfaction", icon: starIcon, color: "from-yellow-400 to-orange-500" },
    { value: "24/7", label: "Availability", icon: clockIcon, color: "from-purple-500 to-pink-500" },
    { value: "Same Day", label: "Service", icon: rocketIcon, color: "from-emerald-500 to-blue-500" }
  ];

  const trustBadges = [
    { icon: Shield, text: "FDA Regulated", color: "text-emerald-500" },
    { icon: CheckCircle, text: "Licensed Team", color: "text-blue-500" },
    { icon: Star, text: "5 Star Rated", color: "text-yellow-500" },
    { icon: Clock, text: "Same Day", color: "text-purple-500" }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-brand-teal/3 rounded-full blur-3xl animate-float" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Trust Bar */}
      <div className="relative z-10 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-3 space-x-8 overflow-hidden">
            {trustBadges.map((badge, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-background/50 backdrop-blur-sm border border-border/30 transition-all duration-300 hover:scale-105 hover:bg-background/80 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <badge.icon className={`w-4 h-4 ${badge.color}`} />
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            
            {/* Badge with Animation */}
            <div className="relative">
              <Badge 
                variant="outline" 
                className="bg-gradient-to-r from-primary/10 to-brand-teal/10 text-primary border-primary/20 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                #1 Premium IV Therapy in Arizona
              </Badge>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-brand-teal/20 rounded-lg blur opacity-30 animate-pulse" />
            </div>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.1s' }}>P</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.15s' }}>r</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>e</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.25s' }}>m</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.3s' }}>i</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.35s' }}>u</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.4s' }}>m</span>
                </span>
                <span className="block bg-gradient-to-r from-primary via-brand-teal to-primary bg-clip-text text-transparent animate-shimmer bg-300% bg-size-200%">
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.5s' }}>I</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.55s' }}>V</span>
                  <span className="inline-block animate-fade-in mx-2" style={{ animationDelay: '0.6s' }}> </span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.65s' }}>T</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.7s' }}>h</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.75s' }}>e</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.8s' }}>r</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.85s' }}>a</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.9s' }}>p</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.95s' }}>y</span>
                </span>
                <span className="block text-foreground">
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '1s' }}>D</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '1.05s' }}>e</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '1.1s' }}>l</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '1.15s' }}>i</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '1.2s' }}>v</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '1.25s' }}>e</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '1.3s' }}>r</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '1.35s' }}>e</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '1.4s' }}>d</span>
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                Experience the future of wellness with our premium mobile IV therapy, 
                NAD+ treatments, and vitamin injections delivered anywhere in Scottsdale.
              </p>
            </div>

            {/* Testimonial Card */}
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/30 shadow-lg">
              <div className="flex items-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg font-medium text-foreground mb-2">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <cite className="text-sm text-muted-foreground">
                - {testimonials[currentTestimonial].name}
              </cite>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="relative group bg-gradient-to-r from-primary to-primary-hover text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-glow-primary transition-all duration-300 overflow-hidden animate-glow-pulse"
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <span className="relative flex items-center">
                  <Sparkles className="mr-2 w-5 h-5" />
                  Book Treatment Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="relative group border-2 border-border/50 hover:border-primary/30 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all duration-300"
                asChild
              >
                <a href="tel:+1-602-688-9825">
                  <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Call (602) 688-9825
                </a>
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/20 hover:bg-background/80 transition-all duration-300 group hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative mb-3">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className="relative w-12 h-12 mx-auto p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/30 group-hover:border-primary/20 transition-all">
                      <img 
                        src={stat.icon} 
                        alt={`${stat.label} statistic icon`}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <div className="relative aspect-square">
              
              {/* Main Visual Container */}
              <div className="absolute inset-4 rounded-[3rem] bg-gradient-to-br from-background/80 to-muted/40 backdrop-blur-xl border border-border/30 shadow-2xl overflow-hidden">
                
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-brand-teal/5" />
                
                {/* Main IV Bag */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img 
                    src={eliteNadTherapyBag} 
                    alt="Premium IV Therapy" 
                    className="w-3/4 h-3/4 object-contain animate-float filter drop-shadow-2xl"
                  />
                </div>
                
                {/* Floating UI Elements */}
                <div className="absolute top-6 right-6 glass-effect rounded-2xl px-4 py-3 animate-bounce-soft">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-foreground">Live Monitoring</span>
                  </div>
                </div>
                
                
                <div className="absolute top-6 left-6 glass-effect rounded-2xl px-4 py-3 animate-bounce-soft" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-teal" />
                    <span className="text-sm font-semibold text-foreground">30-45 min</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 glass-effect rounded-2xl px-4 py-3 animate-bounce-soft" style={{ animationDelay: '3s' }}>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-foreground">Premium</span>
                  </div>
                </div>
              </div>
              
              {/* Ambient Lighting Effects */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-primary/10 via-transparent to-brand-teal/10 blur-2xl animate-pulse-soft" />
              <div className="absolute -inset-4 rounded-[4rem] bg-gradient-to-r from-primary/5 via-transparent to-brand-teal/5 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;