import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'dark';
  showTagline?: boolean;
}

const Logo = ({ className = "", variant = 'default', showTagline = true }: LogoProps) => {
  const textColor = 
    variant === 'light' ? 'text-white' : 
    variant === 'dark' ? 'text-gray-900' : 
    'text-blue-700';
  
  const taglineColor = 
    variant === 'light' ? 'text-blue-100' : 
    variant === 'dark' ? 'text-gray-600' : 
    'text-blue-500';

  return (
    <Link to="/" className={`inline-block ${className}`}>
      <div className="flex items-center">
        <img 
          src="/future-doctor-logo.png" 
          alt="Future Doctor Logo" 
          className="h-14 mr-2"
        />
        {showTagline && variant !== 'default' && (
          <div className={`text-xs ${taglineColor} hidden md:block`}>
            Your Gateway to MBBS Abroad
          </div>
        )}
      </div>
    </Link>
  );
};

export default Logo;
