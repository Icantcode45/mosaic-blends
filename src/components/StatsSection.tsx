import { Card } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Treatments Delivered",
      description: "Successful IV therapy sessions completed across Arizona"
    },
    {
      number: "24/7",
      label: "Emergency Support", 
      description: "Round-the-clock availability for wellness emergencies"
    },
    {
      number: "4.9",
      label: "Customer Rating",
      description: "Hundreds of happy clients"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center bg-background shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;