import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import IntakeQWidget from "@/components/IntakeQWidget";
import ServiceBookingButton from "@/components/ServiceBookingButton";

const VitaminInjections = () => {
  const { addItem } = useCart();

  const vitaminInjections = [
    {
      id: "vitamin-b12-injection",
      name: "Vitamin B12 Injection",
      description: "Energy-boosting methylcobalamin B12 for mental clarity and vitality.",
      price: 13,
      originalPrice: 15,
      image_url: "/src/assets/vials/b12-injection.jpeg",
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "1000mcg Methylcobalamin B12",
        "Increases energy levels",
        "Improves mental clarity",
        "Supports metabolism",
        "5-minute treatment"
      ]
    },
    {
      id: "vitamin-d3-injection",
      name: "Vitamin D3 Injection",
      description: "High-dose vitamin D3 for immune support and bone health.",
      price: 28,
      originalPrice: 30,
      image_url: "/src/assets/vials/vitamin-d3-injection.webp",
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "50,000 IU Vitamin D3",
        "Supports immune function",
        "Promotes bone health",
        "Improves mood regulation",
        "5-minute treatment"
      ]
    },
    {
      id: "vitamin-c-injection",
      name: "Vitamin C Injection",
      description: "Powerful antioxidant support for immune system and collagen production.",
      price: 23,
      originalPrice: 25,
      image_url: null,
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "1000mg Ascorbic Acid",
        "Powerful antioxidant protection",
        "Supports immune system",
        "Promotes collagen synthesis",
        "5-minute treatment"
      ]
    },
    {
      id: "magnesium-injection",
      name: "Magnesium Chloride Injection",
      description: "Essential mineral for muscle relaxation and nerve function support.",
      price: 18,
      originalPrice: 20,
      image_url: "/src/assets/vials/magnesium-chloride-injection.jpeg",
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "300mg Magnesium Chloride",
        "Muscle relaxation",
        "Nerve function support",
        "Reduces muscle cramps",
        "5-minute treatment"
      ]
    },
    {
      id: "glutathione-injection",
      name: "Glutathione Injection",
      description: "Master antioxidant for detoxification and radiant skin health.",
      price: 48,
      originalPrice: 50,
      image_url: "/src/assets/vials/glutathione-injection.jpeg",
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "600mg Glutathione",
        "Master antioxidant",
        "Supports detoxification",
        "Promotes skin health",
        "5-minute treatment"
      ]
    },
    {
      id: "myers-cocktail-injection",
      name: "Myers' Cocktail Injection",
      description: "Comprehensive vitamin and mineral blend for complete wellness support.",
      price: 170,
      originalPrice: 180,
      image_url: null,
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "Vitamin C, B-Complex, B12",
        "Magnesium & Calcium",
        "Comprehensive wellness support",
        "Enhanced energy & immunity",
        "15-minute treatment"
      ]
    },
    {
      id: "tri-amino-injection",
      name: "Tri-Amino Blend Injection",
      description: "Essential amino acids for muscle recovery and athletic performance.",
      price: 33,
      originalPrice: 35,
      image_url: "/src/assets/vials/l-glutamine-injection.jpeg",
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "L-Arginine, L-Ornithine, L-Lysine",
        "Muscle recovery support",
        "Enhanced athletic performance",
        "Improved protein synthesis",
        "5-minute treatment"
      ]
    },
    {
      id: "zinc-injection",
      name: "Zinc Injection",
      description: "Essential mineral for immune support and wound healing.",
      price: 8,
      originalPrice: 10,
      image_url: null,
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "5mg Zinc Sulfate",
        "Immune system support",
        "Wound healing acceleration",
        "Antioxidant properties",
        "5-minute treatment"
      ]
    },
    {
      id: "biotin-injection",
      name: "Biotin Injection",
      description: "Beauty vitamin for stronger hair, skin, and nail health.",
      price: 13,
      originalPrice: 15,
      image_url: "/src/assets/vials/biotin-injection.webp",
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "10,000mcg Biotin",
        "Strengthens hair & nails",
        "Improves skin health",
        "Supports cellular energy",
        "5-minute treatment"
      ]
    },
    {
      id: "l-carnitine-injection",
      name: "L-Carnitine Injection",
      description: "Fat metabolism booster for weight management and energy enhancement.",
      price: 38,
      originalPrice: 40,
      image_url: null,
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "500mg L-Carnitine",
        "Supports fat metabolism",
        "Enhances energy production",
        "Aids in weight management",
        "5-minute treatment"
      ]
    },
    {
      id: "pyridoxine-injection",
      name: "Pyridoxine (Vitamin B6) Injection",
      description: "Essential B-vitamin for metabolism and neurological function.",
      price: 15,
      originalPrice: 18,
      image_url: "/src/assets/vials/pyridoxine-injection.webp",
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "85mg Pyridoxine HCl",
        "Supports nervous system",
        "Aids protein metabolism",
        "Enhances brain function",
        "5-minute treatment"
      ]
    },
    {
      id: "vita-complex-injection",
      name: "Vitamin B-Complex Injection",
      description: "Comprehensive B-vitamin complex for complete wellness support.",
      price: 35,
      originalPrice: 40,
      image_url: "/src/assets/vials/vita-complex-injection.webp",
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "Niacinamide 100mg/ml",
        "Riboflavin-5-Phosphate",
        "Dexpanthenol 2mg/ml",
        "Pyridoxine HCl 2mg/ml",
        "15-minute treatment"
      ]
    },
    {
      id: "mineral-blend-injection",
      name: "Mineral Blend Injection",
      description: "Essential minerals blend for optimal body function.",
      price: 25,
      originalPrice: 30,
      image_url: "/src/assets/vials/mineral-blend-injection.jpeg",
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "Magnesium Chloride 80mg/ml",
        "Zinc Sulfate 1mg/ml",
        "Manganese Sulfate 20mcg/ml",
        "Copper Gluconate 0.2mg/ml",
        "10-minute treatment"
      ]
    },
    {
      id: "l-proline-injection",
      name: "L-Proline Injection",
      description: "Essential amino acid for collagen synthesis and tissue repair.",
      price: 22,
      originalPrice: 25,
      image_url: "/src/assets/vials/l-proline-injection.jpeg",
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "100mg L-Proline per ml",
        "Supports collagen synthesis",
        "Aids tissue repair",
        "Promotes wound healing",
        "5-minute treatment"
      ]
    },
    {
      id: "taurine-injection",
      name: "Taurine Injection",
      description: "Conditionally essential amino acid for cardiovascular and neurological support.",
      price: 20,
      originalPrice: 23,
      image_url: "/src/assets/vials/taurine-injection.jpeg",
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "50mg Taurine per ml",
        "Cardiovascular support",
        "Neurological function",
        "Antioxidant properties",
        "5-minute treatment"
      ]
    },
    {
      id: "acetylcysteine-injection",
      name: "N-Acetylcysteine (NAC) Injection",
      description: "Powerful antioxidant and mucolytic agent for respiratory and liver support.",
      price: 30,
      originalPrice: 35,
      image_url: "/src/assets/vials/acetylcysteine-injection.jpeg",
      category: "Vitamin Injections",
      stock_quantity: 100,
      features: [
        "200mg N-Acetylcysteine",
        "Potent antioxidant",
        "Respiratory support",
        "Liver detoxification",
        "10-minute treatment"
      ]
    }
  ];

  const membershipPlans = [
    {
      name: "Shot Pass Membership",
      price: "$99/month",
      description: "Unlimited vitamin injections membership with maximum flexibility and value.",
      features: [
        "Unlimited vitamin injections",
        "All injection types included",
        "Priority booking",
        "Mobile service included",
        "Cancel anytime"
      ]
    },
    {
      name: "Basic Package",
      price: "$199/year",
      description: "Perfect for occasional wellness support with significant savings on vitamin injections.",
      features: [
        "6 vitamin injections per year",
        "20% off additional shots",
        "Priority booking",
        "Mobile service included"
      ]
    },
    {
      name: "Premium Package",
      price: "$399/year",
      description: "Regular wellness support with monthly vitamin injections and additional perks.",
      features: [
        "12 vitamin injections per year",
        "30% off additional shots",
        "Priority booking",
        "Free mobile service",
        "Quarterly health consultations"
      ]
    },
    {
      name: "Elite Package",
      price: "$899/year",
      description: "Ultimate wellness membership with maximum benefits and exclusive VIP treatment.",
      features: [
        "24 vitamin injections per year",
        "All injection types included",
        "VIP concierge service",
        "50% off all other services",
        "Bi-annual health assessments",
        "Exclusive member events"
      ]
    }
  ];

  const handleAddToCart = (injection: any) => {
    addItem({
      id: injection.id,
      name: injection.name,
      description: injection.description,
      price: injection.price,
      image_url: injection.image_url,
      category: injection.category,
      stock_quantity: injection.stock_quantity
    });
    toast.success(`${injection.name} added to cart!`);
  };

  useEffect(() => {
    document.title = "Vitamin Injections | Stay Dripped IV & Wellness Co.";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Quick and efficient vitamin injections in Scottsdale, AZ. Targeted wellness support and energy enhancement with B12, Vitamin D, and more.');
    }
  }, []);

  return (
    <>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted via-muted/50 to-background py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Vitamin Injections
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick and efficient vitamin shots for targeted wellness support and energy enhancement
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vitaminInjections.map((injection) => (
                <Card key={injection.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {injection.image_url && (
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={injection.image_url} 
                        alt={injection.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      {injection.name}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        ${injection.price}
                      </span>
                      {injection.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${injection.originalPrice}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {injection.description}
                    </p>
                    <ul className="space-y-2">
                      {injection.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground border-b border-border pb-2 last:border-b-0">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleAddToCart(injection)}
                      >
                        Add to Cart - ${injection.price}
                      </Button>
                      <ServiceBookingButton 
                        serviceId={injection.id} 
                        serviceName={injection.name}
                        serviceCategory="Vitamin Injections"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Vitamin Injection Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipPlans.map((plan, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">
                      {plan.name}
                    </CardTitle>
                    <div className="text-3xl font-bold text-primary mb-4">
                      {plan.price}
                    </div>
                    <p className="text-muted-foreground">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted-foreground border-b border-border pb-2 last:border-b-0">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">
                      Join Membership
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VitaminInjections;