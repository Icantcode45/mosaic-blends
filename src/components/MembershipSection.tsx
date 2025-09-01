import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const MembershipSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  const memberships = [
    {
      name: "Starter",
      price: 0,
      period: "year",
      description: "Wellness basics and member perks.",
      features: [
        "Member-only promos",
        "Priority support"
      ],
      buttonText: "Join Free",
      buttonVariant: "outline" as const
    },
    {
      name: "Basic", 
      price: 299,
      period: "year",
      description: "Recovery and immunity, delivered on your schedule.",
      features: [
        "Discounted IVs & injections",
        "Priority booking", 
        "Exclusive add-on pricing"
      ],
      buttonText: "Get Started",
      buttonVariant: "default" as const,
      highlighted: true
    },
    {
      name: "Pro",
      price: 699,
      period: "year", 
      description: "For athletes & frequent travelers.",
      features: [
        "Monthly IV credit",
        "At-home lab options",
        "Concierge scheduling"
      ],
      buttonText: "Talk to Us",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Memberships
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-muted-foreground">Monthly</span>
              <Switch 
                checked={isYearly} 
                onCheckedChange={setIsYearly}
              />
              <span className="text-foreground">Yearly</span>
              <Badge variant="secondary" className="bg-success text-success-foreground">
                Save 20%
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {memberships.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 ${plan.highlighted ? 'border-primary border-2' : ''}`}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {plan.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-4xl font-bold text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-muted-foreground">
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;