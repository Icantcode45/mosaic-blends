import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  Users,
  Verified,
  ThumbsUp,
  Heart,
  Zap
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Business Executive",
    location: "Scottsdale, AZ",
    rating: 5,
    content: "The convenience of having this service come to my home is unmatched. I've felt more energized and healthier than ever. The medical team was incredibly professional and the results were immediate.",
    treatment: "Myers' Cocktail",
    image: "/public/lovable-uploads/335fb85f-581d-43bb-9dab-00583c6b2e9e.png",
    verified: true,
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Marcus Chen", 
    role: "Fitness Coach",
    location: "Paradise Valley, AZ",
    rating: 5,
    content: "As someone who trains athletes professionally, I can confidently say this IV therapy has revolutionized my recovery process. My energy levels are through the roof and my clients have noticed the difference.",
    treatment: "NAD+ Therapy",
    image: "/public/lovable-uploads/700619f7-edd4-438b-bb29-f64a257fbd87.png",
    verified: true,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Healthcare Worker",
    location: "Phoenix, AZ", 
    rating: 5,
    content: "Working long shifts in healthcare, I was constantly exhausted. After my first treatment, I felt like a completely new person. The staff understood my medical background and tailored everything perfectly.",
    treatment: "Energy Boost IV",
    image: "/public/lovable-uploads/a498444a-fff1-4bd4-98b3-2dca2244bc5f.png",
    verified: true,
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Tech Entrepreneur", 
    location: "Scottsdale, AZ",
    rating: 5,
    content: "Running multiple businesses leaves no time for self-care. Stay Dripped brought wellness directly to my office. The cognitive benefits from NAD+ therapy have been game-changing for my productivity.",
    treatment: "Executive Wellness Package",
    image: "/public/lovable-uploads/63791b25-36b1-4a68-8b2b-4de6ec40c35f.png",
    verified: true,
    date: "2 months ago"
  },
  {
    id: 5,
    name: "Jennifer Walsh",
    role: "Wellness Enthusiast",
    location: "Paradise Valley, AZ",
    rating: 5,
    content: "I've tried many wellness treatments, but nothing compares to the quality and professionalism here. The customized approach and medical-grade ingredients make all the difference.",
    treatment: "Beauty & Wellness IV",
    image: "/public/lovable-uploads/ab3d275e-f410-4e17-a882-c49f89b1c4d2.png",
    verified: true,
    date: "1 week ago"
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Attorney",
    location: "Phoenix, AZ",
    rating: 5,
    content: "High-stress career demanded a reliable wellness solution. The mobile service fits perfectly into my schedule, and the immune support treatments have kept me healthier than ever.",
    treatment: "Immune Boost Package",
    image: "/public/lovable-uploads/bcef40ff-face-4462-965d-5f9d26ee8403.png",
    verified: true,
    date: "5 days ago"
  }
];

const stats = [
  { icon: Users, value: "2,500+", label: "Happy Clients" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: ThumbsUp, value: "98%", label: "Recommend Us" },
  { icon: Heart, value: "15K+", label: "Treatments Given" }
];

export default function ModernTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <Badge variant="outline" className="mb-4">
            <Verified className="w-4 h-4 mr-2 text-green-500" />
            Verified Reviews
          </Badge>
          <h2 className="section-title">
            What Our <span className="text-gradient-primary">Clients</span> Say
          </h2>
          <p className="section-subtitle">
            Real experiences from clients who've transformed their wellness with our professional IV therapy services.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-gradient-to-br from-medical-primary to-medical-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute top-4 left-4 w-32 h-32 bg-medical-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-4 right-4 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

          <div className="relative bg-white rounded-3xl shadow-xl border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Testimonial Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Quote className="w-12 h-12 text-medical-primary/20" />
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-900 leading-relaxed font-medium">
                  "{currentTestimonial.content}"
                </blockquote>

                <div className="flex items-center justify-between pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-medical-primary to-medical-secondary flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-lg text-gray-900">{currentTestimonial.name}</h4>
                        {currentTestimonial.verified && (
                          <Verified className="w-5 h-5 text-blue-500" />
                        )}
                      </div>
                      <p className="text-gray-600">{currentTestimonial.role}</p>
                      <p className="text-sm text-gray-500">{currentTestimonial.location}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <Badge variant="outline" className="mb-2">
                      <Zap className="w-3 h-3 mr-1" />
                      {currentTestimonial.treatment}
                    </Badge>
                    <div className="text-sm text-gray-500">{currentTestimonial.date}</div>
                  </div>
                </div>
              </div>

              {/* Navigation & Thumbnails */}
              <div className="space-y-6">
                {/* Navigation Controls */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    className="rounded-full w-12 h-12"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="text-gray-500 hover:text-medical-primary"
                    >
                      <Play className={`w-4 h-4 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
                      {isAutoPlaying ? 'Auto' : 'Manual'}
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    className="rounded-full w-12 h-12"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                {/* Testimonial Dots */}
                <div className="flex justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-medical-primary scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Quick Preview of Other Testimonials */}
                <div className="space-y-3 max-h-64 overflow-hidden">
                  {testimonials
                    .filter((_, index) => index !== currentIndex)
                    .slice(0, 3)
                    .map((testimonial, index) => (
                      <button
                        key={testimonial.id}
                        onClick={() => goToTestimonial(testimonials.indexOf(testimonial))}
                        className="w-full p-4 text-left bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-medical-primary/20 to-medical-secondary/20 flex items-center justify-center">
                            <Users className="w-5 h-5 text-medical-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-sm group-hover:text-medical-primary">
                                {testimonial.name}
                              </span>
                              {testimonial.verified && (
                                <Verified className="w-4 h-4 text-blue-500" />
                              )}
                            </div>
                            <p className="text-xs text-gray-600 truncate">
                              "{testimonial.content.slice(0, 60)}..."
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-medical-primary/5 to-medical-secondary/5 rounded-3xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who've transformed their wellness with our professional IV therapy services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cta-button">
              Book Your Treatment
            </Button>
            <Button size="lg" variant="outline">
              Read More Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}