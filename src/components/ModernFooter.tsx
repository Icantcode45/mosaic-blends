import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Star,
  Shield,
  Award,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "IV Therapy", href: "/iv-therapy" },
  { name: "NAD+ Therapy", href: "/nad-peptides" },
  { name: "Vitamin Injections", href: "/vitamin-injections" },
  { name: "Membership", href: "/membership" },
  { name: "First Time Patients", href: "/first-time-patients" },
  { name: "Gift Cards", href: "/gift-cards" }
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/about#team" },
  { name: "Events & Partnerships", href: "/events" },
  { name: "Sponsorship", href: "/sponsorship" },
  { name: "Newsletter", href: "/newsletter" },
  { name: "Contact", href: "/contact" }
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Medical Compliance", href: "/medical-compliance" },
  { name: "Good Faith Estimate", href: "/good-faith-estimate" },
  { name: "Compliance", href: "/compliance" }
];

const certifications = [
  { name: "BBB A+", icon: Award, description: "Accredited Business" },
  { name: "Licensed", icon: Shield, description: "Medical Professionals" },
  { name: "Insured", icon: CheckCircle2, description: "Fully Covered" },
  { name: "5.0 Rating", icon: Star, description: "Customer Reviews" }
];

export default function ModernFooter() {
  return (
    <footer className="bg-medical-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
            <p className="text-white/70 text-lg mb-8">
              Get exclusive wellness tips, special offers, and be the first to know about new treatments.
            </p>
            
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="rounded-l-none bg-accent hover:bg-accent/90 px-6">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/src/assets/stay-dripped-cowboy-logo-main.png" 
                alt="Stay Dripped IV" 
                className="h-12 w-auto"
              />
              <div>
                <div className="font-bold text-xl">Stay Dripped</div>
                <div className="text-sm text-white/70">IV Therapy & Wellness</div>
              </div>
            </Link>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              Professional mobile IV therapy and wellness treatments delivered by licensed medical professionals 
              throughout Scottsdale, Paradise Valley, and Phoenix Metro.
            </p>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/10">
                  <cert.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">{cert.name}</div>
                    <div className="text-xs text-white/60">{cert.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Service Areas</div>
                  <div className="text-white/70">Scottsdale, Paradise Valley, Phoenix Metro</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <a href="tel:602-688-9825" className="font-semibold hover:text-accent transition-colors">
                    (602) 688-9825
                  </a>
                  <div className="text-white/70 text-sm">Available 24/7</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <div>
                  <a href="mailto:info@staydrippediv.com" className="font-semibold hover:text-accent transition-colors">
                    info@staydrippediv.com
                  </a>
                  <div className="text-white/70 text-sm">Quick response</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Availability</div>
                  <div className="text-white/70">Same-day booking available</div>
                  <div className="text-white/70">7 days a week</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="text-center text-white/60 text-sm">
            <p>© 2024 Stay Dripped IV Therapy & Wellness. All rights reserved.</p>
            <p className="mt-2">
              Licensed medical professionals providing premium mobile IV therapy and wellness treatments.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}