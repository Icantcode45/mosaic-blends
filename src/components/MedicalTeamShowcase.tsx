import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Award, 
  Shield, 
  Star,
  Users,
  Clock,
  Phone
} from "lucide-react";

const MedicalTeamShowcase = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Medical Director",
      credentials: "MD, Emergency Medicine",
      specialties: ["Emergency Medicine", "IV Therapy", "Critical Care"],
      experience: "15+ Years",
      education: "Harvard Medical School",
      image: "/lovable-uploads/medical-team-1.jpg" // Placeholder
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Nurse Practitioner", 
      credentials: "MSN, NP-C",
      specialties: ["IV Therapy", "Wellness Medicine", "Preventive Care"],
      experience: "12+ Years",
      education: "Johns Hopkins University",
      image: "/lovable-uploads/medical-team-2.jpg" // Placeholder
    },
    {
      name: "Jennifer Martinez",
      role: "Senior RN",
      credentials: "RN, BSN",
      specialties: ["IV Administration", "Patient Care", "Mobile Services"],
      experience: "10+ Years", 
      education: "Arizona State University",
      image: "/lovable-uploads/medical-team-3.jpg" // Placeholder
    }
  ];

  const credentials = [
    { 
      icon: Shield, 
      title: "Licensed Medical Professionals",
      description: "All team members are licensed in Arizona",
      color: "text-green-600"
    },
    {
      icon: GraduationCap,
      title: "Advanced Medical Education", 
      description: "Graduates from top medical institutions",
      color: "text-blue-600"
    },
    {
      icon: Award,
      title: "Specialized Training",
      description: "IV therapy and mobile medicine certified",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Patient-Centered Care",
      description: "Focused on personalized treatment plans", 
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Licensed Medical Team
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our Medical Experts
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team of licensed medical professionals brings decades of experience 
            in emergency medicine, IV therapy, and mobile healthcare.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <Card key={index} className="text-center p-6 bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <credential.icon className={`w-10 h-10 ${credential.color} mx-auto mb-4`} />
                <h3 className="font-bold text-foreground mb-2">{credential.title}</h3>
                <p className="text-sm text-muted-foreground">{credential.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Members - Placeholder Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-brand-teal/20 flex items-center justify-center">
                <Users className="w-16 h-16 text-primary/60" />
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.credentials}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                      {member.education}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-green-600" />
                      {member.experience}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <Badge key={specialtyIndex} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="bg-gradient-to-r from-primary/10 to-brand-teal/10 rounded-3xl p-8 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Choose Our Medical Team?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Extensive Experience</p>
                    <p className="text-sm text-muted-foreground">Decades of combined experience in emergency and mobile medicine</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Licensed & Insured</p>
                    <p className="text-sm text-muted-foreground">All professionals are licensed in Arizona with full medical insurance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Specialized Training</p>
                    <p className="text-sm text-muted-foreground">Advanced certifications in IV therapy and mobile healthcare delivery</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <div className="text-4xl font-bold text-foreground mb-2">24/7</div>
                <p className="text-muted-foreground">Medical Support Available</p>
              </div>
              <Button asChild size="lg">
                <Link to="/telehealth">
                  <Phone className="w-5 h-5 mr-2" />
                  Speak with Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MedicalTeamShowcase;