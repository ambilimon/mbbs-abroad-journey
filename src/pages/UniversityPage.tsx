
import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, MapPin, Calendar, GraduationCap, Building, Users, Globe } from "lucide-react";
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
    ]
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
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/2 section-animate">
                <Link to="/#universities" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Universities
                </Link>
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
                
                <div className="mb-8">
                  <div className="inline-block bg-white/10 px-4 py-2 rounded-lg">
                    <span className="block text-sm uppercase">Tuition Range</span>
                    <span className="text-2xl font-bold">{university.tuitionRange}</span>
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
              
              <div className="w-full md:w-1/2 mt-8 md:mt-0 section-animate stagger-1">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={university.image} 
                    alt={university.name} 
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* University information */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Key facts */}
            <div className="md:col-span-1 section-animate">
              <h2 className="text-2xl font-bold mb-6">Key Facts</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
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
            
            {/* Main content */}
            <div className="md:col-span-2">
              {/* Courses */}
              <div className="mb-12 section-animate stagger-1">
                <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {university.courses?.map((course, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
                        <div className="text-sm text-gray-500 space-y-2">
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="font-medium">{course.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Fees:</span>
                            <span className="font-medium">{course.fees}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Recognition */}
              {university.recognition && (
                <div className="mb-12 section-animate stagger-2">
                  <h2 className="text-2xl font-bold mb-6">Recognition & Accreditation</h2>
                  
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
              
              {/* Facilities */}
              {university.facilities && (
                <div className="mb-12 section-animate stagger-3">
                  <h2 className="text-2xl font-bold mb-6">Campus Facilities</h2>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {university.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center">
                          <div className="mr-3 text-green-500">
                            <Check size={20} />
                          </div>
                          <span>{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Hospital Affiliations */}
              {university.hospitalAffiliations && (
                <div className="section-animate stagger-4">
                  <h2 className="text-2xl font-bold mb-6">Hospital Affiliations</h2>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {university.hospitalAffiliations.map((hospital, index) => (
                        <div key={index} className="flex items-center">
                          <div className="mr-3 text-green-500">
                            <Check size={20} />
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
        </div>
        
        {/* CTA section */}
        <div className="bg-gray-50 py-16 section-animate stagger-5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Medical Journey?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Apply now to {university.name} and take the first step towards becoming a global medical professional with a world-class education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton variant="highlight" size="lg">
                Apply Now
              </AnimatedButton>
              <Button variant="outline" size="lg">
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
