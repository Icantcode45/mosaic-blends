const TrustBarSection = () => {
  const companies = [
    "Slack", "Dropbox", "Spotify", "Amazon", "Netflix", "Stripe"
  ];

  return (
    <section className="py-10 border-y border-border bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {companies.map((company, index) => (
            <div key={index} className="text-center text-muted-foreground font-semibold text-sm hover:text-foreground transition-colors">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;
