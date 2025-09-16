import { Shield, Users, Clock, Award, Star, CheckCircle } from "lucide-react";

const TrustBar = () => {
  const trustMetrics = [
    { icon: Users, text: "Trusted by 10,000+ clients" },
    { icon: Star, text: "4.9★ average rating" },
    { icon: Shield, text: "Licensed medical professionals" },
    { icon: Clock, text: "Same-day appointments available" },
    { icon: CheckCircle, text: "FDA-regulated ingredients" },
    { icon: Award, text: "BBB A+ accredited business" }
  ];

  return (
    <div className="bg-muted/30 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="flex animate-scroll py-3">
            {/* Duplicate the metrics for seamless scrolling */}
            {[...trustMetrics, ...trustMetrics].map((metric, index) => (
              <div key={index} className="flex items-center space-x-2 mx-6 flex-shrink-0">
                <metric.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {metric.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;