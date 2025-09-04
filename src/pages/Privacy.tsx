import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your privacy and the security of your personal health information is our top priority. Learn how we protect and handle your data.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>HIPAA Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We follow strict HIPAA guidelines to protect your protected health information (PHI).
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Transparent Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Clear communication about what data we collect, how we use it, and who we share it with.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You have rights regarding your personal information, including access, correction, and deletion.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Name, address, phone number, and email address</li>
                    <li>• Date of birth and gender</li>
                    <li>• Emergency contact information</li>
                    <li>• Insurance information (when applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Health Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Medical history and current health conditions</li>
                    <li>• Current medications and supplements</li>
                    <li>• Allergies and adverse reactions</li>
                    <li>• Treatment records and progress notes</li>
                    <li>• Vital signs and assessment data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Website Usage Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• IP address and browser information</li>
                    <li>• Pages visited and time spent on site</li>
                    <li>• Cookies and similar tracking technologies</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Treatment & Care</h3>
                  <p className="text-muted-foreground">
                    We use your health information to provide IV therapy services, track your progress, 
                    and ensure safe and effective treatment tailored to your needs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Communication</h3>
                  <p className="text-muted-foreground">
                    To send appointment reminders, follow-up care instructions, wellness tips, 
                    and important updates about your treatment or our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Legal & Safety</h3>
                  <p className="text-muted-foreground">
                    As required by law, for public health reporting, and to ensure the safety 
                    of our patients and staff.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl">Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, rent, or trade your personal information. We may share your information only in these limited circumstances:
                </p>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li>• <strong>Healthcare Providers:</strong> With other healthcare professionals involved in your care</li>
                  <li>• <strong>Insurance:</strong> For billing and coverage verification purposes</li>
                  <li>• <strong>Legal Requirements:</strong> When required by law or court order</li>
                  <li>• <strong>Emergency Situations:</strong> To prevent serious harm to you or others</li>
                  <li>• <strong>Business Associates:</strong> With trusted partners who help us operate (under strict confidentiality agreements)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl">Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Access & Review</h3>
                  <p className="text-muted-foreground">
                    You have the right to request copies of your health records and review 
                    the personal information we have collected about you.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Correction</h3>
                  <p className="text-muted-foreground">
                    You can request corrections to your personal or health information if you 
                    believe it is incomplete or inaccurate.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Restriction</h3>
                  <p className="text-muted-foreground">
                    You may request limitations on how we use or share your health information 
                    for treatment, payment, or healthcare operations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Communication Preferences</h3>
                  <p className="text-muted-foreground">
                    You can request that we communicate with you in a specific way or at a 
                    specific location for privacy reasons.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl">Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We implement comprehensive security measures to protect your information:
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Encrypted data transmission and storage</li>
                  <li>• Secure, access-controlled physical facilities</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Staff training on privacy and security protocols</li>
                  <li>• Limited access on a need-to-know basis</li>
                  <li>• Secure disposal of records when no longer needed</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl">Cookies & Website Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our website uses cookies and similar technologies to improve your experience:
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Essential cookies for website functionality</li>
                  <li>• Analytics cookies to understand site usage</li>
                  <li>• Preference cookies to remember your settings</li>
                  <li>• Marketing cookies for relevant communications (with your consent)</li>
                </ul>
                
                <p className="text-muted-foreground mt-4">
                  You can control cookie settings through your browser preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this privacy policy or wish to exercise your privacy rights, please contact us:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Privacy Officer</p>
                      <p className="text-muted-foreground">privacy@staydrippediv.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Written Requests</p>
                      <p className="text-muted-foreground">
                        Stay Dripped IV & Wellness Co.<br />
                        Attn: Privacy Officer<br />
                        [Address]<br />
                        Scottsdale, AZ [ZIP]
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl">Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time to reflect changes in our practices 
                  or applicable laws. We will notify you of any material changes by posting the updated 
                  policy on our website and updating the "Last updated" date. For significant changes, 
                  we may also provide direct notification via email or during your next appointment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;