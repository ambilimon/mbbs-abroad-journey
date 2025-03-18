
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive" | "highlight";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  asChild?: boolean;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "group relative overflow-hidden transition-all duration-300 ease-out";
    
    // Define custom variant styles
    const variantClasses = {
      highlight: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-button-hover",
    };
    
    const finalVariant = variant === "highlight" ? "default" : variant;
    const additionalClasses = variant === "highlight" ? variantClasses.highlight : "";

    return (
      <Button
        ref={ref}
        variant={finalVariant}
        size={size}
        className={cn(baseClasses, additionalClasses, className)}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
      </Button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
