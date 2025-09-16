import { Badge } from "@/components/ui/badge";
import { Calendar, UserCheck, Stethoscope, CheckCircle2, Clock, MapPin } from "lucide-react";

const ProcessStepsSection = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Book Your Appointment",
      description: "Schedule online or call us. Choose your preferred time and location - we come to you.",
      details: ["Online booking available", "Flexible scheduling", "Same-day appointments", "7 days a week"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: UserCheck,
      title: "Medical Consultation",
      description: "Our licensed medical professional conducts a thorough health assessment and consultation.",
      details: ["Health history review", "Symptom assessment", "Treatment recommendations", "Safety screening"],
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Stethoscope,
      title: "Professional Treatment",
      description: "Receive your customized IV therapy in comfort with continuous monitoring throughout.",
      details: ["Sterile procedure", "Comfortable setting", "Continuous monitoring", "Professional administration"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: CheckCircle2,
      title: "Follow-Up Care",
      description: "We ensure your complete satisfaction and provide ongoing support for optimal results.",
      details: ["Post-treatment check", "Side effect monitoring", "Results tracking", "Ongoing support"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  const quickFacts = [
    { icon: Clock, label: "Treatment Time", value: "30-45 minutes" },
    { icon: MapPin, label: "Service Area", value: "Throughout Arizona" },
    { icon: UserCheck, label: "Licensed Staff", value: "100% Medical Professionals" },
    { icon: CheckCircle2, label: "Success Rate", value: "99.8% Satisfaction" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-6 px-4 py-2 text-sm font-semibold">
              SIMPLE & PROFESSIONAL
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medical">
              Our streamlined process ensures you receive the highest quality mobile IV therapy with complete safety and professionalism.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0 transform translate-x-4"></div>
                )}

                {/* Step Card */}
                <div className="medical-card p-8 text-center relative z-10 h-full">
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground font-heading mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-medical">{step.description}</p>
                    
                    {/* Details */}
                    <div className="space-y-2 pt-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full ${step.color.replace('text-', 'bg-')}`}></div>
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Facts */}
          <div className="bg-gradient-to-r from-primary/5 via-background to-secondary/5 rounded-3xl border border-border/50 p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
                Treatment at a Glance
              </h3>
              <p className="text-muted-foreground font-medical">
                Everything you need to know about our professional mobile IV therapy service.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {quickFacts.map((fact, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-background/80 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300 group"
                >
                  <fact.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-lg font-bold text-foreground mb-2">{fact.value}</div>
                  <div className="text-sm text-muted-foreground">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessStepsSection;