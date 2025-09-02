import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const servicesMegaItems = [
    {
      name: "Sexual Wellness",
      href: "#sexual-wellness",
      description: "Discreet, clinically backed treatments."
    },
    {
      name: "Telehealth Services", 
      href: "#telehealth",
      description: "Fast online consults with licensed providers."
    },
    {
      name: "NAD+ & Peptides",
      href: "#nad", 
      description: "Recovery, focus & longevity support."
    },
    {
      name: "Supplements",
      href: "#supplements",
      description: "Evidence-based stack delivered to you."
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
      className={`sticky top-0 z-50 transition-all border-b border-gray-100 ${
        scrolled ? 'glass' : 'bg-white/80 glass'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center space-x-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent text-white font-bold">
              SD
            </span>
            <span className="font-heading font-semibold text-lg text-foreground">StayDripped</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="nav-link">Home</a>
            
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="nav-link inline-flex items-center space-x-1">
                <span>Services</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                </svg>
              </button>
              
              {/* Mega panel */}
              {servicesOpen && (
                <div className="absolute left-0 mt-3 w-[560px] bg-white rounded-2xl shadow-10xl p-6 grid grid-cols-2 gap-6 z-50">
                  {servicesMegaItems.map((item) => (
                    <a 
                      key={item.name}
                      href={item.href} 
                      className="group p-4 rounded-xl hover:bg-gray-50 transition"
                    >
                      <div className="font-semibold mb-1 text-foreground">{item.name}</div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            {navItems.slice(1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="#newsletter" className="btn-ghost-enhanced">Newsletter</a>
            <a href="#book" className="btn-primary-enhanced">Book consult</a>
          </div>

          {/* Mobile toggle */}
          <button 
            onClick={() => setOpen(!open)} 
            className="md:hidden p-2 rounded-md border border-gray-300 hover:border-gray-400 transition-colors"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {!open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <a 
                onClick={() => setOpen(false)} 
                href="#hero" 
                className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Home
              </a>
              {servicesMegaItems.map((item) => (
                <a 
                  key={item.name}
                  onClick={() => setOpen(false)} 
                  href={item.href} 
                  className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              {navItems.slice(1).map((item) => (
                <a 
                  key={item.name}
                  onClick={() => setOpen(false)} 
                  href={item.href} 
                  className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a 
                onClick={() => setOpen(false)} 
                href="#book" 
                className="btn-primary-enhanced text-center mt-2"
              >
                Book consult
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
