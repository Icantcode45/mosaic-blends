import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Check, Star, Shield, Clock, Gift, Users, Zap, Heart } from "lucide-react";
import MembershipBookingButton from "@/components/MembershipBookingButton";

const EnhancedMembership = () => {
  const [activeWidget, setActiveWidget] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const membershipPlans = [
    {
      id: 'shot-pass',
      name: 'Shot Pass',
      price: '$99',
      originalPrice: '$160',
      period: 'per month',
      savings: 'Save $61/month',
      description: 'Perfect for those who want regular vitamin shots and energy boosts.',
      features: [
        '4 vitamin injection shots per month',
        'Choice of B12, B-Complex, or Biotin',
        'Priority booking',
        '10% off additional services',
        'Free wellness consultation',
        'Member support hotline'
      ],
      intakeqId: '08549cfc-d53e-4841-9366-d63b9c22251a',
      featured: false,
      icon: <Zap className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'wellness-explorer',
      name: 'Wellness Explorer',
      price: '$199',
      originalPrice: '$360',
      period: 'per month',
      savings: 'Save $161/month',
      description: 'Our most popular plan offering comprehensive wellness support with maximum value.',
      features: [
        '2 IV therapy sessions per month',
        '4 vitamin injection shots per month',
        'All standard IV treatments included',
        'Priority booking & same-day service',
        '20% off additional services',
        'Monthly wellness consultation',
        'VIP member support',
        'Exclusive member events'
      ],
      intakeqId: 'd7b705fd-04b7-4b2e-bda7-950417d6007d',
      featured: true,
      icon: <Star className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'wellness-elite',
      name: 'Wellness Elite',
      price: '$349',
      originalPrice: '$640',
      period: 'per month',
      savings: 'Save $291/month',
      description: 'Elite wellness membership with premium treatments and concierge service.',
      features: [
        '4 IV therapy sessions per month',
        '8 vitamin injection shots per month',
        'All premium treatments included',
        'VIP concierge booking service',
        '30% off all additional services',
        'Bi-weekly wellness consultations',
        'Personal wellness coordinator',
        'Exclusive events & retreats'
      ],
      intakeqId: '1421a50e-d0d0-475f-8713-74b0245bc83f',
      featured: false,
      icon: <Shield className="h-6 w-6" />,
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'wellness-platinum',
      name: 'Wellness Platinum',
      price: '$599',
      originalPrice: '$1200',
      period: 'per month',
      savings: 'Save $601/month',
      description: 'Ultimate wellness membership with unlimited access and premium concierge service.',
      features: [
        'Unlimited IV therapy sessions',
        'Unlimited vitamin injections',
        'All premium treatments included',
        'VIP concierge booking service',
        '40% off all additional services',
        'Weekly wellness consultations',
        'Personal wellness coordinator',
        'Exclusive events & retreats',
        '24/7 emergency service'
      ],
      intakeqId: '23cd9dbe-9135-42eb-9d37-9281cffda0f8',
      featured: false,
      icon: <Heart className="h-6 w-6" />,
      color: 'from-rose-500 to-red-500'
    }
  ];

  const benefits = [
    {
      icon: <Gift className="h-8 w-8" />,
      title: 'Significant Savings',
      description: 'Save up to 50% on all treatments and services compared to individual pricing. The more you use, the more you save.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Priority Booking',
      description: 'Jump to the front of the line with priority scheduling. Same-day appointments available for members.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Personalized Care',
      description: 'Dedicated wellness consultations and customized treatment plans tailored to your specific health goals.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Exclusive Access',
      description: 'First access to new treatments, member-only events, and special promotions throughout the year.',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      plan: "Wellness Explorer",
      quote: "This membership has transformed my wellness routine. I feel more energized and the savings are incredible!",
      rating: 5
    },
    {
      name: "Mike D.",
      plan: "Wellness Elite",
      quote: "The concierge service is amazing. They remember my preferences and always accommodate my busy schedule.",
      rating: 5
    },
    {
      name: "Jennifer L.",
      plan: "Shot Pass",
      quote: "Perfect for my needs. Regular B12 shots keep me going strong throughout the week!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Helmet>
        <title>VIP Membership Plans | Stay Dripped IV & Wellness Co.</title>
        <meta 
          name="description" 
          content="Join our exclusive VIP membership program and save up to 50% on premium IV therapy treatments in Phoenix Metro Area. Unlimited access to wellness services with special member pricing and priority booking." 
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 mb-6 px-4 py-2 text-sm font-semibold animate-fade-in">
              EXCLUSIVE VIP MEMBERSHIP
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 animate-fade-in">
              Transform Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Wellness Journey</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Join our exclusive membership program and save up to 50% on premium IV therapy treatments. 
              Enjoy priority booking, personalized care, and unlimited access to wellness services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                onClick={() => document.getElementById('membership-plans')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Choose Your Plan
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-2 hover:bg-primary/5 transition-all duration-300"
                onClick={() => document.getElementById('membership-benefits')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="membership-benefits" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Membership?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
                Experience the ultimate in convenience and savings with our VIP membership benefits designed for your wellness journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-background/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-500`}></div>
                  
                  <CardHeader className="text-center relative z-10">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="membership-plans" className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Choose Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Perfect Plan</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
                Select the membership plan that best fits your wellness needs and lifestyle. All plans include our satisfaction guarantee.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {membershipPlans.map((plan, index) => (
                <Card 
                  key={plan.id} 
                  className={`group relative bg-background/90 backdrop-blur-sm border-2 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl animate-fade-in hover-scale ${
                    plan.featured 
                      ? 'border-primary/50 shadow-xl shadow-primary/20 scale-105' 
                      : 'border-border/50 hover:border-primary/30'
                  } ${selectedPlan === plan.id ? 'ring-2 ring-primary' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 font-semibold shadow-lg">
                        MOST POPULAR
                      </Badge>
                    </div>
                  )}
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-500`}></div>
                  
                  <CardHeader className="text-center relative z-10 pb-4">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {plan.icon}
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {plan.name}
                    </CardTitle>
                    
                    <div className="mt-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                        <span className="text-muted-foreground line-through text-lg">{plan.originalPrice}</span>
                      </div>
                      <div className="text-muted-foreground text-sm">{plan.period}</div>
                      <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700 font-semibold">
                        {plan.savings}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                      {plan.description}
                    </CardDescription>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <MembershipBookingButton 
                      membershipName={plan.name}
                      membershipType={plan.id as 'basic' | 'premium' | 'elite' | 'starter'}
                      className={`w-full py-3 font-semibold transition-all duration-300 ${
                        plan.featured 
                          ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl' 
                          : 'bg-background border-2 border-primary text-primary hover:bg-primary hover:text-white'
                      }`}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                What Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Members Say</span>
              </h2>
              <p className="text-xl text-muted-foreground animate-fade-in">
                Join thousands of satisfied members who have transformed their wellness journey with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">{testimonial.plan} Member</CardDescription>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Ready to Start Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Wellness Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Join thousands of satisfied members and experience the difference that premium wellness care can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                onClick={() => document.getElementById('membership-plans')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Choose Your Plan
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-2 hover:bg-primary/5 transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedMembership;