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
    { icon: "⭐", text: "5.0/5 Patient Rating" },
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
