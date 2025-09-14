import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Search, MapPin, ShoppingCart, Star, Heart, MoreVertical, ChevronDown, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";

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
  const { addItem } = useCart();

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

  const handleAddToCart = (product: Product) => {
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
    
    // Add the item the specified number of times to match quantity
    for (let i = 0; i < quantity; i++) {
      addItem(cartProduct);
    }
  };

  const toggleFavorite = (productId: string) => {
    // Implementation for favorites would go here
    console.log(`Toggle favorite for product ${productId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Supplements Catalog</h1>
                <p className="text-muted-foreground mt-2">Professional-grade supplements and wellness products</p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="hidden sm:inline">Ship to: Arizona</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                <span>{category.name}</span>
                {category.id !== "all" && <ChevronDown className="h-4 w-4" />}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Popular Products</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="relative group overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Product Badges */}
                {product.badges.length > 0 && (
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                    {product.badges.map((badge) => (
                      <Badge
                        key={badge}
                        variant={badge === "top-pick" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {badge === "top-pick" && <Star className="h-3 w-3 mr-1" fill="currentColor" />}
                        {badge === "top-pick" ? "Top pick" : badge}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Product Actions */}
                <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white/90 backdrop-blur-sm hover:bg-white"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white/90 backdrop-blur-sm hover:bg-white"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>

                {/* Product Image */}
                <div className="aspect-square p-6 bg-white flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={`${product.name} ${product.size}`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{product.name}</h3>
                    <p className="text-muted-foreground text-sm">{product.brand}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-muted-foreground">{product.size}</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-foreground">
                        ${product.wholesalePrice.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Wholesale | MSRP ${product.msrp.toFixed(2)}
                    </p>
                  </div>

                  {/* Purchase Controls */}
                  <div className="flex items-center gap-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-border rounded-lg">
                      <Button
                        size="sm"
                        variant="ghost"
                        disabled={getQuantity(product.id) <= 1}
                        onClick={() => updateQuantity(product.id, getQuantity(product.id) - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <Input
                        type="number"
                        value={getQuantity(product.id)}
                        onChange={(e) => updateQuantity(product.id, parseInt(e.target.value) || 1)}
                        className="h-8 w-12 text-center border-0 text-sm"
                        min="1"
                        max="999"
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        disabled={getQuantity(product.id) >= 999}
                        onClick={() => updateQuantity(product.id, getQuantity(product.id) + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Add to Cart */}
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-primary hover:bg-primary/90"
                      disabled={!user}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to cart
                    </Button>
                  </div>

                  {!user && (
                    <p className="text-xs text-muted-foreground text-center">
                      Sign in to add items to cart
                    </p>
                  )}
                </div>
              </Card>
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
          <div className="text-center">
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