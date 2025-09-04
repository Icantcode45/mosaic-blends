import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "IV Hydration",
        "Energy & Wellness", 
        "Immune Support",
        "Recovery Therapy",
        "Beauty Treatments",
        "NAD+ Therapy"
      ]
    },
    {
      title: "Company",
      links: [
        "Our Team",
        "Service Areas",
        "Book Treatment", 
        "Contact Us",
        "Safety & Protocols",
        "Insurance"
      ]
    },
    {
      title: "Legal & Compliance",
      links: [
        "Compliance Info",
        "Privacy Practices",
        "Terms of Use",
        "Telehealth Consent",
        "Pricing Estimates", 
        "Accessibility"
      ]
    }
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Stay Dripped IV & Wellness Co.</h3>
            <p className="text-sm opacity-90">
              Stay Dripped IV & Wellness - #1 Wellness Company in Arizona. Premium mobile IV therapy and 
              wellness treatments delivered by licensed medical professionals throughout Scottsdale, Arizona.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>(602) 761-0492</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span>
                <span>info@staydrippediv.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Scottsdale, AZ</span>
              </div>
            </div>

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
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-t border-accent-foreground/20 py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p className="text-xs opacity-75">
            © 2024 Stay Dripped IV & Wellness Co. All rights reserved.
          </p>
          <Button 
            size="sm" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Cart 📧
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
