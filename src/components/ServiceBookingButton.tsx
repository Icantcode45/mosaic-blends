import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import IntakeQWidget from './IntakeQWidget';

interface ServiceBookingButtonProps {
  serviceId: string;
  serviceName: string;
  serviceCategory?: string;
}

const ServiceBookingButton = ({ serviceId, serviceName, serviceCategory }: ServiceBookingButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Map service categories to IntakeQ category IDs
  const categoryMapping: Record<string, string> = {
    'Basic Hydration': '76b7e0a3-c252-479f-982a-a841edbfdda5',
    'Enhanced Hydration': '76b7e0a3-c252-479f-982a-a841edbfdda5', 
    'Standard Wellness': '19872648-7926-447a-97cd-24e1e44f8579',
    'Specialty Treatments': '314c20c9-4f5c-47f5-b58d-9e7f557598b4',
    'Premium Therapies': '0fd23879-ea54-45f3-9b7e-204d87b3fd2c',
    'NAD+ Therapy': 'dc59af69-156c-4431-a8a1-f9af17b4e286',
    'Vitamin Injections': 'b9ea469d-409b-4a81-96ca-e6cc44197891'
  };

  // Also map individual service IDs for specific services that have dedicated booking
  const specificServiceMapping: Record<string, string> = {
    'rehydrate': 'da14f4b6-22eb-4028-b9f0-d47872251a3c',
    'rehydrate-plus': '25e7732c-dab1-430c-82f6-590de5a532a2',
    'd-book': '217ec4ad-46d4-43d8-97ea-8c2646187e68',
    'myers': '3c9eff1b-b933-4dfd-93c4-d7188bd9ba76'
  };

  // Use specific service ID if available, otherwise use category
  const intakeqServiceId = specificServiceMapping[serviceId];
  const intakeqCategoryId = serviceCategory ? categoryMapping[serviceCategory] : null;

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
        ) : intakeqCategoryId ? (
          <IntakeQWidget categoryId={intakeqCategoryId} />
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