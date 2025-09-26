import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { 
  Heart, 
  Sparkles, 
  CheckCircle, 
  Users, 
  Crown,
  Zap
} from 'lucide-react';

interface MembershipBookingButtonProps {
  membershipName: string;
  membershipType: 'basic' | 'premium' | 'elite' | 'starter';
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive" | "premium" | "glass";
}

const MembershipBookingButton = ({ membershipName, membershipType, className, variant = "default" }: MembershipBookingButtonProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const getMembershipIcon = () => {
    switch (membershipType) {
      case 'starter': return Heart;
      case 'basic': return CheckCircle;
      case 'premium': return Sparkles;
      case 'elite': return Crown;
      default: return Zap;
    }
  };

  const Icon = getMembershipIcon();

  const handleMembershipSignup = async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Membership Interest Recorded! 🎉",
        description: `Thank you for your interest in our ${membershipName} plan. Our team will contact you within 24 hours to complete your enrollment.`,
        duration: 5000,
      });
      
      // Here you would typically make an API call to your backend
      // to record the membership interest and send notification emails
      
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please call us at (602) 688-9825 to sign up for membership.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      variant={variant} 
      onClick={handleMembershipSignup}
      disabled={isLoading}
      className={cn(
        "w-full transition-all duration-300 group",
        variant === "default" && "bg-primary hover:bg-primary/90 text-white shadow-glow-primary hover:shadow-glow-primary-lg",
        variant === "outline" && "border-primary/30 hover:border-primary hover:bg-primary/5",
        className
      )}
    >
      <Icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
      {isLoading ? "Processing..." : "Join Now"}
      {!isLoading && <Sparkles className="w-4 h-4 ml-2 group-hover:animate-spin" />}
    </Button>
  );
};

export default MembershipBookingButton;