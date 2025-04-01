import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowLeft, MapPin, Calendar, GraduationCap, Building, Users, Globe, Book } from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  {
    id: 1,
    name: "Kabardino Balkarian State University",
    location: "Nalchik, Russia",
    description: "Renowned for Surgery, General Medicine, and Cardiology with excellent research facilities.",
    longDescription: "Kabardino Balkarian State University is one of Russia's most prestigious medical universities, offering world-class education in medicine with special focus on Surgery, General Medicine, and Cardiology. The university provides state-of-the-art research facilities and clinical training opportunities to its students.",
    image: "/placeholder.svg",
    tuitionRange: "₹20-30 Lakhs total",
    features: ["English-Medium", "WHO & NMC Approved", "Established in 1957"],
    country: "russia",
    establishedYear: "1957",
    studentCount: "15,000+",
    hospitalAffiliations: ["Nalchik General Hospital", "Kabardino Cardiac Center", "University Teaching Hospital"],
    recognition: ["WHO", "NMC (National Medical Commission, India)", "FAIMER", "WFME"],
    facilities: ["Modern Laboratories", "Digital Library", "Simulation Centers", "Sports Complex", "Student Hostels"],
    courses: [
      { name: "MBBS (General Medicine)", duration: "6 years", fees: "₹20-30 Lakhs total" },
      { name: "Dentistry", duration: "5 years", fees: "₹22-32 Lakhs total" },
      { name: "Pharmacy", duration: "5 years", fees: "₹18-25 Lakhs total" }
    ],
    admissionProcess: [
      "Online Application Submission",
      "Document Verification",
      "Admission Offer Letter",
      "Visa Processing Assistance",
      "Pre-Departure Orientation"
    ],
    eligibility: [
      "Minimum 50% in PCB (Physics, Chemistry, Biology)",
      "NEET Qualification (for Indian Students)",
      "Age 17+ years as of December 31st",
      "Good Health Status"
    ],
    advantages: [
      "Globally Recognized Degree",
      "Affordable Tuition Fees",
      "Modern Teaching Methodology",
      "Multicultural Environment",
      "Strong Alumni Network",
      "Clinical Exposure from Early Years"
    ],
    documents: [
      "10th & 12th Mark Sheets",
      "NEET Score Card",
      "Valid Passport",
      "Medical Certificate",
      "Police Clearance Certificate",
      "Passport Size Photographs"
    ],
    scholarships: [
      "Merit-Based Scholarships",
      "Sports Excellence Scholarships",
      "Research Fellowships"
    ],
    facultyCount: "800+",
    hostelInfo: "Separate hostels for boys and girls with 24/7 security and modern amenities",
    indianFoodAvailability: "Available in university canteen and nearby Indian restaurants"
  },
  {
    id: 2,
    name: "Altai State Medical University",
    location: "Barnaul, Russia",
    description: "One of Russia's oldest medical universities with excellent research facilities.",
    longDescription: "Established as one of Russia's oldest medical institutions, Altai State Medical University has built a reputation for excellence in medical education. The university offers a comprehensive curriculum with a perfect blend of theoretical knowledge and practical training in modern healthcare facilities.",
    image: "/placeholder.svg",
    tuitionRange: "₹25-35 Lakhs total",
    features: ["6-Year Program", "Modern Campus", "Strong Alumni Network"],
    country: "russia",
    establishedYear: "1954",
    studentCount: "12,000+",
    hospitalAffiliations: ["Altai Regional Clinical Hospital", "Barnaul Medical Center", "University Hospital"],
    recognition: ["WHO", "NMC", "Ministry of Education and Science of Russia"],
    facilities: ["Advanced Research Centers", "International Library", "Student Housing", "Sports Facilities"],
    courses: [
      { name: "MBBS", duration: "6 years", fees: "₹25-35 Lakhs total" },
      { name: "Pediatrics", duration: "6 years", fees: "₹26-36 Lakhs total" },
      { name: "Preventive Medicine", duration: "6 years", fees: "₹24-34 Lakhs total" }
    ]
  },
  {
    id: 3,
    name: "Kazan Federal University",
    location: "Kazan, Russia",
    description: "A prestigious institution offering cutting-edge medical education.",
    longDescription: "Kazan Federal University stands as one of Russia's most esteemed educational institutions, known for its cutting-edge medical programs. With a focus on innovative teaching methodologies and research, the university prepares students to excel in the global healthcare sector through comprehensive training and international exposure.",
    image: "/placeholder.svg",
    tuitionRange: "₹30-40 Lakhs total",
    features: ["Advanced Research", "Clinical Rotations", "Modern Labs"],
    country: "russia",
    establishedYear: "1804",
    studentCount: "25,000+",
    hospitalAffiliations: ["Kazan University Hospital", "Federal Medical Center", "Regional Clinical Hospital"],
    recognition: ["WHO", "NMC", "Ministry of Health of Russia", "ECFMG"],
    facilities: ["Research Institutes", "Digital Libraries", "Simulation Labs", "International Student Dormitories"],
    courses: [
      { name: "General Medicine", duration: "6 years", fees: "₹30-40 Lakhs total" },
      { name: "Medical Biochemistry", duration: "5 years", fees: "₹28-38 Lakhs total" },
      { name: "Medical Biophysics", duration: "5 years", fees: "₹29-39 Lakhs total" }
    ]
  },
  {
    id: 4,
    name: "SEU - Georgian National University",
    location: "Tbilisi, Georgia",
    description: "Top-rated university with advanced medical labs, strong clinical exposure, and international faculty.",
    longDescription: "SEU - Georgian National University is one of the most preferred medical universities in Georgia, offering world-class education with modern facilities and international recognition. The university provides direct clinical exposure from the first year and maintains high FMGE and USMLE success rates among its graduates.",
    image: "/placeholder.svg",
    tuitionRange: "₹30-35 Lakhs total",
    features: ["100% English Medium", "European Standard", "High FMGE Success"],
    country: "georgia",
    establishedYear: "2001",
    studentCount: "8,000+",
    hospitalAffiliations: ["SEU University Hospital", "Tbilisi Medical Center", "International Clinical Center"],
    recognition: ["WHO", "NMC", "WFME", "Ministry of Education of Georgia"],
    facilities: ["Modern Medical Labs", "Advanced Clinical Training Centers", "Digital Libraries", "Student Dormitories"],
    courses: [
      { name: "MBBS", duration: "6 years", fees: "₹30-35 Lakhs total" },
      { name: "Dentistry", duration: "5 years", fees: "₹32-37 Lakhs total" },
      { name: "Pharmacy", duration: "5 years", fees: "₹28-33 Lakhs total" }
    ]
  },
  {
    id: 5,
    name: "Tbilisi State Medical University",
    location: "Tbilisi, Georgia",
    description: "Georgia's oldest and most prestigious medical university.",
    longDescription: "As Georgia's oldest and most prestigious medical institution, Tbilisi State Medical University offers a rich tradition of excellence in medical education combined with modern teaching approaches. The university's international faculty and strong clinical training programs prepare students for successful medical careers worldwide.",
    image: "/placeholder.svg",
    tuitionRange: "₹25-35 Lakhs total",
    features: ["Established in 1918", "Strong Clinical Training", "Modern Campus"],
    country: "georgia",
    establishedYear: "1918",
    studentCount: "10,000+",
    hospitalAffiliations: ["Tbilisi State University Hospital", "National Medical Center", "Children's Clinical Hospital"],
    recognition: ["WHO", "NMC", "UNESCO", "FAIMER"],
    facilities: ["Historical Campus", "Research Laboratories", "Clinical Skills Centers", "International Dormitories"],
    courses: [
      { name: "Medicine", duration: "6 years", fees: "₹25-35 Lakhs total" },
      { name: "Dentistry", duration: "5 years", fees: "₹26-36 Lakhs total" },
      { name: "Public Health", duration: "4 years", fees: "₹22-30 Lakhs total" }
    ]
  },
  {
    id: 6,
    name: "New Vision University",
    location: "Tbilisi, Georgia",
    description: "Recognized by WHO, NMC, and WFME with state-of-the-art hospital affiliations.",
    longDescription: "New Vision University represents the new generation of medical education in Georgia, offering internationally recognized programs with state-of-the-art facilities. The university focuses on providing hands-on clinical experience and maintains strong affiliations with leading hospitals to ensure students receive comprehensive practical training.",
    image: "/placeholder.svg",
    tuitionRange: "₹30-40 Lakhs total",
    features: ["Advanced Facilities", "International Faculty", "Hospital Affiliations"],
    country: "georgia",
    establishedYear: "2013",
    studentCount: "5,000+",
    hospitalAffiliations: ["New Vision University Hospital", "Tbilisi International Medical Center", "Modern Healthcare Facility"],
    recognition: ["WHO", "NMC", "WFME", "Ministry of Education and Science of Georgia"],
    facilities: ["Modern Campus", "Simulation Centers", "Research Labs", "Student Housing"],
    courses: [
      { name: "Medicine (MD)", duration: "6 years", fees: "₹30-40 Lakhs total" },
      { name: "Dentistry", duration: "5 years", fees: "₹32-42 Lakhs total" },
      { name: "Nursing", duration: "4 years", fees: "₹25-35 Lakhs total" }
    ]
  }
];

const UniversityPage = () => {
  const { id } = useParams<{ id: string }>();
  const university = universities.find((uni) => uni.id === Number(id));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll(".section-animate");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".section-animate");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!university) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">University not found</h1>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1" ref={sectionRef}>
        {/* Hero section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col lg:flex-row items-start gap-8 relative">
              <div className="w-full lg:w-1/2 section-animate">
                <Link to="/#universities" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Universities
                </Link>
                
                <div className="bg-blue-600/30 inline-block px-3 py-1 rounded-full text-sm mb-4">
                  {university.country === "russia" ? "Russia" : "Georgia"}
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{university.name}</h1>
                
                <div className="flex items-center mb-6">
                  <MapPin size={18} className="mr-2" />
                  <span>{university.location}</span>
                </div>
                
                <p className="text-xl mb-8">{university.longDescription || university.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {university.features.map((feature, index) => (
                    <Badge key={index} className="bg-white/20 hover:bg-white/30 text-white">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center mb-8 bg-white/10 p-4 rounded-lg">
                  <div className="mr-4 bg-blue-600 p-3 rounded-full">
                    <Book size={20} />
                  </div>
                  <div>
                    <div className="text-sm uppercase">Tuition Range</div>
                    <div className="text-2xl font-bold">{university.tuitionRange}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <AnimatedButton className="bg-white text-blue-700 hover:bg-blue-50">
                    Apply Now
                  </AnimatedButton>
                  <AnimatedButton variant="outline" className="border-white text-white hover:bg-white/10">
                    Download Brochure
                  </AnimatedButton>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0 section-animate stagger-1">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={university.image} 
                    alt={university.name} 
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                    <div className="flex items-center text-blue-900">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-medium">Est. {university.establishedYear}</span>
                    </div>
                  </div>
                </div>
                
                {university.recognition && (
                  <div className="mt-6 bg-white/10 rounded-lg p-4">
                    <div className="text-sm uppercase mb-2">Recognition & Accreditation</div>
                    <div className="flex flex-wrap gap-2">
                      {university.recognition.slice(0, 4).map((item, index) => (
                        <Badge key={index} className="bg-white/20 hover:bg-white/30 text-white">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs Navigation */}
        <div className="sticky top-0 z-10 bg-white shadow-md">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="h-16 w-full justify-start overflow-x-auto">
                <TabsTrigger value="overview" className="text-base">Overview</TabsTrigger>
                <TabsTrigger value="courses" className="text-base">Courses & Fees</TabsTrigger>
                <TabsTrigger value="admission" className="text-base">Admission Process</TabsTrigger>
                <TabsTrigger value="facilities" className="text-base">Facilities</TabsTrigger>
                <TabsTrigger value="gallery" className="text-base">Gallery</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        {/* Tab Contents */}
        <div className="container mx-auto px-4 py-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Key facts */}
                <div className="md:col-span-1 section-animate">
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                      <GraduationCap size={24} className="mr-2" />
                      Key Facts
                    </h2>
                    
                    <div className="space-y-4">
                      {university.establishedYear && (
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-2 rounded-full mr-3">
                            <Calendar size={20} className="text-blue-700" />
                          </div>
                          <div>
                            <h3 className="font-medium">Established</h3>
                            <p>{university.establishedYear}</p>
                          </div>
                        </div>
                      )}
                      
                      {university.studentCount && (
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-2 rounded-full mr-3">
                            <Users size={20} className="text-blue-700" />
                          </div>
                          <div>
                            <h3 className="font-medium">Students</h3>
                            <p>{university.studentCount}</p>
                          </div>
                        </div>
                      )}
                      
                      {university.facultyCount && (
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-2 rounded-full mr-3">
                            <Users size={20} className="text-blue-700" />
                          </div>
                          <div>
                            <h3 className="font-medium">Faculty Members</h3>
                            <p>{university.facultyCount}</p>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <GraduationCap size={20} className="text-blue-700" />
                        </div>
                        <div>
                          <h3 className="font-medium">Medium of Instruction</h3>
                          <p>English</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Building size={20} className="text-blue-700" />
                        </div>
                        <div>
                          <h3 className="font-medium">Campus</h3>
                          <p>Modern facilities with hostels</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Globe size={20} className="text-blue-700" />
                        </div>
                        <div>
                          <h3 className="font-medium">Country</h3>
                          <p>{university.country === "russia" ? "Russia" : "Georgia"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Indian Student Info */}
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-6 text-orange-700">Indian Student Info</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-orange-100 p-2 rounded-full mr-3">
                          <Check size={20} className="text-orange-700" />
                        </div>
                        <div>
                          <h3 className="font-medium">Indian Food</h3>
                          <p>{university.indianFoodAvailability || "Available in university canteen and nearby restaurants"}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-orange-100 p-2 rounded-full mr-3">
                          <Check size={20} className="text-orange-700" />
                        </div>
                        <div>
                          <h3 className="font-medium">Indian Community</h3>
                          <p>Strong presence of Indian students</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-orange-100 p-2 rounded-full mr-3">
                          <Check size={20} className="text-orange-700" />
                        </div>
                        <div>
                          <h3 className="font-medium">Cultural Celebrations</h3>
                          <p>Diwali, Holi and other festivals celebrated</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Main content */}
                <div className="md:col-span-2">
                  {/* Advantages */}
                  <div className="mb-12 section-animate stagger-1">
                    <h2 className="text-2xl font-bold mb-6 text-blue-800">Why Choose {university.name}?</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {(university.advantages || [
                        "Globally Recognized Degree",
                        "Affordable Tuition Fees",
                        "Modern Teaching Methodology",
                        "Multicultural Environment",
                        "Strong Alumni Network",
                        "Clinical Exposure from Early Years"
                      ]).map((advantage, index) => (
                        <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                          <div className="mr-3 text-blue-600 bg-blue-100 p-1 rounded-full">
                            <Check size={16} />
                          </div>
                          <p>{advantage}</p>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-8">
                      {university.name} stands out as a premier destination for medical studies, offering a perfect blend of quality education, affordability, and global recognition. With state-of-the-art facilities and experienced faculty, the university provides an optimal learning environment for aspiring medical professionals.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4 text-blue-800">Eligibility Criteria</h3>
                      <ul className="space-y-2">
                        {(university.eligibility || [
                          "Minimum 50% in PCB (Physics, Chemistry, Biology)",
                          "NEET Qualification (for Indian Students)",
                          "Age 17+ years as of December 31st",
                          "Good Health Status"
                        ]).map((criteria, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-3 text-blue-600">
                              <Check size={16} />
                            </div>
                            <span>{criteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Recognition */}
                  {university.recognition && (
                    <div className="mb-12 section-animate stagger-2">
                      <h2 className="text-2xl font-bold mb-6 text-blue-800">Recognition & Accreditation</h2>
                      
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {university.recognition.map((item, index) => (
                            <div key={index} className="flex items-center">
                              <div className="mr-3 text-green-500">
                                <Check size={20} />
                              </div>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Hospital Affiliations */}
                  {university.hospitalAffiliations && (
                    <div className="section-animate stagger-3">
                      <h2 className="text-2xl font-bold mb-6 text-blue-800">Clinical Training Hospitals</h2>
                      
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {university.hospitalAffiliations.map((hospital, index) => (
                            <div key={index} className="flex items-center">
                              <div className="mr-3 text-blue-600 bg-blue-100 p-1 rounded-full">
                                <Building size={16} />
                              </div>
                              <span>{hospital}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            {/* Courses Tab */}
            <TabsContent value="courses" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h2 className="text-xl font-bold mb-4 text-blue-800">Admission Timeline</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                          <Calendar size={16} className="text-blue-700" />
                        </div>
                        <div>
                          <h3 className="font-medium">Application Deadline</h3>
                          <p>July-August each year</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                          <Calendar size={16} className="text-blue-700" />
                        </div>
                        <div>
                          <h3 className="font-medium">Academic Year Begins</h3>
                          <p>September-October</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                          <Calendar size={16} className="text-blue-700" />
                        </div>
                        <div>
                          <h3 className="font-medium">Visa Processing Time</h3>
                          <p>4-6 weeks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-700 text-white p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Need Help?</h2>
                    <p className="mb-4">Our education consultants are ready to guide you through the admission process.</p>
                    <AnimatedButton className="bg-white text-blue-700 hover:bg-blue-50 w-full">
                      Contact an Advisor
                    </AnimatedButton>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6 text-blue-800">Available Courses</h2>
                  
                  <div className="space-y-6">
                    {university.courses?.map((course, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-blue-600">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-4">{course.name}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-gray-500 mb-1">Duration</div>
                              <div className="font-medium">{course.duration}</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-gray-500 mb-1">Total Fees</div>
                              <div className="font-medium">{course.fees}</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-gray-500 mb-1">Medium</div>
                              <div className="font-medium">English</div>
                            </div>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t">
                            <h4 className="font-medium mb-2">Course Highlights:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <div className="flex items-center">
                                <Check size={16} className="mr-2 text-green-500" />
                                <span>International Recognition</span>
                              </div>
                              <div className="flex items-center">
                                <Check size={16} className="mr-2 text-green-500" />
                                <span>Clinical Training</span>
                              </div>
                              <div className="flex items-center">
                                <Check size={16} className="mr-2 text-green-500" />
                                <span>Modern Curriculum</span>
                              </div>
                              <div className="flex items-center">
                                <Check size={16} className="mr-2 text-green-500" />
                                <span>Practical Exposure</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-6 flex justify-end">
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              Apply Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Scholarships */}
                  {university.scholarships && (
                    <div className="mt-12">
                      <h2 className="text-2xl font-bold mb-6 text-blue-800">Scholarships & Financial Aid</h2>
                      <Card>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            {university.scholarships.map((scholarship, index) => (
                              <div key={index} className="flex items-start">
                                <div className="mr-3 text-blue-600 bg-blue-100 p-1 rounded-full">
                                  <Check size={16} />
                                </div>
                                <p>{scholarship}</p>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                            <p className="text-yellow-800">
                              Note: Scholarship criteria and amounts may vary. Contact our admission counselors for detailed information.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            {/* Admission Process Tab */}
            <TabsContent value="admission" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h2 className="text-xl font-bold mb-4 text-blue-800">Required Documents</h2>
                    <div className="space-y-3">
                      {(university.documents || [
                        "10th & 12th Mark Sheets",
                        "NEET Score Card",
                        "Valid Passport",
                        "Medical Certificate",
                        "Police Clearance Certificate",
                        "Passport Size Photographs"
                      ]).map((document, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mr-3 text-blue-600">
                            <Check size={16} />
                          </div>
                          <span>{document}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Card className="border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4">Visa Requirements</h3>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="mr-3 text-blue-600">
                            <Check size={16} />
                          </div>
                          <span>Valid Passport (min. 18 months validity)</span>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 text-blue-600">
                            <Check size={16} />
                          </div>
                          <span>Admission Letter from University</span>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 text-blue-600">
                            <Check size={16} />
                          </div>
                          <span>Medical Insurance</span>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 text-blue-600">
                            <Check size={16} />
                          </div>
                          <span>HIV Test Certificate</span>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 text-blue-600">
                            <Check size={16} />
                          </div>
                          <span>Bank Statement (showing financial capability)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6 text-blue-800">Admission Process</h2>
                  
                  <div className="relative">
                    <div className="absolute left-6 h-full w-0.5 bg-blue-200"></div>
                    <div className="space-y-8 relative z-10">
                      {(university.admissionProcess || [
                        "Online Application Submission",
                        "Document Verification",
                        "Admission Offer Letter",
                        "Fee Payment",
                        "Visa Processing Assistance",
                        "Pre-Departure Orientation"
                      ]).map((step, index) => (
                        <div key={index} className="flex">
                          <div className="flex-shrink-0 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 z-10">
                            {index + 1}
                          </div>
                          <div className="bg-white shadow-sm rounded-lg p-5 flex-grow">
                            <h3 className="font-bold text-lg mb-2">{step}</h3>
                            <p className="text-gray-600">
                              {index === 0 && "Complete the online application form with all required personal and academic details."}
                              {index === 1 && "Submit all required documents for verification by the university admission committee."}
                              {index === 2 && "Upon successful document verification, receive official admission offer letter."}
                              {index === 3 && "Pay the initial tuition fee and receive payment confirmation."}
                              {index === 4 && "Get assistance with visa application process and preparation of visa interview."}
                              {index === 5 && "Attend orientation session covering vital information about living abroad."}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-blue-800">Admission Support Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold mb-2">Documentation Assistance</h4>
                        <p className="text-gray-600">Complete guidance for preparing and submitting all required documents.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold mb-2">Visa Guidance</h4>
                        <p className="text-gray-600">Expert assistance for smooth visa process and interview preparation.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold mb-2">Airport Pickup</h4>
                        <p className="text-gray-600">Safe transportation from airport to university accommodation.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold mb-2">Orientation Program</h4>
                        <p className="text-gray-600">Comprehensive orientation to help you adapt to new environment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Facilities Tab */}
            <TabsContent value="facilities" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4 text-blue-800">Accommodation</h2>
                    <div className="prose">
                      <p>{university.hostelInfo || "Separate hostels for boys and girls with 24/7 security and modern amenities."}</p>
                      
                      <h3 className="text-lg font-bold mt-4 mb-2">Hostel Facilities</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-3 text-blue-600">
                            <Check size={16} />
                          </div>
                          <span>Furnished Rooms (2-3 sharing)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-3 text-blue-600">
                            <Check size={16} />
                          </div>
                          <span>24/7 Security & CCTV Surveillance</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-3 text-blue-600">
                            <Check size={16} />
                          </div>
                          <span>Wi-Fi Internet Connection</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-3 text-blue-600">
                            <Check size={16} />
                          </div>
                          <span>Laundry Services</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-3 text-blue-600">
                            <Check size={16} />
                          </div>
                          <span>Mess with Vegetarian & Non-Vegetarian Options</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-3 text-blue-600">
                            <Check size={16} />
                          </div>
                          <span>Recreation Areas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6 text-blue-800">Campus Facilities</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {(university.facilities || [
                      "Modern Laboratories",
                      "Digital Library",
                      "Simulation Centers",
                      "Sports Complex",
                      "Student Hostels",
                      "Cafeteria",
                      "Wi-Fi Campus",
                      "Auditorium"
                    ]).map((facility, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                              <Check size={20} className="text-blue-700" />
                            </div>
                            <div>
                              <h3 className="font-bold mb-2">{facility}</h3>
                              <p className="text-gray-600 text-sm">
                                {index === 0 && "Well-equipped modern laboratories with latest scientific equipment."}
                                {index === 1 && "Extensive digital library with access to international medical journals."}
                                {index === 2 && "Advanced simulation centers for practical clinical training."}
                                {index === 3 && "Comprehensive sports facilities for various indoor and outdoor games."}
                                {index === 4 && "Comfortable and secure accommodation for international students."}
                                {index === 5 && "Cafeteria serving diverse cuisine including Indian vegetarian options."}
                                {index === 6 && "High-speed internet connectivity throughout the campus."}
                                {index === 7 && "Modern auditorium for conferences, seminars and cultural events."}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mb-12">
                    <h3 className="text-xl font-bold mb-4 text-blue-800">Academic Facilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Digital Classrooms</h4>
                        <p className="text-sm text-gray-600">Smart classrooms with modern audio-visual equipment.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Research Centers</h4>
                        <p className="text-sm text-gray-600">Dedicated research facilities for medical innovations.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">E-Learning Platform</h4>
                        <p className="text-sm text-gray-600">Online resources and learning management system.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Gallery Tab */}
            <TabsContent value="gallery" className="mt-0">
              <h2 className="text-2xl font-bold mb-6 text-blue-800">University Gallery</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <img 
                      src="/placeholder.svg" 
                      alt={`${university.name} - Gallery Image ${index + 1}`}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6 text-blue-800">Video Tour</h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center p-12">
                    <p className="text-gray-500">University tour video would appear here</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Testimonials */}
        <div className="bg-gray-50 py-16 section-animate stagger-4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Student Testimonials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="border-0 shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-700 font-bold">S</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Student Name</h4>
                        <p className="text-sm text-gray-500">MBBS Student, Year {item + 2}</p>
                      </div>
                    </div>
                    <p className="italic text-gray-600">
                      "My experience at {university.name} has been truly transformative. The quality of education and the supportive faculty have helped me develop both professionally and personally."
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-16 section-animate stagger-5">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Is the MBBS degree from this university recognized worldwide?",
                a: "Yes, the MBBS degree is recognized by WHO, NMC (formerly MCI), and major international medical councils allowing graduates to practice globally after clearing the respective licensing exams."
              },
              {
                q: "What is the medium of instruction?",
                a: "The medium of instruction is English for all international programs."
              },
              {
                q: "Are Indian students eligible for scholarships?",
                a: "Yes, Indian students can apply for various merit-based scholarships offered by the university."
              },
              {
                q: "Is NEET mandatory for Indian students?",
                a: "Yes, as per the guidelines of the National Medical Commission (NMC) of India, NEET qualification is mandatory for Indian students seeking admission to MBBS programs abroad."
              },
              {
                q: "What is the hostel accommodation like?",
                a: "The university provides separate hostel facilities for boys and girls with modern amenities, 24/7 security, internet connectivity, and mess services including Indian food options."
              },
              {
                q: "What is the success rate of students in licensing exams?",
                a: "Our students have a high success rate in licensing exams like FMGE (India), USMLE (USA), PLAB (UK), and other international medical licensing examinations."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* CTA section */}
        <div className="bg-blue-700 py-16 section-animate stagger-6">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Medical Journey?</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
              Apply now to {university.name} and take the first step towards becoming a global medical professional with a world-class education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton className="bg-white text-blue-700 hover:bg-blue-50" size="lg">
                Apply Now
              </AnimatedButton>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Contact an Advisor
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UniversityPage;
