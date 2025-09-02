import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EnhancedServicesSection = () => {
  const serviceCategories = [
    {
      title: "IV Therapy & Hydration",
      description: "Medical-grade hydration and nutrient therapy delivered by licensed professionals",
      icon: "💧",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      services: [
        {
          name: "Energy & Recovery IV",
          description: "B-complex, B12, and essential electrolytes to combat fatigue",
          duration: "45-60 mins",
          price: "Starting at $149"
        },
        {
          name: "Immune Boost IV", 
          description: "High-dose Vitamin C, zinc, and immune-supporting nutrients",
          duration: "30-45 mins",
          price: "Starting at $179"
        },
        {
          name: "Hydration Plus",
          description: "Rapid rehydration with electrolytes and vitamins",
          duration: "30 mins",
          price: "Starting at $99"
        }
      ]
    },
    {
      title: "NAD+ & Peptide Therapy",
      description: "Advanced cellular support and performance optimization treatments",
      icon: "🧬",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      services: [
        {
          name: "NAD+ IV Therapy",
          description: "Cellular repair and anti-aging support",
          duration: "2-4 hours",
          price: "Starting at $299"
        },
        {
          name: "Performance Peptides",
          description: "Targeted peptides for recovery and optimization",
          duration: "Varies",
          price: "Consultation required"
        },
        {
          name: "Longevity Protocol",
          description: "Comprehensive anti-aging and wellness program",
          duration: "Monthly",
          price: "Starting at $499"
        }
      ]
    },
    {
      title: "Weight & Hormone Management", 
      description: "Evidence-based programs for sustainable health and wellness",
      icon: "⚖️",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      services: [
        {
          name: "GLP-1 Weight Management",
          description: "Medically supervised weight loss with GLP-1 medications",
          duration: "12+ weeks",
          price: "Starting at $299/month"
        },
        {
          name: "Hormone Optimization",
          description: "Bioidentical hormone therapy and monitoring",
          duration: "Ongoing",
          price: "Starting at $199/month"
        },
        {
          name: "Metabolic Reset",
          description: "Comprehensive metabolic health assessment and support",
          duration: "8 weeks",
          price: "Starting at $399"
        }
      ]
    },
    {
      title: "Sexual Wellness",
      description: "Discreet, evidence-based treatments for intimate health",
      icon: "❤️",
      bgColor: "bg-rose-50", 
      iconBg: "bg-rose-100",
      services: [
        {
          name: "ED Treatment",
          description: "Comprehensive erectile dysfunction treatment options",
          duration: "Ongoing",
          price: "Starting at $89/month"
        },
        {
          name: "Libido Enhancement",
          description: "Natural and pharmaceutical options for enhanced intimacy",
          duration: "Varies",
          price: "Starting at $129/month"
        },
        {
          name: "Wellness Consultation",
          description: "Private consultation with sexual health specialists",
          duration: "30 mins",
          price: "$99"
        }
      ]
    },
    {
      title: "Telehealth Services",
      description: "Virtual consultations with board-certified providers",
      icon: "📱",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      services: [
        {
          name: "Virtual Consultation",
          description: "Comprehensive health assessment via video call",
          duration: "30-45 mins",
          price: "$149"
        },
        {
          name: "Follow-up Visits",
          description: "Ongoing care and treatment monitoring",
          duration: "15-30 mins", 
          price: "$99"
        },
        {
          name: "Lab Review",
          description: "Professional interpretation of lab results",
          duration: "20 mins",
          price: "$79"
        }
      ]
    },
    {
      title: "Mobile Testing & Labs",
      description: "Convenient at-home collection and comprehensive testing",
      icon: "🔬",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100", 
      services: [
        {
          name: "Comprehensive Health Panel",
          description: "Complete blood work and biomarker analysis",
          duration: "15 mins collection",
          price: "$299"
        },
        {
          name: "Hormone Testing",
          description: "Complete hormone panel with detailed analysis",
          duration: "10 mins collection",
          price: "$199"
        },
        {
          name: "Nutritional Assessment",
          description: "Vitamin and mineral deficiency testing",
          duration: "10 mins collection",
          price: "$149"
        }
      ]
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary text-primary-foreground">
            COMPREHENSIVE CARE
          </Badge>
          <h2 className="font-heading text-4xl sm:text-5xl tracking-tight mb-4">
            Complete Wellness Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From mobile IV therapy to comprehensive telehealth programs, we offer personalized treatments designed to optimize your health and performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <Card key={index} className={`${category.bgColor} border-0 p-8 hover:shadow-xl transition-all duration-300`}>
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl ${category.iconBg} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{service.name}</h4>
                      <span className="text-sm font-medium text-primary">{service.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Duration: {service.duration}</span>
                      <button className="text-sm text-primary hover:text-primary/80 font-medium">
                        Learn More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Service Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Mobile Services</h3>
            <p className="text-muted-foreground text-sm">We come to you - home, office, or hotel across the Phoenix metro</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👩‍⚕️</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Licensed Professionals</h3>
            <p className="text-muted-foreground text-sm">All treatments administered by licensed RNs and supervised by MDs</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🕐</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Same-Day Available</h3>
            <p className="text-muted-foreground text-sm">Book morning for afternoon appointments, 7 days a week</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="font-heading text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a consultation with our medical team to create a personalized wellness plan that fits your lifestyle and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="btn-primary-enhanced">Book Consultation</a>
            <a href="#contact" className="btn-ghost-enhanced">Talk to Provider</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesSection;
