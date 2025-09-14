import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  servicesMegaItems: any[];
  productsMegaItems: any[];
  navItems: any[];
}

const MobileMenu = ({ isOpen, onClose, servicesMegaItems, productsMegaItems, navItems }: MobileMenuProps) => {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 top-[120px] z-40 bg-white/95 backdrop-blur-md">
      <div className="h-full overflow-y-auto px-4 py-6">
        <div className="space-y-4">
          {/* Home */}
          <Link 
            to="/" 
            onClick={onClose}
            className="block px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
          >
            Home
          </Link>

          {/* Services Expandable */}
          <div className="space-y-2">
            <button
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
            >
              <span>Services</span>
              {servicesExpanded ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
            
            {servicesExpanded && (
              <div className="ml-4 space-y-2 animate-fade-in">
                {servicesMegaItems.map((category) => (
                  <div key={category.category} className="space-y-2">
                    <div className="px-4 py-2">
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                        {category.category}
                      </h4>
                    </div>
                    {category.items.map((item: any) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={onClose}
                        className="block px-6 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                      >
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Products Expandable */}
          <div className="space-y-2">
            <button
              onClick={() => setProductsExpanded(!productsExpanded)}
              className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
            >
              <span>Products</span>
              {productsExpanded ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
            
            {productsExpanded && (
              <div className="ml-4 space-y-2 animate-fade-in">
                {productsMegaItems.map((category) => (
                  <div key={category.category} className="space-y-2">
                    <div className="px-4 py-2">
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                        {category.category}
                      </h4>
                    </div>
                    {category.items.map((item: any) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={onClose}
                        className="block px-6 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                      >
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          {navItems.map((item: any) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={onClose}
              className="block px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
            >
              {item.name}
            </Link>
          ))}

          {/* CTA Button */}
          <div className="pt-4 px-4">
            <Button 
              onClick={onClose}
              className="w-full bg-gradient-to-r from-primary via-primary-dark to-accent text-white font-bold py-4 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              asChild
            >
              <Link to="/first-time-patients">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
