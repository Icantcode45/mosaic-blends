import { ArrowRight, Zap, Heart, Shield, Brain, Droplets, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ComprehensiveServicesSection = () => {
  const serviceCategories = [
    {
      icon: Droplets,
      title: "IV Hydration Therapy",
      description: "Premium IV treatments delivered by licensed medical professionals",
      services: ["Myers' Cocktail", "Hydration Plus", "Athletic Recovery", "Immune Boost"],
      color: "from-medical-blue to-medical-teal",
      textColor: "text-white",
      link: "/iv-therapy"
    },
    {
      icon: Brain,
      title: "NAD+ & Peptide Therapy", 
      description: "Advanced anti-aging and cognitive enhancement treatments",
      services: ["NAD+ Infusions", "BPC-157", "Sermorelin", "PT-141"],
      color: "from-medical-purple to-medical-pink",
      textColor: "text-white",
      link: "/nad-peptides"
    },
    {
      icon: Zap,
      title: "Vitamin Injections",
      description: "Quick and effective vitamin delivery for optimal wellness",
      services: ["B12 Energy", "Vitamin D3", "Biotin", "L-Glutathione"],
      color: "from-medical-accent to-medical-secondary",
      textColor: "text-white",
      link: "/vitamin-injections"
    },
    {
      icon: Heart,
      title: "Specialty Treatments",
      description: "Comprehensive wellness solutions for specific health goals",
      services: ["Weight Management", "Sexual Wellness", "Detox Programs", "Beauty Treatments"],
      color: "from-medical-gradient-start to-medical-gradient-end",
      textColor: "text-white",
      link: "/specialty-treatments"
    }
  ];

  const conditions = [
    "Dehydration", "Fatigue", "Hangover Recovery", "Athletic Performance", "Immune Support",
    "Anti-aging", "Cognitive Enhancement", "Weight Management", "Sexual Wellness", "Detoxification",
    "Beauty & Skin Health", "Stress Relief", "Sleep Optimization", "Nutrient Deficiency"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-medical-background to-medical-background/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--medical-blue))_0%,transparent_50%)] opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--medical-purple))_0%,transparent_50%)] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-medical-blue border-medical-blue/20 bg-medical-blue/5">
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Wellness Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-medical-blue via-medical-purple to-medical-teal bg-clip-text text-transparent">
            Advanced Medical Treatments
          </h2>
          <p className="text-xl text-medical-muted max-w-3xl mx-auto leading-relaxed">
            Evidence-based treatments designed to optimize your health and enhance your quality of life
          </p>
        </div>

        {/* Conditions Ticker */}
        <div className="mb-16 overflow-hidden bg-medical-card border border-medical-border rounded-2xl">
          <div className="px-6 py-4 bg-gradient-to-r from-medical-blue/10 to-medical-purple/10 border-b border-medical-border">
            <p className="text-sm font-semibold text-medical-blue text-center">
              Conditions We Treat
            </p>
          </div>
          <div className="py-4">
            <div className="flex animate-scroll">
              {[...conditions, ...conditions].map((condition, index) => (
                <div key={index} className="flex-shrink-0 mx-6">
                  <span className="text-sm text-medical-muted font-medium whitespace-nowrap">
                    {condition}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-medical-card border border-medical-border rounded-3xl overflow-hidden hover:border-medical-blue/50 transition-all duration-500 hover:shadow-[0_20px_40px_-12px_hsl(var(--medical-blue))_/_0.25] hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-medical-muted group-hover:text-white transition-colors duration-300 group-hover:translate-x-1 transform" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-medical-text group-hover:text-white transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-medical-muted group-hover:text-white/90 transition-colors duration-300 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2 mb-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-medical-blue group-hover:bg-white transition-colors duration-300 mr-3" />
                      <span className="text-sm text-medical-muted group-hover:text-white/90 transition-colors duration-300">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  className="w-full border-medical-border group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-medical-blue to-medical-purple rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Wellness Journey?
          </h3>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Schedule a free consultation with our medical team to create your personalized treatment plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-medical-blue hover:bg-white/90 border-0">
              <Shield className="w-5 h-5 mr-2" />
              Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServicesSection;