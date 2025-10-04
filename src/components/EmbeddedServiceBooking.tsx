import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import IntakeQWidget from './IntakeQWidget';

interface EmbeddedServiceBookingProps {
  serviceId: string;
  serviceName: string;
  serviceCategory?: string;
}

const EmbeddedServiceBooking = ({ serviceId, serviceName, serviceCategory }: EmbeddedServiceBookingProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Map service categories to IntakeQ category IDs
  const categoryMapping: Record<string, string> = {
    'Basic Hydration': '76b7e0a3-c252-479f-982a-a841edbfdda5', // Basic IV Therapy
    'Enhanced Hydration': '76b7e0a3-c252-479f-982a-a841edbfdda5', // Basic IV Therapy
    'Standard Wellness': '19872648-7926-447a-97cd-24e1e44f8579', // Standard IV Therapy
    'Specialty Therapies': '314c20c9-4f5c-47f5-b58d-9e7f557598b4', // Specialty IV Therapy
    'Premium Therapies': '0fd23879-ea54-45f3-9b7e-204d87b3fd2c', // Premium IV Therapy
    'NAD+ Therapy': 'dc59af69-156c-4431-a8a1-f9af17b4e286', // NAD+ Anti-Aging
    'Vitamin Injections': 'b9ea469d-409b-4a81-96ca-e6cc44197891', // Vitamin Injections
    'Membership': 'a594f9e5-0db6-4ca0-bbfb-47c944af7007' // Monthly Memberships
  };

  // Map individual service IDs for specific services that have dedicated booking
  const specificServiceMapping: Record<string, string> = {
    'rehydrate': 'da14f4b6-22eb-4028-b9f0-d47872251a3c',
    'rehydrate-plus': '25e7732c-dab1-430c-82f6-590de5a532a2',
    'rehydrate-deluxe': '2917c0e0-b99b-4ec1-ad28-971615c1be81',
    'hangover': '6dcd9ec9-7a0c-46b3-b0a2-5dd5becc0cfb',
    'd-book': '217ec4ad-46d4-43d8-97ea-8c2646187e68',
    'dbook-performance': '217ec4ad-46d4-43d8-97ea-8c2646187e68',
    'myers': '3c9eff1b-b933-4dfd-93c4-d7188bd9ba76',
    'jr-myers': 'b753e0a1-13ce-4d99-88e4-027f8a35b58d',
    'jr-myers-cocktail': 'b753e0a1-13ce-4d99-88e4-027f8a35b58d',
    'arizona-detox': 'defb6545-6922-482b-8976-c1f4ef39f07a',
    'scottsdale-beauty': 'd36397a3-07ef-4e15-8468-7b54ebadf06a',
    'diamondback': '3b1b7aac-67dd-4c38-9070-7dc3bee2853b',
    'sun-devil': '3eb7cfbc-d816-44d2-8b7b-f2a29860f45d',
    'gold-hydration-recovery': '7b648ec1-fd96-466c-ac9e-cf1654196471',
    'platinum-hydration-recovery': '03946263-6ef8-49ff-9953-ec3802b3d9b5',
    'nad-plain': 'ef62c45b-7f86-40e3-acfe-e0b5fe3dd53c',
    'nad-therapy': 'dc59af69-156c-4431-a8a1-f9af17b4e286',
    'fountain-youth': '9cf42e88-d3a9-44a3-af90-ec0bf9cb28ec',
    'diamond-nad': 'eed73f2b-4fed-403b-88ed-4eea0cf82018',
    'elite-nad': 'a5a2fb30-ec2a-47a4-bae9-2a8cfd603419',
    'elite-nad-therapy': 'a5a2fb30-ec2a-47a4-bae9-2a8cfd603419'
  };

  // Use specific service ID if available, otherwise use category
  const intakeqServiceId = specificServiceMapping[serviceId];
  const intakeqCategoryId = serviceCategory ? categoryMapping[serviceCategory] : null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          Book Now
        </Button>
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
          <div className="text-center py-8 bg-muted/50 rounded-lg">
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

export default EmbeddedServiceBooking;