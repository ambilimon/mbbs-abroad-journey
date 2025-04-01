
import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Check, 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Building, 
  Users, 
  Globe, 
  Book, 
  FileText, 
  Award, 
  Clipboard, 
  Landmark, 
  Languages 
} from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentInquiryForm from "@/components/StudentInquiryForm";

interface University {
  id: number;
  name: string;
  location: string;
  description: string;
  longDescription?: string;
  image: string;
  tuitionRange: string;
  features: string[];
  country: "russia" | "georgia";
  establishedYear?: string;
  studentCount?: string;
  hospitalAffiliations?: string[];
  recognition?: string[];
  facilities?: string[];
  courses?: { name: string; duration: string; fees: string }[];
  admissionProcess?: string[];
  eligibility?: string[];
  advantages?: string[];
  documents?: string[];
  scholarships?: string[];
  facultyCount?: string;
  hostelInfo?: string;
  indianFoodAvailability?: string;
}

const universities: University[] = [
  // ... keep existing data
];

const UniversityPage = () => {
  const { id, country } = useParams<{ id?: string; country?: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>([]);
  const overviewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (country) {
      // Filter universities by country
      setFilteredUniversities(universities.filter(u => u.country === country));
    } else if (id) {
      // Find specific university by ID
      const university = universities.find(u => u.id === parseInt(id));
      if (university) {
        setFilteredUniversities([university]);
      }
    } else {
      // Show all universities if no filter
      setFilteredUniversities(universities);
    }
  }, [id, country]);

  // This function ensures we return JSX
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {country && (
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl font-bold mb-2">Medical Universities in {country === "russia" ? "Russia" : "Georgia"}</h1>
            <p className="text-gray-600 mb-8">Explore top medical universities for international students.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUniversities.map((university) => (
                <Card key={university.id} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48">
                    <img 
                      src={university.image} 
                      alt={university.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <Badge variant="outline" className="mb-2">{university.tuitionRange}</Badge>
                    <h3 className="font-bold text-xl mb-2">{university.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{university.location}</p>
                    <p className="text-sm mb-4 line-clamp-3">{university.description}</p>
                    <Link to={`/university/${university.id}`}>
                      <Button>View Details</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {id && filteredUniversities.length > 0 && (
          <div>
            <Link to="/">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="relative h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={filteredUniversities[0].image} 
                    alt={filteredUniversities[0].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h1 className="text-3xl font-bold mb-2">{filteredUniversities[0].name}</h1>
                <p className="text-gray-600 mb-4">{filteredUniversities[0].location}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {filteredUniversities[0].tuitionRange}
                  </Badge>
                  {filteredUniversities[0].country && (
                    <Badge variant="outline">
                      {filteredUniversities[0].country === "russia" ? "Russia" : "Georgia"}
                    </Badge>
                  )}
                </div>
                
                <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
                  <TabsList className="mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="admission">Admission</TabsTrigger>
                    <TabsTrigger value="courses">Courses</TabsTrigger>
                    <TabsTrigger value="facilities">Facilities</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" ref={overviewRef}>
                    <div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        {filteredUniversities[0].longDescription || filteredUniversities[0].description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {filteredUniversities[0].establishedYear && (
                          <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium">Established</p>
                              <p className="text-sm text-gray-600">{filteredUniversities[0].establishedYear}</p>
                            </div>
                          </div>
                        )}
                        
                        {filteredUniversities[0].studentCount && (
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium">Students</p>
                              <p className="text-sm text-gray-600">{filteredUniversities[0].studentCount}</p>
                            </div>
                          </div>
                        )}
                        
                        {filteredUniversities[0].facultyCount && (
                          <div className="flex items-center gap-3">
                            <GraduationCap className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium">Faculty</p>
                              <p className="text-sm text-gray-600">{filteredUniversities[0].facultyCount}</p>
                            </div>
                          </div>
                        )}
                        
                        {filteredUniversities[0].hostelInfo && (
                          <div className="flex items-center gap-3">
                            <Building className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium">Accommodation</p>
                              <p className="text-sm text-gray-600">{filteredUniversities[0].hostelInfo}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {filteredUniversities[0].recognition && filteredUniversities[0].recognition.length > 0 && (
                        <div className="mt-8">
                          <h3 className="text-xl font-bold mb-4">Recognition & Accreditation</h3>
                          <ul className="space-y-2">
                            {filteredUniversities[0].recognition.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {filteredUniversities[0].advantages && filteredUniversities[0].advantages.length > 0 && (
                        <div className="mt-8">
                          <h3 className="text-xl font-bold mb-4">Key Advantages</h3>
                          <ul className="space-y-2">
                            {filteredUniversities[0].advantages.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="admission">
                    <div className="space-y-6">
                      {filteredUniversities[0].eligibility && filteredUniversities[0].eligibility.length > 0 && (
                        <div>
                          <h3 className="text-xl font-bold mb-4">Eligibility Criteria</h3>
                          <ul className="space-y-2">
                            {filteredUniversities[0].eligibility.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {filteredUniversities[0].documents && filteredUniversities[0].documents.length > 0 && (
                        <div className="mt-8">
                          <h3 className="text-xl font-bold mb-4">Required Documents</h3>
                          <ul className="space-y-2">
                            {filteredUniversities[0].documents.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {filteredUniversities[0].admissionProcess && filteredUniversities[0].admissionProcess.length > 0 && (
                        <div className="mt-8">
                          <h3 className="text-xl font-bold mb-4">Admission Process</h3>
                          <ol className="space-y-4">
                            {filteredUniversities[0].admissionProcess.map((item, index) => (
                              <li key={index} className="flex">
                                <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                                  {index + 1}
                                </div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                      
                      {filteredUniversities[0].scholarships && filteredUniversities[0].scholarships.length > 0 && (
                        <div className="mt-8">
                          <h3 className="text-xl font-bold mb-4">Scholarships</h3>
                          <ul className="space-y-2">
                            {filteredUniversities[0].scholarships.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Award className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="courses">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Available Courses</h3>
                      
                      {filteredUniversities[0].courses && filteredUniversities[0].courses.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {filteredUniversities[0].courses.map((course, index) => (
                            <Card key={index}>
                              <CardContent className="p-6">
                                <h4 className="font-bold text-lg mb-2">{course.name}</h4>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <p className="text-gray-500">Duration</p>
                                    <p>{course.duration}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">Fees</p>
                                    <p>{course.fees}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <p>Course information will be updated soon.</p>
                      )}
                      
                      <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4">Medium of Instruction</h3>
                        <div className="flex items-center">
                          <Languages className="h-5 w-5 text-blue-600 mr-2" />
                          <p>English</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="facilities">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Campus Facilities</h3>
                      
                      {filteredUniversities[0].facilities && filteredUniversities[0].facilities.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {filteredUniversities[0].facilities.map((facility, index) => (
                            <div key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{facility}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>Facility information will be updated soon.</p>
                      )}
                      
                      {filteredUniversities[0].hospitalAffiliations && filteredUniversities[0].hospitalAffiliations.length > 0 && (
                        <div className="mt-8">
                          <h3 className="text-xl font-bold mb-4">Affiliated Hospitals</h3>
                          <ul className="space-y-2">
                            {filteredUniversities[0].hospitalAffiliations.map((hospital, index) => (
                              <li key={index} className="flex items-start">
                                <Landmark className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{hospital}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {filteredUniversities[0].indianFoodAvailability && (
                        <div className="mt-8 bg-yellow-50 p-4 rounded-lg">
                          <h3 className="text-lg font-bold mb-2">Indian Food Availability</h3>
                          <p>{filteredUniversities[0].indianFoodAvailability}</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Get Admission Assistance</h2>
                      <p className="text-gray-600 mb-6">
                        Fill out this inquiry form and our counselors will contact you soon with complete guidance.
                      </p>
                      <StudentInquiryForm universityId={filteredUniversities[0].id} />
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-2">Key Features</h3>
                      <ul className="space-y-2">
                        {filteredUniversities[0].features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6">
                        <AnimatedButton href="#" className="w-full">Apply Now</AnimatedButton>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default UniversityPage;
