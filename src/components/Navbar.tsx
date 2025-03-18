
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Logo variant={scrolled ? 'default' : 'default'} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <a href="/#" className="nav-link">
            Home
          </a>
          <a href="/#why-mbbs-abroad" className="nav-link">
            Why MBBS Abroad
          </a>
          <a href="/#universities" className="nav-link">
            Universities
          </a>
          <a href="/#application" className="nav-link">
            Apply Now
          </a>
          <a href="/#contact" className="nav-link">
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="container px-4 mx-auto py-4 flex flex-col space-y-4">
            <a
              href="/#"
              className="block px-4 py-2 hover:bg-blue-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/#why-mbbs-abroad"
              className="block px-4 py-2 hover:bg-blue-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Why MBBS Abroad
            </a>
            <a
              href="/#universities"
              className="block px-4 py-2 hover:bg-blue-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Universities
            </a>
            <a
              href="/#application"
              className="block px-4 py-2 hover:bg-blue-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </a>
            <a
              href="/#contact"
              className="block px-4 py-2 hover:bg-blue-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button className="mt-2">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
