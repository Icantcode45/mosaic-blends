import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnhancedServicesSection = () => {
  const serviceCategories = [
    {
      title: "IV Therapy Treatments",
      description: "Physician-supervised intravenous nutrient therapy and hydration treatments",
      icon: "/lovable-uploads/5e166b5e-d73a-4a58-8f6c-b653d9ebb5b1.png",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      services: [
        {
          name: "Energy & Performance IV",
          description: "B-complex vitamins, B12, and electrolytes for wellness support",
          duration: "45-60 mins",
          price: "Starting at $149",
          note: "Medical evaluation required"
        },
        {
          name: "Immune Support IV", 
          description: "High-dose Vitamin C and zinc for immune system wellness",
          duration: "30-45 mins",
          price: "Starting at $179",
          note: "Physician-supervised"
        },
        {
          name: "Hydration Plus",
          description: "Rapid rehydration with electrolytes and essential vitamins",
          duration: "30 mins",
          price: "Starting at $99",
          note: "Licensed provider administered"
        }
      ]
    },
    {
      title: "Injectable Vitamin Therapies",
      description: "Targeted vitamin and nutrient injections administered by healthcare professionals",
      icon: "/lovable-uploads/ab3d275e-f410-4e17-a882-c49f89b1c4d2.png",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      services: [
        {
          name: "B12 Injection",
          description: "Vitamin B12 injection for energy and wellness support",
          duration: "5 mins",
          price: "Starting at $39",
          note: "Medical supervision required"
        },
        {
          name: "Biotin Injection",
          description: "Biotin injection for hair, skin, and nail wellness",
          duration: "5 mins",
          price: "Starting at $49",
          note: "Healthcare provider administered"
        },
        {
          name: "Glutathione Injection",
          description: "Antioxidant injection for cellular wellness support",
          duration: "5 mins",
          price: "Starting at $59",
          note: "Prescription required"
        }
      ]
    },
    {
      title: "Physician-Supervised Peptide Programs",
      description: "Prescription-based peptide programs available after telehealth evaluation and medical approval",
      icon: "/lovable-uploads/a0611a04-5ce8-48f5-af4b-e3dd5916fcf5.png",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      compliance: "All peptide programs require physician prescription and are not for unsupervised use",
      services: [
        {
          name: "Joint & Tissue Support",
          description: "Peptide programs available after telehealth approval for wellness support in joint and tissue areas",
          duration: "Varies by protocol",
          price: "Consultation required",
          note: "Prescription and medical supervision required"
        },
        {
          name: "Weight Management Support",
          description: "Physician-supervised peptide programs for weight management wellness goals",
          duration: "12+ weeks typically",
          price: "Starting at $299/month",
          note: "Telehealth evaluation and prescription required"
        },
        {
          name: "Performance & Recovery",
          description: "Peptide programs for performance and recovery wellness areas after medical approval",
          duration: "Varies by protocol",
          price: "Consultation required",
          note: "Licensed provider supervision mandatory"
        }
      ]
    },
    {
      title: "Membership Plans",
      description: "Comprehensive wellness programs with ongoing medical supervision and support",
      icon: "/lovable-uploads/335fb85f-581d-43bb-9dab-00583c6b2e9e.png",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100",
      services: [
        {
          name: "Wellness Starter",
          description: "Basic membership with member pricing and priority booking",
          duration: "Monthly",
          price: "Free",
          note: "Medical evaluation included"
        },
        {
          name: "Wellness Pro",
          description: "Monthly IV treatment included plus wellness coordination",
          duration: "Monthly",
          price: "Starting at $299/month",
          note: "Ongoing medical supervision"
        },
        {
          name: "Wellness Elite",
          description: "Comprehensive wellness program with multiple treatments and concierge service",
          duration: "Monthly",
          price: "Starting at $699/month",
          note: "Dedicated medical team"
        }
      ]
    },
    {
      title: "Telehealth Services",
      description: "Virtual consultations with board-certified healthcare providers",
      icon: "/lovable-uploads/7b84226a-c816-411c-9f4e-373be221089d.png",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      services: [
        {
          name: "Medical Consultation",
          description: "Comprehensive health assessment and treatment planning",
          duration: "30-45 mins",
          price: "$149",
          note: "Licensed provider evaluation"
        },
        {
          name: "Follow-up Visits",
          description: "Ongoing care monitoring and treatment adjustments",
          duration: "15-30 mins", 
          price: "$99",
          note: "Prescription management included"
        },
        {
          name: "Lab Review & Consultation",
          description: "Professional interpretation and wellness planning",
          duration: "20 mins",
          price: "$79",
          note: "Medical provider guidance"
        }
      ]
    },
    {
      title: "Mobile Testing & Labs",
      description: "Convenient at-home collection and comprehensive health assessments",
      icon: "/lovable-uploads/6ffc838e-d9fd-4897-bac2-cfcdc2fb1373.png",
      bgColor: "bg-rose-50",
      iconBg: "bg-rose-100", 
      services: [
        {
          name: "Comprehensive Health Panel",
          description: "Complete blood work and biomarker analysis for wellness planning",
          duration: "15 mins collection",
          price: "$299",
          note: "Provider interpretation included"
        },
        {
          name: "Hormone Assessment",
          description: "Hormone panel with medical analysis and recommendations",
          duration: "10 mins collection",
          price: "$199",
          note: "Medical consultation included"
        },
        {
          name: "Nutritional Assessment",
          description: "Vitamin and mineral analysis for wellness optimization",
          duration: "10 mins collection",
          price: "$149",
          note: "Healthcare provider review"
        }
      ]
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary text-primary-foreground">
            PHYSICIAN-SUPERVISED WELLNESS
          </Badge>
          <h2 className="font-heading text-4xl sm:text-5xl tracking-tight mb-4">
            Comprehensive Medical Wellness Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Physician-supervised treatments and wellness programs designed for prevention, performance, and optimal health. All services require medical evaluation and approval.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <Card key={index} className={`${category.bgColor} border-0 p-8 hover:shadow-xl transition-all duration-300`}>
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl ${category.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <img src={category.icon} alt="" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                  {category.compliance && (
                    <div className="mt-2 p-2 bg-yellow-100 border-l-4 border-yellow-400 rounded">
                      <p className="text-sm font-medium text-yellow-800">{category.compliance}</p>
                    </div>
                  )}
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
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-muted-foreground">Duration: {service.duration}</span>
                    </div>
                    {service.note && (
                      <div className="text-xs text-blue-600 font-medium bg-blue-50 p-2 rounded">
                        {service.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>


        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="font-heading text-2xl font-bold mb-4">Ready to Start Your Medical Evaluation?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a telehealth consultation with our licensed medical team to determine which physician-supervised treatments are appropriate for your wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary-enhanced" asChild>
              <Link to="/first-time-patients">Book Consultation</Link>
            </Button>
            <Button variant="outline" className="btn-ghost-enhanced" asChild>
              <Link to="/contact">Talk to Provider</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesSection;
