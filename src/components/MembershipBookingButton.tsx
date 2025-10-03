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

  // Map membership tiers to IntakeQ package IDs
  const membershipMapping: Record<string, { type: 'category' | 'package', id: string }> = {
    'starter': { type: 'package', id: 'fb7c4ca8-4714-4f07-b197-b00f22fb16e5' }, // Shot Pass Membership
    'basic': { type: 'package', id: 'e910e810-d537-4577-a53c-736e802a0729' }, // Wellness Explorer Monthly Membership
    'premium': { type: 'package', id: '133ef7b7-0889-41fc-bfc0-ae547b8a496b' }, // Wellness Elite Membership
    'elite': { type: 'package', id: '133ef7b7-0889-41fc-bfc0-ae547b8a496b' }, // Wellness Elite Membership
    'platinum': { type: 'package', id: '2ed8d7ea-1360-4aca-a268-254831ae6e2b' } // Wellness Platinum Membership
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