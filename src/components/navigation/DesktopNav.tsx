import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface DesktopNavProps {
  servicesMegaItems: any[];
  productsMegaItems: any[];
  navItems: any[];
}

const DesktopNav = ({ servicesMegaItems, productsMegaItems, navItems }: DesktopNavProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  

  return (
    <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
      {/* Services Dropdown */}
      <div 
        className="relative"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <button className="nav-link inline-flex items-center space-x-1 group" aria-haspopup="menu">
          <span>Services</span>
          <ChevronDown className={`w-4 h-4 transition-transform group-hover:text-primary ${servicesOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {/* Services Mega Menu */}
        {servicesOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[900px] bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-border p-8 grid grid-cols-4 gap-8 z-[100] animate-fade-in">
            {servicesMegaItems.map((category) => (
              <div key={category.category} className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1 w-8 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider">
                    {category.category}
                  </h4>
                </div>
                <div className="space-y-2">
                  {category.items.map((item: any) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block p-4 rounded-2xl hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all duration-200 group hover:shadow-lg"
                    >
                      <div className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      
      {/* Regular Nav Items */}
      {navItems.slice(0, 4).map((item: any) => (
        <Link
          key={item.name}
          to={item.href}
          className="nav-link"
        >
          {item.name}
        </Link>
      ))}
      
      {/* More Dropdown for remaining items */}
      {navItems.length > 4 && (
        <div className="relative group">
          <button className="nav-link inline-flex items-center space-x-1">
            <span>More</span>
            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
          </button>
          
          <div className="absolute right-0 mt-4 w-64 bg-white backdrop-blur-xl rounded-2xl shadow-xl border border-border p-4 z-[100] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            {navItems.slice(4).map((item: any) => (
              <Link
                key={item.name}
                to={item.href}
                className="block p-3 rounded-xl hover:bg-primary/5 transition-all text-foreground hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default DesktopNav;