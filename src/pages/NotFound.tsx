import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige via-primary/5 to-secondary/5 flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -right-24 -top-24 rounded-full w-[28rem] h-[28rem] bg-primary/5 blur-3xl"></div>
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 rounded-full w-[20rem] h-[20rem] bg-secondary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <span className="inline-flex h-12 w-12 rounded-xl bg-primary/10 items-center justify-center text-xl">💧</span>
              <span className="text-xl font-semibold tracking-tight">Stay Dripped IV & Wellness Co.</span>
            </div>
          </div>

          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent mb-8">
            404
          </h1>

          {/* Error Content */}
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Nothing found</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              The page you are looking for is not available!
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              It looks like you've wandered off the wellness path. Don't worry – our IV therapy services are just a click away. Let's get you back to feeling your best.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <Button 
              asChild 
              size="lg" 
              className="bg-slate-900 hover:bg-primary text-white px-8 py-4 text-sm uppercase tracking-wider font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="/">Go back to Homepage</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;