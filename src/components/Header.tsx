import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    'Treatments',
    'How it works', 
    'Why Us',
    'Memberships',
    'Team',
    'FAQ'
  ];

  return (
    <header className="w-full py-4 px-6 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-foreground">Stay Dripped® IV</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <Button variant="default" size="sm">
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Header;