import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Search, MapPin, ShoppingCart, Star, Heart, MoreVertical, ChevronDown, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/supplement-catalog.css";

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

const mockProducts: Product[] = [
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
  { id: "all", name: "All Products" },
  { id: "supplements", name: "Supplements" },
  { id: "vitamins", name: "Vitamins & minerals" },
  { id: "health", name: "Health conditions" },
  { id: "sports", name: "Sports nutrition" },
  { id: "personal-care", name: "Personal care" },
  { id: "brands", name: "Brands" }
];

const SupplementCatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});
  const { user } = useAuth();
  const { addItem, updateQuantity: updateCartQuantity, state, openCart, closeCart, getTotalItems } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Supplement Catalog - Stay Dripped IV & Wellness";
  }, []);

  useEffect(() => {
    let filtered = mockProducts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, activeCategory]);

  const updateQuantity = (productId: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, Math.min(999, quantity))
    }));
  };

  const getQuantity = (productId: string) => quantities[productId] || 1;

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
      stock_quantity: 100 // Mock stock quantity
    };
    
    try {
      // Check if item already exists in cart
      const existingItem = state.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        // Update quantity if item exists
        updateCartQuantity(product.id, existingItem.quantity + quantity);
      } else {
        // Add item first, then update quantity if needed
        await addItem(cartProduct);
        if (quantity > 1) {
          // Wait a bit for the item to be added, then update quantity
          setTimeout(() => {
            updateCartQuantity(product.id, quantity);
          }, 100);
        }
      }

      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} added to your cart.`,
      });

      // Reset quantity for this product
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

  const toggleFavorite = (productId: string) => {
    // Implementation for favorites would go here
    console.log(`Toggle favorite for product ${productId}`);
  };

  return (
    <div className="supplement-main">
      <div className="supplement-container">
        {/* Header Section */}
        <div className="supplement-header">
          <div className="header-content">
            <div>
              <h1 className="catalog-title">Supplements Catalog</h1>
            </div>
            <div className="header-actions">
              <button className="location-selector-btn">
                <MapPin className="h-4 w-4" />
                <span className="hidden sm:inline">Ship to: Arizona</span>
              </button>
              <button 
                className="cart-toggle-btn"
                onClick={() => state.isOpen ? closeCart() : openCart()}
                aria-label="Toggle cart"
              >
                <ShoppingCart className="h-4 w-4" />
                {getTotalItems() > 0 && (
                  <span className="cart-count">{getTotalItems()}</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="catalog-controls">
          {/* Search */}
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

          {/* Category Filters */}
          <div className="category-filters">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span>{category.name}</span>
                {category.id !== "all" && <ChevronDown className="h-4 w-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="products-section">
          <div className="section-header">
            <div className="section-title">
              <h2>Popular Products</h2>
            </div>
            <div className="navigation-buttons">
              <button className="nav-btn" aria-label="Previous products">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="nav-btn" aria-label="Next products">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Products Grid */}
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
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="text-center mb-8">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplementCatalogPage;