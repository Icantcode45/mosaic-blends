import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
import { cn } from '@/lib/utils';

interface MembershipBookingButtonProps {
  membershipName: string;
  membershipType: 'basic' | 'premium' | 'elite' | 'starter';
  className?: string;
}

const MembershipBookingButton = ({ membershipName, membershipType, className }: MembershipBookingButtonProps) => {
  return (
    <Button asChild className={cn("", className)}>
      <Link to="/membership">Join Now</Link>
    </Button>
  );
};

export default MembershipBookingButton;