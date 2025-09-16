import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { LogIn, Shield, User, ChevronRight } from "lucide-react";

const ClientPortalLoginButton = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-brand-teal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Existing Patients
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Access your treatment history, book follow-up appointments, and manage your wellness journey.
            </p>
          </div>

          {/* Login Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Client Portal Access */}
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-brand-teal rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">Client Portal</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    View your treatment history, upcoming appointments, and personalized wellness plan.
                  </p>
                  <Button asChild className="w-full bg-gradient-to-r from-primary to-brand-teal hover:from-primary-hover hover:to-brand-teal/90 text-white group-hover:scale-[1.02] transition-all">
                    <Link to="/client-portal" className="flex items-center justify-center">
                      <LogIn className="w-4 h-4 mr-2" />
                      Access Portal
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Quick Features */}
            <Card className="p-8 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">Secure & Private</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>HIPAA compliant platform</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>Encrypted data protection</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>24/7 secure access</span>
                    </div>
                  </div>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/medical-compliance">Learn More</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Help Text */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Need help accessing your account? <Link to="/contact" className="text-primary hover:underline font-medium">Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortalLoginButton;