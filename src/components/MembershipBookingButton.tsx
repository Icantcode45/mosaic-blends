import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import IntakeQWidget from './IntakeQWidget';
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
  const [isOpen, setIsOpen] = useState(false);

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

  // Map membership tiers to IntakeQ IDs
  const membershipMapping: Record<string, { type: 'category' | 'package', id: string }> = {
    'starter': { type: 'category', id: 'a594f9e5-0db6-4ca0-bbfb-47c944af7007' }, // Membership category
    'basic': { type: 'category', id: 'a594f9e5-0db6-4ca0-bbfb-47c944af7007' }, // Membership category
    'premium': { type: 'package', id: '93a5ba6f-3dce-487f-84b0-87d1f5f5c1cb' }, // Tier II Package
    'elite': { type: 'category', id: 'a594f9e5-0db6-4ca0-bbfb-47c944af7007' } // Membership category
  };

  const membershipConfig = membershipMapping[membershipType] || membershipMapping['basic'];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={variant} 
          className={cn(
            "w-full transition-all duration-300 group",
            variant === "default" && "bg-primary hover:bg-primary/90 text-white shadow-glow-primary hover:shadow-glow-primary-lg",
            variant === "outline" && "border-primary/30 hover:border-primary hover:bg-primary/5",
            className
          )}
        >
          <Icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Join Now
          <Sparkles className="w-4 h-4 ml-2 group-hover:animate-spin" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Join {membershipName}</DialogTitle>
        </DialogHeader>
        {membershipConfig.type === 'package' ? (
          <IntakeQWidget packageId={membershipConfig.id} />
        ) : (
          <IntakeQWidget categoryId={membershipConfig.id} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MembershipBookingButton;