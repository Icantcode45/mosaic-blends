import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Link } from "react-router-dom";
const EnhancedMembershipSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  const memberships = [
    {
      name: "Wellness Starter",
      price: { monthly: 0, yearly: 0 },
      popular: false,
      description: "Perfect for trying our services and getting started with wellness.",
      features: [
        "Member-only pricing on all services",
        "Priority booking availability", 
        "Wellness consultation included",
        "Access to educational resources",
        "Mobile app with health tracking",
        "Email support during business hours"
      ],
      limitations: [
        "No included treatments",
        "Standard response time",
        "Basic health assessments only"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline" as const,
      savings: null
    },
    {
      name: "Wellness Pro", 
      price: { monthly: 299, yearly: 239 },
      popular: true,
      description: "Ideal for regular wellness maintenance and preventive care.",
      features: [
        "Everything in Wellness Starter",
        "1 monthly IV treatment included",
        "15% discount on additional services",
        "Quarterly wellness assessments",
        "Priority same-day booking",
        "Telehealth consultations included",
        "Dedicated wellness coordinator",
        "24/7 chat support",
        "Free supplement shipping",
        "Access to member-only events"
      ],
      limitations: [],
      buttonText: "Choose Pro",
      buttonVariant: "default" as const,
      savings: "Save $720/year"
    },
    {
      name: "Wellness Elite",
      price: { monthly: 699, yearly: 559 },
      popular: false, 
      description: "Comprehensive wellness program for optimal health and performance.",
      features: [
        "Everything in Wellness Pro",
        "2 monthly IV treatments included",
        "25% discount on additional services",
        "Monthly telehealth consultations",
        "Advanced lab work included",
        "Personalized supplement protocols",
        "Nutrition counseling sessions",
        "Concierge health management",
        "White-glove service experience",
        "Access to exclusive treatments",
        "Family member discounts",
        "VIP event invitations"
      ],
      limitations: [],
      buttonText: "Go Elite",
      buttonVariant: "outline" as const,
      savings: "Save $1,680/year"
    }
  ];

  const additionalBenefits = [
    {
      icon: "🎯",
      title: "Personalized Care Plans",
      description: "Customized wellness protocols based on your health goals and lifestyle"
    },
    {
      icon: "📱",
      title: "Mobile App Access",
      description: "Track treatments, book appointments, and monitor your wellness journey"
    },
    {
      icon: "🚛",
      title: "Concierge Service",
      description: "Premium members enjoy white-glove service and priority scheduling"
    },
    {
      icon: "💊",
      title: "Supplement Protocols",
      description: "Physician-designed supplement plans delivered to your door"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary text-primary-foreground">
              MEMBERSHIP PLANS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Choose Your Wellness Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              From basic wellness support to comprehensive health optimization, we have a membership plan designed for your lifestyle and goals.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch 
                checked={isYearly} 
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              <Badge variant="secondary" className="bg-success text-success-foreground">
                Save up to 20%
              </Badge>
            </div>
          </div>

          {/* Membership Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {memberships.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative p-8 ${
                  plan.popular 
                    ? 'border-primary border-2 shadow-2xl scale-105 z-10' 
                    : 'border border-border shadow-lg'
                }`}
              >
                {plan.popular && (
                  <Badge 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground"
                  >
                    Most Popular
                  </Badge>
                )}

                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-foreground">
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-muted-foreground text-lg">
                        /{isYearly ? 'month' : 'month'}
                      </span>
                      {isYearly && plan.price.yearly > 0 && (
                        <div className="text-sm text-muted-foreground line-through">
                          ${plan.price.monthly}/month monthly
                        </div>
                      )}
                    </div>
                    {isYearly && plan.savings && (
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        {plan.savings}
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-3 uppercase tracking-wide">
                        Included Features
                      </h4>
                      <div className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-success text-sm">✓</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {plan.limitations.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                          Limitations
                        </h4>
                        <div className="space-y-2">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <div key={limitIndex} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-muted-foreground text-sm">−</span>
                              </div>
                              <span className="text-sm text-muted-foreground">{limitation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <Button 
                    variant={plan.buttonVariant} 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    size="lg"
                    asChild
                  >
                    <Link to="/membership">{plan.buttonText}</Link>
                  </Button>

                  {plan.popular && (
                    <div className="text-center text-xs text-muted-foreground">
                      14-day free trial • Cancel anytime
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>


          {/* FAQ */}
          <div className="bg-muted/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Membership FAQ</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">Can I change my plan anytime?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Yes, you can upgrade or downgrade your membership at any time. Changes take effect on your next billing cycle.
                </p>
                
                <h4 className="font-semibold mb-2">What happens to unused treatments?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Unused monthly treatments roll over for up to 3 months, giving you flexibility in your wellness schedule.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Is there a cancellation fee?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  No cancellation fees. You can cancel your membership anytime with 30 days notice through your member portal.
                </p>
                
                <h4 className="font-semibold mb-2">Do you offer family plans?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Elite members receive family discounts. Contact our team to learn about custom family wellness plans.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link to="/membership">View Complete Terms & Benefits</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedMembershipSection;
