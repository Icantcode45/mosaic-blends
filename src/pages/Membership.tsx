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
    <div className="membership-page">
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
      <section className="membership-hero">
        <div className="container mx-auto px-6">
          <h1 className="membership-title">VIP Membership Plans</h1>
          <p className="membership-subtitle">
            Join our exclusive membership program and save on premium IV therapy treatments. 
            Enjoy priority booking, special pricing, and unlimited access to wellness services.
          </p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="membership-benefits">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Why Choose Membership?</h2>
          <p className="section-description">
            Experience the ultimate in convenience and savings with our VIP membership benefits designed for your wellness journey.
          </p>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="membership-plans">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-description">
            Select the membership plan that best fits your wellness needs and lifestyle.
          </p>
          
          <div className="plans-grid">
            {membershipPlans.map((plan) => (
              <div key={plan.id} className={`plan-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <div className="featured-badge">MOST POPULAR</div>}
                
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">{plan.price}</div>
                  <div className="plan-period">{plan.period}</div>
                </div>
                
                <div className="plan-content">
                  <p className="plan-description">{plan.description}</p>
                  
                  <ul className="plan-features">
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <MembershipBookingButton 
                    membershipName={plan.name}
                    membershipType={plan.id as 'basic' | 'premium' | 'elite' | 'starter'}
                  />
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