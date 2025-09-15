import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  UserCheck, 
  Truck, 
  Activity,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ProcessVisualization = () => {
  const steps = [
    {
      step: 1,
      icon: Calendar,
      title: "Book Your Appointment",
      description: "Choose your service and schedule a convenient time for your mobile treatment",
      details: [
        "Online booking system",
        "Same-day availability", 
        "Flexible scheduling"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      icon: UserCheck,
      title: "Medical Consultation",
      description: "Licensed medical professional reviews your health history and customizes treatment",
      details: [
        "Licensed medical team",
        "Personalized assessment",
        "Custom treatment plan"
      ],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      step: 3,
      icon: Truck,
      title: "We Come to You",
      description: "Our medical team arrives at your location with all equipment and supplies",
      details: [
        "Mobile service",
        "Professional equipment",
        "Sterile environment"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      step: 4,
      icon: Activity,
      title: "Treatment & Recovery",
      description: "Relax during your treatment and feel the immediate benefits of IV therapy",
      details: [
        "30-60 minute treatment",
        "Comfortable experience",
        "Immediate results"
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From booking to recovery, we've streamlined the process to deliver 
            premium healthcare directly to your door.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              
              {/* Connection Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
              )}
              
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-10">
                <CardContent className="p-6 text-center">
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center mt-4`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>

                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-primary/10 to-brand-teal/10 rounded-3xl border border-primary/20">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground">
                Book your first treatment and experience the difference of mobile IV therapy
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-brand-teal hover:from-primary-hover hover:to-brand-teal/90">
                <Link to="/first-time-patients">
                  Book Your First Treatment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/telehealth">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessVisualization;