import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const RegulatoryUpdates = () => {
  const updates = [
    {
      date: "December 2024",
      title: "Arizona State Peptide Therapy Guidelines Updated",
      type: "State Regulation",
      description: "New guidelines for peptide therapy administration and patient eligibility requirements.",
      status: "Implemented",
      impact: "Enhanced patient screening protocols now in place"
    },
    {
      date: "October 2024", 
      title: "FDA Guidance on Compounded Peptides",
      type: "Federal Guidance",
      description: "Updated FDA guidance on the compounding and distribution of peptide therapeutics.",
      status: "Monitoring",
      impact: "Reviewing compliance with updated federal recommendations"
    },
    {
      date: "August 2024",
      title: "Payment Processing Compliance Update",
      type: "Financial Regulation",
      description: "Enhanced requirements for high-risk medical transaction processing.",
      status: "Implemented",
      impact: "Upgraded to compliant payment gateway with enhanced security"
    }
  ];

  const statusColors = {
    "Implemented": "bg-green-100 text-green-800",
    "Monitoring": "bg-yellow-100 text-yellow-800",
    "Pending": "bg-blue-100 text-blue-800"
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-4">
              REGULATORY COMPLIANCE UPDATES
            </Badge>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Staying Current with Peptide Regulations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We continuously monitor federal and state regulations to ensure full compliance with evolving peptide therapy guidelines.
              Our commitment to regulatory adherence protects both our practice and our patients.
            </p>
          </div>

          {/* Updates Timeline */}
          <div className="space-y-6 mb-12">
            {updates.map((update, index) => (
              <div key={index} className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {update.type}
                      </Badge>
                      <Badge className={`text-xs ${statusColors[update.status as keyof typeof statusColors]}`}>
                        {update.status}
                      </Badge>
                      <span className="text-sm text-gray-500">{update.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {update.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {update.description}
                    </p>
                    
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm text-blue-800">
                        <strong>Impact:</strong> {update.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance Promise */}
          <div className="bg-white rounded-xl p-8 shadow-lg border">
            <div className="text-center mb-6">
              <span className="text-3xl mb-4 block">🛡️</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Compliance Commitment
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Continuous Monitoring
                </h4>
                <p className="text-sm text-gray-600 ml-6">
                  We actively monitor FDA, DEA, and state medical board updates to ensure ongoing compliance 
                  with all applicable regulations governing peptide therapy.
                </p>
                
                <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Professional Training
                </h4>
                <p className="text-sm text-gray-600 ml-6">
                  Our medical staff receives regular training on regulatory updates and compliance requirements 
                  to maintain the highest standards of care.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Quality Assurance
                </h4>
                <p className="text-sm text-gray-600 ml-6">
                  All peptides are sourced from FDA-registered compounding pharmacies and undergo 
                  rigorous quality testing before administration.
                </p>
                
                <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Patient Safety
                </h4>
                <p className="text-sm text-gray-600 ml-6">
                  Comprehensive patient screening, informed consent, and adverse event reporting 
                  protocols ensure maximum safety and regulatory compliance.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-6 border-t">
              <p className="text-sm text-gray-600 mb-4">
                Questions about our regulatory compliance or recent updates?
              </p>
              <Button variant="outline" asChild>
                <a href="tel:+1-602-688-9825">Contact Compliance Team</a>
              </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 text-center mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Stay Informed on Regulatory Changes
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to receive important updates about peptide therapy regulations and compliance changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryUpdates;