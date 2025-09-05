import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = {
  consultations: [
    "60-minute consultation",
    "Medical history review",
    "Treatment planning",
    "Prescription management",
    "Secure video platform",
  ],
  followup: [
    "30-minute sessions",
    "Progress monitoring",
    "Treatment adjustments",
    "Side effect management",
    "Flexible scheduling",
  ],
  prescriptions: [
    "Medication review",
    "Prescription refills",
    "Drug interaction checks",
    "Dosage optimization",
    "Pharmacy coordination",
  ],
  coaching: [
    "Lifestyle assessment",
    "Goal setting & tracking",
    "Nutrition guidance",
    "Exercise planning",
    "Motivation & support",
  ],
};

const Card = ({
  title,
  price,
  description,
  items,
}: {
  title: string;
  price: string;
  description: string;
  items: string[];
}) => (
  <div className="rounded-2xl border border-white/30 bg-white/70 backdrop-blur-xl shadow-xl p-8 text-center transition-transform hover:-translate-y-2 hover:shadow-8xl">
    <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
    <div className="text-3xl font-extrabold text-primary my-2">{price}</div>
    <p className="text-muted-foreground mb-4">{description}</p>
    <ul className="text-left text-muted-foreground divide-y divide-border mb-6">
      {items.map((it) => (
        <li key={it} className="py-2">{it}</li>
      ))}
    </ul>
    <Button asChild>
      <Link to="/first-time-patients">Book Now</Link>
    </Button>
  </div>
);

const Telehealth = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-light/60 via-secondary/10 to-brand-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Telehealth Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Virtual consultations and ongoing care management from the comfort of your home with our licensed medical professionals.
          </p>
          <div className="mt-6 inline-flex">
            <Button asChild size="lg">
              <Link to="/first-time-patients">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground">Virtual Healthcare Solutions</h2>
          <p className="mt-3 text-center max-w-3xl mx-auto text-muted-foreground">
            Professional medical consultations and follow-up care delivered through secure, HIPAA-compliant telehealth technology.
          </p>

          <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              title="Virtual Consultations"
              price="$150"
              description="Comprehensive medical consultations with our licensed healthcare providers."
              items={features.consultations}
            />
            <Card
              title="Follow-up Care"
              price="$75"
              description="Ongoing monitoring and support for your wellness journey and treatment progress."
              items={features.followup}
            />
            <Card
              title="Prescription Management"
              price="$50"
              description="Medication reviews, refills, and prescription optimization services."
              items={features.prescriptions}
            />
            <Card
              title="Health Coaching"
              price="$100"
              description="Personalized wellness coaching and lifestyle optimization guidance."
              items={features.coaching}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Telehealth;
