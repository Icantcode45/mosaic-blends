import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Heart, Star, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const jobOpenings = [
    {
      id: 1,
      title: "Registered Nurse (RN) - Mobile IV Therapy",
      department: "medical",
      location: "Scottsdale, AZ",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      experience: "2+ years",
      featured: true,
      description: "Join our mobile IV therapy team providing premium wellness services to clients throughout the Phoenix metro area.",
      requirements: [
        "Current Arizona RN license",
        "2+ years of IV therapy experience",
        "Reliable transportation",
        "Excellent communication skills"
      ]
    },
    {
      id: 2,
      title: "Licensed Practical Nurse (LPN)",
      department: "medical",
      location: "Phoenix, AZ",
      type: "Part-time",
      salary: "$45,000 - $55,000",
      experience: "1+ years",
      featured: false,
      description: "Support our medical team in providing exceptional IV therapy and vitamin injection services.",
      requirements: [
        "Current Arizona LPN license",
        "IV therapy experience preferred",
        "Weekend availability",
        "Professional demeanor"
      ]
    },
    {
      id: 3,
      title: "Customer Success Manager",
      department: "operations",
      location: "Remote/Scottsdale",
      type: "Full-time",
      salary: "$50,000 - $65,000",
      experience: "3+ years",
      featured: true,
      description: "Lead customer relationships and ensure exceptional service delivery for our premium wellness clients.",
      requirements: [
        "Healthcare industry experience",
        "Customer service excellence",
        "CRM software proficiency",
        "Strong organizational skills"
      ]
    },
    {
      id: 4,
      title: "Marketing Coordinator",
      department: "marketing",
      location: "Scottsdale, AZ",
      type: "Full-time",
      salary: "$40,000 - $50,000",
      experience: "1-2 years",
      featured: false,
      description: "Drive brand awareness and customer acquisition through digital marketing and community engagement.",
      requirements: [
        "Digital marketing experience",
        "Social media expertise",
        "Content creation skills",
        "Healthcare marketing preferred"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Comprehensive Health Coverage",
      description: "Medical, dental, and vision insurance with company contribution"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Professional Development",
      description: "Continuing education support and career advancement opportunities"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Wellness",
      description: "Complimentary IV therapy treatments and wellness services"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Work-life balance with flexible hours and remote options"
    }
  ];

  const departments = [
    { value: "all", label: "All Departments" },
    { value: "medical", label: "Medical Staff" },
    { value: "operations", label: "Operations" },
    { value: "marketing", label: "Marketing" }
  ];

  const filteredJobs = selectedDepartment === "all" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <>
      <Helmet>
        <title>Careers | Join Our Team | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Join the Stay Dripped IV & Wellness Co. team in Scottsdale, AZ. We're hiring registered nurses, medical staff, and wellness professionals. Competitive benefits and growth opportunities." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Join Our Wellness Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Be part of Arizona's premier mobile IV therapy company. Help us deliver exceptional wellness experiences while building a rewarding career in healthcare.
            </p>
            <Button size="lg" onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}>
              View Open Positions
            </Button>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Stay Dripped?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join a growing company that values professional excellence, work-life balance, and making a positive impact on people's health and wellness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Open Positions</h2>
              <p className="text-muted-foreground mb-8">
                Explore current opportunities to join our team
              </p>
              
              {/* Department Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {departments.map((dept) => (
                  <Button
                    key={dept.value}
                    variant={selectedDepartment === dept.value ? "default" : "outline"}
                    onClick={() => setSelectedDepartment(dept.value)}
                    size="sm"
                  >
                    {dept.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className={`relative ${job.featured ? 'ring-2 ring-primary' : ''}`}>
                  {job.featured && (
                    <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="capitalize">{job.department}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <CardDescription>{job.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {job.experience}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Requirements:</h4>
                      <ul className="text-sm space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No positions available in this department currently.
                </p>
                <p className="text-muted-foreground mt-2">
                  Check back soon or contact us about future opportunities.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Application Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our streamlined hiring process is designed to find the best candidates while respecting your time.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Apply Online</h3>
                <p className="text-sm text-muted-foreground">Submit your application and resume through our contact form</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Initial Review</h3>
                <p className="text-sm text-muted-foreground">Our team reviews applications within 3-5 business days</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Interview Process</h3>
                <p className="text-sm text-muted-foreground">Phone screening followed by in-person or video interview</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Welcome Aboard</h3>
                <p className="text-sm text-muted-foreground">Onboarding, training, and integration into our team</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career With Us?</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg max-w-2xl mx-auto">
              Don't see the perfect position? We're always looking for talented healthcare professionals and passionate team members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Submit General Application</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact?subject=career-inquiry">Ask About Future Opportunities</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;