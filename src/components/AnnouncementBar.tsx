import { useLocation } from 'react-router-dom';

interface AnnouncementBarProps {
  className?: string;
}

const getPageTitle = (pathname: string): string => {
  switch (pathname) {
    case "/":
      return "Home";
    case "/universities":
      return "Find Your Perfect Medical University";
    case "/apply":
      return "Apply Now - Start Your Medical Journey";
    default:
      if (pathname.startsWith("/university/")) {
        return "University Details";
      }
      return "";
  }
};

const AnnouncementBar = ({ className }: AnnouncementBarProps) => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  if (!pageTitle) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="py-2 text-center text-sm font-medium">
          {pageTitle}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar; 