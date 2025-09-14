import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Search, Star, Heart, ShoppingCart, Minus, Plus, X, MapPin, MoreVertical, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";
import "../styles/supplements.css";

interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  size: string;
  wholesalePrice: number;
  msrp: number;
  badges: string[];
  category: string;
  isFavorite?: boolean;
}

interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
}

const professionalProducts: Product[] = [
  {
    id: "1",
    name: "Cortisol Manager",
    brand: "Integrative Therapeutics",
    image: "https://assets.fullscript.io/Product/IT0020/400_front.png",
    size: "30 tablets",
    wholesalePrice: 13.50,
    msrp: 25.99,
    badges: ["tested"],
    category: "supplements"
  },
  {
    id: "2", 
    name: "Vitamin D3 5000 + K",
    brand: "Metagenics",
    image: "https://assets.fullscript.io/Product/MI0318/400_front.png",
    size: "60 Softgels",
    wholesalePrice: 15.00,
    msrp: 28.99,
    badges: [],
    category: "vitamins"
  },
  {
    id: "3",
    name: "Berberine",
    brand: "Thorne",
    image: "https://assets.fullscript.io/Product/TH0363/400_front.png",
    size: "60 capsules",
    wholesalePrice: 21.53,
    msrp: 42.99,
    badges: ["top-pick", "tested"],
    category: "supplements"
  },
  {
    id: "4",
    name: "Berberine 500mg",
    brand: "Integrative Therapeutics", 
    image: "https://assets.fullscript.io/Product/VL0078/400_front.png",
    size: "120 capsules",
    wholesalePrice: 30.00,
    msrp: 60.99,
    badges: ["tested"],
    category: "supplements"
  }
];

const categories = [
  { id: "featured", name: "Featured Products" },
  { id: "supplements", name: "All Supplements" },
  { id: "probiotics", name: "Probiotics & Gut Health" },
  { id: "test-kits", name: "Test Kits & Panels" },
  { id: "vitamins", name: "Vitamins & Minerals" },
  { id: "specialty", name: "Specialty Formulas" },
  { id: "professional", name: "Professional Catalog" }
];

const Supplements = () => {
  const [activeCategory, setActiveCategory] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(professionalProducts);
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  
  const { addItem, updateQuantity: updateCartQuantity, state, openCart, closeCart, getTotalItems } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();

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

  useEffect(() => {
    let filtered = professionalProducts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category for professional catalog
    if (activeCategory === "professional") {
      setFilteredProducts(filtered);
    }
  }, [searchTerm, activeCategory]);

  const updateQuantity = (productId: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, Math.min(999, quantity))
    }));
  };

  const getQuantity = (productId: string) => quantities[productId] || 1;

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

  const handleAddToCart = async (product: Product) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to add items to your cart.",
        variant: "destructive",
      });
      return;
    }

    const quantity = getQuantity(product.id);
    const cartProduct = {
      id: product.id,
      name: product.name,
      description: product.brand,
      price: product.wholesalePrice,
      image_url: product.image,
      category: product.category,
      stock_quantity: 100
    };
    
    try {
      const existingItem = state.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        updateCartQuantity(product.id, existingItem.quantity + quantity);
      } else {
        await addItem(cartProduct);
        if (quantity > 1) {
          setTimeout(() => {
            updateCartQuantity(product.id, quantity);
          }, 100);
        }
      }

      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} added to your cart.`,
      });

      setQuantities(prev => ({
        ...prev,
        [product.id]: 1
      }));

    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    }
  };

  const updateLocalCartQuantity = (id: string, quantity: number) => {
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

  const toggleFavorite = (productId: string) => {
    console.log(`Toggle favorite for product ${productId}`);
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
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
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

        {/* Professional Catalog Section */}
        <section className={`category-section ${activeCategory === 'professional' ? 'active' : ''}`}>
          <div className="section-header">
            <div className="section-subtitle">Professional Grade</div>
            <h2 className="section-title">Professional Supplement Catalog</h2>
            <p className="section-description">Browse our professional-grade supplement catalog with wholesale pricing for healthcare providers and partners.</p>
          </div>

          {/* Search and Controls */}
          <div className="catalog-controls mb-8">
            <div className="search-section">
              <form className="search-form">
                <div className="search-input-container">
                  <div className="search-icon">
                    <Search className="h-4 w-4" />
                  </div>
                  <input
                    type="search"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Professional Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                {/* Product Badges */}
                {product.badges.length > 0 && (
                  <div className="product-badges">
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`badge ${badge === "top-pick" ? "top-pick" : badge}`}
                      >
                        {badge === "top-pick" && <Star className="h-3 w-3" fill="currentColor" />}
                        {badge === "top-pick" ? "Top pick" : badge}
                      </span>
                    ))}
                  </div>
                )}

                {/* Product Actions */}
                <div className="product-actions">
                  <button
                    className="action-btn"
                    onClick={() => toggleFavorite(product.id)}
                    aria-label="Add to favorites"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                  <button
                    className="action-btn"
                    aria-label="More options"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>

                {/* Product Image */}
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={`${product.name} ${product.size}`}
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-brand">{product.brand}</p>
                  <div className="product-size">
                    <div className="size-selector">
                      <span>{product.size}</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="product-pricing">
                    <span className="supplement-price">
                      ${product.wholesalePrice.toFixed(2)}
                    </span>
                    <span className="msrp">
                      Wholesale | MSRP ${product.msrp.toFixed(2)}
                    </span>
                  </div>

                  {/* Purchase Controls */}
                  <div className="product-purchase">
                    {/* Quantity Selector */}
                    <div className="quantity-selector">
                      <button
                        className="quantity-btn"
                        disabled={getQuantity(product.id) <= 1}
                        onClick={() => updateQuantity(product.id, getQuantity(product.id) - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <input
                        type="number"
                        value={getQuantity(product.id)}
                        onChange={(e) => updateQuantity(product.id, parseInt(e.target.value) || 1)}
                        className="quantity-input"
                        min="1"
                        max="999"
                      />
                      <button
                        className="quantity-btn"
                        disabled={getQuantity(product.id) >= 999}
                        onClick={() => updateQuantity(product.id, getQuantity(product.id) + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="add-to-cart-btn"
                      disabled={!user}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to cart
                    </button>
                  </div>

                  {!user && (
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Sign in to add items to cart
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground text-lg mb-2">No products found</div>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search criteria
              </p>
            </div>
          )}
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
                      onClick={() => updateLocalCartQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <input 
                      type="number" 
                      value={item.quantity} 
                      onChange={(e) => updateLocalCartQuantity(item.id, parseInt(e.target.value) || 0)}
                      className="qty-input"
                    />
                    <button 
                      className="qty-btn"
                      onClick={() => updateLocalCartQuantity(item.id, item.quantity + 1)}
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