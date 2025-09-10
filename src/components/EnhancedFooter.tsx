import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnhancedFooter = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "IV Therapy", href: "/iv-therapy" },
        { name: "Energy & Wellness", href: "/#energy" },
        { name: "Immune Support", href: "/#immune" },
        { name: "Recovery Therapy", href: "/#recovery" },
        { name: "Beauty Treatments", href: "/#beauty" },
        { name: "NAD+ Therapy", href: "/nad-peptides" },
        { name: "Vitamin Injections", href: "/vitamin-injections" },
        { name: "Weight Management", href: "/#weight" }
      ]
    },
    {
      title: "Advanced Care",
      links: [
        { name: "Sexual Wellness", href: "/#sexual-wellness" },
        { name: "Hormone Therapy", href: "/#hormones" },
        { name: "Peptide Treatments", href: "/nad-peptides" },
        { name: "Telehealth Services", href: "/telehealth" },
        { name: "Mobile Testing", href: "/mobile-testing-kits" },
        { name: "Lab Services", href: "/#labs" },
        { name: "Nutrition Counseling", href: "/#nutrition" },
        { name: "Wellness Coaching", href: "/#coaching" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/#about" },
        { name: "Our Team", href: "/#team" },
        { name: "Service Areas", href: "/#areas" },
        { name: "Careers", href: "/#careers" },
        { name: "Press & Media", href: "/#press" },
        { name: "Partner With Us", href: "/#partners" },
        { name: "Investor Relations", href: "/#investors" },
        { name: "Corporate Wellness", href: "/#corporate" }
      ]
    },
    {
      title: "Support & Resources",
      links: [
        { name: "Book Treatment", href: "/first-time-patients" },
        { name: "Patient Portal", href: "/#portal" },
        { name: "Insurance Info", href: "/#insurance" },
        { name: "Payment Options", href: "/#payment" },
        { name: "First-Time Patients", href: "/first-time-patients" },
        { name: "FAQ", href: "/#faq" },
        { name: "Health Resources", href: "/#resources" },
        { name: "Contact Support", href: "/#support" }
      ]
    },
    {
      title: "Legal & Compliance",
      links: [
        { name: "Privacy Practices", href: "/privacy" },
        { name: "Terms of Service", href: "/#terms" },
        { name: "HIPAA Notice", href: "/#hipaa" },
        { name: "Telehealth Consent", href: "/#telehealth-consent" },
        { name: "Patient Rights", href: "/#rights" },
        { name: "Accessibility", href: "/#accessibility" },
        { name: "State Licenses", href: "/#licenses" },
        { name: "Compliance Info", href: "/#compliance" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "Facebook", href: "#", icon: "👥" },
    { name: "TikTok", href: "#", icon: "🎵" },
    { name: "YouTube", href: "#", icon: "📺" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "Twitter", href: "#", icon: "🐦" }
  ];

  const quickActions = [
    { name: "Book IV Therapy", href: "/first-time-patients", urgent: true },
    { name: "Emergency Line", href: "tel:+1-602-688-9825", urgent: true },
    { name: "Telehealth Portal", href: "/telehealth" },
    { name: "Member Login", href: "/#login" }
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-6 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ed8aafa4-26e1-49c7-b39e-ba28edd0824c.png" 
                alt="Stay Dripped IV & Wellness Co." 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm opacity-90">
              Arizona's premier mobile IV therapy and wellness company. Licensed medical professionals 
              delivering personalized care throughout Scottsdale, Phoenix, and surrounding areas.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span>📞</span>
                <div>
                  <a href="tel:+1-602-688-9825" className="hover:opacity-100 transition-opacity">
                    (602) 688-9825
                  </a>
                  <div className="text-xs opacity-75">24/7 Emergency Line</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span>📧</span>
                <div>
                  <a href="mailto:info@staydrippediv.com" className="hover:opacity-100 transition-opacity">
                    info@staydrippediv.com
                  </a>
                  <div className="text-xs opacity-75">General inquiries</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span>
                <div>
                  <span>Scottsdale, AZ</span>
                  <div className="text-xs opacity-75">Serving Phoenix Metro</div>
                </div>
              </div>
            </div>

            {/* BBB Integration */}
            <div className="pt-4">
              <a
                href="https://www.bbb.org/standards-for-trust"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BBB Accredited Business"
                className="inline-flex"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F337c720945064b44af05129952e6433b%2Fe5eb19e7d19b49f9a483cf13884a13cc?format=webp&width=800"
                  alt="BBB Accredited Business badge"
                  className="h-14 w-auto rounded-md bg-white border border-accent-foreground/20 shadow-elev-1"
                  loading="lazy"
                />
              </a>
              <p className="mt-2 text-xs opacity-80">
                BBB Accredited Business. Upholding the{' '}
                <a
                  href="https://www.bbb.org/standards-for-trust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-100"
                >
                  BBB Standards for Trust
                </a>.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-accent-foreground/10 hover:bg-accent-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-lg">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('/') ? (
                      <Link 
                        to={link.href} 
                        className="text-sm opacity-90 hover:opacity-100 transition-opacity hover:underline"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-sm opacity-90 hover:opacity-100 transition-opacity hover:underline"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 pt-8 border-t border-accent-foreground/20">
          <h4 className="font-semibold mb-4">Quick Actions</h4>
          <div className="flex flex-wrap gap-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant={action.urgent ? "default" : "outline"}
                size="sm"
                asChild
                className={action.urgent ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
              >
                {action.href.startsWith('/') ? (
                  <Link to={action.href}>{action.name}</Link>
                ) : (
                  <a href={action.href}>{action.name}</a>
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/20 py-6">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 items-center text-sm">
            <div className="opacity-75">
              <p>© 2024 Stay Dripped IV & Wellness Co. All rights reserved.</p>
              <p className="text-xs mt-1">Licensed medical facility in Arizona</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center items-center gap-4">
                <span className="text-xs opacity-75">Licensed & Insured</span>
                <span className="text-xs opacity-75">•</span>
                <span className="text-xs opacity-75">HIPAA Compliant</span>
                <span className="text-xs opacity-75">•</span>
                <span className="text-xs opacity-75">FDA Registered</span>
              </div>
            </div>

            <div className="md:text-right">
              <Button 
                size="sm" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link to="/first-time-patients">Book Now 📧</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
