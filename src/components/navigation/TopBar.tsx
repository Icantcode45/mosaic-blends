import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CartDrawer from "@/components/CartDrawer";
import { Search, Phone, Calendar } from "lucide-react";

interface TopBarProps {
  onSearchOpen: () => void;
}

const TopBar = ({ onSearchOpen }: TopBarProps) => {
  return (
    <div className="bg-muted/30 border-b border-border/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-sm">
          {/* Service Areas - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="text-xs">Service Areas: Scottsdale, Paradise Valley, Phoenix Metro</span>
            </div>
          </div>
          
          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onSearchOpen}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors h-8 px-2"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden sm:inline text-xs">Search</span>
              <kbd className="hidden lg:inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                ⌘K
              </kbd>
            </Button>
            
            {/* Phone */}
            <a 
              href="tel:+1-602-688-9825" 
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors p-1 rounded" 
              aria-label="Call us"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline text-xs">Call</span>
            </a>
            
            {/* Book */}
            <Link 
              to="/first-time-patients" 
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors p-1 rounded" 
              aria-label="Book appointment"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span className="hidden sm:inline text-xs">Book</span>
            </Link>
            
            {/* Cart */}
            <CartDrawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;