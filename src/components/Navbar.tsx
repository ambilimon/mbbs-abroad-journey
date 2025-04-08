import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { Logo } from "./Logo";
import CountryNavigation from "./CountryNavigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (isActive: boolean) => {
    return `transition-colors hover:text-foreground/80 ${
      isActive ? "text-foreground/80" : "text-foreground"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-4">
          <Link to="/" className={navLinkClass(isActive("/"))}>
            Home
          </Link>
          <CountryNavigation />
          <Link 
            to="/universities"
            className={navLinkClass(isActive("/universities"))}
          >
            Universities
          </Link>
          <Link
            to="/webinar"
            className={navLinkClass(isActive("/webinar"))}
          >
            Webinars
          </Link>
          <Link
            to="/#contact"
            className={navLinkClass(isActive("/#contact"))}
          >
            Contact
          </Link>
          <Link
            to="/auth"
            className={navLinkClass(isActive("/auth"))}
          >
            Login
          </Link>
          <ModeToggle />
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="ml-auto flex items-center md:hidden"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader className="text-left">
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate through the website.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 text-lg font-medium">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <Link to="/universities" className="hover:text-primary">
                Universities
              </Link>
              <Link to="/webinar" className="hover:text-primary">
                Webinars
              </Link>
              <Link to="/#contact" className="hover:text-primary">
                Contact
              </Link>
              <Link to="/auth" className="hover:text-primary">
                Login
              </Link>
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
