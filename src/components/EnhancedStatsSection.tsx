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
    </>
  );
};

export default EnhancedStatsSection;