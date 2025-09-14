import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { Search, Star, Heart, ShoppingCart, Minus, Plus, X } from "lucide-react";
import { Helmet } from "react-helmet";
import "../styles/supplements.css";

interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
}

const Supplements = () => {
  const [activeCategory, setActiveCategory] = useState("featured");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const { addItem } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    // Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-44WEBDZB6F';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-44WEBDZB6F');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  const addToCart = (product: { sku: string; name: string; brand: string; price: string }) => {
    const newItem: CartItem = {
      id: product.sku,
      name: product.name,
      brand: product.brand,
      price: parseFloat(product.price),
      quantity: 1
    };

    setCartItems(prev => {
      const existing = prev.find(item => item.id === newItem.id);
      if (existing) {
        return prev.map(item => 
          item.id === newItem.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, newItem];
    });

    // Also add to main cart context
    if (user) {
      addItem({
        id: product.sku,
        name: product.name,
        description: product.brand,
        price: parseFloat(product.price),
        image_url: "",
        category: "supplement",
        stock_quantity: 100
      });
    }

    setShowCart(true);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <>
      <Helmet>
        <title>Supplements & Test Kits | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Premium supplements, probiotics, and comprehensive test kits for optimal health. Professional-grade products curated by our medical team." />
        <link rel="canonical" href="https://staydrippediv.com/supplements" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Supplements & Test Kits | Stay Dripped IV & Wellness Co." />
        <meta property="og:description" content="Premium supplements, probiotics, and comprehensive test kits for optimal health. Professional-grade products curated by our medical team." />
        <meta property="og:url" content="https://staydrippediv.com/supplements" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "ItemList",
            "url": "https://staydrippediv.com/supplements",
            "itemListElement": [
              {
                "@type": "Product",
                "position": 1,
                "name": "MegaSporeBiotic",
                "brand": {"@type": "Organization", "name": "Microbiome Labs"},
                "description": "All-spore, antioxidant-producing probiotic designed to survive stomach acid and support digestive health.",
                "sku": "MSB-60",
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "USD",
                  "price": "59.00",
                  "availability": "https://schema.org/InStock"
                }
              }
            ]
          }`}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="supplements-hero">
          <div className="hero-content">
            <div className="tagline-highlight fade-in">Professional Grade</div>
            <h1 className="hero-title fade-in delay-1">Complete Health Solutions</h1>
            <p className="company-subtitle fade-in delay-2">Stay Dripped IV & Wellness Co.</p>
            <p className="hero-description fade-in delay-3">
              Comprehensive collection of physician-trusted supplements, probiotics, gut health solutions, and professional testing kits. Everything you need to optimize your health journey with medical-grade quality and practitioner guidance.
            </p>
            
            <div className="badges">
              <span className="badge-item">Professional-grade</span>
              <span className="badge-item">3rd-party tested</span>
              <span className="badge-item">Medical supervision</span>
              <span className="badge-item">HSA/FSA eligible*</span>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <div className="category-nav">
          <button 
            className={`category-btn ${activeCategory === 'featured' ? 'active' : ''}`}
            onClick={() => setActiveCategory('featured')}
          >
            Featured Products
          </button>
          <button 
            className={`category-btn ${activeCategory === 'supplements' ? 'active' : ''}`}
            onClick={() => setActiveCategory('supplements')}
          >
            All Supplements
          </button>
          <button 
            className={`category-btn ${activeCategory === 'probiotics' ? 'active' : ''}`}
            onClick={() => setActiveCategory('probiotics')}
          >
            Probiotics & Gut Health
          </button>
          <button 
            className={`category-btn ${activeCategory === 'test-kits' ? 'active' : ''}`}
            onClick={() => setActiveCategory('test-kits')}
          >
            Test Kits & Panels
          </button>
          <button 
            className={`category-btn ${activeCategory === 'vitamins' ? 'active' : ''}`}
            onClick={() => setActiveCategory('vitamins')}
          >
            Vitamins & Minerals
          </button>
          <button 
            className={`category-btn ${activeCategory === 'specialty' ? 'active' : ''}`}
            onClick={() => setActiveCategory('specialty')}
          >
            Specialty Formulas
          </button>
        </div>

        {/* Featured Products Section */}
        <section className={`category-section ${activeCategory === 'featured' ? 'active' : ''}`}>
          <div className="section-header">
            <div className="section-subtitle">Physician-Trusted</div>
            <h2 className="section-title">Featured Products</h2>
            <p className="section-description">Our most popular supplements and testing kits, hand-selected by our medical team for exceptional quality and results.</p>
          </div>

          <div className="products-grid">
            {/* MegaSporeBiotic */}
            <article className="product-card fade-in" id="megasporebiotic">
              <div className="product-content">
                <div className="product-image">
                  <img src="https://i.imgur.com/Nm2H0uP.png" alt="Microbiome Labs MegaSporeBiotic 60 capsules bottle" width="320" height="320" loading="lazy" />
                  <div className="product-badge">Clinically Studied</div>
                </div>
                <div className="product-info">
                  <div>
                    <p className="product-brand">Microbiome Labs</p>
                    <h3 className="product-title">MegaSporeBiotic™</h3>
                    <div className="product-price">$59.00</div>
                    
                    <div className="product-pills">
                      <span className="pill">60 capsules</span>
                      <span className="pill">1-2 caps daily with food</span>
                      <span className="pill">Spore-based</span>
                    </div>

                    <ul className="product-benefits">
                      <li>Clinically studied spore-forming strains designed to survive stomach acid</li>
                      <li>Supports digestion, microbiome diversity, and immune health</li>
                      <li>Well-tolerated with gradual dosing protocol</li>
                      <li>Antioxidant-producing beneficial bacteria</li>
                    </ul>
                  </div>

                  <div>
                    <div className="product-actions">
                      <a className="btn" href="https://staydrippediv.com/fullscript?sku=MSB-60" target="_blank" rel="noopener">Order via Fullscript</a>
                      <button 
                        className="btn btn-secondary" 
                        type="button"
                        onClick={() => addToCart({sku: 'MSB-60', name: 'MegaSporeBiotic', brand: 'Microbiome Labs', price: '59'})}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <p className="product-note">Tip: Start with 1 capsule every other day for the first week, then increase as tolerated.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* O.N.E. Multivitamin */}
            <article className="product-card fade-in delay-1" id="one-multivitamin">
              <div className="product-content">
                <div className="product-image">
                  <img src="https://i.imgur.com/BmZq3b0.png" alt="Pure Encapsulations O.N.E. Multivitamin 60 capsules bottle" width="320" height="320" loading="lazy" />
                  <div className="product-badge">Once Daily</div>
                </div>
                <div className="product-info">
                  <div>
                    <p className="product-brand">Pure Encapsulations</p>
                    <h3 className="product-title">O.N.E.™ Multivitamin</h3>
                    <div className="product-price">$43.00</div>
                    
                    <div className="product-pills">
                      <span className="pill">60 capsules</span>
                      <span className="pill">1 cap daily with meal</span>
                      <span className="pill">With CoQ10 & methyl-B</span>
                    </div>

                    <ul className="product-benefits">
                      <li>Once-daily comprehensive micronutrient formula</li>
                      <li>Methylated B-vitamins for enhanced bioavailability</li>
                      <li>Zinc and selenium for immune support</li>
                      <li>Hypoallergenic, gluten-free, non-GMO formula</li>
                    </ul>
                  </div>

                  <div>
                    <div className="product-actions">
                      <a className="btn" href="https://staydrippediv.com/fullscript?sku=PE-ONE-60" target="_blank" rel="noopener">Order via Fullscript</a>
                      <button 
                        className="btn btn-secondary" 
                        type="button"
                        onClick={() => addToCart({sku: 'PE-ONE-60', name: 'O.N.E. Multivitamin', brand: 'Pure Encapsulations', price: '43'})}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <p className="product-note">If sensitive to B-vitamins, consider taking earlier in the day.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Comprehensive Health Panel */}
            <div className="product-card">
              <div className="product-content">
                <div className="product-image">
                  <div className="product-badge">Best Value</div>
                </div>
                <div className="product-info">
                  <div>
                    <p className="product-brand">Health Screening</p>
                    <h3 className="product-title">Comprehensive Health Panel</h3>
                    <div className="product-price">$299.99</div>
                    
                    <div className="test-kit-features">
                      <h4>What's Included:</h4>
                      <div className="feature-grid">
                        <div className="feature-item">
                          <div className="feature-icon">✓</div>
                          <span>Complete Blood Count</span>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">✓</div>
                          <span>Metabolic Panel</span>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">✓</div>
                          <span>Lipid Profile</span>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">✓</div>
                          <span>Vitamin D & B12</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="product-actions">
                      <a className="btn" href="/first-time-patients">Order Test Kit</a>
                      <button className="btn btn-secondary">Learn More</button>
                    </div>
                    <p className="product-note">At-home collection kit with detailed analysis and recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Supplements Section */}
        <section className={`category-section ${activeCategory === 'supplements' ? 'active' : ''}`}>
          <div className="section-header">
            <div className="section-subtitle">Complete Collection</div>
            <h2 className="section-title">All Supplements</h2>
            <p className="section-description">Browse our complete collection of premium supplements for every health goal.</p>
          </div>

          <div className="fullscript-catalog">
            <h3>Stay Dripped Supplement Catalog</h3>
            <div className="fullscript-grid">
              <p className="text-center text-muted-foreground">
                Visit our <a href="https://staydrippediv.com/fullscript" target="_blank" rel="noopener" className="text-primary hover:underline">Fullscript catalog</a> to browse our complete collection of professional-grade supplements.
              </p>
            </div>
          </div>
        </section>

        {/* Probiotics & Gut Health Section */}
        <section className={`category-section ${activeCategory === 'probiotics' ? 'active' : ''}`}>
          <div className="section-header">
            <div className="section-subtitle">Digestive Wellness</div>
            <h2 className="section-title">Probiotics & Gut Health</h2>
            <p className="section-description">Restore and optimize your digestive health with our advanced probiotic formulations and gut health support products.</p>
          </div>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-content">
                <div className="product-image">
                  <div className="product-badge">Popular</div>
                </div>
                <div className="product-info">
                  <div>
                    <p className="product-brand">IV Therapy</p>
                    <h3 className="product-title">Probiotic IV Infusion</h3>
                    <div className="product-price">$199</div>
                    
                    <ul className="product-benefits">
                      <li>Multi-strain probiotic infusion</li>
                      <li>Digestive enzyme support</li>
                      <li>Anti-inflammatory compounds</li>
                      <li>Gut barrier repair nutrients</li>
                      <li>45-minute treatment</li>
                    </ul>
                  </div>

                  <div>
                    <div className="product-actions">
                      <a className="btn" href="/first-time-patients">Book Treatment</a>
                      <button className="btn btn-secondary">Learn More</button>
                    </div>
                    <p className="product-note">Professional IV probiotic therapy for optimal gut health restoration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Test Kits Section */}
        <section className={`category-section ${activeCategory === 'test-kits' ? 'active' : ''}`}>
          <div className="section-header">
            <div className="section-subtitle">Comprehensive Testing</div>
            <h2 className="section-title">Test Kits & Health Panels</h2>
            <p className="section-description">Professional-grade testing kits for comprehensive health monitoring and optimization from the comfort of your home.</p>
          </div>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-content">
                <div className="product-image">
                  <div className="product-badge">Comprehensive</div>
                </div>
                <div className="product-info">
                  <div>
                    <p className="product-brand">Hormone Health</p>
                    <h3 className="product-title">Complete Hormone Panel</h3>
                    <div className="product-price">$249.99</div>
                    
                    <div className="test-kit-features">
                      <h4>What's Included:</h4>
                      <div className="feature-grid">
                        <div className="feature-item">
                          <div className="feature-icon">✓</div>
                          <span>Testosterone</span>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">✓</div>
                          <span>Estrogen & Progesterone</span>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">✓</div>
                          <span>Thyroid (TSH, T3, T4)</span>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">✓</div>
                          <span>Cortisol & DHEA-S</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="product-actions">
                      <a className="btn" href="/first-time-patients">Order Test</a>
                      <button className="btn btn-secondary">Learn More</button>
                    </div>
                    <p className="product-note">Saliva & blood collection with comprehensive analysis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cart Widget */}
        {showCart && cartItems.length > 0 && (
          <div className="cart-widget">
            <div className="cart-header">
              <h4>Cart ({cartItems.length})</h4>
              <button className="cart-close" onClick={() => setShowCart(false)}>
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h5>{item.name}</h5>
                    <div className="cart-item-details">{item.brand} • ${item.price.toFixed(2)}</div>
                  </div>
                  <div className="quantity-controls">
                    <button 
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <input 
                      type="number" 
                      value={item.quantity} 
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                      className="qty-input"
                    />
                    <button 
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">Total: ${getCartTotal().toFixed(2)}</div>
              <button className="btn">Checkout</button>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="disclaimer">
          <p>
            *These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult with a healthcare professional before starting any new supplement regimen.
          </p>
        </div>
      </div>
    </>
  );
};

export default Supplements;
