import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

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
      description: "Perfect for a single IV therapy session or vitamin injection treatment.",
      icon: "🎁"
    },
    {
      title: "Wellness Package", 
      amount: "$300",
      description: "Ideal for multiple treatments or premium IV therapy packages.",
      icon: "💎"
    },
    {
      title: "Ultimate Experience",
      amount: "$500", 
      description: "The complete wellness experience with advanced treatments and NAD+ therapy.",
      icon: "✨"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-beige via-orange-50 to-orange-100">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Gift the Power of Wellness
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
            Share the gift of health and vitality with Stay Dripped IV & Wellness Co. gift cards. 
            Perfect for birthdays, holidays, or any special occasion.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 px-8 py-4 text-lg font-semibold" asChild>
            <a href="#gift-cards">
              🎁 Shop Gift Cards
            </a>
          </Button>
        </div>
      </section>

      {/* Gift Cards Section */}
      <section id="gift-cards" className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              Gift Options
            </div>
            <h2 className="mb-6 text-4xl font-bold text-foreground">
              Choose Your Gift Amount
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Select from our popular gift card amounts or create a custom gift card for any amount.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {giftCardOptions.map((option, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-accent via-accent to-accent/90 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <CardContent className="relative z-10 p-8 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-4xl">
                    {option.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">
                    {option.title}
                  </h3>
                  <div className="mb-4 text-5xl font-bold">
                    {option.amount}
                  </div>
                  <p className="mb-8 opacity-90">
                    {option.description}
                  </p>
                  <Button 
                    className="w-full bg-white text-accent hover:bg-gray-100 hover:text-accent" 
                    asChild
                  >
                    <Link to="/first-time-patients">Purchase Gift Card</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Amount Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              Custom Amount
            </div>
            <h2 className="mb-6 text-4xl font-bold text-foreground">
              Create Your Perfect Gift
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose any amount and personalize your gift card with a special message.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="amount" className="mb-2 block text-sm font-semibold text-foreground">
                      Gift Card Amount
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
                        className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 pl-8 text-lg focus:border-accent focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="recipientName" className="mb-2 block text-sm font-semibold text-foreground">
                      Recipient Name
                    </label>
                    <input
                      type="text"
                      id="recipientName"
                      name="recipientName"
                      placeholder="Enter recipient's name"
                      value={formData.recipientName}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-lg focus:border-accent focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="recipientEmail" className="mb-2 block text-sm font-semibold text-foreground">
                      Recipient Email
                    </label>
                    <input
                      type="email"
                      id="recipientEmail"
                      name="recipientEmail"
                      placeholder="Enter recipient's email"
                      value={formData.recipientEmail}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-lg focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="senderName" className="mb-2 block text-sm font-semibold text-foreground">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="senderName"
                      name="senderName"
                      placeholder="Enter your name"
                      value={formData.senderName}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-lg focus:border-accent focus:outline-none"
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
                      className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-lg focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="deliveryDate" className="mb-2 block text-sm font-semibold text-foreground">
                      Delivery Date
                    </label>
                    <input
                      type="date"
                      id="deliveryDate"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-lg focus:border-accent focus:outline-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 py-4 text-lg font-semibold"
                  >
                    🎁 Create Custom Gift Card
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              Simple Process
            </div>
            <h2 className="mb-6 text-4xl font-bold text-foreground">
              How Gift Cards Work
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Giving the gift of wellness is easy with our streamlined gift card process.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GiftCards;