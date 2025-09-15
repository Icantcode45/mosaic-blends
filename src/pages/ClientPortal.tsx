import { Helmet } from "react-helmet";
import IntakeQWidget from "@/components/IntakeQWidget";

const ClientPortal = () => {
  return (
    <>
      <Helmet>
        <title>Client Portal - Manage Appointments | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Returning clients can access their appointment portal to manage, reschedule, or view upcoming IV therapy and wellness appointments." />
        <link rel="canonical" href="https://staydrippediv.com/client-portal" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-light/60 via-secondary/10 to-brand-blue/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Client Portal
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Welcome back! Access your appointment portal to manage, reschedule, or view your upcoming 
              IV therapy and wellness appointments.
            </p>
          </div>
        </section>

        {/* Client Portal Widget */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-3xl shadow-xl border border-border/20 p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Appointment Management
                </h2>
                <p className="text-muted-foreground">
                  Log in to view and manage your appointments, update your information, 
                  and access your treatment history.
                </p>
              </div>
              
              <IntakeQWidget clientArea={true} />
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Need Help?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you're having trouble accessing your account or need assistance with your appointments, 
              our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1-602-688-9825" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Call (602) 688-9825
              </a>
              <a 
                href="mailto:info@staydrippediv.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-xl hover:bg-secondary/90 transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ClientPortal;