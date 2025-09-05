import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NadPeptides = () => {
  useEffect(() => {
    document.title = "NAD+ & Peptides | Stay Dripped IV & Wellness Co.";
  }, []);

  const nadProducts = [
    {
      category: "NAD+ Therapy",
      title: "NAD+ IV Infusion",
      description: "Boost cellular energy production and support anti-aging processes with our premium NAD+ IV therapy.",
      price: "$299",
      features: [
        "500mg NAD+ infusion",
        "Cellular regeneration support",
        "Enhanced mental clarity",
        "Anti-aging benefits",
        "Metabolic optimization"
      ],
      badge: "Popular"
    },
    {
      category: "NAD+ Therapy",
      title: "NAD+ Booster",
      description: "A concentrated dose of NAD+ for quick cellular energy enhancement and recovery.",
      price: "$199",
      features: [
        "250mg NAD+ infusion", 
        "Quick 30-minute treatment",
        "Energy enhancement",
        "Mental focus support",
        "Recovery acceleration"
      ]
    },
    {
      category: "Peptide Therapy",
      title: "Anti-Aging Peptides",
      description: "Advanced peptide therapy to promote cellular repair and longevity.",
      price: "$349",
      features: [
        "Customized peptide blend",
        "Cellular repair activation",
        "Collagen production boost",
        "Hormone optimization",
        "Tissue regeneration"
      ],
      badge: "Advanced"
    },
    {
      category: "Peptide Therapy", 
      title: "Recovery Peptides",
      description: "Specialized peptides designed to accelerate healing and recovery processes.",
      price: "$279",
      features: [
        "Recovery-focused peptides",
        "Inflammation reduction",
        "Muscle repair support",
        "Faster healing",
        "Performance enhancement"
      ]
    }
  ];

  const benefitsInfo = [
    {
      icon: "🧬",
      title: "Cellular Regeneration",
      description: "NAD+ therapy supports mitochondrial function and cellular repair processes for optimal health and longevity."
    },
    {
      icon: "🧠", 
      title: "Mental Clarity",
      description: "Enhanced cognitive function, improved focus, and mental clarity through optimized cellular energy production."
    },
    {
      icon: "⚡",
      title: "Energy Enhancement",
      description: "Restore cellular energy levels and combat fatigue with advanced NAD+ and peptide treatments."
    },
    {
      icon: "🔬",
      title: "Scientific Precision",
      description: "Clinically-proven treatments delivered by licensed medical professionals using the highest quality compounds."
    }
  ];

  return (
    <>
      <Helmet>
        <title>NAD+ & Peptides | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Advanced anti-aging and cellular repair therapies in Scottsdale, AZ. NAD+ IV therapy and peptide treatments for optimal health and longevity." />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://staydrippediv.com/nad-peptides" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NAD+ & Peptides | Stay Dripped IV & Wellness Co." />
        <meta property="og:description" content="Advanced anti-aging and cellular repair therapies in Scottsdale, AZ. NAD+ IV therapy and peptide treatments for optimal health and longevity." />
        <meta property="og:url" content="https://staydrippediv.com/nad-peptides" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NAD+ & Peptides | Stay Dripped IV & Wellness Co." />
        <meta name="twitter:description" content="Advanced anti-aging and cellular repair therapies in Scottsdale, AZ. NAD+ IV therapy and peptide treatments for optimal health and longevity." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        
        <div className="container relative z-10 mx-auto px-4 py-32 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            NAD+ & Peptides
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl font-light leading-relaxed opacity-90">
            Advanced anti-aging and cellular repair therapies designed to optimize your health at the molecular level. 
            Experience cutting-edge treatments for longevity and peak performance.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold uppercase tracking-wide" asChild>
              <Link to="/first-time-patients">Book Treatment</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold uppercase tracking-wide border-white text-white hover:bg-white hover:text-slate-800" asChild>
              <Link to="/telehealth">Consult Provider</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              Why Choose NAD+ & Peptide Therapy?
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Discover the science-backed benefits of advanced cellular therapy treatments that optimize your body's natural healing and regenerative processes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefitsInfo.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-3xl text-white">
                  {benefit.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              Advanced Treatments Available
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Our comprehensive selection of NAD+ and peptide therapies are designed to address your specific wellness goals 
              with precision and scientific excellence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {nadProducts.map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-card shadow-lg border transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                {product.badge && (
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                    {product.badge}
                  </div>
                )}
                
                <div className="h-56 bg-gradient-to-br from-slate-700 to-slate-800 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="p-8">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    {product.category}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-foreground">
                    {product.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="mb-8 space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-1 text-secondary">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-primary">
                      {product.price}
                    </div>
                    <Button className="px-6 py-3" asChild>
                      <Link to="/first-time-patients">Book Treatment</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 p-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-foreground">
              Ready to Optimize Your Health?
            </h3>
            <p className="mb-8 text-lg text-muted-foreground">
              Schedule a consultation with our medical team to create a personalized NAD+ and peptide therapy plan 
              that fits your wellness goals and lifestyle.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold" asChild>
                <Link to="/first-time-patients">Book Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold" asChild>
                <Link to="/telehealth">Talk to Provider</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NadPeptides;