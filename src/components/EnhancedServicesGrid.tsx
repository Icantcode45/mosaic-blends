import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Droplets, 
  Syringe, 
  Dna, 
  Microscope, 
  Phone, 
  FlaskConical,
  ArrowRight,
  Star,
  Clock,
  MapPin
} from "lucide-react";

const EnhancedServicesGrid = () => {
  const services = [
    {
      icon: Droplets,
      title: "IV Hydration Therapy",
      description: "Premium IV drips for hydration, recovery, and wellness delivered to your location",
      features: ["15+ IV Formulations", "Licensed Medical Team", "Same-Day Service"],
      gradient: "from-blue-500 to-cyan-500",
      href: "/iv-therapy",
      popular: true,
      price: "Starting at $149"
    },
    {
      icon: Syringe,
      title: "Vitamin Injections",
      description: "Quick and effective vitamin and mineral injections for energy and wellness",
      features: ["B12, B-Complex, Biotin", "Quick 5-Min Treatment", "Mobile Service"],
      gradient: "from-orange-500 to-red-500",
      href: "/vitamin-injections",
      price: "Starting at $35"
    },
    {
      icon: Dna,
      title: "NAD+ Therapy",
      description: "Advanced cellular regeneration therapy for anti-aging and mental clarity",
      features: ["Cellular Regeneration", "Anti-Aging Benefits", "Cognitive Enhancement"],
      gradient: "from-purple-500 to-indigo-500",
      href: "/nad-peptides",
      price: "Starting at $299"
    },
    {
      icon: Microscope,
      title: "Peptide Therapy",
      description: "Cutting-edge peptide treatments for healing, recovery, and optimization",
      features: ["BPC-157, CJC-1295", "Healing & Recovery", "Personalized Protocols"],
      gradient: "from-green-500 to-emerald-500",
      href: "/nad-peptides",
      price: "Starting at $199"
    },
    {
      icon: Phone,
      title: "Telehealth Consultations",
      description: "Virtual consultations with licensed medical professionals",
      features: ["Licensed Providers", "Same-Day Appointments", "Prescription Services"],
      gradient: "from-teal-500 to-blue-500",
      href: "/telehealth",
      price: "Starting at $99"
    },
    {
      icon: FlaskConical,
      title: "At-Home Lab Testing",
      description: "Comprehensive lab panels and health assessments from home",
      features: ["Comprehensive Panels", "At-Home Collection", "Fast Results"],
      gradient: "from-pink-500 to-rose-500",
      href: "/test-kits",
      price: "Starting at $129"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Award-Winning Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Personalized wellness treatments
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Licensed medical professionals deliver customized IV therapy, vitamin injections, 
            and wellness treatments directly to you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <CardHeader className="relative p-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative p-6 pt-0">
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-foreground">{service.price}</span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Mobile Service
                  </div>
                </div>

                {/* CTA */}
                <Button asChild className="w-full group">
                  <Link to={service.href}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-brand-teal/10 rounded-2xl border border-primary/20">
            <Clock className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">Same-day appointments available</span>
            <Button asChild size="lg">
              <Link to="/first-time-patients">Book Now</Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EnhancedServicesGrid;