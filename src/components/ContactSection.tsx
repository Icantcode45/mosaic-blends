import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div id="book" className="hidden" aria-hidden="true"></div>
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl tracking-tight mb-4 text-foreground">
              Get in touch
            </h2>
            <p className="text-muted-foreground mb-6">
              Questions about membership, telehealth or in-clinic IVs? We're here.
            </p>
            
            <div className="space-y-2 text-foreground">
              <p><img src="/lovable-uploads/700619f7-edd4-438b-bb29-f64a257fbd87.png" alt="" className="w-5 h-5 inline mr-2" />Scottsdale, AZ</p>
              <p>
                <img src="/lovable-uploads/bcef40ff-face-4462-965d-5f9d26ee8403.png" alt="" className="w-5 h-5 inline mr-2" /> <a className="underline hover:text-primary transition-colors" href="mailto:help@staydripped.co">help@staydripped.co</a>
              </p>
              <p><img src="/lovable-uploads/7b84226a-c816-411c-9f4e-373be221089d.png" alt="" className="w-5 h-5 inline mr-2" />(888) 555-0199</p>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <form className="bg-white rounded-3xl border border-gray-100 p-6 shadow-elev-1">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input 
                placeholder="First name" 
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-primary/20"
              />
              <Input 
                placeholder="Last name" 
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-primary/20"
              />
              <Input 
                type="email" 
                placeholder="Email" 
                className="sm:col-span-2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-primary/20"
              />
              <Textarea 
                rows={4} 
                placeholder="How can we help?" 
                className="sm:col-span-2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-primary/20"
              />
            </div>
            <Button className="mt-4 w-full py-3.5 rounded-xl bg-black text-white hover:bg-primary transition">
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
