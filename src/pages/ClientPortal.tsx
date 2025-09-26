import { Helmet } from 'react-helmet';
import ClientPortalWidget from '@/components/ClientPortalWidget';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Shield, 
  Clock, 
  User, 
  Calendar, 
  FileText, 
  Phone, 
  Heart,
  Star,
  Lock,
  CheckCircle
} from 'lucide-react';

const ClientPortal = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Book appointments 24/7 with real-time availability"
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Access your complete treatment history and medical notes"
    },
    {
      icon: User,
      title: "Profile Management",
      description: "Update your information and preferences anytime"
    },
    {
      icon: Heart,
      title: "Wellness Tracking",
      description: "Monitor your progress and wellness journey"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "HIPAA-compliant platform protecting your health data"
    },
    {
      icon: Phone,
      title: "Direct Communication",
      description: "Message your care team directly through the portal"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Client Portal | Patient Login | Stay Dripped IV & Wellness Co.</title>
        <meta 
          name="description" 
          content="Access your Stay Dripped client portal. Book appointments, view treatment history, manage your wellness profile, and communicate with your care team securely online." 
        />
        <meta name="keywords" content="client portal Scottsdale, patient login Phoenix, IV therapy booking, medical records access, wellness portal Arizona, secure health platform" />
        <link rel="canonical" href="https://staydrippediv.com/client-portal" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-brand-teal/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-brand-teal/10 rounded-full blur-3xl animate-pulse-soft" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge 
            variant="outline" 
            className="mb-6 bg-gradient-to-r from-primary/10 to-brand-teal/10 text-primary border-primary/20 backdrop-blur-sm animate-fade-in"
          >
            <Lock className="w-4 h-4 mr-2" />
            Secure Client Portal
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
            Your Wellness
            <span className="block bg-gradient-to-r from-primary via-brand-teal to-primary bg-clip-text text-transparent animate-shimmer bg-300%">
              Dashboard
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up mb-8">
            Access your personalized wellness hub. Book treatments, track your progress, 
            and manage your health journey all in one secure location.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>24/7 Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Secure Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Our comprehensive portal gives you complete control over your wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 border border-border/30 hover:border-primary/20 hover:shadow-glow-primary transition-all duration-300 bg-background/50 backdrop-blur-sm animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-brand-teal/10 border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Widget Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientPortalWidget />
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8 bg-background/50 backdrop-blur-sm border border-border/30">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Phone className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Need Help?</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you navigate your client portal and answer any questions about your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Call Support: (602) 688-9825
              </Button>
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Available 24/7 for emergencies
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ClientPortal;