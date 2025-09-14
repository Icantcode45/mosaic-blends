import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Compliance = () => {
  useEffect(() => {
    // Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-44WEBDZB6F';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-44WEBDZB6F');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Compliance, Privacy & Legal Disclaimers | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Comprehensive compliance information including HIPAA privacy practices, FDA disclosures, telehealth consent, and Arizona regulatory compliance." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://staydrippediv.com/compliance" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Compliance, Privacy & Legal Disclaimers | Stay Dripped IV & Wellness Co." />
        <meta property="og:description" content="Comprehensive compliance information including HIPAA privacy practices, FDA disclosures, telehealth consent, and Arizona regulatory compliance." />
        <meta property="og:url" content="https://staydrippediv.com/compliance" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-primary">
                Stay Dripped IV & Wellness Co.
              </Link>
              <Link to="/" className="text-primary hover:text-secondary font-medium transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Compliance, Privacy & Legal Disclaimers
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Complete information about our regulatory compliance, privacy practices, and legal requirements for mobile IV therapy and wellness services in Arizona.
              </p>
            </div>

            {/* Emergency Notice */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold mb-3">🚨 MEDICAL EMERGENCY</h2>
              <p className="text-lg">
                For medical emergencies, call <strong>911</strong> immediately. Our services are not for emergency medical care.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                "✅ HIPAA Compliant",
                "✅ Licensed NP/MD Supervision", 
                "✅ Good Faith Exam Required",
                "✅ FDA-Registered Pharmacy Sourcing",
                "✅ USP <797> Sterile Compounding",
                "✅ Arizona Board Oversight",
                "✅ CLIA-Certified Laboratory Testing",
                "✅ Arizona-Based Care Only"
              ].map((badge, index) => (
                <div key={index} className="bg-white border-2 border-green-500 rounded-lg p-4 text-center font-semibold text-green-700 text-sm">
                  {badge}
                </div>
              ))}
            </div>

            {/* HIPAA Privacy Compliance */}
            <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg border">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  🔒
                </div>
                HIPAA Privacy Compliance
              </h2>
              
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Stay Dripped IV & Wellness Co. complies with the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and applicable Arizona privacy laws. All Protected Health Information (PHI) is stored and transmitted using secure, encrypted systems with comprehensive safeguards.
                </p>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Our Privacy Protections</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>Administrative Safeguards:</strong> HIPAA-trained staff, designated Privacy Officer, access controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>Physical Safeguards:</strong> Locked facilities, secure workstations, device controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>Technical Safeguards:</strong> Encrypted storage and transmission, access logs, secure authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>Business Associate Agreements:</strong> All vendors handling PHI have signed HIPAA-compliant agreements</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Your Privacy Rights</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Access and review your medical records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Request amendments to your health information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Request restrictions on uses and disclosures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Choose how we communicate with you</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>File complaints with HHS Office for Civil Rights</span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground">
                  <strong>Complete details:</strong> <Link to="/privacy-practices" className="text-primary hover:underline">Download our Notice of Privacy Practices</Link>
                </p>
              </div>
            </section>

            {/* FDA Compliance & Product Disclosures */}
            <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg border">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-6">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white">
                  ⚕️
                </div>
                FDA Compliance & Product Disclosures
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Important FDA Disclosures</h3>
                  <p className="font-semibold text-foreground">
                    Many peptide therapies, NAD+ injections, and wellness treatments offered have not been evaluated or approved by the U.S. Food and Drug Administration (FDA) for the uses described.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Compounded Medications</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>All compounded medications are dispensed only when prescribed by a licensed provider</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Sourced exclusively from FDA-registered 503A compounding pharmacies (patient-specific) or 503B outsourcing facilities (office use)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>All compounding follows USP &lt;797&gt; standards for sterile preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>We do not offer products that are illegal to prescribe or compound for human use</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm font-semibold">
                    <strong>Medical Claims:</strong> We make no claims to diagnose, treat, cure, or prevent any disease unless supported by FDA-approved labeling or competent, reliable scientific evidence. Individual results vary and outcomes are not guaranteed.
                  </p>
                </div>
              </div>
            </section>

            {/* Arizona Medical Practice Compliance */}
            <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg border">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">
                  🏛️
                </div>
                Arizona Medical Practice Compliance
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Licensed Medical Supervision</h3>
                  <p className="text-muted-foreground">
                    All medical services are provided under the supervision of licensed Nurse Practitioners (NP), Physician Assistants (PA), and/or Medical Doctors (MD) in Arizona. Our practice operates under Arizona Board of Nursing and Arizona Medical Board oversight.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Good Faith Examination Requirement</h3>
                  <p className="text-muted-foreground mb-3">
                    Arizona law requires a Good Faith Examination before initiating any new treatment. This clinical assessment includes:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Review of medical history and current health status</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Assessment of treatment appropriateness and safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Discussion of risks, benefits, and alternatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Individualized treatment planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Informed consent documentation</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Service Area</h3>
                  <p className="text-muted-foreground">
                    Clinical services are provided only to clients located in Arizona. Telehealth patients must be physically located in Arizona during virtual consultations.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <div className="bg-gray-100 rounded-2xl p-8 text-center mb-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Compliance & Privacy Contact Information</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">HIPAA Privacy Officer</div>
                  <div className="font-semibold text-foreground">privacy@staydrippediv.com</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Compliance Questions</div>
                  <div className="font-semibold text-foreground">compliance@staydrippediv.com</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Main Phone</div>
                  <div className="font-semibold text-foreground">(602) 688-9825</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Business Address</div>
                  <div className="font-semibold text-foreground">Scottsdale, Arizona</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Link to="/good-faith-estimate" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-200 group">
                <h4 className="font-semibold text-primary group-hover:text-secondary mb-2">Good Faith Estimate</h4>
                <p className="text-muted-foreground text-sm">Request pricing estimates and understand your billing rights</p>
              </Link>
              <Link to="/privacy" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-200 group">
                <h4 className="font-semibold text-primary group-hover:text-secondary mb-2">Privacy Policy</h4>
                <p className="text-muted-foreground text-sm">Complete HIPAA privacy notice with patient rights and contact information</p>
              </Link>
              <Link to="/terms" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-200 group">
                <h4 className="font-semibold text-primary group-hover:text-secondary mb-2">Terms of Service</h4>
                <p className="text-muted-foreground text-sm">Website terms, service limitations, and legal agreements</p>
              </Link>
            </div>

            {/* Footer */}
            <div className="text-center pt-12 border-t border-gray-200">
              <p className="text-muted-foreground mb-4">
                © 2024 Stay Dripped IV & Wellness Co. – All Rights Reserved
              </p>
              <p className="text-sm text-muted-foreground">
                Licensed healthcare practice serving Arizona • Emergency? Call 911 • 
                <Link to="/compliance" className="text-primary hover:underline ml-1">Full Compliance Information</Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Compliance;