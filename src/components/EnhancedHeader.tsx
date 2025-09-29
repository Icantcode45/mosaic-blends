import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SearchSystem from "./SearchSystem";
import BrandLogo from "./navigation/BrandLogo";
import TopBar from "./navigation/TopBar";
import DesktopNav from "./navigation/DesktopNav";
import HeaderActions from "./navigation/HeaderActions";
import MobileMenu from "./navigation/MobileMenu";

const EnhancedHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { name: 'Events', href: '/events' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Membership', href: '/membership' },
    { name: 'First-Time Patients', href: '/first-time-patients' },
    { name: 'Careers', href: '/careers' },
    { name: 'Brand Ambassador', href: '/sponsorship' }
  ];

  const servicesMegaItems = [
    {
      category: "IV Therapy & Injections",
      items: [
        { name: "IV Therapy Services", href: "/iv-therapy", description: "Hydration and nutrient therapy" },
        { name: "Vitamin Injections", href: "/vitamin-injections", description: "Quick nutrient boost" }
      ]
    },
  ];

  const productsMegaItems = [
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
            <Link to="/" className="flex items-center space-x-3">
              <BrandLogo className="h-8 lg:h-10" />
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
                <Menu className="w-6 h-6 text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] transition-all" style={{ filter: 'drop-shadow(0 1px 0 rgba(255,255,255,0.5))' }} />
              ) : (
                <X className="w-6 h-6 text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] transition-all" style={{ filter: 'drop-shadow(0 1px 0 rgba(255,255,255,0.5))' }} />
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
