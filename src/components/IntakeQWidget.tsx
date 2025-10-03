import { useEffect } from 'react';

interface IntakeQWidgetProps {
  serviceId?: string;
  categoryId?: string;
  packageId?: string;
  locationId?: number;
  groupId?: string;
  clientArea?: boolean;
}

const IntakeQWidget = ({ serviceId, categoryId, packageId, locationId, groupId, clientArea = false }: IntakeQWidgetProps) => {
  useEffect(() => {
    console.log('IntakeQWidget loading with:', { serviceId, categoryId, packageId, locationId, groupId, clientArea });
    
    // Set up IntakeQ configuration
    (window as any).intakeq = "68b14c4e0b7b143488664c75";
    
    if (clientArea) {
      (window as any).intakeqClientArea = true;
    } else if (groupId) {
      (window as any).intakeqGroupId = groupId;
    } else if (locationId) {
      (window as any).intakeqLocationId = locationId;
    } else if (packageId) {
      (window as any).intakeqPackageId = packageId;
    } else if (serviceId) {
      (window as any).intakeqServiceId = serviceId;
    } else if (categoryId) {
      (window as any).intakeqCategoryId = categoryId;
    }

    // Create and load the IntakeQ script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://intakeq.com/js/widget.min.js?1";
    script.onload = () => {
      console.log('IntakeQ script loaded successfully');
    };
    script.onerror = () => {
      console.error('IntakeQ script failed to load');
    };
    document.head.appendChild(script);

    // Cleanup function to remove script on unmount
    return () => {
      const existingScript = document.querySelector('script[src="https://intakeq.com/js/widget.min.js?1"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      // Clean up IntakeQ configuration
      delete (window as any).intakeqServiceId;
      delete (window as any).intakeqCategoryId;
      delete (window as any).intakeqPackageId;
      delete (window as any).intakeqLocationId;
      delete (window as any).intakeqGroupId;
      delete (window as any).intakeqClientArea;
    };
  }, [serviceId, categoryId, packageId, locationId, groupId, clientArea]);

  return (
    <div className="w-full">
      <div 
        id="intakeq" 
        style={{ maxWidth: "720px", width: "100%" }}
        className="mx-auto"
      />
    </div>
  );
};

export default IntakeQWidget;