import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";
import GoogleMapPhoenix from "./GoogleMapPhoenix";

const ContactWithMap = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "(602) 688-9825",
      action: "tel:+1-602-688-9825",
      description: "Available 7 days a week"
    },
    {
      icon: Mail,
      title: "Email Us", 
      info: "info@staydrippediv.com",
      action: "mailto:info@staydrippediv.com",
      description: "We respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Availability",
      info: "Same-day appointments",
      action: null,
      description: "Flexible scheduling options"
    },
    {
      icon: MapPin,
      title: "Service Area",
      info: "Greater Phoenix Metro",
      action: null,
      description: "Mobile service to your location"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-4 bg-primary/5 text-primary border-primary/20"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contact Us &{" "}
            <span className="bg-gradient-to-r from-primary to-brand-teal bg-clip-text text-transparent">
              Service Areas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to book your treatment? Get in touch with our team or view our service areas below.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <Card 
              key={index}
              className="p-6 text-center border border-border/30 bg-background/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-large transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-brand-teal/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              {item.action ? (
                <a 
                  href={item.action}
                  className="text-primary hover:underline font-medium block mb-1"
                >
                  {item.info}
                </a>
              ) : (
                <div className="text-foreground font-medium mb-1">{item.info}</div>
              )}
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information Only */}
          <div>
            <Card className="border border-border/30 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Call Us</h4>
                      <p className="text-muted-foreground">(602) 688-9825</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email Us</h4>
                      <p className="text-muted-foreground">info@staydripped.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Business Hours</h4>
                      <p className="text-muted-foreground">7 Days a Week, 8am - 8pm</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Service Areas</h3>
            <GoogleMapPhoenix />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithMap;