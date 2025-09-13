import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Stay Dripped IV & Wellness Co.";
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms of Service | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Terms of service, medical oversight requirements, compliance guidelines, and user agreements for Stay Dripped IV & Wellness Co." />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://staydrippediv.com/terms" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms of Service | Stay Dripped IV & Wellness Co." />
        <meta property="og:description" content="Terms of service, medical oversight requirements, compliance guidelines, and user agreements." />
        <meta property="og:url" content="https://staydrippediv.com/terms" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | Stay Dripped IV & Wellness Co." />
        <meta name="twitter:description" content="Terms of service, medical oversight requirements, compliance guidelines, and user agreements." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              LEGAL TERMS
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-heading">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Legal terms, medical oversight requirements, and compliance guidelines governing the use of Stay Dripped® services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Last Updated: December 2024
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Welcome to Stay Dripped® IV & Wellness Co. These Terms of Service ("Terms") govern your use of our website, services, and any related applications or platforms. By accessing or using our services, you agree to be bound by these Terms.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Medical Oversight</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All services provided by Stay Dripped® IV & Wellness Co. require medical evaluation and approval by licensed healthcare providers. By using our services, you acknowledge and agree that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>All treatments are physician-supervised and require telehealth evaluation</li>
                    <li>Prescription-only products, including peptides, will not be dispensed without proper medical authorization</li>
                    <li>You must provide accurate medical history and health information during consultations</li>
                    <li>You understand that medical supervision is mandatory for all treatments</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. No Guarantee of Results</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Stay Dripped® does not guarantee specific outcomes from IV therapy, vitamin injections, peptides, or other wellness services. You acknowledge that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Individual results vary and depend on multiple factors including health status, lifestyle, and compliance</li>
                    <li>No warranty of safety, effectiveness, or specific outcomes is expressed or implied</li>
                    <li>Testimonials and examples are not predictive of your individual results</li>
                    <li>Treatment responses differ between individuals</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Research Use Only Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Certain compounds may be described as Research Use Only (RUO) and are not approved by the FDA for human consumption. You understand that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>RUO compounds are not marketed for treatment, cure, or prevention of disease</li>
                    <li>Information provided about such compounds is for educational purposes only</li>
                    <li>Any mention should not be considered a recommendation for human use</li>
                    <li>Only FDA-approved compounds are used in our supervised medical treatments</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Influencer and Affiliate Compliance</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All influencers, affiliates, and brand partners working with Stay Dripped® must follow FTC Endorsement Guidelines and FDA marketing standards:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Sponsored content must include clear disclosures such as "#ad" or "#sponsored"</li>
                    <li>No therapeutic or medical claims may be made regarding unapproved products</li>
                    <li>Affiliates must comply with the official Stay Dripped® compliance checklist</li>
                    <li>All marketing materials must be pre-approved by our compliance team</li>
                    <li>Violations may result in immediate termination of partnership agreements</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Privacy and Data Protection</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We maintain strict HIPAA compliance and data protection standards. By using our services, you agree to our collection and use of health information as outlined in our Privacy Policy.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Stay Dripped® IV & Wellness Co. is not liable for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Misuse of products or services outside of medical supervision</li>
                    <li>Improper interpretation of information on this website</li>
                    <li>Actions taken without proper medical consultation and approval</li>
                    <li>Individual variations in treatment response or outcomes</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    By accessing this website or purchasing services, you accept full responsibility for your choices and agree to hold Stay Dripped® harmless from any claims arising from misuse or unauthorized use of information or services.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms are governed by the laws of Arizona, United States. Any disputes will be resolved in the appropriate courts of Arizona.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of any changes.
                  </p>
                </div>

                <Separator />

                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Contact Information</h3>
                  <p className="text-muted-foreground mb-4">
                    For questions about these Terms of Service or our compliance policies, please contact:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <a href="mailto:legal@staydrippediv.com">Legal Team</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="tel:+1-602-688-9825">Call (602) 688-9825</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;