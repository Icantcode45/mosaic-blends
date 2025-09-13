import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, AlertTriangle, FileText, Scale, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const MedicalCompliance = () => {
  useEffect(() => {
    document.title = "Medical Disclaimer & Compliance | Stay Dripped IV & Wellness Co.";
  }, []);

  const complianceSections = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Physician Oversight",
      content: "All peptide programs and prescription-based therapies are available only after medical evaluation and approval by a physician or nurse practitioner. Stay Dripped® does not sell unregulated or unsupervised \"research chemicals.\""
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-amber-500" />,
      title: "FDA Status",
      content: "Some compounds referenced on this site may be classified as Research Use Only (RUO). These are not approved by the Food and Drug Administration (FDA) for human use. Any mention is provided for educational purposes only and should not be interpreted as an endorsement of safety or effectiveness."
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "No Medical Advice",
      content: "This website and its content are for informational and educational purposes only. Nothing on this site should be interpreted as medical advice. Patients should always consult with a licensed healthcare provider regarding their health and treatment options."
    },
    {
      icon: <Scale className="w-8 h-8 text-green-500" />,
      title: "Individual Results May Vary",
      content: "No guarantee of specific outcomes is made. Responses to therapy differ between individuals, and any testimonials or examples are not predictive of future results."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Medical Disclaimer & Compliance | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Medical disclaimer, compliance information, and important notices about physician-supervised treatments and FDA regulations." />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://staydrippediv.com/medical-compliance" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Medical Disclaimer & Compliance | Stay Dripped IV & Wellness Co." />
        <meta property="og:description" content="Medical disclaimer, compliance information, and important notices about physician-supervised treatments and FDA regulations." />
        <meta property="og:url" content="https://staydrippediv.com/medical-compliance" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medical Disclaimer & Compliance | Stay Dripped IV & Wellness Co." />
        <meta name="twitter:description" content="Medical disclaimer, compliance information, and important notices about physician-supervised treatments and FDA regulations." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              MEDICAL COMPLIANCE
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-heading">
              Medical Disclaimer & Compliance
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Important information about our physician-supervised services, regulatory compliance, and medical disclaimers.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Alert className="max-w-4xl mx-auto border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              <strong>Important Notice:</strong> Stay Dripped® IV & Wellness Co. provides IV therapy, vitamin injections, peptide programs, and wellness services under the supervision of licensed healthcare providers. All patients must complete a telehealth evaluation before any prescription products or treatments are dispensed.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Main Compliance Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {complianceSections.map((section, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    {section.icon}
                    <h3 className="text-xl font-semibold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </Card>
              ))}
            </div>

            {/* Detailed Compliance Information */}
            <Card className="p-8 border-primary/20 bg-primary/5">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Detailed Compliance Information
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Medical Oversight & Supervision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Stay Dripped® IV & Wellness Co. is a physician-supervised medical practice specializing in IV therapy, telehealth consultations, and wellness treatments. All services are provided under the direct supervision and oversight of licensed medical professionals. Every patient must undergo a comprehensive medical evaluation and receive approval from our licensed healthcare providers before any treatment is prescribed or dispensed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Regulatory Compliance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our operations fully comply with all applicable federal and state regulations governing telehealth services, medical practice, and IV therapy. We maintain current licenses and certifications required for medical practice in all jurisdictions we serve. All treatments utilize FDA-approved medications and compounds administered under medical supervision.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Research Use Only (RUO) Compounds
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Some compounds referenced on this website may be classified as Research Use Only (RUO) and are not approved by the FDA for human use. These compounds are not marketed for treatment, cure, or prevention of disease. Any information provided about such compounds is for educational purposes only and should not be considered a recommendation for human use.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Privacy & Security
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain full HIPAA compliance and employ industry-standard security measures to protect patient health information and ensure confidential, secure healthcare delivery. All patient data is encrypted and stored according to federal privacy regulations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    No Guarantee of Results
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Stay Dripped® does not guarantee outcomes from IV therapy, vitamin injections, peptides, or other services. Results vary for each individual, and no warranty is expressed or implied. Individual responses to therapy differ, and any testimonials or examples are not predictive of future results.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Educational Content Disclaimer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on this website is provided for informational and educational purposes only. This information is not intended as medical advice and should not be used for diagnosing or treating a health problem or disease. Patients should always consult with a licensed healthcare provider regarding their health and treatment options.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Acknowledgment Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              User Acknowledgment
            </h2>
            <Card className="p-6 bg-background">
              <p className="text-muted-foreground leading-relaxed mb-6">
                By using this website and accessing our services, you acknowledge that you have read, understood, and agree to these medical disclaimers and compliance terms. You understand that all treatments require medical evaluation and prescription approval from licensed healthcare providers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <Link to="/first-time-patients">Schedule Medical Evaluation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+1-602-688-9825">Contact Medical Team</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default MedicalCompliance;