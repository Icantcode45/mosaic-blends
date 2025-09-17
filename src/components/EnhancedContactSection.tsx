import { Button } from "@/components/ui/button";
import phoneIcon from "@/assets/icons/phone-icon.png";
import ivBagIcon from "@/assets/iv-bag-immune-boost.png";
import chatIcon from "@/assets/icons/chat-icon.png";
import scheduleIcon from "@/assets/icons/schedule-icon.png";
import locationIcon from "@/assets/icons/location-icon.png";
import paymentIcon from "@/assets/icons/payment-icon.png";
import insuranceIcon from "@/assets/icons/insurance-icon.png";
import privacyIcon from "@/assets/icons/privacy-icon.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EnhancedContactSection = () => {
  const contactMethods = [
    {
      icon: phoneIcon,
      title: "Call Us",
      primary: "(602) 688-9825",
      secondary: "24/7 Emergency Line",
      description: "Speak directly with our medical team",
      iconSize: { width: 24, height: 24 }
    },
    {
      icon: ivBagIcon, 
      title: "Email Us",
      primary: "info@staydrippediv.com",
      secondary: "Response within 2 hours",
      description: "General inquiries and scheduling",
      iconSize: { width: 24, height: 24 }
    },
    {
      icon: chatIcon,
      title: "Live Chat",
      primary: "Available Now",
      secondary: "Average response: 30 seconds",
      description: "Instant support via our website"
    },
    {
      icon: chatIcon,
      title: "Text Us",
      primary: "(602) 688-9825",
      secondary: "SMS available 7am-9pm",
      description: "Quick questions and booking"
    }
  ];

  const serviceAreas = [
    { area: "Scottsdale", zones: ["Old Town", "North Scottsdale", "South Scottsdale", "McDowell Mountain"] },
    { area: "Phoenix", zones: ["Central Phoenix", "Ahwatukee", "Arcadia", "Biltmore"] },
    { area: "Paradise Valley", zones: ["All areas"] },
    { area: "Tempe", zones: ["ASU Area", "Downtown Tempe", "South Tempe"] },
    { area: "Mesa", zones: ["East Mesa", "Central Mesa", "Las Sendas"] },
    { area: "Chandler", zones: ["Downtown Chandler", "Ahwatukee Foothills"] },
    { area: "Gilbert", zones: ["Heritage District", "Agritopia", "Seville"] },
    { area: "Queen Creek", zones: ["San Tan Valley", "Queen Creek Proper"] }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 9:00 PM", note: "Full service available" },
    { day: "Saturday", hours: "8:00 AM - 8:00 PM", note: "Mobile services only" },
    { day: "Sunday", hours: "9:00 AM - 6:00 PM", note: "Emergency calls available" },
    { day: "Holidays", hours: "Limited Hours", note: "Call for availability" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div id="book" className="hidden" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary text-primary-foreground">
            GET IN TOUCH
          </Badge>
          <h2 className="font-heading text-4xl sm:text-5xl tracking-tight mb-4">
            Ready to Feel Your Best?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you need immediate care, want to learn more about our services, or have questions about membership, our team is here to help.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in">
              <div className="mb-4">
                <img src={method.icon} alt={method.title} className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
              <div className="text-primary font-medium mb-1">{method.primary}</div>
              <div className="text-sm text-success mb-2">{method.secondary}</div>
              <p className="text-xs text-muted-foreground">{method.description}</p>
            </Card>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <Input placeholder="Enter your first name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <Input placeholder="Enter your last name" required />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <Input type="tel" placeholder="(555) 123-4567" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Interested In</label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option>Select a service...</option>
                  <option>IV Hydration Therapy</option>
                  <option>NAD+ Treatment</option>
                  <option>Weight Management</option>
                  <option>Sexual Wellness</option>
                  <option>Telehealth Consultation</option>
                  <option>Membership Information</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Location</label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option>Select location...</option>
                  <option>Mobile Service (Home/Office)</option>
                  <option>Scottsdale Clinic</option>
                  <option>Phoenix Location</option>
                  <option>Telehealth (Virtual)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  rows={4} 
                  placeholder="Tell us about your health goals, any questions, or special requests..." 
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" className="mt-1" required />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  I consent to receive communications about appointments, services, and health information. 
                  I understand this is not a medical emergency line.*
                </label>
              </div>

              <Button className="w-full" size="lg">
                Request Appointment
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Business Hours */}
            <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <img src={scheduleIcon} alt="Schedule" className="w-6 h-6" />
              Business Hours
            </h3>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <div className="font-medium">{schedule.day}</div>
                      <div className="text-sm text-muted-foreground">{schedule.note}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-primary">{schedule.hours}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-success/10 rounded-lg">
                <p className="text-sm text-success font-medium">
                  🚨 Emergency services available 24/7 for existing patients
                </p>
              </div>
            </Card>

            {/* Service Areas */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <img 
                  src={locationIcon} 
                  alt="Location" 
                  className="w-6 h-6" 
                  width="24" 
                  height="24"
                  loading="lazy"
                />
                Service Areas
              </h3>
              <div className="mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.8778225258!2d-112.59334179999999!3d33.448457400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus"
                  width="100%"
                  height="192"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg border border-gray-200"
                  title="Phoenix Metro Area Service Map"
                ></iframe>
              </div>
              <div className="space-y-4">
                {serviceAreas.map((location, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-primary mb-2">{location.area}</h4>
                    <div className="flex flex-wrap gap-1">
                      {location.zones.map((zone, zoneIndex) => (
                        <Badge key={zoneIndex} variant="secondary" className="text-xs">
                          {zone}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-sm">
                  <strong>Don't see your area?</strong> We're expanding! Call us to check availability.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-semibold text-center mb-6">Frequently Requested Information</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3">
                <img 
                  src={paymentIcon} 
                  alt="Payment" 
                  className="w-8 h-8" 
                  width="32" 
                  height="32"
                  loading="lazy"
                />
              </div>
              <h4 className="font-medium mb-2">Payment Options</h4>
              <p className="text-sm text-muted-foreground">
                We accept all major credit cards, HSA/FSA, and offer flexible payment plans for memberships.
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3">
                <img 
                  src={insuranceIcon} 
                  alt="Insurance" 
                  className="w-8 h-8" 
                  width="32" 
                  height="32"
                  loading="lazy"
                />
              </div>
              <h4 className="font-medium mb-2">Insurance</h4>
              <p className="text-sm text-muted-foreground">
                While we don't bill insurance directly, we provide detailed receipts for potential reimbursement.
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3">
                <img src={privacyIcon} alt="Privacy" className="w-8 h-8" />
              </div>
              <h4 className="font-medium mb-2">Privacy</h4>
              <p className="text-sm text-muted-foreground">
                All consultations and treatments follow strict HIPAA guidelines to protect your health information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactSection;
