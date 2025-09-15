import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding-medical bg-white">
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
                icon: "/lovable-uploads/5e166b5e-d73a-4a58-8f6c-b653d9ebb5b1.png",
                href: "/iv-therapy"
              },
              {
                title: "Vitamin Injections", 
                description: "Quick nutrient boost",
                icon: "/lovable-uploads/ab3d275e-f410-4e17-a882-c49f89b1c4d2.png",
                href: "/vitamin-injections"
              },
              {
                title: "NAD+ Therapy",
                description: "Cellular support and longevity",
                icon: "/lovable-uploads/a0611a04-5ce8-48f5-af4b-e3dd5916fcf5.png",
                href: "/nad-peptides"
              },
              {
                title: "Mobile Testing",
                description: "Lab work at your location",
                icon: "/lovable-uploads/6ffc838e-d9fd-4897-bac2-cfcdc2fb1373.png",
                href: "/mobile-testing-kits"
              }
            ].map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="card-medical p-8 text-center hover-lift-medical group"
              >
                <div className="mb-4">
                  <img src={service.icon} alt="" className="w-12 h-12 mx-auto object-contain" />
                </div>
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
            <Button asChild size="lg" variant="medical-outline">
              <Link to="/first-time-patients">View all treatments</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
