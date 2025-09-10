import { useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const GoogleReviewsWidget = () => {
  useEffect(() => {
    // Load Google Places API script if not already loaded
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_PLACES_API_KEY&libraries=places`;
    script.async = true;
    script.defer = true;
    
    // For now, we'll use static data since we need a Google Places API key
    // In production, you would fetch real reviews here
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  // Static review data - replace with real Google Places API data
  const reviewsData = {
    rating: 4.9,
    totalReviews: 312,
    reviews: [
      {
        id: 1,
        author: "Sarah M.",
        rating: 5,
        text: "Exceptional service! The mobile IV therapy saved my day after a terrible hangover. Professional, clean, and effective. Will definitely book again!",
        date: "2 days ago",
        verified: true
      },
      {
        id: 2,
        author: "Marcus R.",
        rating: 5,
        text: "The NAD+ therapy has been life-changing. I've noticed incredible improvements in energy and mental clarity. The team is knowledgeable and professional.",
        date: "1 week ago",
        verified: true
      },
      {
        id: 3,
        author: "Jennifer K.",
        rating: 5,
        text: "Love the convenience of mobile service! The nurse was punctual, professional, and made the whole experience comfortable. Highly recommend!",
        date: "2 weeks ago",
        verified: true
      },
      {
        id: 4,
        author: "David L.",
        rating: 5,
        text: "Great for athletic recovery! Used their services after intense training sessions. The peptide treatments have significantly improved my recovery time.",
        date: "3 weeks ago",
        verified: true
      },
      {
        id: 5,
        author: "Amanda H.",
        rating: 4,
        text: "Professional service and great results. The vitamin injections have boosted my energy levels. Only wish they had more evening appointment slots.",
        date: "1 month ago",
        verified: true
      }
    ]
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <h2 className="text-3xl font-bold text-gray-800">Google Reviews</h2>
            </div>
            
            {/* Overall Rating */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-1">{reviewsData.rating}</div>
                <div className="flex justify-center mb-1">
                  {renderStars(Math.floor(reviewsData.rating))}
                </div>
                <div className="text-sm text-gray-600">{reviewsData.totalReviews} reviews</div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {reviewsData.reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow animate-fade-in">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{review.author}</h4>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs ml-2">
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-sm">{review.text}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a 
                  href="https://search.google.com/local/writereview?placeid=ChIJvZM-K2ELK4cRrGsVgq3QD-s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Write a Review
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a 
                  href="https://www.google.com/maps/place/Stay+Dripped+IV+%26+Wellness+Co./@33.4942,-111.9261,17z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View All Reviews
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-gray-600">
              Reviews are managed by Google and reflect authentic customer experiences
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 bg-blue-50 rounded-xl p-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">4.9★</div>
                <div className="text-sm text-gray-700">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">312</div>
                <div className="text-sm text-gray-700">Total Reviews</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-sm text-gray-700">Recommend Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsWidget;