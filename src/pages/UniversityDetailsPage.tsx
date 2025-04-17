import { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Check, 
  ArrowLeft, 
  MapPin, 
  Book, 
  Calendar, 
  Users, 
  Award, 
  GraduationCap,
  Star,
  AlertTriangle
} from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";

// Import universities from both data sources
import { universities as dataUniversities } from "@/data/universities";
import { universities as sectionUniversities } from "@/components/UniversitySection";

// Create a merged university type that handles both formats
type MergedUniversity = {
  id: number;
  name: string;
  country: string;
  city: string;
  tuitionFee: number;
  currency: string;
  image: string;
  facilities: string[];
  rating: number;
  category: string;
  description: string;
  features?: string[];
  duration?: string;
  medium?: string;
  location?: string;
  longDescription?: string;
  establishedYear?: string;
  studentCount?: string;
  facultyCount?: string;
  hospitalAffiliations?: string[];
  recognition?: string[];
  courses?: { name: string; duration: string; fees: string; }[];
  admissionProcess?: string[];
  eligibility?: string[];
  advantages?: string[];
  documents?: string[];
  scholarships?: string[];
  hostelInfo?: string;
  indianFoodAvailability?: string;
};

const UniversityDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get referring page for better navigation context
  const getReferrer = () => {
    const path = location.pathname;
    const referrer = location.state?.from || '';
    
    // If coming from a country page - handle both formats (mbbs-in-country and mbbs-country-page)
    if (referrer.includes('mbbs-in-')) {
      const countryName = referrer.replace('/mbbs-in-', '').replace(/-/g, ' ');
      return {
        path: referrer,
        label: `Back to MBBS in ${countryName.charAt(0).toUpperCase() + countryName.slice(1)}`
      };
    }
    
    // Handle alternative country page URL format (e.g., /mbbs-russia-page)
    if (referrer.includes('mbbs-') && referrer.includes('-page')) {
      const countryName = referrer.replace('/mbbs-', '').replace('-page', '');
      return {
        path: referrer,
        label: `Back to MBBS in ${countryName.charAt(0).toUpperCase() + countryName.slice(1)}`
      };
    }
    
    // Default to universities page
    return {
      path: '/universities',
      label: 'Back to Universities'
    };
  };

  const referrer = getReferrer();
  
  // Find the appropriate university based on the ID and origin
  const getUniversity = (): MergedUniversity | undefined => {
    // Parse the ID as a number
    const numId = Number(id);
    
    // First try to get from standard university data sources
    // From UniversitySection.tsx if it has the ID
    const sectionUniversity = sectionUniversities.find(u => u.id === numId);
    if (sectionUniversity) {
      // Convert from section format to the format expected by this component
      return {
        ...sectionUniversity,
        // Ensure country has proper capitalization (from lowercase in section data)
        country: sectionUniversity.country.charAt(0).toUpperCase() + sectionUniversity.country.slice(1),
        // Use the city from location if no separate city value
        city: sectionUniversity.city || sectionUniversity.location?.split(',')[0]?.trim() || "",
      };
    }
    
    // From data/universities.ts
    const dataUniversity = dataUniversities.find(u => u.id === numId);
    if (dataUniversity) {
      return {
        ...dataUniversity,
        // Set a default description if none exists
        description: dataUniversity.description || `${dataUniversity.name} is a medical university in ${dataUniversity.country}.`
      };
    }
    
    // If not found in standard sources, try other country data sources or return undefined
    // Universities use sequential IDs across all countries
    
    // For now, returning undefined - university not found
    return undefined;
  };
  
  const university = getUniversity();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!university) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">University Not Found</h1>
            <p className="text-gray-600 mb-8">We couldn't find the university with ID: {id}. It may have been removed or the URL might be incorrect.</p>
            <div className="space-y-3">
              <Button className="w-full" onClick={() => navigate('/universities')}>
                View All Universities
              </Button>
              <Button variant="outline" className="w-full" onClick={() => navigate(-1)}>
                Go Back
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px]">
          <img 
            src={university.image} 
            alt={university.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end">
            <div className="container mx-auto px-4 py-12 text-white">
              <Link 
                to={referrer.path}
                className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors duration-200"
                state={{ from: location.pathname }}
              >
                <ArrowLeft size={16} className="mr-2" />
                {referrer.label}
              </Link>
              
              <div className="bg-blue-600/30 inline-block px-3 py-1 rounded-full text-sm mb-4">
                {university.country}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{university.name}</h1>
              
              <div className="flex items-center mb-6">
                <MapPin size={18} className="mr-2" />
                <span>{university.city}, {university.country}</span>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {university.facilities?.map((feature, index) => (
                  <Badge key={index} className="bg-white/20 hover:bg-white/30 text-white">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* University Details */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Key Information */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg inline-block">
                  <span className="text-blue-700 font-medium">
                    {university.currency}{university.tuitionFee.toLocaleString()} / year
                  </span>
                </div>
                
                {university.duration && (
                  <div className="bg-orange-50 p-4 rounded-lg inline-block">
                    <span className="text-orange-700 font-medium flex items-center">
                      <Book size={16} className="mr-2" /> {university.duration}
                    </span>
                  </div>
                )}
                
                {university.establishedYear && (
                  <div className="bg-gray-100 p-4 rounded-lg inline-block">
                    <span className="text-gray-700 font-medium flex items-center">
                      <Calendar size={16} className="mr-2" /> Est. {university.establishedYear}
                    </span>
                  </div>
                )}
                
                {university.studentCount && (
                  <div className="bg-purple-50 p-4 rounded-lg inline-block">
                    <span className="text-purple-700 font-medium flex items-center">
                      <Users size={16} className="mr-2" /> {university.studentCount} Students
                    </span>
                  </div>
                )}
              </div>
              
              {/* Tabs Navigation */}
              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
                <TabsList className="mb-6 grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="courses">Programs</TabsTrigger>
                  <TabsTrigger value="admission">Admission</TabsTrigger>
                </TabsList>
                
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">About {university.name}</h2>
                  <div className="text-gray-700 space-y-4">
                    <p className="text-lg leading-relaxed">{university.description}</p>
                    {university.longDescription && (
                      <p className="text-lg leading-relaxed">{university.longDescription}</p>
                    )}
                  </div>
                  
                  {university.features && university.features.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {university.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                              <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {university.recognition && university.recognition.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold mb-4">Recognition & Accreditation</h3>
                      <div className="flex flex-wrap gap-3">
                        {university.recognition.map((item, index) => (
                          <Badge key={index} variant="outline" className="px-3 py-1 text-sm">
                            <Award className="w-4 h-4 mr-2 text-yellow-500" /> {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {university.facilities && university.facilities.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold mb-4">Facilities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {university.facilities.map((facility, index) => (
                          <div key={index} className="flex items-start">
                            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                              <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span>{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>
                
                {/* Courses Tab */}
                <TabsContent value="courses" className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">Programs Offered</h2>
                  
                  {university.courses && university.courses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {university.courses.map((course, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
                          <div className="flex items-center mb-3">
                            <GraduationCap className="text-blue-600 mr-3" size={24} />
                            <h3 className="text-xl font-bold">{course.name}</h3>
                          </div>
                          <div className="text-sm text-gray-600 space-y-2">
                            <div className="flex justify-between">
                              <span>Duration:</span>
                              <span className="font-medium">{course.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Fees:</span>
                              <span className="font-medium">{course.fees}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p>
                        {university.duration ? (
                          <>MBBS/MD program is offered with a duration of {university.duration} in {university.medium || 'English'} medium.</>
                        ) : (
                          <>MBBS/MD program is offered with a duration of 6 years in English medium.</>
                        )}
                      </p>
                    </div>
                  )}
                </TabsContent>
                
                {/* Admission Tab */}
                <TabsContent value="admission" className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">Admission Process</h2>
                  
                  {university.admissionProcess && university.admissionProcess.length > 0 ? (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">Steps to Apply</h3>
                      <div className="space-y-4">
                        {university.admissionProcess.map((step, index) => (
                          <div key={index} className="flex">
                            <div className="mr-4 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="pt-1">
                              <p className="text-gray-800">{step}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-8">
                      <p className="text-gray-700">
                        The standard admission process includes application submission, document verification, and offer letter issuance. 
                        Contact our counselors for personalized guidance through the process.
                      </p>
                    </div>
                  )}
                  
                  {university.eligibility && university.eligibility.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">Eligibility Requirements</h3>
                      <ul className="space-y-2">
                        {university.eligibility.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="text-green-500 mr-2 mt-1" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Ready to Apply?</h3>
                    <p className="mb-6">Take the first step towards your medical career at {university.name}.</p>
                    <Link to="/apply-now">
                      <AnimatedButton variant="highlight" className="w-full" size="lg">
                        Start Application
                      </AnimatedButton>
                    </Link>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-4">University Highlights</h3>
                <div className="space-y-4">
                  {university.medium && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Medium of Teaching:</span>
                      <span className="font-medium">{university.medium}</span>
                    </div>
                  )}
                  
                  {university.duration && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Program Duration:</span>
                      <span className="font-medium">{university.duration}</span>
                    </div>
                  )}
                  
                  {university.establishedYear && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Established Year:</span>
                      <span className="font-medium">{university.establishedYear}</span>
                    </div>
                  )}
                  
                  {university.studentCount && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Student Population:</span>
                      <span className="font-medium">{university.studentCount}</span>
                    </div>
                  )}
                  
                  {university.facultyCount && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Faculty Members:</span>
                      <span className="font-medium">{university.facultyCount}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                      <span className="font-medium">{university.rating.toFixed(1)}/5.0</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {university.hostelInfo && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Accommodation</h3>
                  <p className="text-gray-600">{university.hostelInfo}</p>
                </div>
              )}
              
              {university.indianFoodAvailability && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Indian Food Availability</h3>
                  <p className="text-gray-600">{university.indianFoodAvailability}</p>
                </div>
              )}
              
              <div className="bg-blue-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="mb-6">Our expert counselors can guide you through the process of applying to {university.name}.</p>
                <Link to="/apply-now">
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                    Contact Advisor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UniversityDetailsPage; 