import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-foreground">Book a Visit</h3>
            <p className="mt-2 text-muted-foreground">
              Tell us what you're looking for—our team will confirm your time.
            </p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
              <Input placeholder="Email" type="email" className="sm:col-span-2" />
              <Input placeholder="Phone" type="tel" className="sm:col-span-2" />
              <Textarea placeholder="How can we help?" rows={4} className="sm:col-span-2" />
              <Button className="btn btn-primary sm:col-span-2" size="lg">
                Request appointment
              </Button>
            </form>
          </Card>
          <div className="p-6">
            <div className="space-y-5">
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:+1-602-688-9825" className="text-lg font-medium text-primary hover:text-primary/80">
                  (602) 688‑9825
                </a>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a href="mailto:info@staydrippediv.com" className="text-lg font-medium text-primary hover:text-primary/80">
                  info@staydrippediv.com
                </a>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Service Area</div>
                <div className="text-lg font-medium text-foreground">Phoenix Metro • Mobile visits</div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground">Business Hours</div>
                <div className="text-lg font-medium text-foreground">Mon–Fri 8am–6pm • Sat 9am–4pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;