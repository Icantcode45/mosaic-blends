import { useCountUp } from "@/hooks/useCountUp";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Shield, Star, TrendingUp, Heart, CheckCircle } from "lucide-react";

const EnhancedStatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: useCountUp({ end: 12500, duration: 2000 }),
      label: "Happy Clients",
      description: "Satisfied customers nationwide",
      color: "from-medical-blue to-medical-teal"
    },
    {
      icon: Award,
      number: useCountUp({ end: 98, duration: 1500 }),
      suffix: "%",
      label: "Success Rate",
      description: "Client satisfaction guarantee",
      color: "from-medical-purple to-medical-pink"
    },
    {
      icon: Clock,
      number: useCountUp({ end: 24, duration: 1000 }),
      suffix: "/7",
      label: "Available",
      description: "Round-the-clock service",
      color: "from-medical-accent to-medical-secondary"
    },
    {
      icon: TrendingUp,
      number: useCountUp({ end: 89, duration: 2200 }),
      suffix: "%",
      label: "Repeat Clients",
      description: "Customer loyalty rate",
      color: "from-medical-gradient-start to-medical-gradient-end"
    }
  ];

  const achievements = [
    {
      icon: Shield,
      title: "FDA Regulated",
      description: "All ingredients meet FDA standards"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Consistently top-rated service"
    },
    {
      icon: Heart,
      title: "Health Focused",
      description: "Medically supervised treatments"
    },
    {
      icon: CheckCircle,
      title: "BBB Accredited",
      description: "A+ Better Business Bureau rating"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-medical-card to-medical-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--medical-blue))_0%,transparent_50%)] opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--medical-purple))_0%,transparent_50%)] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-medical-blue border-medical-blue/20 bg-medical-blue/5">
            <TrendingUp className="w-4 h-4 mr-2" />
            Proven Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-medical-blue via-medical-purple to-medical-teal bg-clip-text text-transparent">
            Trust the Numbers
          </h2>
          <p className="text-xl text-medical-muted max-w-3xl mx-auto leading-relaxed">
            Real results from real clients who trust us with their wellness journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={stat.number.ref}
              className="group relative bg-medical-card border border-medical-border rounded-3xl p-8 text-center hover:border-medical-blue/50 transition-all duration-500 hover:shadow-[0_20px_40px_-12px_hsl(var(--medical-blue))_/_0.25] hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Icon */}
              <div className="relative mb-6 flex justify-center">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Number */}
              <div className="relative mb-4">
                <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number.count}
                  {stat.suffix}
                </span>
              </div>
              
              {/* Label */}
              <h3 className="text-xl font-semibold mb-2 text-medical-text">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-medical-muted text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-medical-card border border-medical-border rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-medical-blue to-medical-purple bg-clip-text text-transparent">
              Our Credentials & Achievements
            </h3>
            <p className="text-medical-muted text-lg max-w-2xl mx-auto">
              Recognized for excellence in medical wellness and patient care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-2xl bg-medical-background border border-medical-border group-hover:border-medical-blue/50 transition-colors duration-300">
                    <achievement.icon className="w-8 h-8 text-medical-blue transition-colors duration-300" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-medical-text">
                  {achievement.title}
                </h4>
                <p className="text-medical-muted text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-medical-blue to-medical-purple rounded-3xl p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Join Our Community of Wellness
              </h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Experience the difference that medical-grade treatments and professional care can make in your life
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Licensed Medical Staff
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  FDA Regulated Ingredients
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Same-Day Service
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Satisfaction Guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedStatsSection;