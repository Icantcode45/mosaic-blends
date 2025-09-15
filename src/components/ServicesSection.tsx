import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding-medical bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Personalized wellness treatments
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Licensed medical professionals deliver customized IV therapy, vitamin injections, and wellness treatments directly to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              {
                title: "IV Hydration",
                description: "Rapid hydration and recovery",
                icon: "💧",
                href: "/iv-therapy"
              },
              {
                title: "Vitamin Injections", 
                description: "Quick nutrient boost",
                icon: "💉",
                href: "/vitamin-injections"
              },
              {
                title: "NAD+ Therapy",
                description: "Cellular support and longevity",
                icon: "🧬",
                href: "/nad-peptides"
              },
              {
                title: "Mobile Testing",
                description: "Lab work at your location",
                icon: "🔬",
                href: "/mobile-testing-kits"
              }
            ].map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="card-medical p-8 text-center hover-lift-medical group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="pt-8">
            <Button asChild size="lg" variant="outline">
              <Link to="/first-time-patients">View all treatments</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
