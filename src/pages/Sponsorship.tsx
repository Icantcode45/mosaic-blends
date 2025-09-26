import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";
import { Star, Users, Trophy, Handshake, ArrowRight, CheckCircle, Globe, TrendingUp } from "lucide-react";

const Sponsorship = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    partnershipType: "",
    industry: "",
    website: "",
    instagram: "",
    followers: "",
    audience: "",
    experience: "",
    proposal: "",
    additionalInfo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.partnershipType) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Partnership inquiry submitted successfully
    toast({
      title: "Partnership Inquiry Submitted!",
      description: "Our team will review your application and contact you within 2-3 business days.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      partnershipType: "",
      industry: "",
      website: "",
      instagram: "",
      followers: "",
      audience: "",
      experience: "",
      proposal: "",
      additionalInfo: "",
    });
  };

  const partnershipTypes = [
    {
      icon: Star,
      title: "Brand Ambassador Program",
      description: "Join our exclusive ambassador network and receive complimentary treatments, exclusive discounts, and earn commissions for referrals.",
      benefits: ["Complimentary treatments", "Exclusive discounts", "Commission structure", "Priority support"],
      ideal: "Influencers, fitness professionals, wellness enthusiasts"
    },
    {
      icon: Trophy,
      title: "Corporate Sponsorship",
      description: "Partner with us to sponsor events, wellness programs, or community initiatives with various sponsorship packages.",
      benefits: ["Brand visibility", "Event partnerships", "Community impact", "Marketing collaboration"],
      ideal: "Established businesses, healthcare companies, wellness brands"
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Explore cross-promotional opportunities, joint ventures, and collaborative wellness programs that benefit both communities.",
      benefits: ["Cross-promotion", "Joint marketing", "Shared resources", "Market expansion"],
      ideal: "Complementary businesses, wellness centers, healthcare providers"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Monthly Clients Served" },
    { icon: Globe, value: "15+", label: "Cities Covered" },
    { icon: TrendingUp, value: "98%", label: "Customer Satisfaction" },
    { icon: Trophy, value: "25+", label: "Brand Partners" }
  ];

  return (
    <>
      <Helmet>
        <title>Brand Ambassador & Partnership Program | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Join our brand ambassador program and explore partnership opportunities with Stay Dripped IV & Wellness Co. in Scottsdale, AZ. Earn commissions, get exclusive benefits, and grow with Arizona's premier IV therapy company." />
        <meta name="keywords" content="brand ambassador program, IV therapy partnership, wellness brand ambassador, Scottsdale partnerships, health influencer program, medical wellness collaboration" />
        <link rel="canonical" href="https://staydrippediv.com/sponsorship" />
        
        <meta property="og:title" content="Brand Ambassador & Partnership Program | Stay Dripped IV" />
        <meta property="og:description" content="Join our exclusive brand ambassador program. Earn commissions, get complimentary treatments, and partner with Arizona's leading IV therapy company." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://staydrippediv.com/sponsorship" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/20 to-background">
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-2xl animate-bounce-soft" />
          
          <div className="container relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center space-y-8 animate-fade-up">
              {/* Premium Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                Elite Partnership Program
              </div>
              
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary-600 to-primary-700 bg-clip-text text-transparent leading-tight">
                  Partner with Arizona's
                  <br />
                  <span className="text-foreground">Premier IV Therapy</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                  Join our exclusive network of brand ambassadors and strategic partners. 
                  Earn commissions, access premium benefits, and grow alongside the Southwest's leading mobile wellness company.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-glow-primary hover:shadow-premium transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 text-lg font-semibold border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  onClick={() => document.getElementById('partnership-types')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background/80 backdrop-blur-sm border-y border-border/50">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-3 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types Section */}
        <section id="partnership-types" className="py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 animate-fade-up">
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Partnership <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">Opportunities</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Choose from our flexible partnership programs designed to maximize value for both parties and create lasting success.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <div 
                  key={index} 
                  className="group relative glass-medical p-8 animate-fade-up hover-scale"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-6">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl shadow-glow-primary">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {type.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                    
                    {/* Benefits */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Key Benefits</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Ideal For */}
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-primary">Ideal for:</span> {type.ideal}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Enhanced Partnership Form */}
        <section id="partnership-form" className="py-24 bg-gradient-to-br from-muted/10 to-background">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">Partner</span> with Us?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Submit your partnership application and join Arizona's most trusted mobile IV therapy network.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="glass-medical p-8 lg:p-12 animate-fade-up">
              {/* Personal Information Section */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">1</div>
                  <h3 className="text-2xl font-bold text-foreground">Personal Information</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block font-semibold text-foreground text-sm">
                      First Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="input-medical"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block font-semibold text-foreground text-sm">
                      Last Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="input-medical"
                      placeholder="Enter your last name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-semibold text-foreground text-sm">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-medical"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-semibold text-foreground text-sm">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="input-medical"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Business Information Section */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">2</div>
                  <h3 className="text-2xl font-bold text-foreground">Business & Partnership Details</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block font-semibold text-foreground text-sm">
                      Company/Brand Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="input-medical"
                      placeholder="Your business or personal brand"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="partnershipType" className="block font-semibold text-foreground text-sm">
                      Partnership Interest <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                      required
                      className="input-medical"
                    >
                      <option value="">Select Partnership Type</option>
                      <option value="brand-ambassador">Brand Ambassador Program</option>
                      <option value="influencer-collaboration">Influencer Collaboration</option>
                      <option value="corporate-sponsorship">Corporate Sponsorship</option>
                      <option value="event-sponsorship">Event Sponsorship</option>
                      <option value="cross-promotion">Cross-Promotion</option>
                      <option value="affiliate-program">Affiliate Program</option>
                      <option value="wellness-partnership">Wellness Center Partnership</option>
                      <option value="other">Other Partnership</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="industry" className="block font-semibold text-foreground text-sm">
                      Industry/Niche
                    </label>
                    <input
                      type="text"
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      placeholder="Fitness, Beauty, Wellness, Healthcare, etc."
                      className="input-medical"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="website" className="block font-semibold text-foreground text-sm">
                      Website/Portfolio
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourwebsite.com"
                      className="input-medical"
                    />
                  </div>
                </div>
              </div>

              {/* Social Media & Audience Section */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">3</div>
                  <h3 className="text-2xl font-bold text-foreground">Social Media & Audience</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="instagram" className="block font-semibold text-foreground text-sm">
                      Instagram Handle
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleInputChange}
                      placeholder="@yourusername"
                      className="input-medical"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="followers" className="block font-semibold text-foreground text-sm">
                      Social Media Following
                    </label>
                    <select
                      id="followers"
                      name="followers"
                      value={formData.followers}
                      onChange={handleInputChange}
                      className="input-medical"
                    >
                      <option value="">Select Range</option>
                      <option value="under-1k">Under 1,000</option>
                      <option value="1k-5k">1,000 - 5,000</option>
                      <option value="5k-10k">5,000 - 10,000</option>
                      <option value="10k-50k">10,000 - 50,000</option>
                      <option value="50k-100k">50,000 - 100,000</option>
                      <option value="100k+">100,000+</option>
                      <option value="not-applicable">Not Applicable</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="audience" className="block font-semibold text-foreground text-sm">
                    Target Audience Description
                  </label>
                  <input
                    type="text"
                    id="audience"
                    name="audience"
                    value={formData.audience}
                    onChange={handleInputChange}
                    placeholder="Health-conscious professionals, Athletes, Wellness enthusiasts, etc."
                    className="input-medical"
                  />
                </div>
              </div>

              {/* Partnership Proposal Section */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">4</div>
                  <h3 className="text-2xl font-bold text-foreground">Partnership Proposal</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="experience" className="block font-semibold text-foreground text-sm">
                      Relevant Experience & Background
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Tell us about your experience with wellness brands, previous partnerships, or relevant background that makes you a great fit for our brand."
                      rows={4}
                      className="input-medical resize-vertical"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="proposal" className="block font-semibold text-foreground text-sm">
                      Partnership Vision & Ideas
                    </label>
                    <textarea
                      id="proposal"
                      name="proposal"
                      value={formData.proposal}
                      onChange={handleInputChange}
                      placeholder="Describe your partnership ideas, how you'd like to collaborate with us, what value you can bring, and what you're hoping to achieve through this partnership."
                      rows={4}
                      className="input-medical resize-vertical"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="additionalInfo" className="block font-semibold text-foreground text-sm">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Any additional information, questions, or special requirements you'd like us to know about."
                      rows={3}
                      className="input-medical resize-vertical"
                    />
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="text-center pt-8 border-t border-border/50">
                <Button 
                  type="submit" 
                  size="lg"
                  className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-glow-primary hover:shadow-premium transition-all duration-300 hover:scale-105"
                >
                  Submit Partnership Application
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Our partnership team will review your application and respond within 2-3 business days.
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sponsorship;