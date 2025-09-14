import { Button } from "@/components/ui/button";

const GoogleReviewsSection = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Read authentic reviews from real clients who have experienced our premium wellness services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-lg border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Annette Black</h4>
                  <div className="text-sm text-muted-foreground">2 days ago</div>
                </div>
              </div>
              <div className="flex gap-1 text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The IV therapy services have been life-changing! I've noticed incredible improvements in my energy levels and mental clarity. The team at Stay Dripped is professional and knowledgeable. Highly recommend!
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  M
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Michael Chen</h4>
                  <div className="text-sm text-muted-foreground">1 week ago</div>
                </div>
              </div>
              <div className="flex gap-1 text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Mobile IV therapy helped me recover from a long flight and jet lag faster than I ever expected. The convenience and expertise made all the difference in my recovery.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Sarah Johnson</h4>
                  <div className="text-sm text-muted-foreground">2 weeks ago</div>
                </div>
              </div>
              <div className="flex gap-1 text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Exceptional service and results! The convenience of mobile therapy is unmatched, and the medical team is top-notch. My sleep and recovery have improved dramatically.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg border flex flex-col md:flex-row items-center justify-between gap-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-xl font-semibold text-foreground">Google Reviews</span>
          </div>
          <div className="text-center md:text-right">
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold text-primary">5.0</div>
              <div className="flex gap-1 text-yellow-500 text-xl">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground font-medium">512 reviews</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <a href="https://g.co/kgs/dCj7w8R" target="_blank" rel="noopener noreferrer">
              View All Reviews
            </a>
          </Button>
          <Button size="lg" asChild>
            <a href="https://g.co/kgs/dCj7w8R" target="_blank" rel="noopener noreferrer">
              Write a Review
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;