import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

type Category = "all" | "allergies" | "sex-specific" | "general";

const ProductCard = ({
  badge,
  category,
  title,
  description,
  price,
}: {
  badge?: string;
  category: string;
  title: string;
  description: string;
  price: string;
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
    <h3 className="text-center text-2xl font-bold text-foreground relative pb-3 after:content-[''] after:absolute after:w-16 after:h-0.5 after:bg-primary after:left-1/2 after:-translate-x-1/2 after:-bottom-1"></h3>
    {children}
  </div>
);

const MobileTestingKits = () => {
  const [active, setActive] = useState<Category>("all");

  return (
    <div>
      <section className="bg-gradient-to-br from-brand-light/60 via-secondary/10 to-brand-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Mobile Testing Kits</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Comprehensive at-home testing kits for complete health monitoring and optimization. Get lab-quality results from the comfort of your home.
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
              { k: "all", label: "All" },
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
            <Section id="all" title="All" active={active === "all"}>
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <ProductCard badge="Popular" category="Allergies & Sensitivities" title="Environmental Allergy Panel" description="Comprehensive testing for environmental allergens including pollen, dust, mold, and pet dander." price="$299" />
                <ProductCard category="Allergies & Sensitivities" title="Food Sensitivity Panel" description="Identify food sensitivities that may be causing digestive issues, inflammation, or other symptoms." price="$349" />
                <ProductCard category="Sex-Specific" title="Female Health Panel" description="Comprehensive women's health testing including hormones, fertility markers, and reproductive health indicators." price="$429" />
                <ProductCard category="Sex-Specific" title="Male Health Panel" description="Comprehensive men's health testing including testosterone, prostate health, and cardiovascular risk markers." price="$399" />
                <ProductCard category="General" title="Adrenal & Stress Panel" description="Comprehensive assessment of adrenal function and stress response to optimize energy and resilience." price="$349" />
                <ProductCard badge="Comprehensive" category="General" title="Thyroid Function Panel" description="Complete thyroid assessment including TSH, T3, T4, and thyroid antibodies for optimal thyroid health." price="$299" />
              </div>
            </Section>

            <Section id="allergies" title="Allergies & Sensitivities" active={active === "allergies"}>
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
                <ProductCard badge="Popular" category="Allergies & Sensitivities" title="Environmental Allergy Panel" description="Comprehensive testing for environmental allergens including pollen, dust, mold, and pet dander." price="$299" />
                <ProductCard badge="Comprehensive" category="Allergies & Sensitivities" title="Food Sensitivity Panel" description="Extensive food sensitivity testing to identify trigger foods and optimize your diet." price="$349" />
              </div>
            </Section>

            <Section id="sex-specific" title="Sex-Specific" active={active === "sex-specific"}>
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
                <ProductCard badge="Women's Health" category="Sex-Specific" title="Female Health Panel" description="Comprehensive women's health testing including hormones, fertility markers, and reproductive health." price="$399" />
                <ProductCard badge="Men's Health" category="Sex-Specific" title="Male Health Panel" description="Complete men's health assessment including testosterone, prostate health, and cardiovascular markers." price="$399" />
              </div>
            </Section>

            <Section id="general" title="General Health" active={active === "general"}>
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <ProductCard badge="Essential" category="General" title="Adrenal & Stress Panel" description="Comprehensive assessment of adrenal function and stress response markers." price="$279" />
                <ProductCard category="General" title="Autoimmune Panel" description="Screening for autoimmune conditions and inflammatory markers." price="$349" />
                <ProductCard badge="Basic" category="General" title="Basic Laboratory Markers" description="Essential blood work including complete blood count and basic metabolic panel." price="$199" />
                <ProductCard category="General" title="Cardiovascular Health Panel" description="Comprehensive cardiovascular risk assessment and heart health markers." price="$329" />
                <ProductCard badge="Current" category="General" title="COVID-19 Testing Panel" description="Comprehensive COVID-19 testing including PCR, antigen, and antibody tests." price="$149" />
                <ProductCard category="General" title="Environmental Toxins Panel" description="Detection of environmental toxins and heavy metal exposure." price="$379" />
                <ProductCard category="General" title="Immune System Panel" description="Comprehensive immune system function assessment and optimization." price="$299" />
                <ProductCard category="General" title="Infection Screening Panel" description="Comprehensive screening for bacterial, viral, and fungal infections." price="$249" />
                <ProductCard category="General" title="Lyme & Tickborne Disease Panel" description="Specialized testing for Lyme disease and other tick-borne infections." price="$399" />
                <ProductCard category="General" title="Medications & Drugs Panel" description="Drug screening and medication level monitoring for therapeutic optimization." price="$199" />
                <ProductCard category="General" title="Heavy Metals Panel" description="Comprehensive heavy metal toxicity testing and detoxification guidance." price="$349" />
                <ProductCard category="General" title="Metabolic Function Panel" description="Complete metabolic assessment including blood sugar, insulin, and metabolic markers." price="$279" />
                <ProductCard category="General" title="Mold Exposure Panel" description="Detection of mold exposure and mycotoxin testing for environmental health." price="$329" />
                <ProductCard category="General" title="Neurological Function Panel" description="Comprehensive neurological health assessment and brain function markers." price="$399" />
                <ProductCard category="General" title="Nutrition Assessment Panel" description="Comprehensive nutritional status evaluation and deficiency screening." price="$249" />
                <ProductCard category="General" title="Oral Health Panel" description="Comprehensive oral health assessment including bacterial analysis and gum health." price="$199" />
                <ProductCard category="General" title="Oxidative Stress Panel" description="Assessment of cellular damage and antioxidant status for anti-aging optimization." price="$279" />
                <ProductCard category="General" title="Pancreatic Function Panel" description="Comprehensive pancreatic health assessment including enzyme function and diabetes screening." price="$299" />
                <ProductCard category="General" title="Pregnancy & Prenatal Care Panel" description="Comprehensive prenatal testing for mother and baby health optimization." price="$349" />
                <ProductCard category="General" title="Renal Function Panel" description="Comprehensive kidney function assessment and nephrology markers." price="$249" />
                <ProductCard category="General" title="Sleep Quality Panel" description="Comprehensive sleep health assessment including hormone and neurotransmitter analysis." price="$329" />
                <ProductCard badge="Popular" category="General" title="Thyroid Function Panel" description="Complete thyroid health assessment including TSH, T3, T4, and autoimmune markers." price="$299" />
                <ProductCard category="General" title="Tumor Markers Panel" description="Cancer screening and tumor marker testing for early detection and monitoring." price="$399" />
              </div>
            </Section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileTestingKits;
