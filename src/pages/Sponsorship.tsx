import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

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

    console.log('Partnership inquiry submitted:', formData);
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

  return (
    <>
      <Helmet>
        <title>Brand Ambassador & Partnership | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Join our brand ambassador program and explore partnership opportunities with Stay Dripped IV & Wellness Co. in Scottsdale, AZ." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-muted/50 to-primary/5 py-20 lg:py-32">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
              Brand Ambassador & Partnership Program
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our wellness community and explore partnership opportunities with Arizona's premier IV therapy company.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 text-foreground">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              We're always looking for like-minded individuals and businesses to partner with in promoting wellness and healthy lifestyles.
            </p>
            
            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="card p-8 text-center glass-medical">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Brand Ambassador Program
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join our exclusive brand ambassador program and receive complimentary treatments, exclusive discounts, and earn commissions for referrals. Perfect for influencers, fitness professionals, and wellness enthusiasts.
                </p>
              </div>
              
              <div className="card p-8 text-center glass-medical">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Corporate Sponsorship
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Partner with us to sponsor events, wellness programs, or community initiatives. We offer various sponsorship packages to increase your brand visibility while supporting community wellness.
                </p>
              </div>
              
              <div className="card p-8 text-center glass-medical">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Collaboration Opportunities
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explore cross-promotional opportunities, joint events, and collaborative wellness programs that benefit both our communities and create lasting partnerships.
                </p>
              </div>
            </div>
            
            {/* Partnership Form */}
            <form onSubmit={handleSubmit} className="card glass-medical p-8 lg:p-16 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block font-semibold mb-2 text-foreground">
                    First Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="input-medical w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block font-semibold mb-2 text-foreground">
                    Last Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="input-medical w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-semibold mb-2 text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-medical w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block font-semibold mb-2 text-foreground">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="input-medical w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block font-semibold mb-2 text-foreground">
                    Company/Brand Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="input-medical w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="partnershipType" className="block font-semibold mb-2 text-foreground">
                    Partnership Interest <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    required
                    className="input-medical w-full"
                  >
                    <option value="">Select Type</option>
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
              </div>

              <div className="mb-6">
                <label htmlFor="industry" className="block font-semibold mb-2 text-foreground">
                  Industry/Niche
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="e.g., Fitness, Beauty, Wellness, Healthcare, etc."
                  className="input-medical w-full"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="website" className="block font-semibold mb-2 text-foreground">
                    Website/Portfolio
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://yourwebsite.com"
                    className="input-medical w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="instagram" className="block font-semibold mb-2 text-foreground">
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleInputChange}
                    placeholder="@yourusername"
                    className="input-medical w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="followers" className="block font-semibold mb-2 text-foreground">
                    Social Media Following
                  </label>
                  <select
                    id="followers"
                    name="followers"
                    value={formData.followers}
                    onChange={handleInputChange}
                    className="input-medical w-full"
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
                
                <div>
                  <label htmlFor="audience" className="block font-semibold mb-2 text-foreground">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    id="audience"
                    name="audience"
                    value={formData.audience}
                    onChange={handleInputChange}
                    placeholder="e.g., Health-conscious professionals, Athletes, etc."
                    className="input-medical w-full"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="experience" className="block font-semibold mb-2 text-foreground">
                  Relevant Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Tell us about your experience with wellness brands, previous partnerships, or relevant background that makes you a great fit for our brand."
                  rows={4}
                  className="input-medical w-full resize-vertical"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="proposal" className="block font-semibold mb-2 text-foreground">
                  Partnership Proposal
                </label>
                <textarea
                  id="proposal"
                  name="proposal"
                  value={formData.proposal}
                  onChange={handleInputChange}
                  placeholder="Describe your partnership ideas, how you'd like to collaborate with us, what value you can bring, and what you're hoping to achieve through this partnership."
                  rows={4}
                  className="input-medical w-full resize-vertical"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="additionalInfo" className="block font-semibold mb-2 text-foreground">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  placeholder="Any additional information, questions, or special requirements you'd like us to know about."
                  rows={4}
                  className="input-medical w-full resize-vertical"
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                Submit Partnership Inquiry
              </Button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sponsorship;