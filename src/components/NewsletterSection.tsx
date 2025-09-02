import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary relative mb-6">
          <div className="absolute inset-0 rounded-full opacity-30" style={{background: 'radial-gradient(40px 40px at 50% 50%, white, transparent)'}}></div>
          <div className="absolute inset-0 grid place-items-center">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13.333L18.152 22.101c1.12.746 2.579.746 3.699 0L35 13.333M8.334 31.667H31.668A3.333 3.333 0 0035 28.333V11.667A3.333 3.333 0 0031.668 8.333H8.334A3.333 3.333 0 005 11.667V28.333A3.333 3.333 0 008.334 31.667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <h2 className="text-5xl font-heading font-extrabold tracking-tight mb-3 text-foreground">
          Join our newsletter
        </h2>
        <p className="text-muted-foreground mb-8">
          Get wellness tips, member perks and early access to promos.
        </p>
        
        <form className="grid gap-3 sm:grid-cols-2">
          <Input 
            required 
            placeholder="First & last name" 
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-primary/20"
          />
          <Input 
            required 
            type="email" 
            placeholder="Email address" 
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-primary/20"
          />
          <Button className="sm:col-span-2 px-6 py-3 rounded-xl bg-primary text-white hover:bg-foreground transition">
            Subscribe
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground mt-4">
          We never share your info with third parties.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
