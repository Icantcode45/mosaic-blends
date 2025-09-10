import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, Smartphone, MapPin, Building2, CheckCircle, Shield, Award, Users2 } from "lucide-react";

const EnhancedPartnersSection = () => {
  const partners = [
    { name: "Arizona State Athletics", category: "Sports Partnership", description: "Official IV therapy partner for ASU athletics" },
    { name: "Fight Ready MMA", category: "Combat Sports", description: "Recovery partner for professional fighters" },
    { name: "Queen Creek High School Athletics", category: "High School Sports", description: "Supporting student athlete recovery" },
    { name: "Arizona Combat Sports", category: "MMA & BJJ", description: "Performance and recovery optimization" },
    { name: "Social Scottsdale", category: "Entertainment Venue", description: "Wellness partnership in Scottsdale" },
    { name: "Steve Levine Entertainment", category: "Event Production", description: "Event wellness and recovery services" },
    { name: "NelkBoys & Fullsend Golf", category: "Content & Golf", description: "Lifestyle and wellness collaboration" },
    { name: "Augment Health & Wellness", category: "Health & Wellness", description: "Comprehensive wellness partnership" }
  ];

  const certifications = [
    { name: "FDA Registered", icon: Building2, description: "FDA registered facility" },
    { name: "DEA Licensed", icon: Shield, description: "DEA controlled substance license" },
    { name: "State Licensed", icon: CheckCircle, description: "Arizona state medical license" },
    { name: "HIPAA Compliant", icon: Shield, description: "Privacy protection certified" },
    { name: "Joint Commission", icon: Award, description: "Quality and safety accredited" },
    { name: "BBB Accredited", icon: Users2, description: "Better Business Bureau member" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Partners Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                TRUSTED PARTNERSHIPS
              </Badge>
              
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading">
                Partnered with leading brands across Arizona
              </h2>
              
              <p className="text-lg text-muted-foreground">
                We collaborate with top healthcare institutions, sports organizations, and technology companies to deliver the highest standard of care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-xl shadow-elev-1 p-6 hover:shadow-elev-2 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {partner.category}
                    </div>
                    <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {partner.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {partner.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-success text-success-foreground mb-4">
              CERTIFICATIONS & COMPLIANCE
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Licensed, Certified, and Compliant
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our facility and team maintain the highest standards of medical practice, safety, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-background rounded-xl p-6 text-center hover:shadow-elev-2 transition-all duration-300"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-semibold text-sm mb-2 text-foreground group-hover:text-primary transition-colors">
                  {cert.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {cert.description}
                </div>
              </div>
            ))}
          </div>

          {/* Medical Advisory Board */}
          <div className="mt-20 bg-background rounded-3xl p-8 shadow-elev-1">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Medical Advisory Board</h3>
              <p className="text-muted-foreground">
                Our treatments are overseen by a board of experienced medical professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users2 className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Dr. Michael Thompson, MD</h4>
                <p className="text-sm text-muted-foreground mb-1">Emergency Medicine</p>
                <p className="text-xs text-muted-foreground">20+ years experience</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users2 className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Dr. Sarah Rodriguez, MD</h4>
                <p className="text-sm text-muted-foreground mb-1">Internal Medicine</p>
                <p className="text-xs text-muted-foreground">15+ years experience</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users2 className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Dr. James Wilson, PharmD</h4>
                <p className="text-sm text-muted-foreground mb-1">Clinical Pharmacy</p>
                <p className="text-xs text-muted-foreground">12+ years experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedPartnersSection;
