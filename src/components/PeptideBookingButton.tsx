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
    'Research & Recovery': '82e625db-d294-4053-9714-3c333dd5ee15', // Injury & Recovery
    'Hormone Research': '7b2876e1-0768-4326-8b0b-946a42285fcc', // Hormone Therapy
    'Metabolic Research': '6f219e0d-4991-41a2-84a9-e23d5caa3492', // Weight Management
    'Research Compounds': 'cca9a189-27b8-49d4-9078-640e767055e9', // Cognitive Health
    'Wellness Research': '7b2876e1-0768-4326-8b0b-946a42285fcc' // Hormone Therapy
  };

  const intakeqCategoryId = categoryMapping[peptideCategory];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="medical"
          size="sm"
          className="font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
        >
          <img src="/lovable-uploads/1fac1b4b-2289-4274-b058-98ac68b44e03.png" alt="" className="w-5 h-5 inline mr-2" />Schedule
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