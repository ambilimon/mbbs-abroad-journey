
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
        <div className="mr-3">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill={variant === 'light' ? 'white' : '#1D4ED8'} />
            <path d="M10 18C10 13.5817 13.5817 10 18 10H22C26.4183 10 30 13.5817 30 18V22C30 26.4183 26.4183 30 22 30H18C13.5817 30 10 26.4183 10 22V18Z" fill={variant === 'light' ? '#1D4ED8' : 'white'} />
            <path d="M16 17C16 15.8954 16.8954 15 18 15H22C23.1046 15 24 15.8954 24 17V23C24 24.1046 23.1046 25 22 25H18C16.8954 25 16 24.1046 16 23V17Z" fill={variant === 'light' ? 'white' : '#1D4ED8'} />
            <path d="M20 19.5V20.5M20 15V16M20 24V25M16 20H15M17 17L16.5 16.5M23 17L23.5 16.5M24 20H25M23 23L23.5 23.5M17 23L16.5 23.5" stroke={variant === 'light' ? '#1D4ED8' : 'white'} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        
        <div>
          <div className={`font-bold text-xl leading-tight ${textColor}`}>Future Doctor</div>
          {showTagline && (
            <div className={`text-xs ${taglineColor}`}>Your Gateway to Global Medical Education</div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Logo;
