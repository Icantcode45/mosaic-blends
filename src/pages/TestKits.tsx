import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

type Category = "all" | "allergies" | "sex-specific" | "general" | "hormone" | "metabolic";

const ProductCard = ({
  badge,
  category,
  title,
  description,
  price,
  features,
}: {
  badge?: string;
  category: string;
  title: string;
  description: string;
  price: string;
  features?: string[];
}) => (
  <div className="relative rounded-xl border bg-card text-card-foreground shadow-4xl-soft hover:shadow-8xl transition-transform hover:-translate-y-3">
    <div className="h-40 bg-gradient-to-r from-primary to-secondary relative overflow-hidden rounded-t-xl">
      {badge && (
        <span className="absolute top-4 right-4 inline-flex items-center text-xs font-semibold bg-accent text-accent-foreground rounded-full px-2.5 py-1">
          {badge}
        </span>
      )}
    </div>
    <div className="p-6">
      <div className="text-primary text-xs font-semibold uppercase tracking-wide">{category}</div>
      <h3 className="mt-2 text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      
      {features && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">What's Included:</h4>
          <div className="grid grid-cols-2 gap-1">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="text-secondary">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-6 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-primary">{price}</div>
        <Button asChild>
          <Link to="/first-time-patients">Order Test</Link>
        </Button>
      </div>
    </div>
  </div>
);

const Section = ({ id, title, children, active }: { id: Category; title: string; children: React.ReactNode; active: boolean; }) => (
  <div className={`${active ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-4'} transition-all`} data-category={id}>
    <h3 className="text-center text-2xl font-bold text-foreground relative pb-3 after:content-[''] after:absolute after:w-16 after:h-0.5 after:bg-primary after:left-1/2 after:-translate-x-1/2 after:-bottom-1 mb-8"></h3>
    {children}
  </div>
);

const TestKits = () => {
  const [active, setActive] = useState<Category>("all");

  return (
    <>
      <Helmet>
        <title>Test Kits & Health Panels | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Comprehensive at-home test kits and health panels for complete health monitoring. Professional lab-quality testing from the comfort of your home." />
        <link rel="canonical" href="https://staydrippediv.com/test-kits" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Test Kits & Health Panels | Stay Dripped IV & Wellness Co." />
        <meta property="og:description" content="Comprehensive at-home test kits and health panels for complete health monitoring. Professional lab-quality testing from the comfort of your home." />
        <meta property="og:url" content="https://staydrippediv.com/test-kits" />
      </Helmet>

      <div>
        <section className="bg-gradient-to-br from-brand-light/60 via-secondary/10 to-brand-blue/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Test Kits & Health Panels</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Comprehensive at-home testing kits for complete health monitoring and optimization. Get lab-quality results from the comfort of your home with professional analysis and personalized recommendations.
            </p>
            <div className="mt-6 inline-flex">
              <Button asChild size="lg"><Link to="/first-time-patients">Order Test Kit</Link></Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground">Comprehensive Health Testing</h2>
            <p className="mt-3 text-center max-w-3xl mx-auto text-muted-foreground">
              Professional-grade testing kits delivered to your door with comprehensive analysis and personalized recommendations.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {([
                { k: "all", label: "All Tests" },
                { k: "hormone", label: "Hormone Health" },
                { k: "metabolic", label: "Metabolic Health" },
                { k: "allergies", label: "Allergies & Sensitivities" },
                { k: "sex-specific", label: "Sex-Specific" },
                { k: "general", label: "General Health" },
              ] as { k: Category; label: string }[]).map(({ k, label }) => (
                <button
                  key={k}
                  onClick={() => setActive(k)}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                    active === k
                      ? 'bg-primary text-primary-foreground border-primary shadow'
                      : 'bg-white text-muted-foreground border-border hover:border-primary hover:text-primary'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-10 space-y-10">
              <Section id="all" title="All Tests" active={active === "all"}>
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <ProductCard 
                    badge="Popular" 
                    category="General Health" 
                    title="Comprehensive Health Panel" 
                    description="Complete health assessment including blood count, metabolic panel, lipids, and vitamins." 
                    price="$299" 
                    features={["Complete Blood Count", "Metabolic Panel", "Lipid Profile", "Vitamin D & B12"]}
                  />
                  <ProductCard 
                    badge="Comprehensive" 
                    category="Hormone Health" 
                    title="Complete Hormone Panel" 
                    description="Full hormone analysis including testosterone, estrogen, thyroid, and stress hormones." 
                    price="$249" 
                    features={["Testosterone", "Estrogen & Progesterone", "Thyroid (TSH, T3, T4)", "Cortisol & DHEA-S"]}
                  />
                  <ProductCard 
                    category="Allergies & Sensitivities" 
                    title="Environmental Allergy Panel" 
                    description="Comprehensive testing for environmental allergens including pollen, dust, mold, and pet dander." 
                    price="$299" 
                  />
                  <ProductCard 
                    category="Allergies & Sensitivities" 
                    title="Food Sensitivity Panel" 
                    description="Identify food sensitivities that may be causing digestive issues, inflammation, or other symptoms." 
                    price="$349" 
                  />
                  <ProductCard 
                    category="Sex-Specific" 
                    title="Female Health Panel" 
                    description="Comprehensive women's health testing including hormones, fertility markers, and reproductive health indicators." 
                    price="$429" 
                  />
                  <ProductCard 
                    category="Sex-Specific" 
                    title="Male Health Panel" 
                    description="Comprehensive men's health testing including testosterone, prostate health, and cardiovascular risk markers." 
                    price="$399" 
                  />
                  <ProductCard 
                    category="General Health" 
                    title="Thyroid Function Panel" 
                    description="Complete thyroid assessment including TSH, T3, T4, and thyroid antibodies for optimal thyroid health." 
                    price="$299" 
                  />
                  <ProductCard 
                    category="General Health" 
                    title="Adrenal & Stress Panel" 
                    description="Comprehensive assessment of adrenal function and stress response to optimize energy and resilience." 
                    price="$349" 
                  />
                  <ProductCard 
                    category="Metabolic Health" 
                    title="Metabolic Function Panel" 
                    description="Complete metabolic assessment including blood sugar, insulin, and metabolic markers." 
                    price="$279" 
                  />
                </div>
              </Section>

              <Section id="hormone" title="Hormone Health" active={active === "hormone"}>
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <ProductCard 
                    badge="Comprehensive" 
                    category="Hormone Health" 
                    title="Complete Hormone Panel" 
                    description="Full hormone analysis including testosterone, estrogen, thyroid, and stress hormones." 
                    price="$249" 
                    features={["Testosterone", "Estrogen & Progesterone", "Thyroid (TSH, T3, T4)", "Cortisol & DHEA-S"]}
                  />
                  <ProductCard 
                    badge="Popular" 
                    category="Hormone Health" 
                    title="Thyroid Function Panel" 
                    description="Complete thyroid health assessment including TSH, T3, T4, and autoimmune markers." 
                    price="$299" 
                  />
                  <ProductCard 
                    category="Hormone Health" 
                    title="Adrenal & Stress Panel" 
                    description="Comprehensive assessment of adrenal function and stress response markers." 
                    price="$279" 
                  />
                </div>
              </Section>

              <Section id="metabolic" title="Metabolic Health" active={active === "metabolic"}>
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
                  <ProductCard 
                    category="Metabolic Health" 
                    title="Metabolic Function Panel" 
                    description="Complete metabolic assessment including blood sugar, insulin, and metabolic markers." 
                    price="$279" 
                  />
                  <ProductCard 
                    category="Metabolic Health" 
                    title="Cardiovascular Health Panel" 
                    description="Comprehensive cardiovascular risk assessment and heart health markers." 
                    price="$329" 
                  />
                </div>
              </Section>

              <Section id="allergies" title="Allergies & Sensitivities" active={active === "allergies"}>
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
                  <ProductCard 
                    badge="Popular" 
                    category="Allergies & Sensitivities" 
                    title="Environmental Allergy Panel" 
                    description="Comprehensive testing for environmental allergens including pollen, dust, mold, and pet dander." 
                    price="$299" 
                  />
                  <ProductCard 
                    badge="Comprehensive" 
                    category="Allergies & Sensitivities" 
                    title="Food Sensitivity Panel" 
                    description="Extensive food sensitivity testing to identify trigger foods and optimize your diet." 
                    price="$349" 
                  />
                </div>
              </Section>

              <Section id="sex-specific" title="Sex-Specific" active={active === "sex-specific"}>
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
                  <ProductCard 
                    badge="Women's Health" 
                    category="Sex-Specific" 
                    title="Female Health Panel" 
                    description="Comprehensive women's health testing including hormones, fertility markers, and reproductive health." 
                    price="$399" 
                  />
                  <ProductCard 
                    badge="Men's Health" 
                    category="Sex-Specific" 
                    title="Male Health Panel" 
                    description="Complete men's health assessment including testosterone, prostate health, and cardiovascular markers." 
                    price="$399" 
                  />
                </div>
              </Section>

              <Section id="general" title="General Health" active={active === "general"}>
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <ProductCard 
                    badge="Essential" 
                    category="General Health" 
                    title="Comprehensive Health Panel" 
                    description="Complete health screening including CBC, metabolic panel, and vitamin levels." 
                    price="$299" 
                    features={["Complete Blood Count", "Metabolic Panel", "Lipid Profile", "Vitamin D & B12"]}
                  />
                  <ProductCard 
                    category="General Health" 
                    title="Autoimmune Panel" 
                    description="Screening for autoimmune conditions and inflammatory markers." 
                    price="$349" 
                  />
                  <ProductCard 
                    badge="Basic" 
                    category="General Health" 
                    title="Basic Laboratory Markers" 
                    description="Essential blood work including complete blood count and basic metabolic panel." 
                    price="$199" 
                  />
                  <ProductCard 
                    badge="Current" 
                    category="General Health" 
                    title="COVID-19 Testing Panel" 
                    description="Comprehensive COVID-19 testing including PCR, antigen, and antibody tests." 
                    price="$149" 
                  />
                  <ProductCard 
                    category="General Health" 
                    title="Environmental Toxins Panel" 
                    description="Detection of environmental toxins and heavy metal exposure." 
                    price="$379" 
                  />
                  <ProductCard 
                    category="General Health" 
                    title="Immune System Panel" 
                    description="Comprehensive immune system function assessment and optimization." 
                    price="$299" 
                  />
                  <ProductCard 
                    category="General Health" 
                    title="Infection Screening Panel" 
                    description="Comprehensive screening for bacterial, viral, and fungal infections." 
                    price="$249" 
                  />
                  <ProductCard 
                    category="General Health" 
                    title="Lyme & Tickborne Disease Panel" 
                    description="Specialized testing for Lyme disease and other tick-borne infections." 
                    price="$399" 
                  />
                  <ProductCard 
                    category="General Health" 
                    title="Heavy Metals Panel" 
                    description="Comprehensive heavy metal toxicity testing and detoxification guidance." 
                    price="$349" 
                  />
                  <ProductCard 
                    category="General Health" 
                    title="Mold Exposure Panel" 
                    description="Detection of mold exposure and mycotoxin testing for environmental health." 
                    price="$329" 
                  />
                  <ProductCard 
                    category="General Health" 
                    title="Nutrition Assessment Panel" 
                    description="Comprehensive nutritional status evaluation and deficiency screening." 
                    price="$249" 
                  />
                  <ProductCard 
                    category="General Health" 
                    title="Sleep Quality Panel" 
                    description="Comprehensive sleep health assessment including hormone and neurotransmitter analysis." 
                    price="$329" 
                  />
                </div>
              </Section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TestKits;