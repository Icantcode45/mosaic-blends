import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MapPin, 
  Clock,
  Star,
  Users,
  Search,
  ShoppingCart
} from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "IV Therapy", href: "/iv-therapy", description: "Premium vitamin infusions" },
      { name: "NAD+ Therapy", href: "/nad-peptides", description: "Anti-aging treatments" },
      { name: "Vitamin Injections", href: "/vitamin-injections", description: "Quick nutrient boost" },
      { name: "Specialty Treatments", href: "/specialty-treatments", description: "Advanced therapies" }
    ]
  },
  {
    name: "Membership", 
    href: "/membership"
  },
  {
    name: "About",
    href: "/about",
    submenu: [
      { name: "Our Team", href: "/about#team", description: "Licensed medical professionals" },
      { name: "Certifications", href: "/about#certifications", description: "Quality & compliance" },
      { name: "Testimonials", href: "/about#reviews", description: "Client success stories" }
    ]
  },
  {
    name: "Resources",
    href: "/resources",
    submenu: [
      { name: "First Time Patients", href: "/first-time-patients", description: "Get started guide" },
      { name: "Gift Cards", href: "/gift-cards", description: "Give the gift of wellness" },
      { name: "Events", href: "/events", description: "Group bookings" }
    ]
  }
];

export default function ModernHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-medical-dark text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Service Areas: Scottsdale, Paradise Valley, Phoenix Metro</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Same Day Availability</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">2,500+ Clients</span>
                <span className="sm:hidden">2.5K+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/src/assets/stay-dripped-cowboy-logo-main.png" 
                alt="Stay Dripped IV" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <div className="font-bold text-xl text-medical-dark">Stay Dripped</div>
                <div className="text-sm text-medical-primary">IV Therapy & Wellness</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-medical-primary font-medium transition-colors"
                    onMouseEnter={() => setActiveSubmenu(item.submenu ? item.name : null)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Submenu */}
                  {item.submenu && activeSubmenu === item.name && (
                    <div 
                      className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-2xl border p-4 mt-2"
                      onMouseEnter={() => setActiveSubmenu(item.name)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <div className="space-y-3">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="block p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                          >
                            <div className="font-semibold text-gray-900 group-hover:text-medical-primary">
                              {subitem.name}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {subitem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Search className="w-4 h-4" />
              </Button>
              
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <ShoppingCart className="w-4 h-4" />
              </Button>

              <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-full">
                <Phone className="w-4 h-4 text-medical-primary" />
                <a href="tel:602-688-9825" className="font-semibold text-medical-dark hover:text-medical-primary">
                  (602) 688-9825
                </a>
              </div>

              <Button className="cta-button hidden md:flex" asChild>
                <Link to="/booking">Book Now</Link>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block py-2 text-gray-700 hover:text-medical-primary font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block py-1 text-sm text-gray-600 hover:text-medical-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-medical-primary" />
                  <a href="tel:602-688-9825" className="font-semibold text-medical-dark">
                    (602) 688-9825
                  </a>
                </div>
                <Button className="w-full cta-button" asChild>
                  <Link to="/booking" onClick={() => setIsOpen(false)}>Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}