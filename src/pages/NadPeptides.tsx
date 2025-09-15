import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AgeVerificationModal from "@/components/compliance/AgeVerificationModal";
import ComplianceDisclaimers from "@/components/compliance/ComplianceDisclaimers";
import RegulatoryUpdates from "@/components/compliance/RegulatoryUpdates";
import PaymentCompliance from "@/components/compliance/PaymentCompliance";
import { useToast } from "@/components/ui/use-toast";
import PeptideBookingButton from "@/components/PeptideBookingButton";
import QualiphyWidget from "@/components/QualiphyWidget";

const NadPeptides = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedPeptide, setSelectedPeptide] = useState(null);
  const [chatVisible, setChatVisible] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [showAgeVerification, setShowAgeVerification] = useState(false);
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [showPaymentCompliance, setShowPaymentCompliance] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Peptide Therapy | Stay Dripped IV & Wellness Co.";
    
    // Show chat widget after 5 seconds
    const timer = setTimeout(() => {
      setChatVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Comprehensive peptide information database
  const peptideDatabase = {
    'peptide therapy': {
      name: 'Peptide Support Programs',
      category: 'Cellular Wellness',
      duration: 'Varies by protocol',
      administration: 'Injectable peptides',
      benefits: [
        'May support cellular wellness pathways*',
        'Associated with recovery research*',
        'Sleep quality studies ongoing*',
        'Studied for wellness applications*',
        'Research in performance science*',
        'Cellular function research*',
        'Recovery support studies*',
        'Cognitive function research*'
      ],
      description: 'Peptide therapy programs deliver targeted peptides for wellness support through physician-supervised protocols. Individual results may vary.',
      howItWorks: 'Research suggests peptides may support cellular pathways and wellness goals through targeted bioactive compounds.*',
      idealFor: 'Adults interested in wellness optimization and performance enhancement under medical supervision.',
      frequency: 'Consultation with healthcare provider required for individual protocols',
      sideEffects: 'Consult healthcare provider. Possible mild discomfort during administration, flushing, or nausea.',
      researchStatus: 'Active research in longevity and cellular health applications'
    },
    'bpc-157': {
      name: 'BPC-157 Peptide',
      category: 'Research & Recovery',
      duration: 'Brief administration (5-10 minutes)',
      administration: 'Subcutaneous administration',
      benefits: [
        'Research compound of interest*',
        'Studies in cellular processes*',
        'Digestive wellness research*',
        'Tissue health studies*',
        'Joint wellness research*',
        'Ongoing scientific studies*',
        'Inflammatory response research*',
        'Vascular health studies*'
      ],
      description: 'BPC-157 is a pentadecapeptide research compound derived from gastric protective proteins. Research purposes only.*',
      howItWorks: 'Research suggests potential interactions with cellular growth factors and healing pathways through VEGF and nitric oxide mechanisms.*',
      idealFor: 'Adults interested in peptide research and tissue wellness education.',
      frequency: 'Healthcare provider consultation required for research protocols',
      sideEffects: 'Research compound - consult healthcare provider before use. Generally well-tolerated in studies.',
      researchStatus: 'Extensive preclinical research, human studies emerging'
    },
    'tb-500': {
      name: 'TB-500 (Thymosin Beta-4)',
      category: 'Research & Recovery',
      duration: 'Brief administration (5-10 minutes)',
      administration: 'Subcutaneous administration',
      benefits: [
        'Research in cellular mobility*',
        'Flexibility wellness studies*',
        'Recovery research ongoing*',
        'Cellular process studies*',
        'Endurance research*',
        'Cardiovascular wellness studies*',
        'Hair growth research*',
        'Wound healing studies*'
      ],
      description: 'TB-500 is a research peptide that mimics natural thymosin beta-4, studied for cellular migration properties. For research and education purposes.*',
      howItWorks: 'Research suggests potential support for cellular migration and tissue wellness pathways through actin regulation.*',
      idealFor: 'Adults interested in cellular health research and recovery optimization education.',
      frequency: 'Healthcare provider consultation required for research applications',
      sideEffects: 'Research compound - healthcare provider consultation recommended. Studies show good tolerance.',
      researchStatus: 'Ongoing research in tissue repair and regenerative medicine'
    },
    'cjc-1295': {
      name: 'CJC-1295 Peptide',
      category: 'Hormone Research',
      duration: 'Brief administration (5-10 minutes)',
      administration: 'Subcutaneous administration',
      benefits: [
        'Growth hormone pathway research*',
        'Muscle wellness studies*',
        'Recovery research ongoing*',
        'Sleep quality studies*',
        'Body composition research*',
        'Aging science studies*',
        'Protein synthesis research*',
        'Bone density studies*'
      ],
      description: 'CJC-1295 is a research peptide studied for its potential interaction with natural growth hormone releasing pathways. Research purposes.*',
      howItWorks: 'Research suggests potential interaction with pituitary GHRH receptors for extended hormone release patterns.*',
      idealFor: 'Adults interested in hormone research and wellness optimization studies.',
      frequency: 'Healthcare provider consultation required for research protocols',
      sideEffects: 'Research compound - possible water retention, injection site reactions, consult healthcare provider.',
      researchStatus: 'Clinical studies ongoing for growth hormone optimization'
    },
    'ipamorelin': {
      name: 'Ipamorelin Peptide',
      category: 'Hormone Research',
      duration: 'Brief administration (5-10 minutes)',
      administration: 'Subcutaneous administration',
      benefits: [
        'Selective research applications*',
        'Hormone pathway studies*',
        'Recovery research*',
        'Sleep wellness studies*',
        'Body composition research*',
        'Wellness optimization studies*',
        'Selective growth hormone research*',
        'Appetite regulation studies*'
      ],
      description: 'Ipamorelin is a research peptide studied for selective hormone pathway interactions with minimal side effects. Research and education only.*',
      howItWorks: 'Research suggests selective interaction with growth hormone secretagogue receptors without affecting cortisol or prolactin.*',
      idealFor: 'Adults seeking education on peptide research with minimal study variables.',
      frequency: 'Healthcare provider consultation required - often studied with other compounds',
      sideEffects: 'Research indicates excellent tolerability profile - consult healthcare provider.',
      researchStatus: 'Preferred research compound due to selectivity profile'
    },
    'sermorelin': {
      name: 'Sermorelin Acetate',
      category: 'Hormone Research',
      duration: 'Brief administration (5-10 minutes)',
      administration: 'Subcutaneous administration',
      image_url: '/src/assets/vials/sermorelin-injection.webp',
      benefits: [
        'Natural hormone pathway research*',
        'Sleep quality studies*',
        'Recovery research*',
        'Body composition studies*',
        'Energy wellness research*',
        'Longevity science studies*',
        'Natural GHRH analog research*',
        'Circadian rhythm studies*'
      ],
      description: 'Sermorelin is an FDA-approved analog that supports natural hormone pathways for wellness applications.',
      howItWorks: 'Mimics natural GHRH to support physiological circadian release patterns.',
      idealFor: 'Adults seeking natural hormone pathway support and physiological wellness.',
      frequency: 'Healthcare provider consultation required for individual protocols',
      sideEffects: 'Generally well-tolerated - possible injection site reactions, consult healthcare provider.',
      researchStatus: 'FDA-approved compound with established safety profile'
    },
    'tesamorelin': {
      name: 'Tesamorelin Peptide',
      category: 'Hormone Research',
      duration: 'Brief administration (5-10 minutes)',
      administration: 'Subcutaneous administration',
      benefits: [
        'Body composition research*',
        'Visceral fat studies*',
        'Metabolic wellness research*',
        'Hormone pathway studies*',
        'Cardiovascular health research*',
        'Liver function studies*',
        'FDA-approved applications*',
        'Lipodystrophy research*'
      ],
      description: 'Tesamorelin is an FDA-approved synthetic peptide for metabolic applications and body composition optimization.',
      howItWorks: 'Interacts with GHRH receptors to stimulate natural growth hormone release for metabolic benefits.',
      idealFor: 'Adults seeking metabolic support and body composition optimization.',
      frequency: 'Daily administration protocols - healthcare provider consultation required',
      sideEffects: 'FDA-approved with known side effect profile - consult healthcare provider.',
      researchStatus: 'FDA-approved for specific indications with ongoing research'
    },
    'aod-9604': {
      name: 'AOD-9604 Peptide',
      category: 'Metabolic Research',
      duration: 'Brief administration (5-10 minutes)',
      administration: 'Subcutaneous administration',
      benefits: [
        'Fat metabolism research*',
        'Body composition studies*',
        'Metabolic pathway research*',
        'Weight management studies*',
        'Exercise performance research*',
        'Recovery optimization studies*',
        'Cartilage repair research*',
        'Joint health studies*'
      ],
      description: 'AOD-9604 is a research peptide derived from human growth hormone, studied for metabolic applications. Research purposes only.*',
      howItWorks: 'Research suggests potential interaction with fat metabolism pathways without affecting blood sugar or growth.*',
      idealFor: 'Adults interested in metabolic research and body composition education.',
      frequency: 'Healthcare provider consultation required for research protocols',
      sideEffects: 'Research compound - generally well-tolerated in studies, consult healthcare provider.',
      researchStatus: 'Ongoing research in metabolic applications and joint health'
    },
    'melanotan-ii': {
      name: 'Melanotan II Research',
      category: 'Research Compounds',
      duration: 'Brief administration (5-10 minutes)',
      administration: 'Subcutaneous administration',
      benefits: [
        'Melanogenesis research*',
        'Pigmentation studies*',
        'UV protection research*',
        'Appetite regulation studies*',
        'Libido research applications*',
        'Photoprotection studies*',
        'Skin health research*',
        'Metabolic pathway studies*'
      ],
      description: 'Melanotan II is a research peptide studied for pigmentation and metabolic applications. Research and educational purposes only.*',
      howItWorks: 'Research suggests interaction with melanocortin receptors affecting pigmentation and metabolic pathways.*',
      idealFor: 'Adults interested in pigmentation research and UV protection studies.',
      frequency: 'Healthcare provider consultation required - careful dosing protocols studied',
      sideEffects: 'Research compound - possible nausea, darkening of skin/moles, consult healthcare provider.',
      researchStatus: 'Research compound with ongoing safety and efficacy studies'
    },
    'pt-141': {
      name: 'PT-141 (Bremelanotide)',
      category: 'Wellness Research',
      duration: 'Brief administration (5-10 minutes)',
      administration: 'Subcutaneous administration',
      benefits: [
        'Sexual wellness research*',
        'Libido enhancement studies*',
        'Arousal pathway research*',
        'Relationship wellness studies*',
        'Quality of life research*',
        'Hormone-independent studies*',
        'CNS pathway research*',
        'FDA-approved applications*'
      ],
      description: 'PT-141 (Bremelanotide) is an FDA-approved peptide for sexual wellness applications in both men and women.',
      howItWorks: 'Interacts with melanocortin receptors in the central nervous system to support arousal pathways.',
      idealFor: 'Adults seeking sexual wellness support and relationship health enhancement.',
      frequency: 'Healthcare provider consultation required - as-needed dosing',
      sideEffects: 'FDA-approved with established safety profile - possible nausea, flushing, consult healthcare provider.',
      researchStatus: 'FDA-approved for specific indications with ongoing research'
    },
    'hexarelin': {
      name: 'Hexarelin Peptide',
      category: 'Hormone Research',
      duration: 'Brief administration (5-10 minutes)',
      administration: 'Subcutaneous administration',
      benefits: [
        'Growth hormone research*',
        'Cardiovascular studies*',
        'Neuroprotection research*',
        'Recovery optimization studies*',
        'Body composition research*',
        'Anti-aging studies*',
        'Cardiac function research*',
        'Muscle preservation studies*'
      ],
      description: 'Hexarelin is a research peptide studied for growth hormone releasing properties and cardiovascular applications.*',
      howItWorks: 'Research suggests potent interaction with growth hormone secretagogue receptors and potential cardiac benefits.*',
      idealFor: 'Adults interested in advanced hormone research and cardiovascular wellness studies.',
      frequency: 'Healthcare provider consultation required - cycling protocols studied',
      sideEffects: 'Research compound - possible desensitization with continuous use, consult healthcare provider.',
      researchStatus: 'Research compound with unique cardiovascular applications'
    },
    'liraglutide': {
      name: 'Liraglutide (GLP-1)',
      category: 'Metabolic Support',
      duration: 'Daily subcutaneous administration',
      administration: 'Subcutaneous injection',
      image_url: '/src/assets/vials/liraglutide-injection-dual.jpeg',
      benefits: [
        'Weight management support*',
        'Blood sugar wellness research*',
        'Appetite regulation studies*',
        'Metabolic health research*',
        'Cardiovascular wellness studies*',
        'GLP-1 pathway research*',
        'Satiety enhancement studies*',
        'FDA-approved applications*'
      ],
      description: 'Liraglutide is an FDA-approved GLP-1 receptor agonist for weight management and metabolic wellness applications.',
      howItWorks: 'Mimics natural GLP-1 hormones to support satiety, slow gastric emptying, and enhance metabolic function.',
      idealFor: 'Adults seeking physician-supervised weight management and metabolic optimization.',
      frequency: 'Daily administration - healthcare provider supervision required',
      sideEffects: 'FDA-approved with established profile - possible nausea, gastrointestinal effects, consult healthcare provider.',
      researchStatus: 'FDA-approved for weight management with extensive clinical data'
    }
  };

  const benefitsInfo = [
    {
      icon: "🩺",
      title: "Medical Supervision",
      description: "All peptide research protocols require healthcare provider consultation and ongoing medical supervision for safety.*"
    },
    {
      icon: "🛡️",
      title: "Safety First",
      description: "Comprehensive screening, monitoring, and safety protocols ensure responsible research applications and patient safety.*"
    },
    {
      icon: "📊",
      title: "Evidence-Based",
      description: "Research compounds selected based on published scientific literature and ongoing clinical research studies.*"
    },
    {
      icon: "🎯",
      title: "Personalized Research",
      description: "Individual consultation to determine appropriate research compounds based on health goals and medical history.*"
    }
  ];

  // Get all categories
  const categories = ['all', ...new Set(Object.values(peptideDatabase).map(p => p.category))];

  // Filter peptides by category and search term
  const filteredPeptides = selectedCategory === 'all' 
    ? Object.entries(peptideDatabase).filter(([key, peptide]) => 
        searchTerm === '' || 
        peptide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        peptide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        peptide.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : Object.entries(peptideDatabase).filter(([key, peptide]) => 
        peptide.category === selectedCategory && (
          searchTerm === '' || 
          peptide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          peptide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          peptide.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      );

  const openQuickView = (peptideKey) => {
    setSelectedPeptide(peptideDatabase[peptideKey]);
    setShowQuickView(true);
  };

  const closeQuickView = () => {
    setShowQuickView(false);
    setSelectedPeptide(null);
  };

  const handleBookingAttempt = () => {
    if (!isAgeVerified) {
      setShowAgeVerification(true);
    } else {
      setShowPaymentCompliance(true);
    }
  };

  const handleAgeVerified = () => {
    setIsAgeVerified(true);
    setShowAgeVerification(false);
    setShowPaymentCompliance(true);
    toast({
      title: "Age Verified ✓",
      description: "You can now proceed with booking peptide treatments.",
    });
  };

  const handleAgeDeclined = () => {
    setShowAgeVerification(false);
    toast({
      title: "Access Restricted",
      description: "Peptide treatments are only available to adults 18 and older.",
      variant: "destructive",
    });
  };

  const proceedToBooking = () => {
    setShowPaymentCompliance(false);
    // Navigate to booking - in real implementation this would redirect
    window.open('/first-time-patients', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Peptide Therapy | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Physician-supervised peptide therapy programs for wellness, recovery, and performance optimization in Scottsdale, AZ. Healthcare provider consultation required." />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://staydrippediv.com/nad-peptides" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Peptide Therapy | Stay Dripped IV & Wellness Co." />
        <meta property="og:description" content="Physician-supervised peptide therapy programs for wellness, recovery, and performance optimization in Scottsdale, AZ. Healthcare provider consultation required." />
        <meta property="og:url" content="https://staydrippediv.com/nad-peptides" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Peptide Therapy | Stay Dripped IV & Wellness Co." />
        <meta name="twitter:description" content="Physician-supervised peptide therapy programs for wellness, recovery, and performance optimization in Scottsdale, AZ. Healthcare provider consultation required." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        
        <div className="container relative z-10 mx-auto px-4 py-32 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Physician-Supervised Peptide Therapy
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl font-light leading-relaxed opacity-90">
            Prescription-based peptide programs for wellness, recovery, and performance optimization. 
            All treatments require telehealth evaluation and medical approval.*
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="xl" 
              variant="default"
              className="px-10 py-5 text-lg font-semibold"
              onClick={handleBookingAttempt}
            >
              🩺 Book Consultation (18+)
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="px-10 py-5 text-lg font-semibold" 
              asChild
            >
              <Link to="/telehealth">📞 Consult Provider</Link>
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-75">
            *These statements have not been evaluated by the FDA. Not intended to diagnose, treat, cure, or prevent any disease.
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              Why Choose Peptide Therapy Programs?
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Explore the science behind advanced cellular research compounds that are being studied for their potential applications in wellness and longevity research.*
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefitsInfo.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-3xl text-white group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
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
              Peptide Therapy Programs Available
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Our selection of peptide therapy programs are available for wellness and performance goals 
              with physician supervision and prescription approval.*
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search peptide therapy programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-full border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedCategory(category)}
                className="capitalize px-6 py-3 font-semibold"
              >
                {category === 'all' ? '🔬 All Therapies' : 
                 category.replace('-', ' ').replace('&', '&')}
              </Button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPeptides.map(([key, peptide]) => (
              <div key={key} className="group relative overflow-hidden rounded-2xl bg-card shadow-lg border transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 z-10 rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                    {peptide.category}
                  </div>
                  {peptide.researchStatus && (
                    <div className="absolute bottom-4 left-4 z-10 rounded-full bg-secondary/90 backdrop-blur-sm px-2 py-1 text-xs text-secondary-foreground">
                      {peptide.researchStatus.includes('FDA') ? '🔬 FDA Research' : '📊 Active Research'}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {peptide.name}
                  </h3>
                  <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
                    {peptide.description.substring(0, 140)}...
                  </p>
                  
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-primary">⏱️ Duration:</span>
                      <span className="text-muted-foreground">{peptide.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-primary">💉 Method:</span>
                      <span className="text-muted-foreground">{peptide.administration}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <span className="font-semibold text-primary text-sm flex items-center gap-1 mb-2">
                      🔬 Research Applications*:
                    </span>
                    <ul className="space-y-1">
                      {peptide.benefits.slice(0, 4).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-secondary mt-0.5">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                      {peptide.benefits.length > 4 && (
                        <li className="text-xs text-primary font-medium">
                          +{peptide.benefits.length - 4} more applications...
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline"
                      size="sm" 
                      className="flex-1 font-semibold"
                      onClick={() => openQuickView(key)}
                    >
                      🔍 Learn More
                    </Button>
                    <PeptideBookingButton 
                      peptideName={peptide.name}
                      peptideCategory={peptide.category}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPeptides.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No compounds found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
            </div>
          )}
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
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 text-sm font-semibold">⚠️ FDA DISCLAIMER: These statements have not been evaluated by the FDA. These compounds are not intended to diagnose, treat, cure, or prevent any disease. For research and educational purposes only.</p>
              </div>
              
              <div className="grid md:grid-cols-1 gap-6 mb-6">
                <div className="bg-muted p-4 rounded-lg text-center">
                  <h4 className="text-primary font-semibold mb-2">Research Duration</h4>
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

                <div className="grid md:grid-cols-1 gap-4">
                  <div>
                    <h5 className="font-semibold text-primary mb-1">Research Administration Method</h5>
                    <p className="text-sm text-muted-foreground">{selectedPeptide.administration}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Research Applications*</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedPeptide.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span className="text-muted-foreground text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-red-600 mt-2">*Research purposes only - not intended for treatment claims</p>
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

                <div className="flex gap-4 pt-6">
                  <PeptideBookingButton 
                    peptideName={selectedPeptide.name}
                    peptideCategory={selectedPeptide.category}
                  />
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex-1 font-semibold" 
                    asChild
                  >
                    <Link to="/telehealth">💬 Ask Provider</Link>
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
              Read authentic reviews from participants in our peptide therapy programs and wellness consultations.
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
                I participated in the peptide therapy program and found the wellness experience valuable. The team at Stay Dripped is professional and knowledgeable about peptide wellness programs. Great results and support!
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
                I participated in the BPC-157 research study and gained valuable knowledge about peptide compounds. The research program was well-structured and educational. Appreciate the scientific approach to wellness research.
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
                Exceptional educational experience! The convenience of mobile research consultations is unmatched, and the medical team is top-notch. The research program provided valuable insights into wellness compounds.
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


      {/* Call to Action Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 p-12 text-center">
            <h3 className="mb-6 text-3xl font-bold text-foreground">
              Ready to Learn About Wellness Research?
            </h3>
            <p className="mb-8 text-lg text-muted-foreground">
              Schedule a consultation with our medical team to learn about peptide therapy programs 
              and their applications in wellness and performance optimization. Medical supervision required.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold"
                onClick={handleBookingAttempt}
              >
                Book Consultation (18+)
              </Button>
              <QualiphyWidget />
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
              <h3 className="font-semibold">Peptide Therapy Specialist</h3>
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
              <p className="text-sm">Hello! I'm here to help with any questions about our peptide therapy programs. How can I assist you today?</p>
              <span className="text-xs text-muted-foreground">Now</span>
            </div>
          </div>
          
          <div className="p-4 border-t bg-card">
            <p className="text-xs text-muted-foreground mb-2">Popular questions:</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <button className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground px-3 py-1 rounded-full transition-colors">What is peptide therapy?</button>
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

      {/* Age Verification Modal */}
      <AgeVerificationModal 
        isOpen={showAgeVerification}
        onVerified={handleAgeVerified}
        onDeclined={handleAgeDeclined}
      />

      {/* Payment Compliance Modal */}
      {showPaymentCompliance && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Payment & Compliance Information</h2>
              <Button 
                variant="ghost" 
                onClick={() => setShowPaymentCompliance(false)}
                className="text-2xl"
              >
                ×
              </Button>
            </div>
            
            <div className="p-6">
              <PaymentCompliance 
                onProceedToPayment={proceedToBooking}
                showFullDisclosure={true}
              />
            </div>
          </div>
        </div>
      )}

      {/* Compliance and Regulatory Information - Footer */}
      <div className="text-xs scale-75 transform-gpu origin-top">
        <ComplianceDisclaimers />
        <RegulatoryUpdates />
        
        {/* Additional Disclaimer */}
        <div className="bg-muted/30 py-4 px-6 mt-4">
          <p className="text-center text-muted-foreground">
            All treatments and peptide therapy programs offered by Stay Dripped® IV & Wellness Co. are physician-supervised. Services are available only after telehealth evaluation and approval by a licensed healthcare provider. We do not sell research chemicals or unregulated substances. Products and services comply with all applicable federal and state regulations.
          </p>
        </div>
      </div>
    </>
  );
};

export default NadPeptides;