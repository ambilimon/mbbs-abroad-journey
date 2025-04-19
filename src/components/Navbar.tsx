import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, Globe } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";

import { ShimmerButton } from "@/components/ShimmerButton";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

import CountryNavigation from "./CountryNavigation";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileCountries, setShowMobileCountries] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const { country } = useParams();

  const isCountryPage = location.pathname.startsWith("/country/");
  const formattedCountry = country
    ? country.charAt(0).toUpperCase() + country.slice(1)
    : null;

  // Organized countries by region for better UI (matching CountryNavigation)
  const countriesByRegion = {
    "Eastern Europe": ["Russia", "Belarus", "Moldova", "Bulgaria"],
    "Caucasus & Central Asia": ["Georgia", "Kazakhstan", "Kyrgyzstan", "Uzbekistan"],
    "Asia": ["Philippines", "Malaysia", "Nepal"],
    "Balkans": ["Bosnia"]
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/universities", label: "Universities" },
    { href: "/apply-now", label: "Apply Now" },
    { href: "/contact", label: "Contact" },
  ];

  // Updated isActive function to handle hash links correctly
  const isActive = (path: string) => {
    // For hash links, just check the pathname
    if (path.includes('#')) {
      return location.pathname === path.split('#')[0];
    }
    return location.pathname === path;
  };

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-1"
          : "bg-transparent py-2"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Logo variant={scrolled ? "default" : "default"} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`nav-link font-medium ${
                isActive(link.href) ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
              }`}
              onClick={handleNavClick}
            >
              {link.label}
            </Link>
          ))}

          <CountryNavigation currentCountry={formattedCountry} />
        </nav>

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

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-white z-50 transform transition-all duration-300 ease-in-out overflow-y-auto",
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-[-100%] opacity-0 pointer-events-none"
        )}
      >
        <div className="container h-full px-4 mx-auto py-8 flex flex-col">
          <div className="space-y-6">
            {/* Main Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "block text-lg font-medium transition-colors",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                )}
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Study Destinations Dropdown */}
            <div className="space-y-4">
              <button
                type="button"
                className="flex items-center justify-between w-full text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setShowMobileCountries(!showMobileCountries)}
              >
                <span>Study Destinations</span>
                {showMobileCountries ? (
                  <ChevronDown className="h-5 w-5" />
                ) : (
                  <ChevronRight className="h-5 w-5" />
                )}
              </button>
              
              {showMobileCountries && (
                <div className="pl-4 space-y-4 border-l-2 border-gray-200">
                  {/* All Universities Link */}
                  <Link
                    to="/universities"
                    className="flex items-center gap-2 font-medium text-gray-700 hover:text-primary transition-colors"
                    onClick={handleNavClick}
                  >
                    <Globe className="h-4 w-4" />
                    All Universities
                  </Link>
                  
                  {/* Countries organized by region */}
                  {Object.entries(countriesByRegion).map(([region, countries]) => (
                    <div key={region} className="space-y-3">
                      <h4 className="font-medium text-gray-500">{region}</h4>
                      <div className="space-y-3 pl-2">
                        {countries.map((country) => (
                          <Link
                            key={country}
                            to={`/mbbs-in-${country.toLowerCase()}`}
                            className="block text-base text-gray-600 hover:text-primary transition-colors"
                            onClick={handleNavClick}
                          >
                            MBBS in {country}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {isCountryPage && formattedCountry && (
              <span className="block text-lg font-semibold text-primary">
                {formattedCountry}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
