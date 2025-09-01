import { Button } from "@/components/ui/button";
import ivHeroImage from "@/assets/iv-therapy-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div className="absolute -right-24 -top-24 rounded-full w-[28rem] h-[28rem] bg-primary/5 blur-3xl"></div>
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 rounded-full w-[20rem] h-[20rem] bg-accent/5 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-center py-20 lg:py-28">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
              <span>Concierge IV Therapy & Telehealth</span>
            </span>
            <h1 className="mt-5 font-heading font-extrabold tracking-tight text-4xl sm:text-6xl leading-[1.05] text-foreground">
              Feel better, faster.<br/>
              <span className="underline-soft">Personalized care—wherever you are.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Hydration, recovery, peptides, hormones, and physician‑trusted supplements from Arizona's premier mobile wellness team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="btn btn-primary">
                Book IV Therapy
              </Button>
              <Button variant="outline" size="lg" className="btn btn-outline">
                Shop Supplements
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="text-lg">⭐️⭐️⭐️⭐️⭐️</span> 4.9 from patients
              </span>
              <span className="hidden sm:inline-block">•</span>
              <span>Same‑day availability</span>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 p-2">
                <div className="h-full w-full rounded-2xl bg-background grid sm:grid-cols-2">
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-foreground">Mobile IV Visits</h3>
                    <p className="mt-2 text-muted-foreground">Nurse‑led care at home, office, or hotel. Hydration, recovery, and wellness drips personalized to you.</p>
                    <a href="#treatments" className="mt-4 inline-flex items-center text-primary font-medium hover:text-primary/80">Explore treatments →</a>
                  </div>
                  <div className="p-6 sm:p-8 bg-muted/30 rounded-br-2xl rounded-tr-2xl flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-foreground">Telehealth</h3>
                    <p className="mt-2 text-muted-foreground">Weight, hormones, peptides & more with board‑certified providers—no waiting rooms.</p>
                    <a href="#telehealth" className="mt-4 inline-flex items-center text-primary font-medium hover:text-primary/80">See telehealth services →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;