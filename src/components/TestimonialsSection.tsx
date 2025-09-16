import { Badge } from "@/components/ui/badge";
import { Star, Quote, User } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Athlete",
      location: "Scottsdale, AZ",
      rating: 5,
      text: "The convenience of having professional IV therapy come to my home is unmatched. I've felt more energized and healthier than ever. The medical staff is incredibly professional and knowledgeable.",
      treatment: "Energy & Performance",
      verified: true
    },
    {
      name: "Michael Chen",
      role: "Business Executive",
      location: "Phoenix, AZ",
      rating: 5,
      text: "After a rough week of travel and meetings, their immune boost IV saved my important presentation. The service was professional, quick, and incredibly effective. Highly recommend!",
      treatment: "Immune Support",
      verified: true
    },
    {
      name: "Emily Rodriguez",
      role: "Wellness Enthusiast",
      location: "Tempe, AZ",
      rating: 5,
      text: "I get regular beauty IVs and the results speak for themselves. My skin is glowing and my hair has never been healthier. The team is always professional and makes me feel comfortable.",
      treatment: "Beauty & Anti-Aging",
      verified: true
    },
    {
      name: "David Thompson",
      role: "Healthcare Worker",
      location: "Mesa, AZ",
      rating: 5,
      text: "As someone in healthcare, I'm very particular about medical services. Stay Dripped exceeds all expectations with their professionalism, safety protocols, and treatment quality.",
      treatment: "NAD+ Therapy",
      verified: true
    },
    {
      name: "Lisa Park",
      role: "Marketing Director",
      location: "Chandler, AZ",
      rating: 5,
      text: "The mental clarity IV has been a game-changer for my work performance. The convenience of mobile service means I can maintain my busy schedule while prioritizing my health.",
      treatment: "Mental Clarity",
      verified: true
    },
    {
      name: "Jason Williams",
      role: "Fitness Coach",
      location: "Gilbert, AZ",
      rating: 5,
      text: "Recovery is crucial in my line of work. Their hydration therapy helps me bounce back faster from intense training sessions. Professional service every single time.",
      treatment: "IV Hydration",
      verified: true
    }
  ];

  const overallStats = {
    averageRating: 5.0,
    totalReviews: 1247,
    recommendationRate: 99.8
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-6 px-4 py-2 text-sm font-semibold">
              CLIENT TESTIMONIALS
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medical">
              Don't just take our word for it. See what Arizona residents are saying about their experience with our professional mobile IV therapy service.
            </p>
            
            {/* Overall Stats */}
            <div className="flex items-center justify-center gap-8 mt-12 p-6 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 inline-flex">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-foreground">{overallStats.averageRating}</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{overallStats.totalReviews.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">{overallStats.recommendationRate}%</div>
                <div className="text-sm text-muted-foreground">Would Recommend</div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="medical-card p-8 relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 font-medical">
                  "{testimonial.text}"
                </blockquote>

                {/* Treatment Badge */}
                <div className="mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                    {testimonial.treatment}
                  </Badge>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-primary/10 via-background to-secondary/10 rounded-3xl border border-border/50">
              <h3 className="text-xl font-bold text-foreground">Join Thousands of Satisfied Clients</h3>
              <p className="text-muted-foreground max-w-md">Experience the difference professional mobile IV therapy can make in your health and wellness journey.</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <button className="professional-cta px-6 py-3">
                  Book Your Treatment
                </button>
                <button className="px-6 py-3 border border-primary/20 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300">
                  Read All Reviews
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;