import { Button } from "@/components/ui/button";

const categories = [
  "Supplements",
  "Vitamins & minerals",
  "Health conditions",
  "Sports nutrition",
  "Personal care",
  "Brands",
];

const ProductCard = ({
  category,
  name,
  description,
  price,
}: {
  category: string;
  name: string;
  description: string;
  price: string;
}) => (
  <div className="rounded-2xl bg-white shadow-4xl-soft hover:shadow-8xl transition-transform hover:-translate-y-2 overflow-hidden">
    <div
      className="w-full h-52 bg-[length:contain] bg-center bg-no-repeat bg-gradient-to-br from-muted to-muted/60"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2Fd86ad443e90f49f6824eddb927a8e06f%2F1bb3a1ef45384ef3907b8f30baeec5a4?format=webp&width=800)",
      }}
    />
    <div className="p-6">
      <div className="text-primary text-xs font-semibold uppercase tracking-wide">{category}</div>
      <h3 className="mt-1 text-lg font-semibold text-foreground">{name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 text-xl font-bold text-primary">{price}</div>
      <Button className="w-full mt-4">Add to Cart</Button>
    </div>
  </div>
);

const Supplements = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Professional Supplements</h1>
          <p className="mt-3 max-w-2xl mx-auto text-base/relaxed opacity-90">
            Premium, professional-grade supplements curated by our medical team for optimal health and wellness outcomes.
          </p>
        </div>
      </section>

      <section className="sticky top-[64px] z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white p-3 shadow-4xl-soft">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-muted text-foreground/80 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition text-sm font-medium"
                >
                  <span>{c}</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                    <path d="M241 369c-9.4 9.4-24.6 9.4-33.9 0L47 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 369z" />
                  </svg>
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-lg border border-border bg-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition grid place-items-center" aria-label="Previous">
                <svg className="w-3.5 h-3.5" viewBox="0 0 320 512" fill="currentColor" aria-hidden>
                  <path d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-lg border border-border bg-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition grid place-items-center" aria-label="Next">
                <svg className="w-3.5 h-3.5" viewBox="0 0 320 512" fill="currentColor" aria-hidden>
                  <path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif text-foreground">Popular products</h2>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            <ProductCard category="Supplements" name="Premium Multivitamin Complex" description="Complete daily nutrition with essential vitamins and minerals for optimal health." price="$49.99" />
            <ProductCard category="Vitamins & Minerals" name="Vitamin D3 + K2" description="High-potency vitamin D3 with K2 for bone health and immune support." price="$34.99" />
            <ProductCard category="Sports Nutrition" name="Performance Recovery" description="Advanced recovery formula with amino acids and electrolytes." price="$59.99" />
            <ProductCard category="Health Conditions" name="Immune Support Complex" description="Powerful immune system support with vitamin C, zinc, and elderberry." price="$44.99" />
            <ProductCard category="Personal Care" name="Collagen Beauty Formula" description="Premium collagen peptides for skin, hair, and nail health." price="$69.99" />
            <ProductCard category="Supplements" name="Omega-3 Ultra" description="High-purity fish oil with EPA and DHA for heart and brain health." price="$39.99" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Supplements;
