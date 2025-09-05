import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NadPeptides = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedPeptide, setSelectedPeptide] = useState(null);

  useEffect(() => {
    document.title = "NAD+ & Peptides | Stay Dripped IV & Wellness Co.";
  }, []);

  // Comprehensive peptide database
  const peptideDatabase = {
    'nad+ iv therapy': {
      name: 'NAD+ IV Therapy',
      category: 'Anti-Aging',
      price: '$299',
      duration: '3-4 hours',
      dosage: '250-500mg per infusion',
      administration: 'Intravenous infusion',
      benefits: [
        'Enhanced cellular energy',
        'Improved mental clarity',
        'Better sleep quality',
        'Addiction recovery support',
        'Anti-aging effects',
        'DNA repair support'
      ],
      description: 'NAD+ IV therapy delivers nicotinamide adenine dinucleotide directly to your cells for enhanced energy production and cellular repair.',
      howItWorks: 'Replenishes cellular NAD+ levels, supporting mitochondrial function and DNA repair mechanisms.',
      idealFor: 'Individuals seeking enhanced energy, mental clarity, anti-aging benefits, or addiction recovery support.',
      frequency: 'Weekly to monthly infusions depending on individual goals',
      sideEffects: 'Mild nausea, cramping during infusion (rate dependent), temporary flushing'
    },
    'bpc-157': {
      name: 'BPC-157',
      category: 'Healing & Recovery',
      price: '$120',
      duration: '5 minutes',
      dosage: '250-500mcg per injection',
      administration: 'Subcutaneous injection',
      benefits: [
        'Accelerated tissue repair',
        'Reduced inflammation',
        'Improved gut health',
        'Enhanced wound healing',
        'Joint and tendon repair',
        'Neuroprotective effects'
      ],
      description: 'BPC-157 is a synthetic peptide derived from a protective protein found in human gastric juice, known for its remarkable healing properties.',
      howItWorks: 'Promotes angiogenesis, collagen synthesis, and modulates growth factors to accelerate healing processes.',
      idealFor: 'Athletes, individuals with injuries, digestive issues, or those seeking enhanced recovery.',
      frequency: 'Daily injections for acute issues, 3-5 times weekly for maintenance',
      sideEffects: 'Generally well tolerated with minimal side effects'
    },
    'tb-500': {
      name: 'TB-500',
      category: 'Healing & Recovery',
      price: '$135',
      duration: '5 minutes',
      dosage: '2-5mg per injection',
      administration: 'Subcutaneous injection',
      benefits: [
        'Enhanced muscle repair',
        'Improved flexibility',
        'Faster injury recovery',
        'Reduced inflammation',
        'Better endurance',
        'Cardiovascular benefits'
      ],
      description: 'TB-500 is a synthetic peptide that mimics thymosin beta-4, promoting healing and recovery throughout the body.',
      howItWorks: 'Promotes cell migration, blood vessel formation, and tissue repair through actin regulation.',
      idealFor: 'Athletes with injuries, individuals seeking improved recovery, or those with chronic inflammatory conditions.',
      frequency: 'Twice weekly for 4-6 weeks, then maintenance dosing',
      sideEffects: 'Generally well tolerated, possible mild injection site reactions'
    },
    'cjc-1295': {
      name: 'CJC-1295',
      category: 'Growth Hormone',
      price: '$145',
      duration: '5 minutes',
      dosage: '100-300mcg per injection',
      administration: 'Subcutaneous injection',
      benefits: [
        'Increased growth hormone',
        'Enhanced muscle growth',
        'Improved recovery',
        'Better sleep quality',
        'Fat loss support',
        'Anti-aging effects'
      ],
      description: 'CJC-1295 stimulates natural growth hormone release, supporting muscle growth, recovery, and overall wellness.',
      howItWorks: 'Stimulates the pituitary gland to release growth hormone in natural pulses.',
      idealFor: 'Individuals seeking natural growth hormone optimization, muscle growth, or anti-aging benefits.',
      frequency: '2-3 times per week before bed for optimal GH release',
      sideEffects: 'Possible water retention, injection site reactions, mild fatigue initially'
    },
    'ipamorelin': {
      name: 'Ipamorelin',
      category: 'Growth Hormone',
      price: '$130',
      duration: '5 minutes',
      dosage: '200-300mcg per injection',
      administration: 'Subcutaneous injection',
      benefits: [
        'Selective GH release',
        'No cortisol increase',
        'Enhanced recovery',
        'Improved sleep',
        'Muscle preservation',
        'Fat loss support'
      ],
      description: 'Ipamorelin is the most selective growth hormone releasing peptide, providing GH benefits without unwanted side effects.',
      howItWorks: 'Selectively binds to growth hormone secretagogue receptors to stimulate natural GH release.',
      idealFor: 'Individuals seeking growth hormone benefits with minimal side effects and excellent tolerability.',
      frequency: 'Daily injections, often combined with CJC-1295 for synergistic effects',
      sideEffects: 'Excellent tolerability profile with minimal side effects'
    },
    'sermorelin': {
      name: 'Sermorelin',
      category: 'Growth Hormone',
      price: '$125',
      duration: '5 minutes',
      dosage: '200-500mcg per injection',
      administration: 'Subcutaneous injection',
      benefits: [
        'Natural GH stimulation',
        'Improved sleep quality',
        'Enhanced recovery',
        'Better body composition',
        'Increased energy',
        'Anti-aging support'
      ],
      description: 'Sermorelin is a GHRH analog that naturally stimulates growth hormone production by the pituitary gland.',
      howItWorks: 'Mimics natural GHRH to stimulate physiological growth hormone release patterns.',
      idealFor: 'Adults seeking natural growth hormone optimization with physiological dosing patterns.',
      frequency: 'Daily bedtime injections for optimal natural GH rhythm',
      sideEffects: 'Generally well tolerated, possible injection site reactions'
    }
  };

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

  // Get all categories
  const categories = ['all', ...new Set(Object.values(peptideDatabase).map(p => p.category))];

  // Filter peptides by category
  const filteredPeptides = selectedCategory === 'all' 
    ? Object.entries(peptideDatabase)
    : Object.entries(peptideDatabase).filter(([_, peptide]) => peptide.category === selectedCategory);

  const openQuickView = (peptideKey) => {
    setSelectedPeptide(peptideDatabase[peptideKey]);
    setShowQuickView(true);
  };

  const closeQuickView = () => {
    setShowQuickView(false);
    setSelectedPeptide(null);
  };

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

          {/* Category Navigation */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category.replace('-', ' ')}
              </Button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPeptides.map(([key, peptide]) => (
              <div key={key} className="group relative overflow-hidden rounded-2xl bg-card shadow-lg border transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                  <div className="absolute top-4 right-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                    {peptide.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {peptide.name}
                  </h3>
                  <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
                    {peptide.description.substring(0, 120)}...
                  </p>
                  
                  <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-primary">Price:</span>
                      <div className="text-lg font-bold text-primary">{peptide.price}</div>
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Duration:</span>
                      <div>{peptide.duration}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="font-semibold text-primary text-sm">Key Benefits:</span>
                    <ul className="mt-2 space-y-1">
                      {peptide.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="text-secondary">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => openQuickView(key)}
                    >
                      Learn More
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <Link to="/first-time-patients">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {showQuickView && selectedPeptide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={closeQuickView}>
          <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{selectedPeptide.name}</h2>
                <span className="inline-block mt-1 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  {selectedPeptide.category}
                </span>
              </div>
              <Button variant="ghost" onClick={closeQuickView} className="text-2xl">
                ×
              </Button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-muted p-4 rounded-lg text-center">
                  <h4 className="text-primary font-semibold mb-2">Price</h4>
                  <p className="text-2xl font-bold text-foreground">{selectedPeptide.price}</p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <h4 className="text-primary font-semibold mb-2">Duration</h4>
                  <p className="text-lg font-semibold text-foreground">{selectedPeptide.duration}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Description</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedPeptide.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">How It Works</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedPeptide.howItWorks}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-primary mb-1">Dosage</h5>
                    <p className="text-sm text-muted-foreground">{selectedPeptide.dosage}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-1">Administration</h5>
                    <p className="text-sm text-muted-foreground">{selectedPeptide.administration}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Benefits</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedPeptide.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-secondary font-bold">✓</span>
                        <span className="text-muted-foreground text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                  <div>
                    <h5 className="font-semibold text-primary mb-1">Ideal For</h5>
                    <p className="text-sm text-muted-foreground">{selectedPeptide.idealFor}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-1">Frequency</h5>
                    <p className="text-sm text-muted-foreground">{selectedPeptide.frequency}</p>
                  </div>
                </div>

                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h5 className="font-semibold text-red-800 mb-1 text-sm">Side Effects & Considerations</h5>
                  <p className="text-red-700 text-sm">{selectedPeptide.sideEffects}</p>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button size="lg" className="flex-1" asChild>
                    <Link to="/first-time-patients">Book Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1" asChild>
                    <Link to="/telehealth">Ask Questions</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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