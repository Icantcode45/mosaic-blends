import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import CartDrawer from "@/components/CartDrawer";
import AuthDropdown from "@/components/AuthDropdown";
import { Link } from "react-router-dom";

const HeaderActions = () => {
  const { user, loading } = useAuth();

  return (
    <div className="hidden lg:flex items-center space-x-4">
      <CartDrawer />
      
      <Button 
        variant="ghost" 
        size="sm"
        className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium" 
        asChild
      >
        <Link to="/newsletter">Newsletter</Link>
      </Button>
      
      {/* Auth Dropdown */}
      <AuthDropdown />
      
      <Button 
        variant="default"
        size="lg"
        className="font-bold" 
        asChild
      >
        <Link to="/first-time-patients">Book Now</Link>
      </Button>
    </div>
  );
};

export default HeaderActions;