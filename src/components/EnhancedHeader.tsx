import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartDrawer from "./CartDrawer";
import SearchSystem from "./SearchSystem";
import { ChevronDown, Menu, Search, Phone, Calendar } from "lucide-react";

const EnhancedHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Telehealth', href: '/telehealth' },
    { name: 'Mobile Testing Kits', href: '/mobile-testing-kits' },
    { name: 'Supplements', href: '/supplements' },
    { name: 'Membership', href: '/membership' },
    { name: 'First-Time Patients', href: '/first-time-patients' },
    { name: 'Events', href: '/events' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Privacy', href: '/privacy' }
  ];

  const servicesMegaItems = [
    {
      category: "IV Therapy",
      items: [
        { name: "IV Therapy Services", href: "/iv-therapy", description: "Hydration and nutrient therapy" },
        { name: "Vitamin Injections", href: "/vitamin-injections", description: "Quick nutrient boost" }
      ]
    },
    {
      category: "Advanced Treatments", 
      items: [
        { name: "NAD+ & Peptides", href: "/nad-peptides", description: "Cellular support and recovery" },
        { name: "Weight Management", href: "/iv-therapy", description: "Comprehensive weight programs" }
      ]
    },
    {
      category: "Wellness & Health",
      items: [
        { name: "Sexual Wellness", href: "/iv-therapy", description: "Discreet wellness solutions" },
        { name: "Probiotics & Gut Health", href: "/supplements", description: "Digestive health support" },
        { name: "Professional Supplements", href: "/supplements", description: "Physician-trusted products" }
      ]
    },
    {
      category: "Services & Testing",
      items: [
        { name: "Mobile Testing", href: "/mobile-testing-kits", description: "At-home lab services" },
        { name: "Telehealth", href: "/telehealth", description: "Virtual consultations" }
      ]
    }
  ];

  const productsMegaItems = [
    {
      category: "Supplements",
      items: [
        { name: "Professional Supplements", href: "/supplements", description: "High-quality formulations" },
        { name: "Probiotics & Gut Health", href: "/supplements", description: "Digestive wellness" }
      ]
    },
    {
      category: "Vitamins & Minerals",
      items: [
        { name: "Vitamin Injections", href: "/vitamin-injections", description: "Injectable nutrients" }
      ]
    }
  ];

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setServicesOpen(false);
        setProductsOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('topbar-search')?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Service Areas: Scottsdale, Paradise Valley, Phoenix Metro</span>
            </button>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchOpen(true)}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Search className="h-4 w-4" />
                  <span className="hidden sm:inline">Search</span>
                  <kbd className="hidden lg:inline-flex items-center gap-1 rounded border bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500">
                    ⌘K
                  </kbd>
                </Button>
              </div>
              
              <div className="flex items-center gap-3">
                <a href="tel:+1-602-688-9825" className="text-gray-600 hover:text-primary transition-colors" aria-label="Call us">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </a>
                <Link to="/first-time-patients" className="text-gray-600 hover:text-primary transition-colors" aria-label="Book appointment">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                </Link>
                <CartDrawer />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all border-b border-gray-100 ${
          scrolled ? 'glass' : 'bg-white/80 glass'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ed8aafa4-26e1-49c7-b39e-ba28edd0824c.png" 
                alt="Stay Dripped IV & Wellness Co. Logo - Premier Mobile IV Therapy" 
                className="h-8 w-auto"
                loading="eager"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6 overflow-x-auto whitespace-nowrap flex-1 min-w-0">
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onFocus={() => setServicesOpen(true)}
                onBlur={() => setServicesOpen(false)}
              >
                <button className="nav-link inline-flex items-center space-x-1" aria-haspopup="menu" aria-expanded={servicesOpen} aria-controls="services-menu">
                  <span>Services</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                  </svg>
                </button>
                
                {/* Services Mega Menu */}
                {servicesOpen && (
                  <div id="services-menu" className="absolute left-0 mt-3 w-[800px] bg-white rounded-2xl shadow-10xl p-8 grid grid-cols-4 gap-6 z-50 border border-gray-100">
                    {servicesMegaItems.map((category) => (
                      <div key={category.category} className="space-y-4">
                        <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">{category.category}</h4>
                        <div className="space-y-3">
                          {category.items.map((item) => (
                            item.href.startsWith('/') ? (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block p-3 rounded-xl hover:bg-gray-50 transition group"
                              >
                                <div className="font-semibold mb-1 text-foreground group-hover:text-primary transition">{item.name}</div>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                              </Link>
                            ) : (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block p-3 rounded-xl hover:bg-gray-50 transition group"
                              >
                                <div className="font-semibold mb-1 text-foreground group-hover:text-primary transition">{item.name}</div>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                              </a>
                            )
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                onFocus={() => setProductsOpen(true)}
                onBlur={() => setProductsOpen(false)}
              >
                <button className="nav-link inline-flex items-center space-x-1" aria-haspopup="menu" aria-expanded={productsOpen} aria-controls="products-menu">
                  <span>Products</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                  </svg>
                </button>
                
                {/* Products Mega Menu */}
                {productsOpen && (
                  <div id="products-menu" className="absolute left-0 mt-3 w-[400px] bg-white rounded-2xl shadow-10xl p-6 grid grid-cols-2 gap-6 z-50 border border-gray-100">
                    {productsMegaItems.map((category) => (
                      <div key={category.category} className="space-y-4">
                        <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">{category.category}</h4>
                        <div className="space-y-3">
                          {category.items.map((item) => (
                            item.href.startsWith('/') ? (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block p-3 rounded-xl hover:bg-gray-50 transition group"
                              >
                                <div className="font-semibold mb-1 text-foreground group-hover:text-primary transition">{item.name}</div>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                              </Link>
                            ) : (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block p-3 rounded-xl hover:bg-gray-50 transition group"
                              >
                                <div className="font-semibold mb-1 text-foreground group-hover:text-primary transition">{item.name}</div>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                              </a>
                            )
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="nav-link"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-link"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <CartDrawer />
              <Button variant="ghost" className="btn-ghost-enhanced" asChild>
                <Link to="/#newsletter">Newsletter</Link>
              </Button>
              <Button className="btn-primary-enhanced" asChild>
                <Link to="/first-time-patients">Book Now</Link>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button 
              onClick={() => setOpen(!open)} 
              className="lg:hidden p-2 rounded-md border border-gray-300 hover:border-gray-400 transition-colors"
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
            <div id="mobile-menu" className="lg:hidden pb-4 max-h-[70vh] overflow-y-auto">
              <div className="grid gap-2">
                <Link 
                  onClick={() => setOpen(false)} 
                  to="/" 
                  className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Home
                </Link>
                
                {/* Mobile Services */}
                <div className="px-3 py-2">
                  <div className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-2">Services</div>
                  {servicesMegaItems.map((category) => (
                    <div key={category.category} className="mb-3">
                      <div className="font-medium text-xs text-primary mb-1">{category.category}</div>
                      {category.items.map((item) => (
                        item.href.startsWith('/') ? (
                          <Link
                            key={item.name}
                            onClick={() => setOpen(false)}
                            to={item.href}
                            className="block px-2 py-1 text-sm rounded hover:bg-gray-100 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <a
                            key={item.name}
                            onClick={() => setOpen(false)}
                            href={item.href}
                            className="block px-2 py-1 text-sm rounded hover:bg-gray-100 transition-colors"
                          >
                            {item.name}
                          </a>
                        )
                      ))}
                    </div>
                  ))}
                </div>

                {/* Mobile Products */}
                <div className="px-3 py-2">
                  <div className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-2">Products</div>
                  {productsMegaItems.map((category) => (
                    <div key={category.category} className="mb-3">
                      <div className="font-medium text-xs text-primary mb-1">{category.category}</div>
                      {category.items.map((item) => (
                        item.href.startsWith('/') ? (
                          <Link
                            key={item.name}
                            onClick={() => setOpen(false)}
                            to={item.href}
                            className="block px-2 py-1 text-sm rounded hover:bg-gray-100 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <a
                            key={item.name}
                            onClick={() => setOpen(false)}
                            href={item.href}
                            className="block px-2 py-1 text-sm rounded hover:bg-gray-100 transition-colors"
                          >
                            {item.name}
                          </a>
                        )
                      ))}
                    </div>
                  ))}
                </div>

                {navItems.map((item) => (
                  item.href.startsWith('/') ? (
                    <Link
                      key={item.name}
                      onClick={() => setOpen(false)}
                      to={item.href}
                      className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      onClick={() => setOpen(false)}
                      href={item.href}
                      className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      {item.name}
                    </a>
                  )
                ))}
                <Button 
                  onClick={() => setOpen(false)} 
                  className="btn-primary-enhanced text-center mt-2"
                  asChild
                >
                  <Link to="/first-time-patients">Book Now</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Search System */}
      <SearchSystem 
        isOpen={searchOpen}
        onOpen={() => setSearchOpen(true)}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
};

export default EnhancedHeader;
