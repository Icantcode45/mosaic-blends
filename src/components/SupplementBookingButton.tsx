import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import IntakeQWidget from './IntakeQWidget';

interface SupplementBookingButtonProps {
  supplementName: string;
  consultationType?: 'telehealth' | 'in-person';
}

const SupplementBookingButton = ({ supplementName, consultationType = 'telehealth' }: SupplementBookingButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // For supplements, we'll use the general consultation/telehealth category
  const telehealthCategoryId = "7b2876e1-0768-4326-8b0b-946a42285fcc"; // Hormone Therapy (general wellness consultation)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Consult Provider
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Schedule Consultation for {supplementName}</DialogTitle>
        </DialogHeader>
        <div className="text-center py-4 mb-4">
          <p className="text-muted-foreground">
            Get personalized guidance on {supplementName} and how it fits into your wellness plan.
          </p>
        </div>
        <IntakeQWidget categoryId={telehealthCategoryId} />
      </DialogContent>
    </Dialog>
  );
};

export default SupplementBookingButton;