import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
import { cn } from '@/lib/utils';

interface MembershipBookingButtonProps {
  membershipName: string;
  membershipType: 'basic' | 'premium' | 'elite' | 'starter';
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive" | "premium" | "glass";
}

const MembershipBookingButton = ({ membershipName, membershipType, className, variant = "default" }: MembershipBookingButtonProps) => {
  return (
    <Button variant={variant} asChild className={cn("w-full", className)}>
      <Link to="/membership">Join Now</Link>
    </Button>
  );
};

export default MembershipBookingButton;