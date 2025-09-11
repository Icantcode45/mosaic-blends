import { useEffect } from "react";
import { Helmet } from "react-helmet";
import IntakeQWidget from "@/components/IntakeQWidget";

const SpecialtyTreatments = () => {
  useEffect(() => {
    document.title = "Specialty Treatments | Stay Dripped IV & Wellness Co.";
  }, []);

  return (
    <>
      <Helmet>
        <title>Specialty Treatments | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Specialized wellness treatments including injury recovery, hair loss therapy, and skin care treatments in Scottsdale, AZ." />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://staydrippediv.com/specialty-treatments" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted via-muted/50 to-background py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Specialty Treatments
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced therapeutic treatments for specific wellness goals
            </p>
          </div>
        </section>

        {/* Treatment Categories */}
        <section className="py-16 space-y-16">
          <div className="container mx-auto px-4">
            
            {/* Injury & Recovery */}
            <div className="bg-muted/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center text-foreground mb-4">
                Injury & Recovery Therapy Treatments
              </h2>
              <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
                Accelerate healing and recovery with targeted therapies designed for athletes and active individuals.
              </p>
              <IntakeQWidget categoryId="82e625db-d294-4053-9714-3c333dd5ee15" />
            </div>

            {/* Hair Loss Therapy */}
            <div className="bg-muted/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center text-foreground mb-4">
                Hair Loss Therapy Treatments
              </h2>
              <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
                Comprehensive hair restoration and growth support treatments using advanced therapies.
              </p>
              <IntakeQWidget categoryId="ce7a184c-b6d9-4a3a-8175-ce03dadd42c8" />
            </div>

            {/* Skin Care Therapy */}
            <div className="bg-muted/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center text-foreground mb-4">
                Skin Care Therapy Treatments
              </h2>
              <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
                Advanced skin health and rejuvenation treatments for radiant, youthful skin.
              </p>
              <IntakeQWidget categoryId="592152be-73d5-4e8d-87b9-d2327503ea0e" />
            </div>
            
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Questions About Our Specialty Treatments?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our wellness experts are here to help you choose the right specialty treatment for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1-602-688-9825"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Call (602) 688-9825
              </a>
              <a 
                href="mailto:info@staydrippediv.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpecialtyTreatments;