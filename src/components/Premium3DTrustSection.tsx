import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Premium3DTrustSection = () => {
  const trustMetrics = [
    {
      icon: "/src/assets/icons/3d-thumbs-up.png",
      value: "10,000+",
      label: "Happy Clients",
      description: "Satisfied customers nationwide"
    },
    {
      icon: "/src/assets/icons/3d-medal.png",
      value: "5 Years",
      label: "Expert Care",
      description: "Professional medical experience"
    },
    {
      icon: "/src/assets/icons/3d-shield.png",
      value: "100%",
      label: "Safety First",
      description: "Licensed medical professionals"
    },
    {
      icon: "/src/assets/icons/3d-hashtag.png",
      value: "#1",
      label: "Rated Service",
      description: "Top-rated IV therapy provider"
    }
  ];

  const certifications = [
    {
      title: "FDA Approved",
      description: "All treatments use FDA-approved medications and equipment",
      badge: "Certified"
    },
    {
      title: "Licensed Professionals",
      description: "Our team consists of licensed nurses and medical practitioners",
      badge: "Verified"
    },
    {
      title: "Insurance Accepted",
      description: "We accept most major insurance plans for eligible treatments",
      badge: "Accepted"
    },
    {
      title: "24/7 Support",
      description: "Around-the-clock customer support for your peace of mind",
      badge: "Available"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 premium-glass text-primary border-primary/30">
            <img src="/src/assets/icons/3d-shield.png" alt="Security shield icon" className="w-4 h-4 mr-2" loading="lazy" />
            Trusted Excellence
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Why{" "}
            <span className="text-gradient-primary">
              Thousands Trust
            </span>{" "}
            Our Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the gold standard in mobile IV therapy with our licensed medical professionals, 
            premium equipment, and unwavering commitment to your wellness.
          </p>
        </div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustMetrics.map((metric, index) => (
            <Card 
              key={index} 
              className="service-card text-center p-6 hover-lift cursor-pointer group"
            >
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <img 
                    src={metric.icon} 
                    alt="" 
                    className="w-16 h-16 floating-3d group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="stats-number text-4xl font-bold mb-2">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="service-card p-6 hover-lift group">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.description}
                    </p>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="ml-4 bg-primary/10 text-primary border-primary/20"
                  >
                    {cert.badge}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="premium-glass rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Experience{" "}
              <span className="text-gradient-primary">Premium Care?</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of satisfied clients who trust us with their wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="cta-button text-lg px-8 py-6 group"
                asChild
              >
                <Link to="/first-time-patients">
                  <img src="/src/assets/icons/3d-phone.png" alt="Phone icon" className="w-5 h-5 mr-2" loading="lazy" />
                  Book Your Treatment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 premium-glass border-primary/30 hover:bg-primary/5"
                asChild
              >
                <Link to="/contact">
                  Ask Questions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium3DTrustSection;