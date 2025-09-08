const EnhancedStatsSection = () => {
  return (
    <>
      {/* Primary Stats Section */}
      <section className="py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Proven Results, Trusted Care
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real metrics from real patients who trust us with their wellness journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl xl:text-5xl text-gray-900">
                <span>More than </span>
                <span className="font-heading font-bold bg-gradient-orange">16,200 </span>
                <span>successful treatments delivered</span>
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl xl:text-5xl text-gray-900">
                <span>Achieved </span>
                <span className="font-heading font-bold bg-gradient-purple">117% </span>
                <span>growth in patient satisfaction</span>
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl xl:text-5xl text-gray-900">
                <span>Over </span>
                <span className="font-heading font-bold bg-gradient-blue">82% </span>
                <span>of patients book follow-up visits</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Performance Metrics */}
      <section className="relative pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-semibold text-4xl sm:text-5xl text-foreground">
              Excellence in Every Metric
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              From patient satisfaction to clinical outcomes, we measure what matters most for your health and wellness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-10 shadow-elev-1 border border-gray-100">
              <div className="text-center font-heading font-extrabold text-7xl bg-gradient-blue mb-4">98%</div>
              <h3 className="text-center font-semibold text-xl mb-2">Patient Satisfaction Rate</h3>
              <p className="text-center text-muted-foreground text-sm">
                Consistently rated excellent for care quality, professionalism, and results by our patients.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-elev-1 border border-gray-100">
              <div className="text-center font-heading font-extrabold text-7xl bg-gradient-green mb-4">4.9</div>
              <h3 className="text-center font-semibold text-xl mb-2">Average Review Rating</h3>
              <p className="text-center text-muted-foreground text-sm">
                Top-rated wellness provider with thousands of 5-star reviews across all platforms.
              </p>
            </div>
          </div>

          {/* Additional Metrics Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-elev-1">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm font-medium text-foreground mb-1">Licensed Providers</div>
              <div className="text-xs text-muted-foreground">RNs, NPs, and MDs</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-elev-1">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm font-medium text-foreground mb-1">Concierge Support</div>
              <div className="text-xs text-muted-foreground">Always available</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-elev-1">
              <div className="text-3xl font-bold text-primary mb-2">2Hr</div>
              <div className="text-sm font-medium text-foreground mb-1">Average Response</div>
              <div className="text-xs text-muted-foreground">Same-day booking</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-elev-1">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm font-medium text-foreground mb-1">Service Locations</div>
              <div className="text-xs text-muted-foreground">Phoenix metro area</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth Stats */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Growing with Our Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As Arizona's premier mobile wellness company, we're proud of our growth and commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-orange mb-3">300%</div>
              <h3 className="font-semibold text-lg mb-2">Year-over-Year Growth</h3>
              <p className="text-sm text-muted-foreground">Expanding to serve more patients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-purple mb-3">50K+</div>
              <h3 className="font-semibold text-lg mb-2">Total Treatments</h3>
              <p className="text-sm text-muted-foreground">Since launching in Arizona</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-blue mb-3">95%</div>
              <h3 className="font-semibold text-lg mb-2">Patient Retention</h3>
              <p className="text-sm text-muted-foreground">Return for ongoing care</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-green mb-3">4.5★</div>
              <h3 className="font-semibold text-lg mb-2">Net Promoter Score</h3>
              <p className="text-sm text-muted-foreground">Patients recommend us</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default EnhancedStatsSection;
