import {
  useEffect,
  useState,
} from 'react';

import {
  Menu,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

import Logo from './Logo';

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
    { href: "/", label: "Home" },
    { href: "/university/1", label: "Universities" },
    { href: "/#why-mbbs-abroad", label: "Why MBBS Abroad" },
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

  const isActive = (path: string) => {
    return window.location.pathname === path;
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Logo variant={scrolled ? 'default' : 'default'} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            onClick={handleNavClick}
          >
            Home
          </Link>
          <Link
            to="/university/1"
            className={`nav-link ${isActive("/university/1") ? "active" : ""}`}
            onClick={handleNavClick}
          >
            Universities
          </Link>
          <Button
            asChild
            className="ml-2 shadow-button hover:shadow-button-hover transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Link to="/apply">Apply Now</Link>
          </Button>
        </nav>

        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
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
            <Link
              key={link.label}
              to={link.href}
              className={`block px-4 py-2 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium ${
                isActive(link.href) ? "text-primary bg-blue-50" : "text-gray-600"
              }`}
              onClick={handleNavClick}
            >
              {link.label}
            </Link>
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
