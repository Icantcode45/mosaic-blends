import { useState, useEffect } from "react";
import ivBagImmuneBoostImg from "@/assets/iv-bag-immune-boost.png";
import dropletIcon from "@/assets/icons/3d-droplet.png";
import lightningIcon from "@/assets/icons/3d-lightning.png";
import starIcon from "@/assets/icons/3d-star.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Award, Clock, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const trustIndicators = [
  { icon: Shield, text: "HIPAA Compliant", color: "text-blue-600" },
  { icon: Award, text: "Licensed Medical Team", color: "text-green-600" },
  { icon: Star, text: "4.9/5 Rating", color: "text-yellow-500" },
  { icon: Users, text: "10,000+ Treatments", color: "text-purple-600" },
];

const floatingElements = [
  { icon: dropletIcon, delay: 0, duration: 6 },
  { icon: lightningIcon, delay: 2, duration: 8 },
  { icon: starIcon, delay: 4, duration: 7 },
];

export default function UltraModernHero() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "The convenience of having this service come to my home is unmatched. I felt more energized and healthier than ever.",
      author: "Sarah M.",
      role: "Executive"
    },
    {
      text: "Professional, efficient, and effective. The IV therapy helped me recover from my marathon training faster than ever.",
      author: "Mike R.",
      role: "Athlete"
    },
    {
      text: "As a busy mom, this service is a lifesaver. The team is professional and the results are incredible.",
      author: "Jennifer L.",
      role: "Entrepreneur"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="hero-section">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="absolute w-12 h-12 opacity-30 animate-float"
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <img 
              src={element.icon} 
              alt=""
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </div>
        ))}
      </div>

      <div className="hero-content">
        {/* Trust Indicators Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {trustIndicators.map((indicator, index) => (
            <Badge
              key={index}
              variant="outline"
              className="trust-badge"
            >
              <indicator.icon className={`w-4 h-4 ${indicator.color}`} />
              <span>{indicator.text}</span>
            </Badge>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-green-50 rounded-full border border-blue-200 mb-6">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Leading IV Vitamin Therapy</span>
            </div>

            <h1 className="hero-title">
              IV Therapy
              <br />
              <span className="text-gradient-primary">Direct to</span>
              <br />
              Your Door
            </h1>

            <p className="hero-subtitle">
              Experience the convenience of professional-grade IV vitamin therapy delivered to your location. 
              Personalized treatments designed by licensed medical professionals for optimal wellness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/booking">
                <Button size="lg" className="cta-button group">
                  Book Your Drip Now
                  <Clock className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
              <Link to="/iv-therapy">
                <Button size="lg" variant="outline" className="px-8 py-4 rounded-xl">
                  See All Services
                </Button>
              </Link>
            </div>

            {/* Rotating Testimonial */}
            <div className="testimonial-card max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm font-medium">4.9</span>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 shadow-medical">
              <div className="text-center">
                <div className="relative mx-auto w-64 h-80 mb-6">
                  <img
                    src={ivBagImmuneBoostImg}
                    alt="IV Bag - Immune Boost"
                    className="w-full h-full object-contain hover-lift"
                  />
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 shadow-lg animate-pulse-soft">
                    <Shield className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">Premium IV Therapy</h3>
                  <div className="flex justify-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      Fast-Acting
                    </span>
                    <span className="flex items-center gap-1 text-blue-600">
                      <CheckCircle className="w-4 h-4" />
                      Licensed Team
                    </span>
                    <span className="flex items-center gap-1 text-purple-600">
                      <CheckCircle className="w-4 h-4" />
                      Mobile Service
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border">
              <div className="stats-number">45min</div>
              <div className="text-sm text-gray-600">Average Treatment</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border">
              <div className="stats-number">99%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}