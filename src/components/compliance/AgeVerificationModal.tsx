import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface AgeVerificationModalProps {
  isOpen: boolean;
  onVerified: () => void;
  onDeclined: () => void;
}

const AgeVerificationModal = ({ isOpen, onVerified, onDeclined }: AgeVerificationModalProps) => {
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");

  const calculateAge = (dateString: string) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleVerification = () => {
    if (!birthDate) {
      setError("Please enter your birth date");
      return;
    }

    const age = calculateAge(birthDate);
    
    if (age < 18) {
      setError("You must be 18 or older to access our peptide and NAD+ services");
      return;
    }

    setError("");
    onVerified();
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Age Verification Required
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Badge variant="secondary" className="w-full justify-center bg-red-100 text-red-800">
            18+ ONLY - REGULATORY COMPLIANCE
          </Badge>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> NAD+ and peptide therapies are restricted to adults 18 years and older. 
              Federal and state regulations require age verification for these treatments.
            </p>
          </div>
          
          <div className="space-y-3">
            <label className="block text-sm font-medium">
              Please enter your birth date to continue:
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              max={new Date().toISOString().split('T')[0]}
            />
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-600">
              By proceeding, you confirm that you are 18+ years old and eligible for these treatments 
              under federal and state regulations. Your information is protected under HIPAA guidelines.
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={onDeclined}
              className="flex-1"
            >
              I'm Under 18
            </Button>
            <Button 
              onClick={handleVerification}
              className="flex-1"
            >
              Verify Age
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerificationModal;