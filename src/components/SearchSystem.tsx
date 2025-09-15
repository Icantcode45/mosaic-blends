import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SearchResult {
  id: string;
  title: string;
  type: "service" | "page" | "treatment";
  url: string;
  description?: string;
  category?: string;
}

const searchData: SearchResult[] = [
  // Services
  { id: "iv-therapy", title: "IV Therapy", type: "service", url: "/iv-therapy", description: "Hydration and vitamin infusions", category: "IV Treatments" },
  { id: "nad-peptides", title: "NAD+ & Peptides", type: "service", url: "/nad-peptides", description: "Anti-aging and cellular repair", category: "Advanced Treatments" },
  { id: "vitamin-injections", title: "Vitamin Injections", type: "service", url: "/vitamin-injections", description: "Quick vitamin boosts", category: "Injections" },
  { id: "telehealth", title: "Telehealth", type: "service", url: "/telehealth", description: "Virtual consultations", category: "Digital Health" },
  { id: "products", title: "Products", type: "service", url: "/products", description: "Health supplements and products", category: "Products" },
  { id: "interactive", title: "Interactive Showcase", type: "page", url: "/interactive", description: "Interactive wellness treatment showcase", category: "Experience" },
  
  // Pages
  { id: "first-time", title: "First-Time Patients", type: "page", url: "/first-time-patients", description: "New patient information" },
  { id: "gift-cards", title: "Gift Cards", type: "page", url: "/gift-cards", description: "Purchase wellness gift cards" },
  { id: "events", title: "Events", type: "page", url: "/events", description: "Upcoming wellness events" },
  { id: "mobile-testing", title: "Mobile Testing Kits", type: "page", url: "/mobile-testing-kits", description: "At-home health testing" },
  { id: "privacy", title: "Privacy Policy", type: "page", url: "/privacy", description: "Privacy and data protection" },
  
  // Treatments
  { id: "hydration", title: "Hydration Therapy", type: "treatment", url: "/iv-therapy#hydration", description: "Rapid rehydration", category: "IV Treatments" },
  { id: "energy", title: "Energy Boost", type: "treatment", url: "/iv-therapy#energy", description: "Combat fatigue", category: "IV Treatments" },
  { id: "immune", title: "Immune Support", type: "treatment", url: "/iv-therapy#immune", description: "Boost immune system", category: "IV Treatments" },
  { id: "recovery", title: "Recovery Therapy", type: "treatment", url: "/iv-therapy#recovery", description: "Post-workout recovery", category: "IV Treatments" },
  { id: "beauty", title: "Beauty & Anti-Aging", type: "treatment", url: "/iv-therapy#beauty", description: "Skin and hair health", category: "Beauty" },
  { id: "weight", title: "Weight Management", type: "treatment", url: "/iv-therapy#weight", description: "Metabolism support", category: "Wellness" }
];

interface SearchSystemProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const SearchSystem = ({ isOpen, onClose, onOpen }: SearchSystemProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpen();
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [onOpen, onClose]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase()) ||
      item.category?.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);

    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      handleResultClick(results[selectedIndex]);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    onClose();
    setQuery("");
    setResults([]);
    // Navigation will be handled by Link component
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service': return 'bg-primary text-primary-foreground';
      case 'treatment': return 'bg-secondary text-secondary-foreground';
      case 'page': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-[10vh] animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 animate-scale-in">
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search services, treatments, pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 outline-none text-lg placeholder:text-muted-foreground"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 rounded border bg-muted px-2 py-1 text-xs text-muted-foreground">
            ESC
          </kbd>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Search Results */}
        <div ref={resultsRef} className="max-h-96 overflow-y-auto">
          {query && results.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-2">Try searching for services, treatments, or pages</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="p-2">
              {results.map((result, index) => (
                <Link
                  key={result.id}
                  to={result.url}
                  onClick={() => handleResultClick(result)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-muted/50 ${
                    index === selectedIndex ? 'bg-muted/50' : ''
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{result.title}</span>
                      <Badge variant="secondary" className={`text-xs ${getTypeColor(result.type)}`}>
                        {result.type}
                      </Badge>
                    </div>
                    {result.description && (
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    )}
                    {result.category && (
                      <p className="text-xs text-muted-foreground mt-1">{result.category}</p>
                    )}
                  </div>
                  <div className="text-muted-foreground">
                    <Search className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-3 border-t bg-muted/30 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border rounded">↑↓</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border rounded">⏎</kbd>
              Select
            </span>
          </div>
          <span className="flex items-center gap-1">
            Press <kbd className="px-1.5 py-0.5 bg-white border rounded">⌘K</kbd> to search
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchSystem;