import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import IntakeQWidget from './IntakeQWidget';

interface MembershipBookingButtonProps {
  membershipName: string;
  membershipType: 'basic' | 'premium' | 'elite' | 'starter';
}

const MembershipBookingButton = ({ membershipName, membershipType }: MembershipBookingButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // All memberships use the same category ID
  const membershipCategoryId = "a594f9e5-0db6-4ca0-bbfb-47c944af7007";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Join Now</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Join {membershipName}</DialogTitle>
        </DialogHeader>
        <div className="text-center py-4 mb-4">
          <p className="text-muted-foreground">
            Complete the enrollment process for the {membershipName} membership plan.
          </p>
        </div>
        <IntakeQWidget categoryId={membershipCategoryId} />
      </DialogContent>
    </Dialog>
  );
};

export default MembershipBookingButton;