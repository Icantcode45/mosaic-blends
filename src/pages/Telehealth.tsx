import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import QualiphyWidget from "@/components/QualiphyWidget";
import TelehealthSection from "@/components/TelehealthSection";

const features = {
  consultations: [
    "60-minute comprehensive consultation",
    "Complete medical history review",
    "Personalized treatment planning",
    "Prescription management & refills",
    "Secure HIPAA-compliant video platform",
  ],
  followup: [
    "30-minute follow-up sessions",
    "Progress monitoring & tracking",
    "Treatment plan adjustments",
    "Side effect management",
    "Flexible scheduling options",
  ],
  prescriptions: [
    "Comprehensive medication review",
    "Prescription refills & renewals",
    "Drug interaction safety checks",
    "Dosage optimization",
    "Direct pharmacy coordination",
  ],
  coaching: [
    "Lifestyle & wellness assessment",
    "Goal setting & progress tracking",
    "Personalized nutrition guidance",
    "Exercise planning & support",
    "Ongoing motivation & accountability",
  ],
  specialty: [
    "Peptide therapy consultations",
    "Hormone replacement therapy",
    "Weight management programs",
    "NAD+ therapy planning",
    "Sexual wellness consultations",
  ],
  labReview: [
    "Complete lab result interpretation",
    "Biomarker analysis & trends",
    "Nutritional deficiency assessment",
    "Hormone level optimization",
    "Follow-up testing recommendations",
  ]
};

const virtualServices = [
  {
    title: "Initial Consultation",
    price: "$150",
    duration: "60 minutes",
    description: "Comprehensive health assessment and treatment planning",
    features: [
      "Complete medical history review",
      "Symptom analysis and assessment", 
      "Treatment options discussion",
      "Personalized wellness plan",
      "Prescription recommendations"
    ]
  },
  {
    title: "Follow-Up Consultation", 
    price: "$75",
    duration: "30 minutes",
    description: "Progress monitoring and treatment adjustments",
    features: [
      "Treatment progress evaluation",
      "Side effect management",
      "Dosage adjustments",
      "Lab result review",
      "Ongoing support"
    ]
  },
  {
    title: "Specialty Consultation",
    price: "$200", 
    duration: "45 minutes",
    description: "Specialized care for peptides, hormones, and advanced therapies",
    features: [
      "Peptide therapy planning",
      "Hormone optimization",
      "Advanced treatment protocols",
      "Research therapy guidance",
      "Specialized monitoring"
    ]
  },
  {
    title: "Lab Review Session",
    price: "$100",
    duration: "30 minutes", 
    description: "Comprehensive laboratory result interpretation",
    features: [
      "Complete biomarker analysis",
      "Trend identification",
      "Deficiency assessment",
      "Optimization recommendations",
      "Follow-up planning"
    ]
  }
];

const Card = ({
  title,
  price,
  description,
  items,
  duration,
}: {
  title: string;
  price: string;
  description: string;
  items: string[];
  duration?: string;
}) => (
  <div className="rounded-2xl border border-white/30 bg-white/70 backdrop-blur-xl shadow-xl p-8 text-center transition-transform hover:-translate-y-2 hover:shadow-2xl">
    <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
    <div className="text-3xl font-extrabold text-primary my-2">{price}</div>
    {duration && <div className="text-sm text-muted-foreground mb-2">{duration}</div>}
    <p className="text-muted-foreground mb-4">{description}</p>
    <ul className="text-left text-muted-foreground divide-y divide-border mb-6">
      {items.map((it) => (
        <li key={it} className="py-2 flex items-start gap-2">
          <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
    <QualiphyWidget />
  </div>
);

const Telehealth = () => {
  return (
    <>
      <Helmet>
        <title>Telehealth Virtual Consultations | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Professional telehealth consultations with licensed providers. Virtual care for IV therapy, peptides, hormones, weight management, and wellness optimization in Arizona." />
        <link rel="canonical" href="https://staydrippediv.com/telehealth" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Telehealth Virtual Consultations | Stay Dripped IV & Wellness Co." />
        <meta property="og:description" content="Professional telehealth consultations with licensed providers. Virtual care for IV therapy, peptides, hormones, weight management, and wellness optimization in Arizona." />
        <meta property="og:url" content="https://staydrippediv.com/telehealth" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-light/60 via-secondary/10 to-brand-blue/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Telehealth Virtual Consultations
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Professional medical consultations and ongoing care management from licensed healthcare providers. 
              Comprehensive virtual care for IV therapy, peptide treatments, hormone optimization, and wellness programs.
            </p>
            <div className="mt-6 inline-flex">
              <QualiphyWidget />
            </div>
          </div>
        </section>

        {/* Virtual Services Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Comprehensive Virtual Healthcare Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Professional medical consultations delivered through secure, HIPAA-compliant telehealth technology. 
                Licensed providers available throughout Arizona for specialized wellness care.
              </p>
            </div>

            <div className="grid gap-8 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-16">
              {virtualServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <div className="text-2xl font-extrabold text-primary mb-1">{service.price}</div>
                  <div className="text-sm text-muted-foreground mb-3">{service.duration}</div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <QualiphyWidget />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service Categories */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
              Specialized Virtual Care Services
            </h2>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              <Card
                title="Virtual Consultations"
                price="$150"
                duration="60 minutes"
                description="Comprehensive medical consultations with licensed healthcare providers nationwide."
                items={features.consultations}
              />
              <Card
                title="Follow-up Care"
                price="$75"
                duration="30 minutes"
                description="Ongoing monitoring and support for your wellness journey and treatment progress."
                items={features.followup}
              />
              <Card
                title="Prescription Management"
                price="$50"
                duration="15-30 minutes"
                description="Medication reviews, refills, and prescription optimization services."
                items={features.prescriptions}
              />
              <Card
                title="Health Coaching"
                price="$100"
                duration="45 minutes"
                description="Personalized wellness coaching and lifestyle optimization guidance."
                items={features.coaching}
              />
              <Card
                title="Specialty Consultations"
                price="$200"
                duration="45 minutes"
                description="Advanced care for peptides, hormones, NAD+, and specialized therapies."
                items={features.specialty}
              />
              <Card
                title="Lab Review Sessions"
                price="$100"
                duration="30 minutes"
                description="Comprehensive laboratory result interpretation and optimization planning."
                items={features.labReview}
              />
            </div>
          </div>
        </section>

        {/* Telehealth Programs Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TelehealthSection />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How Virtual Consultations Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Simple, secure, and convenient healthcare from the comfort of your home.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Schedule Consultation",
                  description: "Book your virtual appointment online or by phone. Choose from available time slots."
                },
                {
                  step: "2", 
                  title: "Secure Video Call",
                  description: "Connect with your licensed provider through our HIPAA-compliant platform."
                },
                {
                  step: "3",
                  title: "Medical Assessment", 
                  description: "Complete health evaluation, symptom review, and personalized treatment planning."
                },
                {
                  step: "4",
                  title: "Treatment Plan",
                  description: "Receive prescriptions, treatment recommendations, and ongoing care coordination."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Legal */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Arizona Telehealth Compliance</h3>
              <p className="text-muted-foreground mb-6">
                Our telehealth services comply with Arizona telemedicine laws (A.R.S. § 36-3602) and HIPAA regulations. 
                All consultations require informed consent and patient verification.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">✅ HIPAA Compliant</h4>
                  <p>Secure, encrypted video platform with protected health information safeguards.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">✅ Licensed Providers</h4>
                  <p>All consultations with Arizona-licensed medical professionals.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">✅ Emergency Protocols</h4>
                  <p>Clear guidelines for emergency situations. Call 911 for urgent medical needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Telehealth;
