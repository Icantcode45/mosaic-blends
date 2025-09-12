import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

interface MembershipBookingButtonProps {
  membershipName: string;
  membershipType: 'basic' | 'premium' | 'elite' | 'starter';
}

const MembershipBookingButton = ({ membershipName, membershipType }: MembershipBookingButtonProps) => {
  return (
    <Button asChild>
      <Link to="/membership">Join Now</Link>
    </Button>
  );
};

export default MembershipBookingButton;