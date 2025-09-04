const StatsSection = () => {
  return (
    <>
      {/* First Stats Section */}
      <section className="py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <p className="text-3xl sm:text-4xl xl:text-5xl text-foreground">
              <span>More than </span>
              <span className="font-heading font-bold bg-gradient-orange">16,200 </span>
              <span>visitor to customer converted</span>
            </p>
            <p className="text-3xl sm:text-4xl xl:text-5xl text-foreground">
              <span>Increased </span>
              <span className="font-heading font-bold bg-gradient-purple">117% </span>
              <span>conversions from the first quarter</span>
            </p>
            <p className="text-3xl sm:text-4xl xl:text-5xl text-foreground">
              <span>Over </span>
              <span className="font-heading font-bold bg-gradient-blue">82% </span>
              <span>increase in demo call bookings & growth</span>
            </p>
          </div>
        </div>
      </section>

      {/* Second Stats Section */}
      <section className="relative pt-20 pb-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-semibold text-5xl sm:text-6xl text-foreground">
              Grow fast, with us
            </h2>
            <p className="text-muted-foreground mt-3">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-elev-1">
            <div className="p-10">
              <div className="text-center font-heading font-extrabold text-7xl bg-gradient-blue">98%</div>
              <h3 className="text-center font-semibold mt-2">Average Satisfaction Rate</h3>
              <p className="text-center text-muted-foreground text-sm mt-1">
                Amet minim mollit non deserunt ullamco.
              </p>
            </div>
            <div className="p-10">
              <div className="text-center font-heading font-extrabold text-7xl bg-gradient-green">117%</div>
              <h3 className="text-center font-semibold mt-2">Average ROI on Ads</h3>
              <p className="text-center text-muted-foreground text-sm mt-1">
                Velit officia consequat duis enim.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;
