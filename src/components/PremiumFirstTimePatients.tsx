import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  Heart, 
  Stethoscope, 
  UserCheck,
  ArrowRight,
  Shield,
  Star,
  Phone,
  Calendar,
  Download,
  Users,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import QualiphyWidget from "@/components/QualiphyWidget";
import React from "react";

const PremiumFirstTimePatients = () => {
  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      icon: FileText,
      title: "Medical Consultation",
      subtitle: "15-20 minutes",
      description: "Complete health assessment and personalized treatment planning with our licensed medical team.",
      details: [
        "Comprehensive health history review",
        "Personalized treatment recommendations", 
        "Medical clearance and safety assessment",
        "Custom dosing and nutrient selection"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Stethoscope,
      title: "Professional Treatment",
      subtitle: "30-60 minutes", 
      description: "Relax while our licensed medical professionals administer your personalized IV therapy.",
      details: [
        "Comfortable treatment environment",
        "Professional medical monitoring",
        "Sterile technique and safety protocols",
        "Real-time health status assessment"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Follow-up Care",
      subtitle: "Ongoing support",
      description: "Comprehensive aftercare and treatment optimization for the best possible results.",
      details: [
        "Post-treatment health monitoring",
        "Treatment plan adjustments",
        "Ongoing wellness support",
        "Access to medical team for questions"
      ],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const preparationItems = [
    {
      icon: "💧",
      title: "Stay Well Hydrated",
      description: "Drink plenty of water 24 hours before your appointment for optimal treatment effectiveness",
      timeframe: "24 hours before"
    },
    {
      icon: "🍽️", 
      title: "Eat a Light Meal",
      description: "Have a small, nutritious meal 1-2 hours before treatment to prevent any discomfort",
      timeframe: "1-2 hours before"
    },
    {
      icon: "📋",
      title: "Complete Medical Forms",
      description: "Fill out new patient paperwork in advance to streamline your appointment",
      timeframe: "Before arrival"
    },
    {
      icon: "👕",
      title: "Wear Comfortable Clothing",
      description: "Choose clothing with easy access to your arms for IV placement",
      timeframe: "Day of treatment"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical IV therapy session take?",
      answer: "Most IV therapy sessions take 30-60 minutes, depending on the specific treatment. Your first visit may take slightly longer due to the initial consultation and medical assessment process."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, insurance information (if applicable), completed new patient forms, and a list of any current medications or supplements you're taking."
    },
    {
      question: "Is IV therapy safe for first-time patients?", 
      answer: "Yes, IV therapy is very safe when administered by licensed medical professionals. All our practitioners are extensively trained in IV therapy administration, and we use strict sterile techniques and high-quality, pharmacy-grade ingredients."
    },
    {
      question: "Will I feel any discomfort during treatment?",
      answer: "Most patients experience minimal to no discomfort. You may feel a small pinch during IV insertion, similar to a routine blood draw. Our medical team ensures your comfort throughout the entire process."
    },
    {
      question: "How soon will I feel the effects?",
      answer: "Many patients begin to feel the benefits during or immediately after treatment. Full effects typically develop within 24-48 hours as your body processes and utilizes the nutrients."
    }
  ];

  const benefits = [
    { icon: Shield, text: "Licensed Medical Team", color: "text-blue-600" },
    { icon: Clock, text: "Same-Day Appointments", color: "text-green-600" },
    { icon: Award, text: "Personalized Treatments", color: "text-purple-600" },
    { icon: Star, text: "5-Star Patient Care", color: "text-yellow-600" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Premium Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 px-4 py-2">
                <UserCheck className="w-4 h-4 mr-2" />
                New Patient Welcome
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Welcome to Your{" "}
              <span className="bg-gradient-to-r from-primary to-brand-teal bg-clip-text text-transparent">
                Wellness Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Experience premium IV therapy with our licensed medical team. We've designed a seamless 
              process to ensure your first visit is comfortable, safe, and effective.
            </p>
            
            {/* Benefits Row */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/50">
                  <benefit.icon className={`w-4 h-4 ${benefit.color}`} />
                  <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button size="xl" className="bg-primary hover:bg-primary-hover text-white font-medium group" asChild>
                <Link to="/first-time-patients">
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Your First Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline" size="xl" className="font-medium border-primary/30 hover:border-primary/50">
                <Download className="mr-2 w-5 h-5" />
                New Patient Forms
              </Button>
              
              <QualiphyWidget />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">
              <Stethoscope className="w-4 h-4 mr-2" />
              Your Treatment Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What to Expect</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your first visit is carefully designed to be comfortable, informative, and tailored to your unique wellness needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Process Steps */}
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-primary/5 border-2 border-primary shadow-glow-primary'
                      : 'bg-background border border-border/50 hover:border-border hover:bg-muted/30'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        <Badge variant="secondary" className="text-xs">{step.subtitle}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{step.description}</p>
                      
                      {activeTab === index && (
                        <div className="space-y-2 animate-fade-up">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Representation */}
            <div className="relative">
              <div className="bg-gradient-to-br from-background to-primary/5 rounded-3xl p-8 shadow-premium border border-border/50">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-6 flex items-center justify-center">
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${processSteps[activeTab].color} flex items-center justify-center shadow-large animate-pulse-soft`}>
                    {React.createElement(processSteps[activeTab].icon, { className: "w-12 h-12 text-white" })}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">{processSteps[activeTab].title}</h3>
                <p className="text-muted-foreground mb-4">{processSteps[activeTab].description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Step {activeTab + 1} of {processSteps.length}
                  </div>
                  <Badge className="bg-primary text-white">{processSteps[activeTab].subtitle}</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Guidelines */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Preparation Guide
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">How to Prepare for Your Visit</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Simple steps to ensure you get the maximum benefit from your IV therapy treatment.
              </p>
              
              <div className="space-y-6">
                {preparationItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border/50 hover:border-border transition-all duration-300">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <Badge variant="secondary" className="text-xs">{item.timeframe}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New Patient Special */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-primary to-brand-teal text-white shadow-premium border-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader>
                  <Badge className="bg-white/20 text-white w-fit mb-4">
                    <Star className="w-3 h-3 mr-1" />
                    New Patient Special
                  </Badge>
                  <CardTitle className="text-white text-3xl">20% OFF</CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    Your first IV therapy session
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm">Valid for all first-time patients</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm">Includes medical consultation</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm">Professional treatment & monitoring</span>
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90 font-medium">
                    Claim Your Discount
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">
              <Users className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Everything You Need to Know</h2>
            <p className="text-xl text-muted-foreground">
              Common questions from first-time patients about our IV therapy process and treatments.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-border/50 hover:border-border transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-border/20">
            <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our medical team is available to answer any questions about treatments, the process, 
              or to help you choose the right therapy for your wellness goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-white" asChild>
                <Link to="/contact">Talk to Our Medical Team</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+1-602-688-9825">Call (602) 688-9825</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumFirstTimePatients;