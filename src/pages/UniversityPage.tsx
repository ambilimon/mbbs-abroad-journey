
import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowLeft, MapPin, Calendar, GraduationCap, Building, Users, Globe, Book, FileText, Award, Clipboard, Landmark, Language } from "lucide-react";
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
  const [showInquiryForm, setShowInquiryForm] = useState(false);

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

  const handleApplyNow = () => {
    setShowInquiryForm(true);
    
    // Scroll to form
    setTimeout(() => {
      const formElement = document.getElementById('inquiry-form');
      formElement?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center bg-white/10 p-4 rounded-lg">
                    <div className="mr-4 bg-blue-600 p-3 rounded-full">
                      <Book size={20} />
                    </div>
                    <div>
                      <div className="text-sm uppercase">Tuition Range</div>
                      <div className="text-2xl font-bold">{university.tuitionRange}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white/10 p-4 rounded-lg">
                    <div className="mr-4 bg-blue-600 p-3 rounded-full">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-sm uppercase">Established</div>
                      <div className="text-2xl font-bold">{university.establishedYear || "1957"}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <AnimatedButton 
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 border-0"
                    onClick={handleApplyNow}
                  >
                    Apply Now
                  </AnimatedButton>
                  <a href={`#inquiry-form`}>
                    <AnimatedButton variant="outline" className="border-white text-white hover:bg-white/10">
                      Get Counselling
                    </AnimatedButton>
                  </a>
                  <AnimatedButton variant="outline" className="border-white text-white hover:bg-white/10">
                    <FileText size={16} className="mr-2" />
                    Download Brochure
                  </AnimatedButton>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0 section-animate stagger-1">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={university.image !== "/placeholder.svg" ? university.image : "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1374&auto=format&fit=crop"}
                    alt={university.name} 
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                        <h4 className="font-bold text-blue-900">World Ranking</h4>
                        <p className="text-blue-700">Top 10%</p>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                        <h4 className="font-bold text-blue-900">MBBS Duration</h4>
                        <p className="text-blue-700">6 Years</p>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                        <h4 className="font-bold text-blue-900">Medium</h4>
                        <p className="text-blue-700">English</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {university.recognition && (
                  <div className="mt-6 bg-white/10 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Award className="text-orange-300 mr-2" size={18} />
                      <div className="text-sm uppercase font-medium">Recognition & Accreditation</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {university.recognition.map((item, index) => (
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
        
        {/* Quick Stats Bar */}
        <div className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 py-4">
              <div className="text-center p-2">
                <div className="text-xs text-gray-500 uppercase">NEET Qualification</div>
                <div className="font-bold text-blue-900">Required</div>
              </div>
              <div className="text-center p-2">
                <div className="text-xs text-gray-500 uppercase">Eligibility</div>
                <div className="font-bold text-blue-900">50% in PCB</div>
              </div>
              <div className="text-center p-2">
                <div className="text-xs text-gray-500 uppercase">Yearly Intake</div>
                <div className="font-bold text-blue-900">500+ Students</div>
              </div>
              <div className="text-center p-2">
                <div className="text-xs text-gray-500 uppercase">Hostel Facilities</div>
                <div className="font-bold text-blue-900">Available</div>
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
                <TabsTrigger value="faq" className="text-base">FAQ</TabsTrigger>
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
                          <Language size={20} className="text-blue-700" />
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
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Landmark size={20} className="text-blue-700" />
                        </div>
                        <div>
                          <h3 className="font-medium">FMGE/NEXT Success</h3>
                          <p>High Success Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Indian Student Info */}
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-6 text-orange-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2Z"></path><path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"></path><path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"></path></svg>
                      Indian Student Info
                    </h2>
                    
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
                      
                      <div className="flex items-start">
                        <div className="bg-orange-100 p-2 rounded-full mr-3">
                          <Check size={20} className="text-orange-700" />
                        </div>
                        <div>
                          <h3 className="font-medium">Indian Student Association</h3>
                          <p>Active association supporting newcomers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Main content */}
                <div className="md:col-span-2">
                  {/* University Overview */}
                  <div className="mb-8 section-animate">
                    <div className="relative mb-6">
                      <h2 className="text-2xl font-bold text-blue-800">About {university.name}</h2>
                      <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                    </div>
                    
                    <div className="prose max-w-none text-gray-700">
                      <p className="mb-4">
                        {university.name} has established itself as a premier destination for medical studies, offering world-class education that meets international standards. With state-of-the-art facilities and experienced faculty, the university provides an optimal learning environment for aspiring medical professionals.
                      </p>
                      <p className="mb-4">
                        The university follows a comprehensive curriculum that blends theoretical knowledge with practical training. Students benefit from early clinical exposure in affiliated hospitals, ensuring they develop the necessary skills for successful medical careers. The MBBS program is taught entirely in English, making it accessible to international students.
                      </p>
                      <p>
                        With recognition from WHO, NMC, and other international medical councils, graduates from {university.name} are eligible to practice globally after clearing the respective licensing examinations. The university also boasts modern infrastructure, including well-equipped laboratories, digital libraries, and comfortable accommodation facilities.
                      </p>
                    </div>
                  </div>
                  
                  {/* Advantages */}
                  <div className="mb-10 section-animate stagger-1">
                    <div className="relative mb-6">
                      <h2 className="text-2xl font-bold text-blue-800">Why Choose {university.name}?</h2>
                      <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {(university.advantages || [
                        "Globally Recognized Degree",
                        "Affordable Tuition Fees",
                        "Modern Teaching Methodology",
                        "Multicultural Environment",
                        "Strong Alumni Network",
                        "Clinical Exposure from Early Years",
                        "High FMGE Success Rate",
                        "Excellent Hostel Facilities"
                      ]).map((advantage, index) => (
                        <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                          <div className="mr-3 text-green-600 bg-green-100 p-1.5 rounded-full">
                            <Check size={16} />
                          </div>
                          <p className="text-gray-800">{advantage}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Eligibility */}
                  <div className="mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200 section-animate stagger-2">
                    <div className="relative mb-6">
                      <h2 className="text-2xl font-bold text-blue-800">Eligibility Criteria</h2>
                      <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                    </div>
                    
                    <ul className="space-y-3">
                      {(university.eligibility || [
                        "Minimum 50% in PCB (Physics, Chemistry, Biology) in 12th Standard",
                        "NEET Qualification (for Indian Students)",
                        "Age 17+ years as of December 31st of the admission year",
                        "Good Health Status",
                        "Valid Passport",
                        "English Language Proficiency"
                      ]).map((criteria, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-3 text-blue-600 bg-blue-100 p-1.5 rounded-full">
                            <Check size={16} />
                          </div>
                          <span className="text-gray-800">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-blue-800 font-medium">
                        Note: As per the National Medical Commission (NMC) regulations, NEET qualification is mandatory for Indian students seeking admission to MBBS programs abroad.
                      </p>
                    </div>
                  </div>
                  
                  {/* Recognition */}
                  {university.recognition && (
                    <div className="mb-10 section-animate stagger-3">
                      <div className="relative mb-6">
                        <h2 className="text-2xl font-bold text-blue-800">Recognition & Accreditation</h2>
                        <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <p className="mb-4 text-gray-700">
                          {university.name} is recognized by various national and international medical bodies, ensuring that graduates can practice medicine globally after completing the necessary licensing examinations.
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                          {university.recognition.map((item, index) => (
                            <div key={index} className="flex items-center bg-white p-3 rounded-md shadow-sm">
                              <div className="mr-3 text-blue-600">
                                <Award size={20} />
                              </div>
                              <span className="text-gray-800 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            {/* Courses & Fees Tab */}
            <TabsContent value="courses" className="mt-0">
              <div className="grid gap-8">
                <div className="section-animate">
                  <div className="relative mb-6">
                    <h2 className="text-2xl font-bold text-blue-800">Courses Offered</h2>
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                  </div>
                  
                  {university.courses && university.courses.length > 0 ? (
                    <div className="grid gap-6">
                      {university.courses.map((course, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-0">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-4 px-6 text-white rounded-t-lg">
                              <h3 className="text-xl font-bold">{course.name}</h3>
                            </div>
                            <div className="p-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="text-gray-500 text-sm uppercase">Duration</h4>
                                  <p className="text-lg font-medium">{course.duration}</p>
                                </div>
                                <div>
                                  <h4 className="text-gray-500 text-sm uppercase">Fees</h4>
                                  <p className="text-lg font-medium">{course.fees}</p>
                                </div>
                              </div>
                              
                              <div className="mt-6 pt-4 border-t">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">Now Accepting Applications</span>
                                  </div>
                                  <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700" onClick={handleApplyNow}>
                                    Apply Now
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                      <p>Course information will be updated soon. Please contact us for the latest details.</p>
                    </div>
                  )}
                </div>
                
                {/* Fee Structure */}
                <div className="section-animate stagger-1">
                  <div className="relative mb-6">
                    <h2 className="text-2xl font-bold text-blue-800">Fee Structure</h2>
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                            <th className="px-6 py-4 text-left">Particulars</th>
                            <th className="px-6 py-4 text-right">Amount (Approx.)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-6 py-4">Tuition Fee (per year)</td>
                            <td className="px-6 py-4 text-right font-medium">₹3.5-4.5 Lakhs</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-6 py-4">Hostel Fee (per year)</td>
                            <td className="px-6 py-4 text-right font-medium">₹80,000-1.2 Lakhs</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-6 py-4">One-time Admission Fee</td>
                            <td className="px-6 py-4 text-right font-medium">₹1.5-2 Lakhs</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-6 py-4">Food Expenses (per year)</td>
                            <td className="px-6 py-4 text-right font-medium">₹80,000-1 Lakh</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-6 py-4">Medical Insurance (per year)</td>
                            <td className="px-6 py-4 text-right font-medium">₹15,000-20,000</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-6 py-4">Miscellaneous Expenses (per year)</td>
                            <td className="px-6 py-4 text-right font-medium">₹50,000-70,000</td>
                          </tr>
                          <tr className="bg-blue-50">
                            <td className="px-6 py-4 font-bold">Total (Approx. for 6 years)</td>
                            <td className="px-6 py-4 text-right font-bold">{university.tuitionRange}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500 text-yellow-800">
                    <p className="font-medium">Note: All fees are approximate and may vary. Exchange rate fluctuations may affect the final amount in INR.</p>
                  </div>
                </div>
                
                {/* Scholarships */}
                <div className="section-animate stagger-2">
                  <div className="relative mb-6">
                    <h2 className="text-2xl font-bold text-blue-800">Scholarships & Financial Aid</h2>
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <p className="mb-6 text-gray-700">
                      {university.name} offers various scholarships and financial aid options to deserving students based on academic merit, financial need, and other criteria.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {(university.scholarships || [
                        "Merit-Based Scholarships (up to 30% tuition waiver)",
                        "Sports Excellence Scholarships",
                        "Research Fellowships",
                        "Financial Need-Based Aid",
                        "Early Application Discount"
                      ]).map((scholarship, index) => (
                        <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                          <div className="mr-3 text-yellow-600 bg-yellow-100 p-1.5 rounded-full">
                            <Award size={20} />
                          </div>
                          <div>
                            <p className="text-gray-800">{scholarship}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-blue-800 font-medium">
                        Contact our counselors for detailed information about scholarship eligibility and application process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Admission Process Tab */}
            <TabsContent value="admission" className="mt-0">
              <div className="grid gap-8">
                <div className="section-animate">
                  <div className="relative mb-6">
                    <h2 className="text-2xl font-bold text-blue-800">Admission Process</h2>
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-gray-200">
                    <div className="p-6">
                      <p className="mb-8 text-gray-700">
                        The admission process at {university.name} is straightforward and designed to be hassle-free for international students. Follow these steps to secure your admission:
                      </p>
                      
                      <div className="space-y-6">
                        {(university.admissionProcess || [
                          "Online Application Submission",
                          "Document Verification",
                          "Admission Offer Letter",
                          "Visa Processing Assistance",
                          "Pre-Departure Orientation"
                        ]).map((step, index) => (
                          <div key={index} className="flex">
                            <div className="flex-shrink-0 mr-4">
                              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
                                {index + 1}
                              </div>
                            </div>
                            <div className="pt-1">
                              <h3 className="text-xl font-medium text-blue-800 mb-2">{step}</h3>
                              {index === 0 && (
                                <p className="text-gray-600">Fill out the online application form with your personal and academic details. Ensure all information is accurate and matches your documents.</p>
                              )}
                              {index === 1 && (
                                <p className="text-gray-600">Submit all required documents for verification, including academic transcripts, passport, photographs, and NEET scorecard.</p>
                              )}
                              {index === 2 && (
                                <p className="text-gray-600">Upon successful verification, you will receive an official admission offer letter from the university.</p>
                              )}
                              {index === 3 && (
                                <p className="text-gray-600">Our team will assist you with visa application process, including documentation and interview preparation.</p>
                              )}
                              {index === 4 && (
                                <p className="text-gray-600">Attend our comprehensive pre-departure orientation to prepare for your journey and life in {university.country === "russia" ? "Russia" : "Georgia"}.</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Required Documents */}
                <div className="section-animate stagger-1">
                  <div className="relative mb-6">
                    <h2 className="text-2xl font-bold text-blue-800">Required Documents</h2>
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <p className="mb-6 text-gray-700">
                      Prepare the following documents to ensure a smooth admission process:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(university.documents || [
                        "10th & 12th Mark Sheets (with apostille)",
                        "NEET Score Card",
                        "Valid Passport (minimum 18 months validity)",
                        "Medical Certificate",
                        "Police Clearance Certificate",
                        "Passport Size Photographs (white background)",
                        "Birth Certificate",
                        "Bank Statement (showing financial capability)",
                        "Offer Letter Fee Payment Receipt"
                      ]).map((document, index) => (
                        <div key={index} className="flex items-start bg-white p-4 rounded-lg">
                          <div className="mr-3 text-blue-600 bg-blue-100 p-1.5 rounded-full">
                            <FileText size={16} />
                          </div>
                          <p className="text-gray-800">{document}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-blue-800 font-medium">
                        Note: All documents must be in English or officially translated. Some documents may require apostille authentication.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Important Dates */}
                <div className="section-animate stagger-2">
                  <div className="relative mb-6">
                    <h2 className="text-2xl font-bold text-blue-800">Important Dates</h2>
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                            <th className="px-6 py-4 text-left">Event</th>
                            <th className="px-6 py-4 text-right">Timeline</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-6 py-4">Application Opens</td>
                            <td className="px-6 py-4 text-right font-medium">January 2024</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-6 py-4">Early Application Deadline (for scholarship consideration)</td>
                            <td className="px-6 py-4 text-right font-medium">April 30, 2024</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-6 py-4">Regular Application Deadline</td>
                            <td className="px-6 py-4 text-right font-medium">July 31, 2024</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-6 py-4">Document Submission Deadline</td>
                            <td className="px-6 py-4 text-right font-medium">August 15, 2024</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-6 py-4">Visa Application Period</td>
                            <td className="px-6 py-4 text-right font-medium">June - August 2024</td>
                          </tr>
                          <tr className="border-b bg-gray-50">
                            <td className="px-6 py-4">Academic Session Begins</td>
                            <td className="px-6 py-4 text-right font-medium">October 2024</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500 text-yellow-800">
                    <p className="font-medium">Note: Dates may vary slightly. It is advisable to apply as early as possible as seats are limited and filled on a first-come, first-served basis.</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Facilities Tab */}
            <TabsContent value="facilities" className="mt-0">
              <div className="grid gap-8">
                <div className="section-animate">
                  <div className="relative mb-6">
                    <h2 className="text-2xl font-bold text-blue-800">Campus Facilities</h2>
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Academic Facilities",
                        icon: <Book className="text-blue-700" />,
                        items: [
                          "Modern Lecture Halls with Audio-Visual Equipment",
                          "Well-Equipped Scientific Laboratories",
                          "Digital Library with 50,000+ Books and Journals",
                          "Computer Labs with High-Speed Internet",
                          "Clinical Skills Learning Center",
                          "Research Facilities and Centers"
                        ]
                      },
                      {
                        title: "Residential Facilities",
                        icon: <Building className="text-blue-700" />,
                        items: [
                          "Separate Hostels for Boys and Girls",
                          "24/7 Security and CCTV Surveillance",
                          "Wi-Fi Enabled Accommodation",
                          "Centralized Heating System",
                          "Laundry Services",
                          "Common Rooms with Recreation Facilities"
                        ]
                      },
                      {
                        title: "Sports & Recreation",
                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>,
                        items: [
                          "Indoor Sports Complex",
                          "Football and Basketball Courts",
                          "Gymnasium with Modern Equipment",
                          "Swimming Pool",
                          "Tennis Courts",
                          "Indoor Games (Table Tennis, Chess, etc.)"
                        ]
                      },
                      {
                        title: "Food & Dining",
                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path><line x1="6" x2="18" y1="17" y2="17"></line></svg>,
                        items: [
                          "Multiple Canteens and Cafeterias",
                          "Indian Food Available",
                          "Vegetarian and Non-Vegetarian Options",
                          "Affordable Meal Plans",
                          "Hygienic Food Preparation",
                          "Special Diet Accommodations"
                        ]
                      }
                    ].map((facility, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <div className="bg-blue-100 p-3 rounded-full mr-3">
                              {facility.icon}
                            </div>
                            <h3 className="text-xl font-bold text-blue-800">{facility.title}</h3>
                          </div>
                          
                          <ul className="space-y-2">
                            {facility.items.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="mr-3 text-green-600 mt-1">
                                  <Check size={16} />
                                </div>
                                <p className="text-gray-700">{item}</p>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Hospital Affiliations */}
                <div className="section-animate stagger-1">
                  <div className="relative mb-6">
                    <h2 className="text-2xl font-bold text-blue-800">Hospital Affiliations</h2>
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <p className="mb-6 text-gray-700">
                      {university.name} is affiliated with several leading hospitals and medical centers, providing students with excellent clinical exposure and practical training opportunities:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {(university.hospitalAffiliations || [
                        "University Teaching Hospital",
                        "Regional Clinical Center",
                        "Specialized Medical Center",
                        "Children's Hospital",
                        "Cardiology Institute",
                        "Oncology Research Center"
                      ]).map((hospital, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center">
                            <div className="mr-3 text-blue-700">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 3v12h-5c-.023-3.681.184-7.406 5-12zm0 12v6h-1v-6h1zm-6-1v7h-1v-7h1zm-6 7v-7h-1v7h1zm-2 0v-7h-1v7h1zm-2-7h-2v7h1v-7h1zm8 0h-2v7h1v-7h1z"></path></svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-800">{hospital}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-blue-800 font-medium">
                        Students have clinical rotations in these hospitals during their medical training, providing hands-on experience with diverse patient cases under expert supervision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Gallery Tab */}
            <TabsContent value="gallery" className="mt-0">
              <div className="section-animate">
                <div className="relative mb-6">
                  <h2 className="text-2xl font-bold text-blue-800">Photo Gallery</h2>
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1374&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=1374&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1613896640137-bb5b31496325?q=80&w=1528&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1470&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1416&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1532&auto=format&fit=crop"
                  ].map((img, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg shadow-md aspect-video bg-gray-200">
                      <img src={img} alt={`${university.name} - Image ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">
                          {index === 0 && "University Main Building"}
                          {index === 1 && "Modern Lecture Hall"}
                          {index === 2 && "Research Laboratory"}
                          {index === 3 && "Student Accommodation"}
                          {index === 4 && "Campus Life"}
                          {index === 5 && "Medical Training Facility"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 section-animate stagger-1">
                <div className="relative mb-6">
                  <h2 className="text-2xl font-bold text-blue-800">Video Gallery</h2>
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-video bg-gray-200 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <h3 className="text-white font-medium">University Campus Tour</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="aspect-video bg-gray-200 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <h3 className="text-white font-medium">Student Testimonials</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* FAQ Tab */}
            <TabsContent value="faq" className="mt-0">
              <div className="section-animate">
                <div className="relative mb-6">
                  <h2 className="text-2xl font-bold text-blue-800">Frequently Asked Questions</h2>
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      question: "Is NEET compulsory for Indian students to study MBBS abroad?",
                      answer: "Yes, as per the regulations of the National Medical Commission (NMC), Indian students must qualify NEET to pursue MBBS abroad. This is mandatory for all students seeking admission to medical programs in foreign countries."
                    },
                    {
                      question: "What is the language of instruction at the university?",
                      answer: "The medium of instruction for international students is English. All textbooks, classes, and exams are conducted in English, making it accessible for students from various countries."
                    },
                    {
                      question: "Are the degrees recognized globally?",
                      answer: `Yes, ${university.name} is recognized by WHO, NMC (National Medical Commission, India), and various international medical bodies. Graduates can practice globally after clearing the respective licensing examinations of the country where they wish to practice.`
                    },
                    {
                      question: "What is the duration of the MBBS program?",
                      answer: "The MBBS program is 6 years in duration, which includes 5 years of medical education and 1 year of internship. This comprehensive program ensures students receive thorough theoretical knowledge and practical training."
                    },
                    {
                      question: "Are hostel facilities available for international students?",
                      answer: "Yes, the university provides comfortable hostel accommodation for international students. The hostels are equipped with modern amenities, 24/7 security, Wi-Fi, and other facilities to ensure a comfortable stay."
                    },
                    {
                      question: "Is Indian food available in the university?",
                      answer: "Yes, Indian food is available in the university canteen and there are also several Indian restaurants near the campus. Many students also cook their own meals in the hostel kitchens."
                    },
                    {
                      question: "What is the success rate of students in FMGE/NEXT?",
                      answer: `${university.name} has a good success rate in FMGE/NEXT examinations. The university's curriculum is designed to prepare students for these licensing examinations, and additional coaching programs are available.`
                    },
                    {
                      question: "Can I practice in India after completing MBBS from this university?",
                      answer: "Yes, after completing MBBS from this university, you can practice in India after clearing the FMGE (Foreign Medical Graduate Examination) or NEXT (National Exit Test) as per the prevailing regulations."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-700">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Have More Questions?</h3>
                  <p className="text-gray-700 mb-4">
                    Our counselors are available to address all your queries regarding admission, visa process, accommodation, and more.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button onClick={handleApplyNow} className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                      Contact a Counselor
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                      Download FAQ Guide
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Inquiry Form Section */}
        <div className="bg-gray-50 py-16" id="inquiry-form">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="section-animate">
                <div className="relative mb-6">
                  <h2 className="text-3xl font-bold text-blue-800">Begin Your Medical Journey at {university.name}</h2>
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6">
                  Take the first step towards a successful medical career by submitting an inquiry. Our expert counselors will guide you through the entire process from application to admission.
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <Check size={20} className="mr-2 text-green-600" />
                    Why Choose Future Doctor for Your Medical Education?
                  </h3>
                  
                  <ul className="space-y-3">
                    {[
                      "10+ years of experience in medical education consultancy",
                      "2000+ successful student placements",
                      "Comprehensive support from application to arrival",
                      "Post-arrival assistance and continuous guidance",
                      "FMGE/NEXT preparation support",
                      "Transparent process with no hidden charges"
                    ].map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 text-green-600 bg-green-100 p-1 rounded-full mt-0.5">
                          <Check size={14} />
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-600 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p>+91 98765 43210</p>
                        <p>+91 98765 43211</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p>info@futuredoctor.com</p>
                        <p>admissions@futuredoctor.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      <div>
                        <p className="font-medium">Visit Us</p>
                        <p>Office #123, ABC Complex, MG Road, Bangalore - 560001</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="section-animate stagger-1">
                <StudentInquiryForm
                  universityId={university.id}
                  className="bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UniversityPage;
