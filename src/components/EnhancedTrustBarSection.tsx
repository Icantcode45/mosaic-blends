const EnhancedTrustBarSection = () => {
  const companies = [
    { name: "Slack", logo: "💬" },
    { name: "Dropbox", logo: "📦" },
    { name: "Spotify", logo: "🎵" },
    { name: "Amazon", logo: "📦" },
    { name: "Netflix", logo: "🎬" },
    { name: "Stripe", logo: "💳" },
    { name: "Uber", logo: "🚗" },
    { name: "Airbnb", logo: "🏠" }
  ];

  const trustIndicators = [
    { icon: "⭐", text: "4.9/5 Patient Rating" },
    { icon: "🏥", text: "Licensed Medical Professionals" },
    { icon: "🔒", text: "HIPAA Compliant" },
    { icon: "📱", text: "Same-Day Availability" },
    { icon: "🚛", text: "Mobile Service Area" },
    { icon: "��", text: "FDA-Approved Products" }
  ];

  return (
    <>
      {/* Company Trust Bar */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Trusted by teams at
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center">
            {companies.map((company, index) => (
              <div key={index} className="group text-center">
                <div className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {company.logo}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {company.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-center">
                <span className="text-lg">{indicator.icon}</span>
                <span className="text-sm font-medium text-muted-foreground">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EnhancedTrustBarSection;
