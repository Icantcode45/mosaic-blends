import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import CartDrawer from "@/components/CartDrawer";
import { User, LogOut } from "lucide-react";

const HeaderActions = () => {
  const { user, signOut, loading } = useAuth();

  return (
    <div className="hidden lg:flex items-center space-x-4">
      <CartDrawer />
      
      <Button 
        variant="ghost" 
        size="sm"
        className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium" 
        asChild
      >
        <Link to="/#newsletter">Newsletter</Link>
      </Button>
      
      {!loading && (
        <>
          {user ? (
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <User className="h-4 w-4" />
                <span className="text-sm max-w-[100px] truncate">
                  {user.email?.split('@')[0] || 'User'}
                </span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={signOut} 
                className="text-muted-foreground hover:text-destructive transition-colors duration-200"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="outline" size="sm" asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
        </>
      )}
      
      <Button 
        className="bg-gradient-to-r from-primary via-primary-dark to-accent text-white font-bold px-6 py-2.5 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg" 
        asChild
      >
        <Link to="/first-time-patients">Book Now</Link>
      </Button>
    </div>
  );
};

export default HeaderActions;