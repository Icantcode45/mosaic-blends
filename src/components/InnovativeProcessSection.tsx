import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  UserCheck, 
  Stethoscope, 
  CheckCircle, 
  Clock,
  Shield,
  Star,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    step: "01",
    icon: Calendar,
    title: "Book Online",
    description: "Schedule your appointment through our easy online booking system. Choose your preferred time and location.",
    details: ["Select treatment type", "Pick convenient time", "Choose location", "Instant confirmation"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: "02", 
    icon: UserCheck,
    title: "Medical Assessment",
    description: "Our licensed medical professional conducts a thorough health assessment and consultation.",
    details: ["Health history review", "Treatment customization", "Safety screening", "Goal setting"],
    color: "from-green-500 to-emerald-500"
  },
  {
    step: "03",
    icon: Stethoscope,
    title: "Professional Treatment",
    description: "Receive your personalized IV therapy in the comfort of your chosen location with full medical supervision.",
    details: ["Sterile technique", "Continuous monitoring", "Comfort optimization", "Real-time adjustments"],
    color: "from-purple-500 to-pink-500"
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Follow-Up Care",
    description: "Post-treatment monitoring and personalized recommendations for optimal results and wellness.",
    details: ["Progress tracking", "Wellness tips", "Follow-up scheduling", "24/7 support"],
    color: "from-orange-500 to-red-500"
  }
];

const qualityMetrics = [
  { icon: Shield, label: "100% Licensed", value: "Medical Team" },
  { icon: Clock, label: "Average", value: "45 Minutes" },
  { icon: Star, label: "Client Rating", value: "4.9/5 Stars" },
  { icon: CheckCircle, label: "Success Rate", value: "99% Satisfied" }
];

export default function InnovativeProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <Badge variant="outline" className="mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Mobile IV Therapy Process
          </Badge>
          <h2 className="section-title">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="section-subtitle">
            Our streamlined process ensures you receive professional-grade IV therapy with the highest safety standards, 
            delivered wherever you are most comfortable.
          </p>
        </div>

        {/* Quality Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {qualityMetrics.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-medical border border-gray-100">
              <metric.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-lg font-bold text-gray-900">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500 rounded-full animate-pulse opacity-30"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="service-card text-center relative z-10">
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 mt-4 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Connection Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12">
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Wellness Journey?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Book your first treatment today and experience the convenience of professional IV therapy 
            delivered to your door. Same-day appointments available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cta-button" asChild>
              <Link to="/booking">
                Book Your Treatment
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                Ask Questions
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>✓ Same-day appointments</span>
            <span>✓ Licensed medical team</span>
            <span>✓ Mobile service available</span>
            <span>✓ Insurance accepted*</span>
          </div>
        </div>
      </div>
    </section>
  );
}