import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Clock, Heart, Star, CheckCircle, Zap } from "lucide-react";

// Partner logos (use imports so they resolve in production)
import arizonaCombatLogo from "@/assets/partners/arizona-combat-sports-logo.png";
import fightReadyLogo from "@/assets/partners/fight-ready-logo.png";
import fullSendLogo from "@/assets/partners/full-send-logo.png";
import nelkboysLogo from "@/assets/partners/nelkboys-logo.png";

const trustMetrics = [
  {
    icon: Users,
    value: "10,000+",
    label: "Satisfied Clients",
    description: "Across Arizona",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
    description: "Client reviews",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Clock,
    value: "45min",
    label: "Treatment Time",
    description: "Quick & effective",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Heart,
    value: "99%",
    label: "Success Rate",
    description: "Client satisfaction",
    color: "from-rose-500 to-pink-500"
  }
];

const certifications = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Complete privacy protection"
  },
  {
    icon: Award,
    title: "Licensed Medical Team",
    description: "NP/MD supervised care"
  },
  {
    icon: CheckCircle,
    title: "FDA-Regulated Pharmacy",
    description: "Highest quality standards"
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    description: "Available 7 days a week"
  }
];

const partnerLogos = [
  { name: "Arizona Combat Sports", src: arizonaCombatLogo },
  { name: "Fight Ready", src: fightReadyLogo },
  { name: "Full Send", src: fullSendLogo },
  { name: "Nelk Boys", src: nelkboysLogo }
];

export default function PremiumTrustSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <Badge variant="outline" className="mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Trusted Healthcare Provider
          </Badge>
          <h2 className="section-title">
            Why <span className="text-gradient-primary">Arizona</span> Trusts Us
          </h2>
          <p className="section-subtitle">
            Licensed medical professionals delivering premium IV therapy with the highest safety and quality standards.
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="stats-number">{metric.value}</div>
              <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="service-card text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <cert.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-8">Trusted by Leading Organizations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-70">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="h-12 flex items-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-12">
          <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Your Health, Our Priority
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Every treatment is overseen by licensed medical professionals and follows strict safety protocols. 
            We're committed to providing the highest standard of care in the comfort of your own space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
              Licensed Medical Team
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Shield className="w-4 h-4 mr-2 text-blue-600" />
              HIPAA Compliant
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Award className="w-4 h-4 mr-2 text-purple-600" />
              FDA-Regulated Pharmacy
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}