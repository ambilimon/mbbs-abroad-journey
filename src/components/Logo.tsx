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

  // Colors for the logo based on variant
  const primaryColor = variant === 'light' ? '#ffffff' : '#1D4ED8';
  const secondaryColor = variant === 'light' ? '#1D4ED8' : '#ffffff';
  const accentColor = '#4ADE80'; // Green for the globe landmass

  return (
    <Link to="/" className={`inline-block ${className}`}>
      <div className="flex items-center">
        {/* Inline SVG for the Future Doctor logo */}
        <div className="mr-3">
          <svg width="160" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
            {/* Globe with cap and plane */}
            <g transform="translate(5, 5) scale(0.8)">
              {/* Blue background circle */}
              <circle cx="25" cy="25" r="25" fill={primaryColor} />
              
              {/* Green landmass shapes on globe */}
              <path d="M15 15 Q20 10 30 15 Q40 20 35 30 Q30 35 20 30 Q10 25 15 15" fill={accentColor} />
              <path d="M15 35 Q20 30 25 35 Q30 38 25 40 Q20 38 15 35" fill={accentColor} />
              
              {/* Orbital ring around globe */}
              <ellipse cx="25" cy="25" rx="25" ry="12" 
                stroke={secondaryColor} strokeWidth="1.5" 
                fill="none" transform="rotate(-30, 25, 25)" />
              
              {/* Graduation cap on top */}
              <path d="M25 5 L15 10 L25 15 L35 10 Z" fill={secondaryColor} />
              <path d="M20 10 L20 20" stroke={secondaryColor} strokeWidth="1" />
              
              {/* Airplane */}
              <path d="M35 15 L30 20 L35 22 L40 20 Z" fill={secondaryColor} />
            </g>
            
            {/* Future Doctor text */}
            <text x="65" y="20" fontFamily="Arial" fontSize="18" fontWeight="bold" fill={primaryColor}>Future</text>
            <text x="65" y="40" fontFamily="Arial" fontSize="24" fontWeight="bold" fill={primaryColor}>Doctor</text>
            
            {/* Registered trademark symbol */}
            <text x="145" y="15" fontFamily="Arial" fontSize="10" fill={primaryColor}>®</text>
            
            {/* Your Gateway tagline */}
            {showTagline && (
              <text x="65" y="48" fontFamily="Arial" fontSize="8" fill={taglineColor}>Your Gateway to MBBS Abroad</text>
            )}
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
