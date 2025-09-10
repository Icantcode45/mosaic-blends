import { Badge } from "@/components/ui/badge";

const ComplianceDisclaimers = () => {
  return (
    <section className="bg-yellow-50 border-t border-b border-yellow-200 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Main Compliance Header */}
          <div className="text-center">
            <Badge variant="secondary" className="bg-red-100 text-red-800 mb-4">
              IMPORTANT REGULATORY INFORMATION
            </Badge>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Peptide Therapy Compliance & Regulatory Status
            </h3>
          </div>

          {/* Compliance Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* FDA Status */}
            <div className="bg-white rounded-lg p-6 border border-yellow-300 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">FDA Status</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    These peptides are compounded medications and have not been approved by the FDA. 
                    They are not intended to diagnose, treat, cure, or prevent any disease.
                  </p>
                </div>
              </div>
            </div>

            {/* Age Restriction */}
            <div className="bg-white rounded-lg p-6 border border-yellow-300 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔞</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Age Restriction</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Must be 18+ years old. Age verification required before treatment. 
                    Certain peptides may have additional age or health requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Prescription Required */}
            <div className="bg-white rounded-lg p-6 border border-yellow-300 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👨‍⚕️</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Medical Supervision</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    All treatments require medical consultation and prescription from licensed healthcare providers. 
                    Not suitable for everyone.
                  </p>
                </div>
              </div>
            </div>

            {/* State Compliance */}
            <div className="bg-white rounded-lg p-6 border border-yellow-300 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">State Regulations</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Compliant with Arizona state regulations for compounded medications. 
                    Services may not be available in all states.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Processing */}
            <div className="bg-white rounded-lg p-6 border border-yellow-300 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💳</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">High-Risk Processing</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Payments processed through high-risk compliant gateways. 
                    Additional verification may be required for certain transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Status */}
            <div className="bg-white rounded-lg p-6 border border-yellow-300 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔬</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Research Status</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Many peptides are still under clinical investigation. 
                    Results and safety profiles may vary between individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
              <span>⚖️</span>
              Legal Disclaimer & Important Notice
            </h4>
            <div className="space-y-2 text-sm text-red-700">
              <p>
                <strong>Medical Disclaimer:</strong> Information provided is for educational purposes only and does not constitute medical advice. 
                Consult with a qualified healthcare provider before starting any treatment.
              </p>
              <p>
                <strong>No Guarantees:</strong> Individual results may vary. No treatment outcomes are guaranteed. 
                Side effects and adverse reactions are possible with any medical treatment.
              </p>
              <p>
                <strong>Regulatory Changes:</strong> Peptide regulations are subject to change. We monitor federal and state updates 
                and will adjust our offerings accordingly to maintain compliance.
              </p>
            </div>
          </div>

          {/* Contact for Questions */}
          <div className="text-center bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              Have questions about regulations or compliance? Contact our medical team at 
              <a href="tel:+1-602-688-9825" className="font-semibold hover:underline ml-1">(602) 688-9825</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceDisclaimers;