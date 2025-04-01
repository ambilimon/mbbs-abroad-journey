
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  const navLinks = [
    { href: "/#", label: "Home" },
    { href: "/#why-mbbs-abroad", label: "Why MBBS Abroad" },
    { href: "/#universities", label: "Universities" },
    { href: "/#application", label: "Apply Now" },
    { href: "/#contact", label: "Contact" },
  ];

  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => (
    <a
      href={href}
      className={cn(
        "transition-colors duration-200",
        className
      )}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Logo variant={scrolled ? 'default' : 'default'} />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(
                      "nav-link px-3 py-2 text-sm font-medium",
                      "text-gray-700 hover:text-primary"
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation - Slide down animation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container px-4 mx-auto py-4 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              label={link.label}
              className="block px-4 py-3 rounded-md text-gray-700 hover:bg-blue-50 hover:text-primary"
            />
          ))}
          <div className="pt-2 pb-1">
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
