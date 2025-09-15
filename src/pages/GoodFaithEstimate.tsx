import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet";
import { useToast } from "@/hooks/use-toast";

interface ServiceOption {
  id: string;
  title: string;
  price: number;
  selected: boolean;
}

const GoodFaithEstimate = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    preferredDate: '',
    insuranceStatus: '',
    additionalInfo: ''
  });

  const [services, setServices] = useState<ServiceOption[]>([
    { id: 'iv-therapy', title: 'IV Drip Therapy', price: 149, selected: false },
    { id: 'nad-therapy', title: 'NAD+ IV Therapy', price: 150, selected: false },
    { id: 'peptides', title: 'Peptide Therapy', price: 120, selected: false },
    { id: 'weight-loss', title: 'Weight Management', price: 175, selected: false },
    { id: 'hormone-therapy', title: 'Hormone Therapy', price: 200, selected: false },
    { id: 'consultation', title: 'Consultation', price: 99, selected: false }
  ]);

  const { toast } = useToast();

  const toggleService = (serviceId: string) => {
    setServices(services.map(service => 
      service.id === serviceId 
        ? { ...service, selected: !service.selected }
        : service
    ));
  };

  const calculateTotal = () => {
    return services.reduce((total, service) => 
      service.selected ? total + service.price : total, 0
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedServices = services.filter(service => service.selected);
    
    if (selectedServices.length === 0) {
      toast({
        title: "Please select services",
        description: "Select at least one service for your estimate.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('GFE Request:', { formData, selectedServices, total: calculateTotal() });
    
    toast({
      title: "Request submitted successfully",
      description: "We'll send your Good Faith Estimate within 3 business days.",
    });

    // Reset form
    setFormData({
      firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '',
      preferredDate: '', insuranceStatus: '', additionalInfo: ''
    });
    setServices(services.map(service => ({ ...service, selected: false })));
  };

  return (
    <>
      <Helmet>
        <title>Good Faith Estimate | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Request a Good Faith Estimate for medical services. Know your costs upfront and understand your billing rights under the No Surprises Act." />
        <link rel="canonical" href="https://staydrippediv.com/good-faith-estimate" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Good Faith Estimate | Stay Dripped IV & Wellness Co." />
        <meta property="og:description" content="Request a Good Faith Estimate for medical services. Know your costs upfront and understand your billing rights under the No Surprises Act." />
        <meta property="og:url" content="https://staydrippediv.com/good-faith-estimate" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link to="/compliance" className="text-primary hover:text-secondary font-medium mb-5 inline-block">
            ← Back to Compliance
          </Link>
          
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Good Faith Estimate</h1>
            <p className="text-lg text-muted-foreground mb-5">Know Your Healthcare Costs Upfront</p>
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold text-sm">
              No Surprises Act Compliant
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm">
                <img src="/lovable-uploads/f118b4cb-2d58-44d5-b19a-4aae6422477b.png" alt="" className="w-6 h-6" />
              </div>
              Your Right to a Good Faith Estimate
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Under the federal No Surprises Act, you have the right to receive a Good Faith Estimate (GFE) of expected charges for medical services when you're uninsured or not using your insurance.
            </p>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 mb-6">
              <h3 className="text-yellow-800 font-semibold mb-2 flex items-center gap-2">
                <img src="/lovable-uploads/a2316986-ad33-4422-b338-f02dcd158a69.png" alt="" className="w-5 h-5 inline mr-1" /> Important Information
              </h3>
              <p className="text-yellow-700">
                A Good Faith Estimate shows the costs of items and services that are reasonably expected for your healthcare needs. The estimate is based on information known at the time the estimate was created.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Your Rights Under the No Surprises Act</h3>
              <div className="space-y-3">
                {[
                  "Request a written estimate of costs before scheduling any service",
                  "Receive estimates within 3 business days for scheduled services",
                  "Receive estimates within 1 business day for services scheduled within 3 days",
                  "Get an itemized list of expected charges",
                  "Dispute bills that are substantially more than your estimate",
                  "Use the patient-provider dispute resolution process"
                ].map((right, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                    <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-muted-foreground">{right}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm">
                ⚖️
              </div>
              When You Can Dispute a Bill
            </h2>
            
            <p className="text-muted-foreground mb-4">You can dispute a bill if:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>The final bill is at least <strong>$400 more</strong> than your Good Faith Estimate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>You received the Good Faith Estimate at least 3 business days before your service (or 1 business day for urgent scheduling)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>The services were provided as described in the estimate</span>
              </li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="text-blue-800 font-semibold mb-2 flex items-center gap-2">
                🛡️ Dispute Process
              </h3>
              <p className="text-blue-700">
                If your bill qualifies for dispute, you can use the patient-provider dispute resolution process. This is a neutral process to determine the appropriate amount you should pay.
              </p>
            </div>
          </div>

          {/* Request Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-8">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm">
                📋
              </div>
              Request Your Good Faith Estimate
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block font-semibold mb-2 text-foreground">First Name *</label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block font-semibold mb-2 text-foreground">Last Name *</label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block font-semibold mb-2 text-foreground">Email Address *</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-semibold mb-2 text-foreground">Phone Number *</label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block font-semibold mb-2 text-foreground">Date of Birth *</label>
                <Input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full md:w-1/2"
                />
              </div>

              <div>
                <label htmlFor="preferredDate" className="block font-semibold mb-2 text-foreground">Preferred Service Date</label>
                <Input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full md:w-1/2"
                />
              </div>

              <div>
                <label className="block font-semibold mb-4 text-foreground">Select Services for Estimate *</label>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                        service.selected
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 bg-white hover:border-primary hover:shadow-md'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={service.selected}
                        onChange={() => toggleService(service.id)}
                        className="mr-2"
                      />
                      <div className="font-semibold text-foreground">{service.title}</div>
                      <div className="text-primary font-bold">Starting at ${service.price}</div>
                    </div>
                  ))}
                </div>
                {calculateTotal() > 0 && (
                  <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                    <div className="text-lg font-bold text-primary">
                      Estimated Total: ${calculateTotal()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      *Final cost may vary based on individual assessment and treatment plan
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="insuranceStatus" className="block font-semibold mb-2 text-foreground">Insurance Status *</label>
                <select
                  id="insuranceStatus"
                  name="insuranceStatus"
                  value={formData.insuranceStatus}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                >
                  <option value="">Select insurance status</option>
                  <option value="uninsured">Uninsured</option>
                  <option value="not-using-insurance">Have insurance but not using it</option>
                  <option value="self-pay">Self-pay preference</option>
                </select>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block font-semibold mb-2 text-foreground">Additional Information or Specific Questions</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Please describe any specific services you're interested in or questions about pricing..."
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                />
              </div>

              <div className="text-center pt-6">
                <Button type="submit" size="lg" className="px-8 py-3">
                  Submit Request for Good Faith Estimate
                </Button>
              </div>
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className="bg-white rounded-2xl p-8 mt-8 shadow-lg border">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Other Ways to Request an Estimate</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-5 text-center">
                <h4 className="font-semibold text-primary mb-2">Phone</h4>
                <p className="text-foreground font-medium">(602) 688-9825</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 text-center">
                <h4 className="font-semibold text-primary mb-2">Email</h4>
                <p className="text-foreground font-medium">billing@staydrippediv.com</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 text-center">
                <h4 className="font-semibold text-primary mb-2">Response Time</h4>
                <p className="text-foreground font-medium">Within 3 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoodFaithEstimate;