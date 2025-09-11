import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import IntakeQWidget from './IntakeQWidget';

interface ServiceBookingButtonProps {
  serviceId: string;
  serviceName: string;
}

const ServiceBookingButton = ({ serviceId, serviceName }: ServiceBookingButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Map service IDs to IntakeQ service IDs
  const serviceMapping: Record<string, string> = {
    'rehydrate': 'da14f4b6-22eb-4028-b9f0-d47872251a3c',
    'rehydrate-plus': '25e7732c-dab1-430c-82f6-590de5a532a2',
    'd-book': '217ec4ad-46d4-43d8-97ea-8c2646187e68',
    'myers': '3c9eff1b-b933-4dfd-93c4-d7188bd9ba76'
  };

  const intakeqServiceId = serviceMapping[serviceId];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Book Now</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book {serviceName}</DialogTitle>
        </DialogHeader>
        {intakeqServiceId ? (
          <IntakeQWidget serviceId={intakeqServiceId} />
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              Online booking for this service is coming soon.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Please call us to schedule your appointment:
            </p>
            <Button asChild>
              <a href="tel:+1-602-688-9825">Call (602) 688-9825</a>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ServiceBookingButton;