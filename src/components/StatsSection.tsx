import { Card } from "@/components/ui/card";

const StatsSection = () => {
  return (
    <>
      {/* First Stats Section */}
      <section className="py-28 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/3 p-8">
              <p className="text-3xl sm:text-4xl xl:text-5xl text-foreground">
                <span>More than </span>
                <span className="font-heading font-bold text-gradient bg-gradient-orange">16,200 </span>
                <span>patient visits delivered</span>
              </p>
            </div>
            <div className="w-full md:w-1/3 p-8">
              <p className="text-3xl sm:text-4xl xl:text-5xl text-foreground">
                <span>Increased </span>
                <span className="font-heading font-bold text-gradient bg-gradient-purple">117% </span>
                <span>conversions since Q1</span>
              </p>
            </div>
            <div className="w-full md:w-1/3 p-8">
              <p className="text-3xl sm:text-4xl xl:text-5xl text-foreground">
                <span>Over </span>
                <span className="font-heading font-bold text-gradient bg-gradient-blue">82% </span>
                <span>lift in consultation bookings</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Stats Section */}
      <section className="relative pt-24 pb-28 overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto mb-16">
            <h2 className="mb-4 font-heading font-semibold text-center text-5xl sm:text-6xl text-foreground">
              Grow fast, with us
            </h2>
            <p className="text-base text-center text-muted-foreground">
              From first consult to long‑term optimization, we partner on your wellness journey.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center -m-6 md:-m-16 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="w-full md:w-1/2 p-6 md:p-16">
                <h2 className="mb-3 font-heading font-bold text-6xl sm:text-7xl md:text-8xl text-center text-gradient bg-gradient-blue">
                  98%
                </h2>
                <h3 className="mb-3 font-heading font-semibold text-center text-foreground text-lg">
                  Average Satisfaction Rate
                </h3>
                <p className="text-center text-muted-foreground">
                  Patients report improved energy, clarity, and faster recovery.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-16">
                <h2 className="mb-3 font-heading font-bold text-6xl sm:text-7xl md:text-8xl text-center text-gradient bg-gradient-green">
                  117%
                </h2>
                <h3 className="mb-3 font-heading font-semibold text-center text-foreground text-lg">
                  Average ROI on Ads
                </h3>
                <p className="text-center text-muted-foreground">
                  Growth driven by great care and clear outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;