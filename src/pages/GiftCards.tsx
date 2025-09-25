import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Heart, Star, Sparkles, CheckCircle } from "lucide-react";

const GiftCards = () => {
  const [formData, setFormData] = useState({
    amount: '',
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    message: '',
    deliveryDate: ''
  });

  useEffect(() => {
    document.title = "Gift Cards | Stay Dripped IV & Wellness Co.";
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gift card form submitted! In a real implementation, this would process the payment and send the gift card.');
  };

  const giftCardOptions = [
    {
      title: "Starter Package",
      amount: "$150",
      originalPrice: "$199",
      description: "Perfect for a single IV therapy session or vitamin injection treatment.",
      image: "/src/assets/iv-bags/rehydrate-bag-new.png",
      features: ["Rehydrate IV", "Basic hydration", "30-45 min session"],
      popular: false
    },
    {
      title: "Wellness Package", 
      amount: "$300",
      originalPrice: "$399",
      description: "Ideal for multiple treatments or premium IV therapy packages.",
      image: "/src/assets/iv-bags/myers-cocktail-bag.png",
      features: ["Myers Cocktail", "Complete wellness", "Multiple sessions"],
      popular: true
    },
    {
      title: "Ultimate Experience",
      amount: "$500", 
      originalPrice: "$699",
      description: "The complete wellness experience with advanced treatments and NAD+ therapy.",
      image: "/src/assets/iv-bags/elite-nad-therapy-bag-final.png",
      features: ["NAD+ Therapy", "Premium treatments", "Full experience"],
      popular: false
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Choose Amount",
      description: "Select from our preset amounts or create a custom gift card with your preferred value."
    },
    {
      number: "2", 
      title: "Personalize",
      description: "Add recipient details and a personal message to make your gift extra special."
    },
    {
      number: "3",
      title: "Deliver", 
      description: "Gift cards are delivered digitally via email on your chosen date, ready to use immediately."
    },
    {
      number: "4",
      title: "Book & Enjoy",
      description: "Recipients can easily book their treatments online or by phone using their gift card code."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gift Cards | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Give the gift of wellness with Stay Dripped IV & Wellness Co. gift cards. Perfect for IV therapy, wellness treatments, and health packages in Scottsdale, AZ." />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://staydrippediv.com/gift-cards" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gift Cards | Stay Dripped IV & Wellness Co." />
        <meta property="og:description" content="Give the gift of wellness with Stay Dripped IV & Wellness Co. gift cards. Perfect for IV therapy, wellness treatments, and health packages in Scottsdale, AZ." />
        <meta property="og:url" content="https://staydrippediv.com/gift-cards" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gift Cards | Stay Dripped IV & Wellness Co." />
        <meta name="twitter:description" content="Give the gift of wellness with Stay Dripped IV & Wellness Co. gift cards. Perfect for IV therapy, wellness treatments, and health packages in Scottsdale, AZ." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-brand-teal/10 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <Badge 
            variant="outline" 
            className="mb-6 bg-gradient-to-r from-primary/10 to-brand-teal/10 text-primary border-primary/20 backdrop-blur-sm"
          >
            <Gift className="w-4 h-4 mr-2" />
            Perfect Gift for Any Occasion
          </Badge>
          
          <h1 className="mb-6 text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Gift the Power of
            <br />
            <span className="bg-gradient-to-r from-primary via-brand-teal to-primary bg-clip-text text-transparent">
              Wellness
            </span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground leading-relaxed">
            Share the gift of health and vitality with Stay Dripped IV & Wellness Co. gift cards. 
            Perfect for birthdays, holidays, or any special occasion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById('gift-cards')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Gift className="w-5 h-5 mr-2" />
              Shop Gift Cards
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border/50 px-8 py-4 text-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Gift Cards Section */}
      <section id="gift-cards" className="bg-muted/20 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Gift Options
            </Badge>
            <h2 className="mb-6 text-4xl lg:text-5xl font-bold text-foreground">
              Choose Your Gift Amount
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Select from our popular gift card amounts or create a custom gift card for any amount.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {giftCardOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border border-border/30 hover:border-primary/20 hover:shadow-glow-primary transition-all duration-500 bg-background/50 backdrop-blur-sm ${
                  option.popular ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {option.popular && (
                  <Badge className="absolute -top-3 -right-3 bg-primary text-white z-10">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                
                <CardContent className="p-8 text-center relative">
                  {/* IV Bag Image */}
                  <div className="relative mb-6">
                    <img 
                      src={option.image} 
                      alt={option.title}
                      className="w-24 h-24 mx-auto object-contain animate-float"
                    />
                  </div>
                  
                  <h3 className="mb-4 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {option.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold text-foreground">{option.amount}</span>
                      <span className="text-lg text-muted-foreground line-through">{option.originalPrice}</span>
                    </div>
                    <div className="text-sm text-emerald-600 font-medium">
                      Save {Math.round((1 - parseInt(option.amount.replace('$', '')) / parseInt(option.originalPrice.replace('$', ''))) * 100)}%
                    </div>
                  </div>
                  
                  <p className="mb-6 text-muted-foreground">
                    {option.description}
                  </p>
                  
                  <div className="space-y-2 mb-8">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary-hover text-white"
                    asChild
                  >
                    <Link to="/first-time-patients">
                      <Gift className="w-4 h-4 mr-2" />
                      Purchase Gift Card
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Amount Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">
              <Heart className="w-4 h-4 mr-2" />
              Custom Amount
            </Badge>
            <h2 className="mb-6 text-4xl lg:text-5xl font-bold text-foreground">
              Create Your Perfect Gift
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Choose any amount and personalize your gift card with a special message.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <Card className="border border-border/30 shadow-large bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="amount" className="mb-2 block text-sm font-semibold text-foreground">
                      Gift Card Amount *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted-foreground">
                        $
                      </span>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        min="25"
                        max="1000"
                        placeholder="Enter amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border-2 border-border bg-background px-4 py-4 pl-8 text-lg focus:border-primary focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="recipientName" className="mb-2 block text-sm font-semibold text-foreground">
                      Recipient Name *
                    </label>
                    <input
                      type="text"
                      id="recipientName"
                      name="recipientName"
                      placeholder="Enter recipient's name"
                      value={formData.recipientName}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border-2 border-border bg-background px-4 py-4 text-lg focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="recipientEmail" className="mb-2 block text-sm font-semibold text-foreground">
                      Recipient Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="recipientEmail"
                      name="recipientEmail"
                      placeholder="Enter recipient's email"
                      value={formData.recipientEmail}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border-2 border-border bg-background px-4 py-4 text-lg focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="senderName" className="mb-2 block text-sm font-semibold text-foreground">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="senderName"
                      name="senderName"
                      placeholder="Enter your name"
                      value={formData.senderName}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border-2 border-border bg-background px-4 py-4 text-lg focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
                      Personal Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Write a personal message for the recipient..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border-2 border-border bg-background px-4 py-4 text-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="deliveryDate" className="mb-2 block text-sm font-semibold text-foreground">
                      Delivery Date (Optional)
                    </label>
                    <input
                      type="date"
                      id="deliveryDate"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border-2 border-border bg-background px-4 py-4 text-lg focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full py-4 text-lg font-semibold bg-primary hover:bg-primary-hover text-white"
                  >
                    <Gift className="w-5 h-5 mr-2" />
                    Create Custom Gift Card
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/20 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">
              <CheckCircle className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="mb-6 text-4xl lg:text-5xl font-bold text-foreground">
              How Gift Cards Work
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Giving the gift of wellness is easy with our streamlined gift card process.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Card key={index} className="text-center p-6 border border-border/30 bg-background/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-large transition-all duration-300">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover text-2xl font-bold text-white shadow-medium">
                  {step.number}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GiftCards;