import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { name: 'Treatments', href: '#treatments' },
    { name: 'Telehealth', href: '#telehealth' },
    { name: 'Supplements', href: '#supplements' },
    { name: 'Membership', href: '#membership' },
    { name: 'FAQ', href: '#faqs' },
    { name: 'Contact', href: '#contact' }
  ];

  const servicesMegaItems = [
    {
      name: "Telehealth",
      href: "#telehealth",
      description: "Virtual consults & prescriptions."
    },
    {
      name: "NAD+ & Peptides", 
      href: "#treatments",
      description: "Cellular energy & recovery."
    },
    {
      name: "Sexual Wellness",
      href: "#treatments", 
      description: "Personalized treatment plans."
    },
    {
      name: "Supplements",
      href: "#supplements",
      description: "Clinician-curated products."
    },
    {
      name: "Weight Programs",
      href: "#telehealth",
      description: "GLP-1 + coaching for results."
    },
    {
      name: "IV Therapy",
      href: "#treatments",
      description: "Mobile & clinic hydration."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'bg-white/90 backdrop-blur nav-shadow' : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 rounded-xl bg-primary/10 items-center justify-center">💧</span>
            <span className="font-heading font-extrabold tracking-tight text-lg md:text-xl text-foreground">
              StayDripped
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div 
              className="group relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </button>
              
              {/* Services Megamenu */}
              {servicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[680px] bg-white rounded-2xl shadow-elev-3 border border-gray-100 p-6 z-50">
                  <div className="grid grid-cols-3 gap-6">
                    {servicesMegaItems.map((item) => (
                      <a 
                        key={item.name}
                        href={item.href} 
                        className="p-4 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-sm font-semibold mb-1 text-foreground">
                          {item.name}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {navItems.slice(1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Membership
            </Button>
            <Button size="sm">
              Book Mobile IV
            </Button>
          </div>

          {/* Mobile toggle */}
          <button 
            onClick={() => setOpen(!open)} 
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {!open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/40 lg:hidden z-40" 
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      {open && (
        <aside className="lg:hidden fixed top-0 right-0 h-full w-[88%] max-w-sm bg-white shadow-elev-3 border-l border-gray-100 z-50">
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-7 w-7 rounded-xl bg-primary/10 items-center justify-center">💧</span>
              <span className="font-heading font-bold">StayDripped</span>
            </div>
            <button 
              onClick={() => setOpen(false)} 
              className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          
          <nav className="px-4 py-6 space-y-2 overflow-y-auto">
            {/* Services Accordion */}
            <details className="group rounded-xl border border-gray-200">
              <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-semibold">Services</span>
                <svg className="h-4 w-4 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/>
                </svg>
              </summary>
              <div className="px-4 pb-4 grid grid-cols-1 gap-2 text-sm">
                {servicesMegaItems.map((item) => (
                  <a 
                    key={item.name}
                    className="px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors" 
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </details>

            {/* Other Nav Items */}
            {navItems.slice(1).map((item) => (
              <a 
                key={item.name}
                className="block px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors" 
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile CTAs */}
            <div className="pt-4 grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="w-full justify-center">
                Membership
              </Button>
              <Button size="sm" className="w-full justify-center">
                Book IV
              </Button>
            </div>
          </nav>
        </aside>
      )}
    </header>
  );
};

export default Header;
