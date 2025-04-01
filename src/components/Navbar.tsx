import {
  useEffect,
  useState,
} from 'react';

import {
  Menu,
  X,
} from 'lucide-react';
import {
  Link,
  useLocation,
} from 'react-router-dom';

import { Button } from '@/components/ui/button';

import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo variant={scrolled ? "default" : "default"} showTagline={false} />

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
            to="/universities"
            className={`nav-link ${isActive("/universities") ? "active" : ""}`}
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

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white/80 backdrop-blur-md border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium ${
                isActive("/") ? "text-primary bg-blue-50" : "text-gray-600"
              }`}
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link
              to="/universities"
              className={`block px-4 py-2 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium ${
                isActive("/universities") ? "text-primary bg-blue-50" : "text-gray-600"
              }`}
              onClick={handleNavClick}
            >
              Universities
            </Link>
            <div className="pt-2">
              <Button
                asChild
                className="w-full shadow-button hover:shadow-button-hover transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Link to="/apply" onClick={handleNavClick}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
