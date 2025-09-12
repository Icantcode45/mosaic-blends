import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import QualiphyWidget from "@/components/QualiphyWidget";
const TelehealthSection = () => {
  const programs = [
    "Weight Management",
    "Hormone Support", 
    "Peptides",
    "Sexual Wellness"
  ];

  return (
    <section id="telehealth" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Telehealth, the modern way
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Board‑certified providers for weight management, hormones, peptides and more—convenient video visits, labs, and refills.
            </p>
            <ul className="mt-6 space-y-3 text-foreground">
              <li className="flex items-center gap-3">
                <img src="/lovable-uploads/de47d2cc-68dc-4581-a47c-598a75979cbe.png" alt="Verified" className="w-6 h-6" />
                Licensed AZ providers
              </li>
              <li className="flex items-center gap-3">
                <img src="/lovable-uploads/de47d2cc-68dc-4581-a47c-598a75979cbe.png" alt="Verified" className="w-6 h-6" />
                Evidence‑based protocols
              </li>
              <li className="flex items-center gap-3">
                <img src="/lovable-uploads/de47d2cc-68dc-4581-a47c-598a75979cbe.png" alt="Verified" className="w-6 h-6" />
                Transparent pricing
              </li>
            </ul>
              <div className="mt-8 flex gap-3">
                <QualiphyWidget />
                <Button variant="outline" size="lg" asChild>
                  <Link to="/first-time-patients">How it works</Link>
                </Button>
              </div>
          </div>
          <Card className="p-6">
            <div className="rounded-2xl bg-muted/30 p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {programs.map((program, index) => (
                  <div key={index} className="p-4 rounded-xl bg-background border border-border">
                    <div className="text-sm text-muted-foreground">Program</div>
                    <div className="font-semibold mt-1 text-foreground">{program}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TelehealthSection;