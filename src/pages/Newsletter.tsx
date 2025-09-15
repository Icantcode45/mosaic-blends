import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !firstName) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter. You'll receive wellness tips and exclusive offers.",
      });
      setEmail("");
      setFirstName("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-20 lg:py-32">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            Stay in the Loop
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Get exclusive wellness tips, treatment updates, and special offers delivered to your inbox.
          </p>
        </div>
      </div>

      {/* Newsletter Content */}
      <section className="py-20">
        <div className="container max-w-3xl mx-auto px-4">
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Weekly Wellness Tips</h3>
              <p className="text-muted-foreground">Expert advice on nutrition, wellness, and healthy living delivered weekly.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Exclusive Offers</h3>
              <p className="text-muted-foreground">Be the first to know about special promotions and member-only discounts.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">New Treatment Updates</h3>
              <p className="text-muted-foreground">Stay informed about the latest IV therapy and wellness treatments we offer.</p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="card glass-medical p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Join Our Wellness Community
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block font-semibold mb-2 text-foreground">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="input-medical w-full"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-semibold mb-2 text-foreground">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-medical w-full"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isLoading}
                  className="w-full md:w-auto px-12"
                >
                  {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                We respect your privacy. Unsubscribe at any time. No spam, ever.
              </p>
            </form>
          </div>

          {/* What You'll Get */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              What You'll Receive
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Weekly Wellness Newsletter</h4>
                  <p className="text-muted-foreground">Curated content about IV therapy, nutrition, and healthy living.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Exclusive Member Offers</h4>
                  <p className="text-muted-foreground">Special discounts and early access to new treatments.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Treatment Updates</h4>
                  <p className="text-muted-foreground">Be the first to know about new services and wellness programs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Health Tips from Experts</h4>
                  <p className="text-muted-foreground">Professional advice from our licensed medical team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;