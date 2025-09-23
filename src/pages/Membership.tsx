import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import IntakeQWidget from '@/components/IntakeQWidget';
import { Helmet } from 'react-helmet';
import MembershipBookingButton from '@/components/MembershipBookingButton';

const Membership = () => {
  const [activeWidget, setActiveWidget] = useState<string | null>(null);

  const membershipPlans = [
    {
      id: 'shot-pass',
      name: 'Shot Pass',
      price: '$99',
      period: 'per month',
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
      featured: false
    },
    {
      id: 'wellness-explorer',
      name: 'Wellness Explorer',
      price: '$199',
      period: 'per month',
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
      featured: true
    },
    {
      id: 'wellness-elite',
      name: 'Wellness Elite',
      price: '$349',
      period: 'per month',
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
      featured: false
    },
    {
      id: 'wellness-platinum',
      name: 'Wellness Platinum',
      price: '$599',
      period: 'per month',
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
      featured: false
    }
  ];

  const benefits = [
    {
      icon: '$',
      title: 'Significant Savings',
      description: 'Save up to 40% on all treatments and services compared to individual pricing. The more you use, the more you save.'
    },
    {
      icon: '★',
      title: 'Priority Booking',
      description: 'Jump to the front of the line with priority scheduling. Same-day appointments available for members.'
    },
    {
      icon: '♦',
      title: 'Personalized Care',
      description: 'Dedicated wellness consultations and customized treatment plans tailored to your specific health goals.'
    },
    {
      icon: '♠',
      title: 'Exclusive Access',
      description: 'First access to new treatments, member-only events, and special promotions throughout the year.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>VIP Membership Plans Scottsdale | IV Therapy Memberships Phoenix | Unlimited Wellness Arizona</title>
        <meta 
          name="description" 
          content="Join our exclusive VIP wellness membership in Scottsdale. Unlimited IV therapy, vitamin injections, priority booking, 40% savings. Shot Pass, Explorer, Elite & Platinum plans available." 
        />
        <meta name="keywords" content="IV therapy membership Scottsdale, wellness membership Phoenix, VIP health plans Arizona, unlimited IV drips Scottsdale, vitamin injection membership Phoenix, wellness club Arizona, health memberships Scottsdale" />
        <link rel="canonical" href="https://staydrippediv.com/membership" />
      </Helmet>
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-light via-white to-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            VIP Membership Plans
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Join our exclusive membership program and save on premium IV therapy treatments. 
            Enjoy priority booking, special pricing, and unlimited access to wellness services.
          </p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Why Choose Membership?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Experience the ultimate in convenience and savings with our VIP membership benefits designed for your wellness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="text-3xl text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Select the membership plan that best fits your wellness needs and lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipPlans.map((plan, index) => (
              <div 
                key={plan.id} 
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up ${
                  plan.featured 
                    ? 'border-primary shadow-lg scale-105' 
                    : 'border-border hover:border-primary/50'
                }`}
                style={{animationDelay: `${index * 150}ms`}}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-sm text-muted-foreground text-center">{plan.description}</p>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <MembershipBookingButton 
                      membershipName={plan.name}
                      membershipType={plan.id as 'basic' | 'premium' | 'elite' | 'starter'}
                      className={`w-full ${
                        plan.featured 
                          ? 'bg-primary hover:bg-primary-hover text-white' 
                          : 'border border-primary text-primary hover:bg-primary hover:text-white'
                      } transition-all duration-300`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;