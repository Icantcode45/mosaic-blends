import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Shield,
  Clock,
  MapPin,
  ChevronRight,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Business Executive",
    content: "The convenience of having this service come to my home is unmatched. I've felt more energized and healthier than ever.",
    rating: 5,
    image: "/public/lovable-uploads/335fb85f-581d-43bb-9dab-00583c6b2e9e.png"
  },
  {
    name: "Marcus Chen",
    role: "Fitness Coach",
    content: "Professional service with immediate results. My recovery time has improved dramatically since starting IV therapy.",
    rating: 5,
    image: "/public/lovable-uploads/700619f7-edd4-438b-bb29-f64a257fbd87.png"
  },
  {
    name: "Emma Rodriguez",
    role: "Healthcare Worker",
    content: "As a nurse, I appreciate the medical professionalism and quality of care. Truly exceptional service.",
    rating: 5,
    image: "/public/lovable-uploads/a498444a-fff1-4bd4-98b3-2dca2244bc5f.png"
  }
];

const treatmentHighlights = [
  { icon: Zap, title: "IV Therapy", description: "Premium vitamin infusions", count: "15+ formulas" },
  { icon: Shield, title: "NAD+ Therapy", description: "Anti-aging & cognitive boost", count: "2-4 hour sessions" },
  { icon: Clock, title: "Quick Injections", description: "Fast nutrient delivery", count: "5-15 minutes" },
  { icon: MapPin, title: "Mobile Service", description: "We come to you", count: "Same day available" }
];

const trustStats = [
  { value: "2,500+", label: "Clients Treated", icon: Users },
  { value: "4.9", label: "Average Rating", icon: Star },
  { value: "99%", label: "Satisfaction Rate", icon: CheckCircle },
  { value: "24/7", label: "Available", icon: Clock }
];

export default function ModernInteractiveHero() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-medical-dark via-medical-primary to-medical-secondary min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300">
              <Shield className="w-4 h-4 mr-2" />
              Licensed Medical Professionals
            </Badge>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Professional
                <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                  IV Therapy
                </span>
                <span className="block text-4xl lg:text-5xl text-white/90">
                  Delivered to You
                </span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                Licensed medical professionals provide personalized IV treatments, vitamin injections, 
                and wellness therapies directly to your preferred location.
              </p>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustStats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="cta-button group" asChild>
                <Link to="/iv-therapy">
                  Start Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-dark" asChild>
                <Link to="/contact">
                  View Services
                  <Play className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="space-y-8">
            {/* Rotating Testimonial */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-white/80 ml-2">Verified Review</span>
              </div>
              
              <blockquote className="text-white text-lg leading-relaxed mb-6">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-white/60">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
              
              {/* Testimonial dots */}
              <div className="flex gap-2 mt-6 justify-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-accent' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Treatment Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {treatmentHighlights.map((treatment, index) => (
                <div 
                  key={index}
                  className="service-card group bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                      <treatment.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{treatment.title}</h3>
                      <p className="text-sm text-white/60">{treatment.count}</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">{treatment.description}</p>
                  <ChevronRight className="w-4 h-4 text-accent mt-2 group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}