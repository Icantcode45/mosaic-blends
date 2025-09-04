import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, FileText, Heart, Stethoscope, UserCheck } from "lucide-react";

const FirstTimePatients = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Welcome, First-Time Patients!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your journey to optimal wellness starts here. We've made it simple to get started with our comprehensive IV therapy and wellness services.
            </p>
            <Button size="lg" className="mr-4">
              Book Your First Appointment
            </Button>
            <Button variant="outline" size="lg">
              Download New Patient Forms
            </Button>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What to Expect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your first visit is designed to be comfortable, informative, and tailored to your unique wellness needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>1. Consultation</CardTitle>
                <CardDescription>
                  Complete health assessment and personalized treatment planning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our experienced practitioners will review your health history and wellness goals to create your custom treatment plan.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Stethoscope className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>2. Treatment</CardTitle>
                <CardDescription>
                  Professional IV therapy administration in a comfortable setting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Relax in our luxury treatment rooms while receiving your personalized IV therapy or wellness service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>3. Follow-up</CardTitle>
                <CardDescription>
                  Ongoing support and treatment optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We'll check in on your progress and adjust your wellness plan to ensure optimal results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preparation Checklist */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Before Your Visit</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Stay Hydrated</p>
                    <p className="text-sm text-muted-foreground">Drink plenty of water 24 hours before your appointment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Eat a Light Meal</p>
                    <p className="text-sm text-muted-foreground">Have a small meal 1-2 hours before treatment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Bring Your Forms</p>
                    <p className="text-sm text-muted-foreground">Complete new patient paperwork in advance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Wear Comfortable Clothing</p>
                    <p className="text-sm text-muted-foreground">Choose clothing with easy access to your arms</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <UserCheck className="w-12 h-12 mb-4" />
                <CardTitle className="text-white">New Patient Special</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Save on your first visit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-white mb-2">20% OFF</p>
                <p className="text-primary-foreground/90 mb-4">Your first IV therapy session</p>
                <Button variant="secondary" className="w-full">
                  Claim Your Discount
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know for your first visit</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does a typical session take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most IV therapy sessions take 30-60 minutes, depending on the treatment. Your first visit may take slightly longer due to the consultation process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What should I bring to my appointment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Please bring a valid ID, insurance information (if applicable), completed new patient forms, and a list of any current medications or supplements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is IV therapy safe?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, when administered by trained professionals. All our practitioners are licensed and experienced in IV therapy administration. We use sterile techniques and high-quality ingredients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstTimePatients;