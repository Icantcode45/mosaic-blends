import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Award, FileCheck, Lock, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | Stay Dripped IV & Wellness Co.";
  }, []);

  const complianceFeatures = [
    {
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      title: "Physician-Supervised Care",
      description: "All treatments are overseen by licensed medical professionals with extensive experience in IV therapy and wellness medicine."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Federal & State Compliance",
      description: "Our services fully comply with federal and state telehealth regulations, ensuring legal and safe treatment delivery."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Medical Evaluation Required",
      description: "Every patient undergoes thorough medical evaluation and approval by our licensed providers before any treatment is dispensed."
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "HIPAA Compliant",
      description: "We maintain the highest standards of patient privacy and data security in full compliance with HIPAA regulations."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Licensed Medical Providers",
      description: "Our team consists exclusively of licensed healthcare providers qualified to prescribe and oversee IV therapy treatments."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "No Research Chemicals",
      description: "We do not sell unregulated research chemicals. All treatments use FDA-approved compounds under medical supervision."
    }
  ];

  const certifications = [
    "Licensed Medical Facility",
    "HIPAA Compliant Operations", 
    "State Board Certified Providers",
    "DEA Licensed for Controlled Substances",
    "Telehealth Regulation Compliant",
    "FDA Approved Compounds Only"
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Stay Dripped IV & Wellness Co. is a physician-supervised IV therapy and telehealth company providing medically-supervised wellness treatments with full regulatory compliance." />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://staydrippediv.com/about" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | Stay Dripped IV & Wellness Co." />
        <meta property="og:description" content="Physician-supervised IV therapy and telehealth company providing medically-supervised wellness treatments with full regulatory compliance." />
        <meta property="og:url" content="https://staydrippediv.com/about" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Stay Dripped IV & Wellness Co." />
        <meta name="twitter:description" content="Physician-supervised IV therapy and telehealth company providing medically-supervised wellness treatments with full regulatory compliance." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              PHYSICIAN-SUPERVISED WELLNESS
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-heading">
              About Stay Dripped® IV & Wellness Co.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              A physician-supervised IV therapy, telehealth, and wellness company committed to providing safe, 
              effective, and legally compliant medical treatments under the oversight of licensed healthcare providers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/first-time-patients">Start Your Medical Evaluation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+1-602-688-9825">Speak with Medical Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Oversight Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-primary/20 bg-primary/5">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Medical Oversight & Compliance Statement
                </h2>
                <div className="w-16 h-1 bg-primary rounded mx-auto"></div>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Stay Dripped® IV & Wellness Co.</strong> is a physician-supervised 
                  medical practice specializing in IV therapy, telehealth consultations, and wellness treatments. 
                  All services are provided under the direct supervision and oversight of licensed medical professionals.
                </p>
                
                <p>
                  <strong className="text-foreground">Medical Evaluation Required:</strong> Every patient must undergo 
                  a comprehensive medical evaluation and receive approval from our licensed healthcare providers before 
                  any treatment is prescribed or dispensed. No treatments are provided without proper medical oversight.
                </p>
                
                <p>
                  <strong className="text-foreground">Regulatory Compliance:</strong> Our operations fully comply with 
                  all applicable federal and state regulations governing telehealth services, medical practice, and IV therapy. 
                  We maintain current licenses and certifications required for medical practice in all jurisdictions we serve.
                </p>
                
                <p>
                  <strong className="text-foreground">No Research Chemicals:</strong> Stay Dripped® does not sell, 
                  distribute, or provide unregulated "research chemicals" or experimental compounds. All treatments 
                  utilize FDA-approved medications and compounds administered under medical supervision.
                </p>
                
                <p>
                  <strong className="text-foreground">Privacy & Security:</strong> We maintain full HIPAA compliance 
                  and employ industry-standard security measures to protect patient health information and ensure 
                  confidential, secure healthcare delivery.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Commitment to Compliance & Safety
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest standards of medical care, regulatory compliance, and patient safety 
              in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Licenses & Certifications
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Stay Dripped® maintains all required licenses and certifications for safe, 
              legal medical practice and telehealth service delivery.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="p-3 text-sm font-medium bg-primary/10 text-primary border-primary/20"
                >
                  {cert}
                </Badge>
              ))}
            </div>
            
            <Card className="p-8 bg-muted/30 border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Questions About Our Medical Oversight?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our medical team is available to discuss our compliance standards, licensing, 
                and medical oversight protocols.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <a href="mailto:medical@staydrippediv.com">Contact Medical Team</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+1-602-688-9825">Call (602) 688-9825</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Our Mission
            </h2>
            <blockquote className="text-2xl font-light text-muted-foreground leading-relaxed italic">
              "To provide physician-supervised, evidence-based wellness treatments that enhance health 
              and vitality while maintaining the highest standards of medical oversight, regulatory compliance, 
              and patient safety."
            </blockquote>
            <div className="mt-8">
              <Badge variant="outline" className="text-lg px-6 py-2">
                Licensed Medical Practice Since 2023
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule your medical evaluation with our licensed healthcare providers to determine 
              which treatments are right for your health goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/first-time-patients">Schedule Medical Evaluation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/telehealth">Learn About Telehealth</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;