import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import QualiphyWidget from './QualiphyWidget';

interface PeptideBookingButtonProps {
  peptideName: string;
  peptideCategory: string;
}

const PeptideBookingButton = ({ peptideName, peptideCategory }: PeptideBookingButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Map peptide categories to IntakeQ category IDs
  const categoryMapping: Record<string, string> = {
    'Cellular Wellness': 'dc59af69-156c-4431-a8a1-f9af17b4e286', // NAD+ Anti-Aging
    'Research & Recovery': '314c20c9-4f5c-47f5-b58d-9e7f557598b4', // Specialty IV Therapy
    'Hormone Research': '0fd23879-ea54-45f3-9b7e-204d87b3fd2c', // Premium IV Therapy
    'Metabolic Research': '0fd23879-ea54-45f3-9b7e-204d87b3fd2c', // Premium IV Therapy
    'Research Compounds': '314c20c9-4f5c-47f5-b58d-9e7f557598b4', // Specialty IV Therapy
    'Wellness Research': 'dc59af69-156c-4431-a8a1-f9af17b4e286' // NAD+ Anti-Aging
  };

  const intakeqCategoryId = categoryMapping[peptideCategory];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="default"
          size="sm"
          className="font-semibold"
        >
          📅 Schedule
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Consultation for {peptideName}</DialogTitle>
        </DialogHeader>
        <QualiphyWidget />
      </DialogContent>
    </Dialog>
  );
};

export default PeptideBookingButton;