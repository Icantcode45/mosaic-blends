import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Clock, Shield, Heart } from "lucide-react";

const ProfessionalTrustSection = () => {
  const trustMetrics = [
    { icon: Users, value: "10,000+", label: "Satisfied Clients", color: "text-primary" },
    { icon: Award, value: "100%", label: "Licensed Professionals", color: "text-secondary" },
    { icon: Clock, value: "<30min", label: "Average Response Time", color: "text-medical-accent" },
    { icon: Shield, value: "5.0★", label: "Perfect Safety Record", color: "text-yellow-500" },
    { icon: Heart, value: "99%", label: "Client Satisfaction", color: "text-red-500" },
    { icon: CheckCircle, value: "7 Days", label: "Weekly Availability", color: "text-green-500" }
  ];

  const certifications = [
    "Arizona State Licensed",
    "BBB A+ Accredited", 
    "Medical Board Certified",
    "HIPAA Compliant",
    "FDA Approved Medications",
    "Insurance Accepted"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-6 px-4 py-2 text-sm font-semibold">
              TRUSTED BY THOUSANDS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
              Arizona's Most Trusted 
              <span className="text-primary"> Mobile IV Service</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medical">
              Delivering professional medical care with the highest standards of safety, quality, and customer satisfaction across Arizona.
            </p>
          </div>

          {/* Trust Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {trustMetrics.map((metric, index) => (
              <div 
                key={index}
                className="medical-card text-center p-6 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <metric.icon className={`w-8 h-8 mx-auto mb-4 ${metric.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-r from-primary/5 via-background to-secondary/5 rounded-3xl border border-border/50 p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
                Fully Licensed & Certified
              </h3>
              <p className="text-muted-foreground font-medical">
                Your safety and trust are our top priorities. We maintain the highest professional standards.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center gap-2 p-4 bg-background/80 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 group"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium text-foreground text-center">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 p-6 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Since 2020</div>
                <div className="text-sm text-muted-foreground">Serving Arizona</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Support</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfessionalTrustSection;