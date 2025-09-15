import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PaymentComplianceProps {
  onProceedToPayment?: () => void;
  showFullDisclosure?: boolean;
}

const PaymentCompliance = ({ onProceedToPayment, showFullDisclosure = true }: PaymentComplianceProps) => {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 space-y-4">
      
      {/* Header */}
      <div className="text-center">
        <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-3">
          HIGH-RISK PAYMENT PROCESSING NOTICE
        </Badge>
        <h3 className="text-lg font-semibold text-gray-800">
          Payment Compliance & Security Information
        </h3>
      </div>

      {showFullDisclosure && (
        <>
          {/* Payment Processing Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-orange-600">🔒</span>
                Secure Processing
              </h4>
              <p className="text-sm text-gray-700">
                All payments are processed through high-risk compliant payment gateways with 
                enhanced security protocols specifically designed for medical treatments.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-orange-600">📋</span>
                Verification Required
              </h4>
              <p className="text-sm text-gray-700">
                Additional identity and age verification may be required for peptide therapy payments 
                to comply with federal and state regulations.
              </p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-lg p-4 border border-orange-200">
            <h4 className="font-semibold text-gray-800 mb-3">Accepted Payment Methods</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center p-3 bg-gray-50 rounded">
                <span className="text-2xl block mb-1">💳</span>
                <span className="text-xs text-gray-600">Credit Cards</span>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded">
                <span className="text-2xl block mb-1">🏦</span>
                <span className="text-xs text-gray-600">ACH Transfer</span>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded">
                <span className="text-2xl block mb-1">💰</span>
                <span className="text-xs text-gray-600">HSA/FSA</span>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded">
                <span className="text-2xl block mb-1">💵</span>
                <span className="text-xs text-gray-600">Cash/Check</span>
              </div>
            </div>
          </div>

          {/* Compliance Requirements */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <span>⚠️</span>
              Payment Processing Requirements
            </h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                Must be 18+ years old with valid government-issued ID
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                Payment method must match patient name and billing address
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                Additional verification may be required for certain peptides
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                Medical consultation required before payment processing
              </li>
            </ul>
          </div>

          {/* Refund Policy */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Refund & Cancellation Policy</h4>
            <div className="text-sm text-blue-700 space-y-1">
              <p>
                <strong>Consultations:</strong> Full refund if cancelled 24+ hours in advance
              </p>
              <p>
                <strong>Treatments:</strong> Partial refund available up to 48 hours before scheduled service
              </p>
              <p>
                <strong>Compounded Products:</strong> No refunds once prepared due to FDA regulations
              </p>
            </div>
          </div>
        </>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        {onProceedToPayment && (
          <Button onClick={onProceedToPayment} className="flex-1">
            I Understand - Proceed to Payment
          </Button>
        )}
        <Button variant="outline" className="flex-1" asChild>
          <a href="tel:+1-602-688-9825">Questions? Call Us</a>
        </Button>
      </div>

      {/* Fine Print */}
      <div className="text-center pt-3 border-t border-orange-200">
        <p className="text-xs text-gray-600">
          By proceeding with payment, you acknowledge understanding of our compliance requirements 
          and agree to our terms of service for peptide therapy treatments.
        </p>
      </div>
    </div>
  );
};

export default PaymentCompliance;