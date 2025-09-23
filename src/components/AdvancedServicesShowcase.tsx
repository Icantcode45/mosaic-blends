import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Heart, 
  Brain, 
  Dumbbell, 
  Sparkles, 
  Clock, 
  Star,
  ChevronRight,
  Award,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

// Image assets for production-safe URLs
import myersCocktailBag from "@/assets/iv-bags/myers-cocktail-bag.png";
import diamondbackBag from "@/assets/iv-bags/diamondback-bag.png";
import hangoverBag from "@/assets/iv-bags/hangover-bag.png";
import eliteNadBag from "@/assets/iv-bags/elite-nad-bag.png";
import diamondNadBag from "@/assets/iv-bags/diamond-nad-bag.png";
import goldHydrationRecoveryBag from "@/assets/iv-bags/gold-hydration-recovery-bag-final.png";
import eliteNadTherapyBag from "@/assets/iv-bags/elite-nad-therapy-bag-final.png";
import b12Injection from "@/assets/vials/b12-injection.jpeg";
import glutathioneInjection from "@/assets/vials/glutathione-injection.jpeg";

const serviceCategories = [
  {
    id: "iv-therapy",
    name: "IV Therapy",
    icon: Zap,
    description: "Premium vitamin infusions",
    gradient: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "Myers' Cocktail",
        image: myersCocktailBag,
        price: "$205",
        duration: "45min",
        benefits: ["B-Complex vitamins", "Vitamin C", "Magnesium", "Zinc", "Glutathione"],
        popular: true
      },
      {
        name: "Immune Booster IV Bag",
        image: diamondbackBag,
        price: "$225",
        duration: "45min",
        benefits: ["High-dose Vitamin C", "Zinc", "B-Complex", "Immune support"],
        popular: false
      },
      {
        name: '"Day After The Dale\'" Hangover Relief IV Drip',
        image: hangoverBag,
        price: "$195",
        duration: "30min",
        benefits: ["B-Complex", "Anti-nausea", "Rapid rehydration", "Detox support"],
        popular: false
      },
      {
        name: "Gold Hydration & Recovery",
        image: goldHydrationRecoveryBag,
        price: "$325",
        duration: "45min",
        benefits: ["B-Complex vitamins", "Vitamin C", "Glutathione", "Anti-nausea", "Recovery"],
        popular: false
      }
    ]
  },
  {
    id: "nad-therapy",
    name: "NAD+ Therapy",
    icon: Brain,
    description: "Anti-aging & cognitive enhancement",
    gradient: "from-purple-500 to-pink-500",
    services: [
      {
        name: "Elite NAD+ Therapy Bag",
        image: eliteNadTherapyBag,
        price: "$475",
        duration: "3-4hrs",
        benefits: ["Premium NAD+", "IV Fluids", "B-Complex", "Vitamin C", "Elite formula"],
        popular: true
      },
      {
        name: "NAD+ Elite Therapy",
        image: eliteNadBag,
        price: "$425",
        duration: "2-3hrs",
        benefits: ["250mg NAD+", "Anti-aging", "Mental clarity", "Cellular repair"],
        popular: false
      },
      {
        name: "NAD+ Diamond Therapy",
        image: diamondNadBag,
        price: "$525",
        duration: "3-4hrs",
        benefits: ["Premium NAD+ dose", "Enhanced longevity", "Maximum cellular repair"],
        popular: false
      }
    ]
  },
  {
    id: "wellness",
    name: "Wellness Shots",
    icon: Heart,
    description: "Quick vitamin injections",
    gradient: "from-green-500 to-emerald-500",
    services: [
      {
        name: "B12 Energy",
        image: b12Injection,
        price: "$29",
        duration: "5min",
        benefits: ["Energy boost", "Metabolism", "Quick treatment"],
        popular: true
      },
      {
        name: "Glutathione",
        image: glutathioneInjection,
        price: "$39",
        duration: "5min",
        benefits: ["Antioxidant", "Skin health", "Detox"],
        popular: false
      }
    ]
  }
];

const benefits = [
  { icon: Shield, text: "Licensed Medical Team" },
  { icon: Clock, text: "Same-Day Availability" },
  { icon: Award, text: "Premium Quality" },
  { icon: Star, text: "5-Star Service" }
];

export default function AdvancedServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState("iv-therapy");
  
  const currentCategory = serviceCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Professional-Grade Treatments
          </Badge>
          <h2 className="section-title">
            Personalized <span className="text-gradient-primary">Wellness</span> Solutions
          </h2>
          <p className="section-subtitle">
            Choose from our comprehensive menu of IV therapies, NAD+ treatments, and wellness injections. 
            All treatments are customized to your unique health goals.
          </p>
        </div>

        {/* Benefits Bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <benefit.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <category.icon className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">{category.name}</div>
                <div className={`text-xs ${activeCategory === category.id ? 'text-white/80' : 'text-gray-500'}`}>
                  {category.description}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {currentCategory && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory.services.map((service, index) => (
              <div
                key={index}
                className="service-card group"
              >
                {service.popular && (
                  <Badge className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}

                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center p-4">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                    variant="outline"
                    asChild
                  >
                    <Link to="/booking">
                      Book Treatment
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12">
          <Dumbbell className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Custom Treatment Plans Available
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Not sure which treatment is right for you? Our licensed medical professionals will create 
            a personalized wellness plan based on your specific health goals and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cta-button" asChild>
              <Link to="/consultation">
                Free Consultation
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/iv-therapy">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}