import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  UserCheck, 
  MapPin, 
  Stethoscope,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  Phone,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

const EnhancedProcessFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: Calendar,
      title: "Schedule Your Appointment",
      subtitle: "Book online in 60 seconds",
      description: "Choose your preferred treatment and select a convenient time slot. Our scheduling system is available 24/7 with same-day appointments often available.",
      details: [
        "Online booking system",
        "Same-day availability",
        "Flexible scheduling",
        "Confirmation & reminders"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      duration: "2 minutes"
    },
    {
      icon: UserCheck,
      title: "Medical Consultation", 
      subtitle: "Licensed professional review",
      description: "Our medical team reviews your health history and treatment goals to ensure the best possible care and customize your treatment plan.",
      details: [
        "Health assessment",
        "Treatment customization", 
        "Medical clearance",
        "Personalized recommendations"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50", 
      duration: "15 minutes"
    },
    {
      icon: MapPin,
      title: "We Come to You",
      subtitle: "Professional mobile service",
      description: "Our licensed medical professionals arrive at your location with all necessary equipment and supplies for a comfortable, professional treatment experience.",
      details: [
        "Mobile medical unit",
        "Professional equipment",
        "Licensed medical team", 
        "Sterile environment setup"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      duration: "On-time arrival"
    },
    {
      icon: Stethoscope,
      title: "Professional Treatment",
      subtitle: "Relax while we care for you",
      description: "Receive your personalized IV therapy in comfort while our medical professionals monitor your treatment and ensure your safety and comfort.",
      details: [
        "Comfortable treatment setup",
        "Professional monitoring",
        "Safety protocols",
        "Post-treatment care"
      ],
      color: "from-purple-500 to-indigo-500", 
      bgColor: "bg-purple-50",
      duration: "30-60 minutes"
    }
  ];

  const currentStep = steps[activeStep];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">
            <Shield className="w-4 h-4 mr-2" />
            Simple & Professional Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works: From{" "}
            <span className="bg-gradient-to-r from-primary to-brand-teal bg-clip-text text-transparent">
              Booking to Treatment
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures you receive professional medical care with maximum convenience. 
            From booking to treatment, we handle everything.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Process Steps Navigation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">Your Treatment Journey</h3>
            
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeStep === index
                    ? `${step.bgColor} border-2 border-primary shadow-glow-primary`
                    : 'bg-background border border-border/50 hover:border-border hover:bg-muted/30 shadow-subtle'
                }`}
                onClick={() => setActiveStep(index)}
              >
                
                {/* Step connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-9 top-20 w-0.5 h-12 bg-border/30"></div>
                )}

                <div className="flex items-start gap-4">
                  <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-6 h-6 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {step.duration}
                      </Badge>
                    </div>
                    <p className="text-sm text-primary font-medium mb-2">{step.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{step.description.slice(0, 120)}...</p>
                  </div>

                  <ArrowRight className={`w-5 h-5 text-muted-foreground transition-all duration-300 ${
                    activeStep === index ? 'text-primary rotate-90' : ''
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className={`relative rounded-3xl p-8 ${currentStep.bgColor} border border-border/20 shadow-premium`}>
              
              {/* Visual Representation */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-white/50 to-transparent rounded-2xl mb-8 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${currentStep.color} flex items-center justify-center shadow-premium animate-pulse-soft`}>
                    <currentStep.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Step indicator */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg text-foreground">
                  {activeStep + 1}
                </div>
                
                {/* Duration badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-foreground">
                  {currentStep.duration}
                </div>
              </div>

              {/* Step Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{currentStep.title}</h3>
                  <p className="text-primary font-medium mb-3">{currentStep.subtitle}</p>
                  <p className="text-muted-foreground">{currentStep.description}</p>
                </div>

                {/* Feature List */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentStep.details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 flex gap-4">
              <Button className="flex-1 bg-primary hover:bg-primary-hover text-white" asChild>
                <Link to="/first-time-patients">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              
              <Button variant="outline" className="flex-1 border-primary/30 hover:border-primary/50">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 border border-border/20">
          <MessageSquare className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Have Questions About the Process?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our medical team is available to answer any questions about our treatments, 
            process, or to help you choose the right therapy for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white" asChild>
              <Link to="/contact">
                Ask Our Medical Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+1-602-688-9825">Call (602) 688-9825</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedProcessFlow;