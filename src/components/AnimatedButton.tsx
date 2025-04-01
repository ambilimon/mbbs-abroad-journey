import { forwardRef } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive" | "highlight" | "primary" | "success";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  asChild?: boolean;
  href?: string; // Support for href to make button act as a link
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, variant = "default", size = "default", href, ...props }, ref) => {
    const baseClasses = "group relative overflow-hidden transition-all duration-300 ease-out";
    
    // Define custom variant styles with improved colors
    const variantClasses = {
      highlight: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:from-blue-700 hover:to-blue-800",
      primary: "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:from-blue-600 hover:to-blue-700",
      success: "bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-lg hover:from-green-600 hover:to-green-700",
      customOutline: "border-2 border-white text-white hover:bg-white hover:text-blue-700 hover:border-white",
    };
    
    // Determine the final variant for the button component
    // Only pass allowed variants to the underlying Button component
    const finalVariant = (["highlight", "primary", "success"].includes(variant) ? "default" : variant) as "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
    
    // Select the appropriate custom styles based on the variant
    const getCustomStyles = (v: AnimatedButtonProps["variant"]) => {
      if (v === "highlight" || v === "primary" || v === "success") {
        return variantClasses[v];
      }
      if (v === "outline") {
        return variantClasses.customOutline;
      }
      return "";
    };

    const buttonProps = {
      ref,
      variant: finalVariant,
      size,
      className: cn(
        baseClasses, 
        getCustomStyles(variant), 
        // Enhance hover effects
        "hover:-translate-y-1 active:translate-y-0 transition-transform",
        className
      ),
      ...props
    };

    // If href is provided, render as a Link component
    if (href) {
      return (
        <Link to={href}>
          <Button {...buttonProps}>
            <span className="relative z-10">{children}</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
          </Button>
        </Link>
      );
    }

    // Otherwise render as a regular button
    return (
      <Button {...buttonProps}>
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
      </Button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
