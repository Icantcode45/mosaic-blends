import { useCountUp } from "@/hooks/useCountUp";

const EnhancedStatsSection = () => {
  // Properly use the hook with a single options object
  const { count: treatments, ref: ref1 } = useCountUp({ end: 16200, duration: 2500, delay: 200 });
  const { count: satisfaction, ref: ref2 } = useCountUp({ end: 117, duration: 2000, delay: 400 });
  const { count: followups, ref: ref3 } = useCountUp({ end: 82, duration: 1800, delay: 600 });

  return (
    <section aria-labelledby="stats-heading" className="py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <header className="text-center mb-16">
          <h2 id="stats-heading" className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Proven Results, Trusted Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real metrics from real patients who trust us with their wellness journey
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-10">
          <article className="text-center" ref={ref1}>
            <p className="text-3xl sm:text-4xl xl:text-5xl text-gray-900">
              <span>More than </span>
              <span className="font-heading font-bold text-primary">{treatments.toLocaleString()} </span>
              <span>successful treatments delivered</span>
            </p>
          </article>

          <article className="text-center" ref={ref2}>
            <p className="text-3xl sm:text-4xl xl:text-5xl text-gray-900">
              <span>Achieved </span>
              <span className="font-heading font-bold text-primary">{satisfaction}% </span>
              <span>growth in patient satisfaction</span>
            </p>
          </article>

          <article className="text-center" ref={ref3}>
            <p className="text-3xl sm:text-4xl xl:text-5xl text-gray-900">
              <span>Over </span>
              <span className="font-heading font-bold text-primary">{followups}% </span>
              <span>of patients book follow-up visits</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default EnhancedStatsSection;
