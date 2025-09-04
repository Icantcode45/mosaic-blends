import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Heart, Sparkles, Star, CreditCard, Shield, Clock } from "lucide-react";

const GiftCards = () => {
  const giftCardOptions = [
    {
      id: 1,
      name: "Wellness Starter",
      price: 150,
      description: "Perfect introduction to IV therapy",
      includes: ["1 Hydration IV Session", "Basic Vitamin Add-ons", "Consultation"],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Rejuvenation Package",
      price: 300,
      description: "Complete wellness experience",
      includes: ["2 Premium IV Sessions", "Vitamin B12 Injection", "Wellness Consultation", "NAD+ Add-on"],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Ultimate Wellness",
      price: 500,
      description: "Comprehensive health optimization",
      includes: ["3 Premium IV Sessions", "Advanced Peptide Therapy", "Nutritional Consultation", "Mobile Service Option"],
      popular: false,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      name: "Custom Amount",
      price: "Any",
      description: "Choose your own gift amount",
      includes: ["Flexible spending", "No expiration", "Redeemable for any service"],
      popular: false,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const occasions = [
    {
      title: "Birthdays",
      description: "Give the gift of wellness and vitality",
      icon: Gift,
      color: "text-pink-500"
    },
    {
      title: "Anniversaries",
      description: "Celebrate love with couples wellness experiences",
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "Holidays",
      description: "Perfect for any celebration throughout the year",
      icon: Sparkles,
      color: "text-purple-500"
    },
    {
      title: "Get Well Soon",
      description: "Support recovery and healing naturally",
      icon: Star,
      color: "text-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Gift Cards & Wellness Packages
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Give the gift of wellness, vitality, and self-care. Perfect for birthdays, holidays, or any special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Purchase Gift Card
              </Button>
              <Button variant="outline" size="lg">
                Check Gift Card Balance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Card Options */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Gift Package</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select from our curated wellness packages or create a custom gift card with any amount.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftCardOptions.map((option) => (
              <Card key={option.id} className={`relative ${option.popular ? 'ring-2 ring-primary' : ''}`}>
                {option.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className={`w-full h-32 bg-gradient-to-r ${option.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <Gift className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{option.name}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary">
                    {typeof option.price === 'number' ? `$${option.price}` : option.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {option.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Select Package</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Occasions */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Perfect for Any Occasion</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wellness gift cards make meaningful presents that show you care about someone's health and happiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occasion, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <occasion.icon className={`w-12 h-12 mx-auto mb-4 ${occasion.color}`} />
                  <CardTitle>{occasion.title}</CardTitle>
                  <CardDescription>{occasion.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How Gift Cards Work</h2>
            <p className="text-muted-foreground">Simple, secure, and convenient gifting process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Purchase</h3>
              <p className="text-muted-foreground">
                Select a package or custom amount, add a personal message, and complete your purchase securely online.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Deliver</h3>
              <p className="text-muted-foreground">
                Gift cards can be emailed instantly or printed for physical delivery. You choose the timing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Redeem</h3>
              <p className="text-muted-foreground">
                Recipients can book appointments online or call to schedule using their gift card code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Gift Cards?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              We've designed our gift cards to be as thoughtful and convenient as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Expiration</h3>
              <p className="text-primary-foreground/80">
                Our gift cards never expire, giving recipients the flexibility to use them when they're ready.
              </p>
            </div>

            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Delivery</h3>
              <p className="text-primary-foreground/80">
                Digital gift cards are delivered immediately via email, perfect for last-minute gifts.
              </p>
            </div>

            <div className="text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized</h3>
              <p className="text-primary-foreground/80">
                Add custom messages and choose from beautiful digital card designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Give the Gift of Wellness?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Purchase a gift card today and help someone special on their wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Buy Gift Card Now
            </Button>
            <Button variant="outline" size="lg">
              Contact Us for Bulk Orders
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftCards;