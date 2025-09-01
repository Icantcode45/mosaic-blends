import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { name: 'Treatments', href: '#treatments' },
    { name: 'Telehealth', href: '#telehealth' },
    { name: 'Supplements', href: '#supplements' },
    { name: 'Membership', href: '#membership' },
    { name: 'FAQ', href: '#faqs' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center space-x-2">
            <span className="inline-flex h-9 w-9 rounded-xl bg-primary/10 items-center justify-center">💧</span>
            <span className="text-lg font-semibold tracking-tight text-foreground">Stay Dripped IV & Wellness Co.</span>
          </a>

          <nav className="hidden lg:flex items-center space-x-8 text-[15px]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="btn btn-outline">
              Book Now
            </Button>
            <Button size="sm" className="btn btn-primary">
              Shop Supplements
            </Button>
          </div>

          {/* Mobile menu - Alpine.js will be handled by the browser */}
          <div className="lg:hidden relative" x-data="{open:false}">
            <button 
              className="h-10 w-10 rounded-xl border border-border grid place-items-center"
              x-on:click="open=!open"
            >
              <svg x-show="!open" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg x-show="open" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div 
              x-show="open" 
              x-transition:enter="transition ease-out duration-200"
              x-transition:enter-start="opacity-0 transform scale-95"
              x-transition:enter-end="opacity-100 transform scale-100"
              x-transition:leave="transition ease-in duration-75"
              x-transition:leave-start="opacity-100 transform scale-100"
              x-transition:leave-end="opacity-0 transform scale-95"
              x-cloak
              className="absolute right-0 mt-2 w-64 py-3 bg-background border border-border rounded-2xl shadow-lg"
            >
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="block px-4 py-2 hover:bg-muted text-foreground"
                  x-on:click="open=false"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-2 border-t border-border"></div>
              <a 
                href="#booking" 
                className="block px-4 py-2 font-medium text-primary"
                x-on:click="open=false"
              >
                Book Now
              </a>
              <a 
                href="#shop" 
                className="block px-4 py-2 text-foreground"
                x-on:click="open=false"
              >
                Shop Supplements
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;