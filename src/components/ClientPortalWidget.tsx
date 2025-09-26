import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { User, Shield, Calendar, FileText } from 'lucide-react';

const ClientPortalWidget = () => {
  useEffect(() => {
    // Load IntakeQ widget script
    const script = document.createElement('script');
    script.innerHTML = `
      (function (c) {
        window.intakeq="68b14c4e0b7b143488664c75";
        window.intakeqClientArea=true; 
        var i = c.createElement("script");
        i.type = "text/javascript";
        i.async = true;
        i.src = "https://intakeq.com/js/widget.min.js?1";
        document.head.appendChild(i);
      })(document);
    `;
    document.head.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      const scripts = document.head.querySelectorAll('script[src*="intakeq.com"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="p-8 bg-background/50 backdrop-blur-sm border border-border/30">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <User className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Client Portal</h2>
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <p className="text-muted-foreground">
            Access your wellness journey, book appointments, and manage your health records securely.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4 rounded-xl bg-muted/30">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-foreground mb-1">Book Appointments</h3>
            <p className="text-sm text-muted-foreground">Schedule your next treatment</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-muted/30">
            <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-foreground mb-1">Health Records</h3>
            <p className="text-sm text-muted-foreground">Access your treatment history</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-muted/30">
            <User className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-foreground mb-1">Profile Management</h3>
            <p className="text-sm text-muted-foreground">Update your information</p>
          </div>
        </div>

        {/* IntakeQ Widget Container */}
        <div id="intakeq" className="max-w-full w-full mx-auto min-h-[400px] rounded-lg overflow-hidden"></div>
      </Card>
    </div>
  );
};

export default ClientPortalWidget;