import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Star, Gift } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Wellness Wednesday: IV Therapy Introduction",
      date: "December 18, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Stay Dripped IV & Wellness Co. - Scottsdale",
      type: "Educational",
      price: "Free",
      featured: true,
      description: "Learn about the benefits of IV therapy with complimentary mini-consultations and refreshments.",
      spots: "15 spots available"
    },
    {
      id: 2,
      title: "New Year Detox Workshop",
      date: "January 8, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Stay Dripped IV & Wellness Co. - Paradise Valley",
      type: "Workshop",
      price: "$49",
      featured: false,
      description: "Start your year right with our comprehensive detox workshop including IV therapy, nutrition guidance, and wellness planning.",
      spots: "8 spots available"
    },
    {
      id: 3,
      title: "Valentine's Couples Wellness Retreat",
      date: "February 14, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Stay Dripped IV & Wellness Co. - Scottsdale",
      type: "Special Event",
      price: "$299 per couple",
      featured: true,
      description: "Romantic wellness experience for couples featuring side-by-side IV therapy, wellness consultations, and gift packages.",
      spots: "6 couples available"
    }
  ];

  const pastEvents = [
    {
      title: "Holiday Wellness Fair",
      date: "December 1, 2024",
      attendees: 45,
      rating: 4.9
    },
    {
      title: "Immunity Boost Workshop",
      date: "November 15, 2024", 
      attendees: 28,
      rating: 4.8
    },
    {
      title: "Executive Health Seminar",
      date: "October 22, 2024",
      attendees: 35,
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wellness Events & Workshops
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community for educational workshops, wellness seminars, and special events designed to enhance your health journey.
            </p>
            <Button size="lg">
              View All Upcoming Events
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h2>
              <p className="text-muted-foreground">Reserve your spot at our next wellness gathering</p>
            </div>
            <Button variant="outline">Create Event Alert</Button>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className={`relative ${event.featured ? 'ring-2 ring-primary' : ''}`}>
                {event.featured && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary">{event.type}</Badge>
                    <span className="text-lg font-bold text-primary">{event.price}</span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {event.spots}
                    </div>
                  </div>
                  <Button className="w-full">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Types of Events We Host</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From educational workshops to wellness retreats, we offer diverse experiences for every wellness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Educational Workshops</CardTitle>
                <CardDescription>Learn about IV therapy, nutrition, and wellness practices</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Special Occasions</CardTitle>
                <CardDescription>Holiday events, couples retreats, and celebration packages</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>VIP Experiences</CardTitle>
                <CardDescription>Exclusive events for members and special guests</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Wellness Series</CardTitle>
                <CardDescription>Multi-session programs for comprehensive health improvement</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Past Events</h2>
            <p className="text-muted-foreground">See what our community has been up to</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{event.attendees} attendees</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{event.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Subscribe to our newsletter to get notified about upcoming wellness events and workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-foreground"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;