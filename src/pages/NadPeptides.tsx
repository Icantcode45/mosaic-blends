import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NadPeptides = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedPeptide, setSelectedPeptide] = useState(null);
  const [chatVisible, setChatVisible] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);

  useEffect(() => {
    document.title = "NAD+ & Peptides | Stay Dripped IV & Wellness Co.";
    
    // Show chat widget after 5 seconds
    const timer = setTimeout(() => {
      setChatVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
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

      {/* Google Reviews Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Read authentic reviews from real clients who have experienced our NAD+ and peptide therapies.
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
                The NAD+ therapy has been life-changing! I've noticed incredible improvements in my energy levels and mental clarity. The team at Stay Dripped is professional and knowledgeable. Highly recommend!
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
                BPC-157 helped me recover from a sports injury faster than I ever expected. The peptide therapy combined with their expertise made all the difference in my recovery journey.
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
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="flex gap-1 text-yellow-500 text-xl">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground font-medium">512 reviews</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <a href="https://wanderlog.com/place/details/13453687#PlaceRatingsAndReviewsSection__id" target="_blank" rel="noopener noreferrer">
                View All Reviews
              </a>
            </Button>
            <Button size="lg" asChild>
              <a href="https://share.google/IS2IppThdkxiqV0MO" target="_blank" rel="noopener noreferrer">
                Write a Review
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Online Booking Section */}
      <section className="bg-gradient-to-br from-muted/50 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              Book Your NAD+ & Peptide Therapy
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Schedule your advanced anti-aging and cellular repair treatments online. Choose from our comprehensive menu of NAD+ IV therapy and peptide treatments.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border">
            <div className="max-w-3xl mx-auto">
              {showQuickView && <div className="text-center py-8 text-muted-foreground">IntakeQ booking widget would be integrated here</div>}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Need help choosing the right treatment?</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button asChild>
                <a href="tel:+1-602-688-9825">
                  📞 Call (602) 688-9825
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="sms:+1-602-688-9825">
                  💬 Text Us
                </a>
              </Button>
            </div>
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

      {/* Chat Widget */}
      {chatVisible && (
        <div className="fixed bottom-5 right-5 z-50">
          <div className="bg-card rounded-2xl shadow-2xl border p-5 max-w-xs animate-in slide-in-from-bottom-5">
            <button 
              onClick={() => setChatVisible(false)}
              className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
            >
              ×
            </button>
            <p className="text-sm font-medium text-foreground mb-3">Questions about our peptides?</p>
            <Button 
              size="sm" 
              className="w-full"
              onClick={() => {
                setChatVisible(false);
                setShowChatModal(true);
              }}
            >
              Chat with a Specialist
            </Button>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      {showChatModal && (
        <div className="fixed bottom-5 right-5 w-96 h-[500px] bg-card rounded-2xl shadow-2xl border z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">NAD+ & Peptide Specialist</h3>
              <p className="text-xs opacity-90">Online • Typically responds in minutes</p>
            </div>
            <button 
              onClick={() => setShowChatModal(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-muted/20">
            <div className="bg-card rounded-lg p-3 mb-4 border">
              <p className="text-sm">Hello! I'm here to help with any questions about our NAD+ and peptide therapies. How can I assist you today?</p>
              <span className="text-xs text-muted-foreground">Now</span>
            </div>
          </div>
          
          <div className="p-4 border-t bg-card">
            <p className="text-xs text-muted-foreground mb-2">Popular questions:</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <button className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground px-3 py-1 rounded-full transition-colors">What is NAD+ therapy?</button>
              <button className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground px-3 py-1 rounded-full transition-colors">How long do treatments take?</button>
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm">Send</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NadPeptides;