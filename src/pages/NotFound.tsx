import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Stay Dripped IV & Wellness Co.";
  }, []);

  return (
    <section className="relative min-h-[70vh] w-full bg-gradient-to-br from-brand-light/60 via-transparent to-brand-blue/10">
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
      <div className="container relative z-10 flex flex-col items-center justify-center text-center py-16 gap-8">
        <div className="flex flex-col items-center gap-2">
          <p className="uppercase tracking-wider text-sm text-muted-foreground">Nothing found</p>
          <h1 className="text-7xl sm:text-8xl font-extrabold bg-gradient-to-br from-brand-orange to-brand-blue bg-clip-text text-transparent leading-none drop-shadow">
            404
          </h1>
        </div>

        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            The page you are looking for is not available
          </h2>
          <p className="text-lg text-muted-foreground">
            It looks like you’ve wandered off the wellness path. Don’t worry — our IV therapy services are just a click away. Let’s get you back to feeling your best.
          </p>
        </div>

        <div>
          <Button asChild size="lg" className="uppercase tracking-wider">
            <Link to="/">Go back to Homepage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
