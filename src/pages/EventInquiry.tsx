import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

const EventInquiry = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    eventDate: "",
    guestCount: "",
    eventLocation: "",
    services: "",
    budget: "",
    details: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.inquiryType || !formData.guestCount) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Inquiry submitted!",
      description: "Thank you for your inquiry! We will contact you within 24 hours to discuss your event needs."
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      eventDate: "",
      guestCount: "",
      eventLocation: "",
      services: "",
      budget: "",
      details: ""
    });
  };

  return (
    <>
      <Helmet>
        <title>Event & Corporate Inquiry | Stay Dripped IV & Wellness Co.</title>
        <meta 
          name="description" 
          content="Event and corporate IV therapy services in Scottsdale, AZ. Professional wellness services for events, corporate retreats, and group bookings." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Event & Corporate Inquiry
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional IV therapy services for events, corporate wellness programs, and group bookings in Scottsdale and surrounding areas.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Submit Your Inquiry
                </h2>
                <p className="text-lg text-muted-foreground">
                  Let us know about your event or corporate wellness needs and we'll create a customized proposal for your group.
                </p>
              </div>

              <Card className="border-2 border-border/50 shadow-xl">
                <CardContent className="p-8 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          First Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          Last Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone Number <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">
                          Inquiry Type <span className="text-destructive">*</span>
                        </Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="corporate-wellness">Corporate Wellness Program</SelectItem>
                            <SelectItem value="private-event">Private Event</SelectItem>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="bachelor-bachelorette">Bachelor/Bachelorette Party</SelectItem>
                            <SelectItem value="fitness-event">Fitness/Athletic Event</SelectItem>
                            <SelectItem value="conference">Conference/Trade Show</SelectItem>
                            <SelectItem value="retreat">Corporate Retreat</SelectItem>
                            <SelectItem value="festival">Festival/Public Event</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Preferred Event Date</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => handleInputChange("eventDate", e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="guestCount">
                          Estimated Guest Count <span className="text-destructive">*</span>
                        </Label>
                        <Select value={formData.guestCount} onValueChange={(value) => handleInputChange("guestCount", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Count" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5-10">5-10 people</SelectItem>
                            <SelectItem value="11-25">11-25 people</SelectItem>
                            <SelectItem value="26-50">26-50 people</SelectItem>
                            <SelectItem value="51-100">51-100 people</SelectItem>
                            <SelectItem value="100+">100+ people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="eventLocation">Event Location/Address</Label>
                      <Input
                        id="eventLocation"
                        value={formData.eventLocation}
                        onChange={(e) => handleInputChange("eventLocation", e.target.value)}
                        placeholder="Event venue or address"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="services">Services Interested In</Label>
                      <Textarea
                        id="services"
                        value={formData.services}
                        onChange={(e) => handleInputChange("services", e.target.value)}
                        placeholder="Which IV therapy services are you interested in for your event? (e.g., Hydration therapy, Energy boosters, Recovery treatments, etc.)"
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Budget Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1000">Under $1,000</SelectItem>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10000+">$10,000+</SelectItem>
                          <SelectItem value="custom">Custom/Let's Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="details">Additional Details</Label>
                      <Textarea
                        id="details"
                        value={formData.details}
                        onChange={(e) => handleInputChange("details", e.target.value)}
                        placeholder="Please provide any additional information about your event, special requirements, timing preferences, or questions you may have."
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EventInquiry;