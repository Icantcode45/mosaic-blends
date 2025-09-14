import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SearchSystem from "./SearchSystem";
import stayDrippedLogo from "@/assets/stay-dripped-main-logo.jpeg";
import TopBar from "./navigation/TopBar";
import DesktopNav from "./navigation/DesktopNav";
import HeaderActions from "./navigation/HeaderActions";
import MobileMenu from "./navigation/MobileMenu";

const EnhancedHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { name: 'Telehealth', href: '/telehealth' },
    { name: 'Mobile Testing Kits', href: '/mobile-testing-kits' },
    { name: 'Supplements', href: '/supplements' },
    { name: 'Membership', href: '/membership' },
    { name: 'Event Inquiry', href: '/event-inquiry' },
    { name: 'Specialty Treatments', href: '/specialty-treatments' },
    { name: 'First-Time Patients', href: '/first-time-patients' },
    { name: 'Gift Cards', href: '/gift-cards' }
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
        { name: "NAD+ & Peptides", href: "/nad-peptides", description: "Cellular support and recovery" }
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
          setScrolled(window.scrollY > 20);
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
        setMobileMenuOpen(false);
        setSearchOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <TopBar onSearchOpen={() => setSearchOpen(true)} />

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 backdrop-blur-xl border-b ${
          scrolled 
            ? 'bg-white/98 border-border/60 shadow-xl' 
            : 'bg-white/90 border-border/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 lg:h-20 flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-center space-x-3 z-50">
              <img 
                src={stayDrippedLogo} 
                alt="Stay Dripped IV & Wellness Co. - Premier IV Therapy" 
                className="h-10 lg:h-12 w-auto transition-all duration-300"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <DesktopNav 
              servicesMegaItems={servicesMegaItems}
              productsMegaItems={productsMegaItems}
              navItems={navItems}
            />

            {/* Desktop Actions */}
            <HeaderActions />

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden p-2 rounded-xl border border-border/30 hover:border-border/60 hover:bg-muted/50 transition-all duration-200 z-50"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {!mobileMenuOpen ? (
                <Menu className="w-6 h-6 text-foreground" />
              ) : (
                <X className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        servicesMegaItems={servicesMegaItems}
        productsMegaItems={productsMegaItems}
        navItems={navItems}
      />

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
