import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ServiceAreas = () => {
  const primaryAreas = [
    {
      city: "Scottsdale",
      description: "Our home base with comprehensive service coverage",
      neighborhoods: ["Old Town Scottsdale", "North Scottsdale", "South Scottsdale", "Desert Ridge", "McCormick Ranch", "DC Ranch"],
      responseTime: "30-45 minutes",
      featured: true
    },
    {
      city: "Phoenix",
      description: "Full coverage across the Phoenix metropolitan area",
      neighborhoods: ["Central Phoenix", "Biltmore", "Arcadia", "Ahwatukee", "Desert View", "Camelback East"],
      responseTime: "45-60 minutes",
      featured: true
    },
    {
      city: "Paradise Valley",
      description: "Premium service for Arizona's most exclusive community",
      neighborhoods: ["Paradise Valley Village", "Tatum Highlands", "Desert Highland", "Clearwater Hills"],
      responseTime: "30-45 minutes",
      featured: true
    }
  ];

  const extendedAreas = [
    {
      city: "Tempe",
      neighborhoods: ["Downtown Tempe", "ASU Campus Area", "South Tempe", "Warner Ranch"],
      responseTime: "45-60 minutes"
    },
    {
      city: "Mesa",
      neighborhoods: ["East Mesa", "West Mesa", "Red Mountain", "Las Sendas"],
      responseTime: "60-75 minutes"
    },
    {
      city: "Fountain Hills",
      neighborhoods: ["Fountain Hills Village", "Desert Vista", "Firerock Country Club"],
      responseTime: "45-60 minutes"
    },
    {
      city: "Cave Creek",
      neighborhoods: ["Cave Creek Village", "Desert Foothills", "Tatum Ranch"],
      responseTime: "60-75 minutes"
    },
    {
      city: "Carefree",
      neighborhoods: ["Carefree Village", "Desert Mountain", "The Boulders"],
      responseTime: "60-75 minutes"
    }
  ];

  const serviceFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Same-Day Service",
      description: "Book and receive treatment the same day in most areas"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Mobile Service",
      description: "We come to your home, office, hotel, or event location"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "24/7 Booking",
      description: "Schedule appointments anytime through our online system"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Licensed Professionals",
      description: "All treatments performed by Arizona licensed medical staff"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas | Mobile IV Therapy | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Mobile IV therapy service areas in Arizona. We serve Scottsdale, Phoenix, Paradise Valley, Tempe, Mesa, and surrounding areas. Same-day appointments available." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Mobile IV Therapy Service Areas
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Professional mobile IV therapy and wellness services delivered throughout the Phoenix metropolitan area. Licensed medical professionals bringing wellness directly to you.
            </p>
            <Button size="lg" asChild>
              <Link to="/first-time-patients">Book Your Service</Link>
            </Button>
          </div>
        </section>

        {/* Primary Service Areas */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Primary Service Areas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our core service zones with the fastest response times and comprehensive coverage.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {primaryAreas.map((area, index) => (
                <Card key={index} className={`${area.featured ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">{area.city}</CardTitle>
                      <div className="flex items-center gap-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        {area.responseTime}
                      </div>
                    </div>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Neighborhoods Served:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {area.neighborhoods.map((neighborhood, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{neighborhood}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full" asChild>
                        <Link to="/first-time-patients">Book in {area.city}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Extended Service Areas */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Extended Service Areas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Additional areas we serve with slightly longer response times. All areas receive the same high-quality service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extendedAreas.map((area, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{area.city}</CardTitle>
                      <div className="flex items-center gap-2 text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        {area.responseTime}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Areas Covered:</h4>
                      <div className="space-y-1">
                        {area.neighborhoods.map((neighborhood, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-1" />
                            <span className="text-sm">{neighborhood}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Mobile Service</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional, convenient, and reliable wellness services delivered throughout Arizona.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceFeatures.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Map CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Not Sure If We Serve Your Area?</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg max-w-2xl mx-auto">
              Our service area is constantly expanding. Contact us to check availability in your location or to request service in a new area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Check Availability</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="tel:+1-602-688-9825">Call Now: (602) 688-9825</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Service Area Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Travel Fees</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Primary areas: No additional travel fee</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Extended areas: Minimal travel fee may apply</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Group bookings: Travel fees waived</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Scheduling</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Same-day appointments available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Advance booking recommended</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Emergency services available 24/7</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceAreas;