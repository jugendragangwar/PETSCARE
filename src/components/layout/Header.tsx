import { Search, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { label: "Home", hasDropdown: false },
    { label: "Shop", hasDropdown: true },
    { label: "Blog", hasDropdown: true },
    { label: "Pages", hasDropdown: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+88 123 456 789</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Free Shipping on Orders $50+</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 min-w-[140px]">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🐾</span>
            </div>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2.5 pr-12 border border-border rounded-full bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-2 min-w-[200px] justify-end">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Register
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border bg-background">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-8 py-3 overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className="flex items-center gap-1 text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </a>
              </li>
            ))}
            <li className="ml-auto">
              <a
                href="#"
                className="text-primary font-medium hover:underline whitespace-nowrap"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;