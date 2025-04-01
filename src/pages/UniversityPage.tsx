import {
  useEffect,
  useState,
} from 'react';

import {
  ArrowLeft,
  Award,
  Building2,
  Calendar,
  Check,
  Clock,
  FileCheck,
  FileText,
  Globe,
  GraduationCap,
  Home,
  Languages,
  MapIcon,
  MapPin,
  School,
} from 'lucide-react';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import StudentInquiryForm from '@/components/StudentInquiryForm';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

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
  overview: {
    typeOfUniversity: string;
    duration: string;
    recognition: string;
    intake: string;
    mediumOfTeaching: string;
    neetRequirement: string;
  };
  faculties: string[];
  feesStructure: {
    year: number;
    tuitionFee: string;
    hostelFee: string;
    total: string;
  }[];
  eligibilityCriteria: string[];
  admissionProcess: string[];
  documentsRequired: string[];
  whyStudy: string[];
  studentLife: {
    accommodation: string;
    facilities: string[];
    indianFood: string;
    activities: string[];
  };
  cityAtGlance: {
    location: string;
    climate: string;
    transportation: string;
    attractions: string[];
  };
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
    overview: {
      typeOfUniversity: "State Medical University",
      duration: "6 years including one year of internship",
      recognition: "WHO, NMC, ECFMG, IMED",
      intake: "September-October",
      mediumOfTeaching: "English",
      neetRequirement: "Yes",
    },
    faculties: [
      "Faculty of General Medicine",
      "Faculty of Pediatrics",
      "Faculty of Dentistry",
      "Faculty of Preventive Medicine",
      "Faculty of Pharmacy"
    ],
    feesStructure: [
      { year: 1, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 2, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 3, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 4, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 5, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 6, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" }
    ],
    eligibilityCriteria: [
      "Students must complete 17 years of age on or before 31st December",
      "Minimum 50% in PCB (Physics, Chemistry, Biology) in 12th Standard",
      "NEET Qualification (for Indian Students)",
      "Valid Passport",
      "No Criminal Record"
    ],
    admissionProcess: [
      "Fill the application form with required documents",
      "Document verification",
      "Admission letter issuance",
      "Visa processing assistance",
      "Travel arrangements"
    ],
    documentsRequired: [
      "10th & 12th Mark Sheets",
      "NEET Score Card",
      "Valid Passport",
      "Birth Certificate",
      "Medical Certificate",
      "Police Clearance",
      "Bank Statement",
      "Passport Size Photos"
    ],
    whyStudy: [
      "Low-cost medical education",
      "Global recognition",
      "Modern teaching methodology",
      "Excellent clinical exposure",
      "No donation required",
      "English medium of instruction",
      "World-class infrastructure",
      "Experienced faculty"
    ],
    studentLife: {
      accommodation: "Separate hostels for boys and girls with modern amenities",
      facilities: [
        "24/7 Wi-Fi",
        "Modern laboratories",
        "Digital library",
        "Sports complex",
        "Cafeteria",
        "Student lounges"
      ],
      indianFood: "Available in university canteen and nearby restaurants",
      activities: [
        "Cultural events",
        "Sports competitions",
        "Medical conferences",
        "Research opportunities"
      ]
    },
    cityAtGlance: {
      location: "Capital city of the Republic of Dagestan",
      climate: "Moderate climate with warm summers and mild winters",
      transportation: "Well-connected by air, rail, and road",
      attractions: [
        "Caspian Sea beaches",
        "Historical monuments",
        "Museums and theaters",
        "Shopping centers"
      ]
    }
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
    overview: {
      typeOfUniversity: "State Medical University",
      duration: "6 years including one year of internship",
      recognition: "WHO, NMC, ECFMG, IMED",
      intake: "September-October",
      mediumOfTeaching: "English",
      neetRequirement: "Yes",
    },
    faculties: [
      "Faculty of General Medicine",
      "Faculty of Pediatrics",
      "Faculty of Dentistry",
      "Faculty of Preventive Medicine",
      "Faculty of Pharmacy"
    ],
    feesStructure: [
      { year: 1, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 2, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 3, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 4, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 5, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 6, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" }
    ],
    eligibilityCriteria: [
      "Students must complete 17 years of age on or before 31st December",
      "Minimum 50% in PCB (Physics, Chemistry, Biology) in 12th Standard",
      "NEET Qualification (for Indian Students)",
      "Valid Passport",
      "No Criminal Record"
    ],
    admissionProcess: [
      "Fill the application form with required documents",
      "Document verification",
      "Admission letter issuance",
      "Visa processing assistance",
      "Travel arrangements"
    ],
    documentsRequired: [
      "10th & 12th Mark Sheets",
      "NEET Score Card",
      "Valid Passport",
      "Birth Certificate",
      "Medical Certificate",
      "Police Clearance",
      "Bank Statement",
      "Passport Size Photos"
    ],
    whyStudy: [
      "Low-cost medical education",
      "Global recognition",
      "Modern teaching methodology",
      "Excellent clinical exposure",
      "No donation required",
      "English medium of instruction",
      "World-class infrastructure",
      "Experienced faculty"
    ],
    studentLife: {
      accommodation: "Separate hostels for boys and girls with modern amenities",
      facilities: [
        "24/7 Wi-Fi",
        "Modern laboratories",
        "Digital library",
        "Sports complex",
        "Cafeteria",
        "Student lounges"
      ],
      indianFood: "Available in university canteen and nearby restaurants",
      activities: [
        "Cultural events",
        "Sports competitions",
        "Medical conferences",
        "Research opportunities"
      ]
    },
    cityAtGlance: {
      location: "Capital city of the Republic of Dagestan",
      climate: "Moderate climate with warm summers and mild winters",
      transportation: "Well-connected by air, rail, and road",
      attractions: [
        "Caspian Sea beaches",
        "Historical monuments",
        "Museums and theaters",
        "Shopping centers"
      ]
    }
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
    overview: {
      typeOfUniversity: "State Medical University",
      duration: "6 years including one year of internship",
      recognition: "WHO, NMC, ECFMG, IMED",
      intake: "September-October",
      mediumOfTeaching: "English",
      neetRequirement: "Yes",
    },
    faculties: [
      "Faculty of General Medicine",
      "Faculty of Pediatrics",
      "Faculty of Dentistry",
      "Faculty of Preventive Medicine",
      "Faculty of Pharmacy"
    ],
    feesStructure: [
      { year: 1, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 2, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 3, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 4, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 5, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 6, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" }
    ],
    eligibilityCriteria: [
      "Students must complete 17 years of age on or before 31st December",
      "Minimum 50% in PCB (Physics, Chemistry, Biology) in 12th Standard",
      "NEET Qualification (for Indian Students)",
      "Valid Passport",
      "No Criminal Record"
    ],
    admissionProcess: [
      "Fill the application form with required documents",
      "Document verification",
      "Admission letter issuance",
      "Visa processing assistance",
      "Travel arrangements"
    ],
    documentsRequired: [
      "10th & 12th Mark Sheets",
      "NEET Score Card",
      "Valid Passport",
      "Birth Certificate",
      "Medical Certificate",
      "Police Clearance",
      "Bank Statement",
      "Passport Size Photos"
    ],
    whyStudy: [
      "Low-cost medical education",
      "Global recognition",
      "Modern teaching methodology",
      "Excellent clinical exposure",
      "No donation required",
      "English medium of instruction",
      "World-class infrastructure",
      "Experienced faculty"
    ],
    studentLife: {
      accommodation: "Separate hostels for boys and girls with modern amenities",
      facilities: [
        "24/7 Wi-Fi",
        "Modern laboratories",
        "Digital library",
        "Sports complex",
        "Cafeteria",
        "Student lounges"
      ],
      indianFood: "Available in university canteen and nearby restaurants",
      activities: [
        "Cultural events",
        "Sports competitions",
        "Medical conferences",
        "Research opportunities"
      ]
    },
    cityAtGlance: {
      location: "Capital city of the Republic of Dagestan",
      climate: "Moderate climate with warm summers and mild winters",
      transportation: "Well-connected by air, rail, and road",
      attractions: [
        "Caspian Sea beaches",
        "Historical monuments",
        "Museums and theaters",
        "Shopping centers"
      ]
    }
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
    overview: {
      typeOfUniversity: "State Medical University",
      duration: "6 years including one year of internship",
      recognition: "WHO, NMC, ECFMG, IMED",
      intake: "September-October",
      mediumOfTeaching: "English",
      neetRequirement: "Yes",
    },
    faculties: [
      "Faculty of General Medicine",
      "Faculty of Pediatrics",
      "Faculty of Dentistry",
      "Faculty of Preventive Medicine",
      "Faculty of Pharmacy"
    ],
    feesStructure: [
      { year: 1, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 2, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 3, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 4, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 5, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 6, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" }
    ],
    eligibilityCriteria: [
      "Students must complete 17 years of age on or before 31st December",
      "Minimum 50% in PCB (Physics, Chemistry, Biology) in 12th Standard",
      "NEET Qualification (for Indian Students)",
      "Valid Passport",
      "No Criminal Record"
    ],
    admissionProcess: [
      "Fill the application form with required documents",
      "Document verification",
      "Admission letter issuance",
      "Visa processing assistance",
      "Travel arrangements"
    ],
    documentsRequired: [
      "10th & 12th Mark Sheets",
      "NEET Score Card",
      "Valid Passport",
      "Birth Certificate",
      "Medical Certificate",
      "Police Clearance",
      "Bank Statement",
      "Passport Size Photos"
    ],
    whyStudy: [
      "Low-cost medical education",
      "Global recognition",
      "Modern teaching methodology",
      "Excellent clinical exposure",
      "No donation required",
      "English medium of instruction",
      "World-class infrastructure",
      "Experienced faculty"
    ],
    studentLife: {
      accommodation: "Separate hostels for boys and girls with modern amenities",
      facilities: [
        "24/7 Wi-Fi",
        "Modern laboratories",
        "Digital library",
        "Sports complex",
        "Cafeteria",
        "Student lounges"
      ],
      indianFood: "Available in university canteen and nearby restaurants",
      activities: [
        "Cultural events",
        "Sports competitions",
        "Medical conferences",
        "Research opportunities"
      ]
    },
    cityAtGlance: {
      location: "Capital city of the Republic of Dagestan",
      climate: "Moderate climate with warm summers and mild winters",
      transportation: "Well-connected by air, rail, and road",
      attractions: [
        "Caspian Sea beaches",
        "Historical monuments",
        "Museums and theaters",
        "Shopping centers"
      ]
    }
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
    overview: {
      typeOfUniversity: "State Medical University",
      duration: "6 years including one year of internship",
      recognition: "WHO, NMC, ECFMG, IMED",
      intake: "September-October",
      mediumOfTeaching: "English",
      neetRequirement: "Yes",
    },
    faculties: [
      "Faculty of General Medicine",
      "Faculty of Pediatrics",
      "Faculty of Dentistry",
      "Faculty of Preventive Medicine",
      "Faculty of Pharmacy"
    ],
    feesStructure: [
      { year: 1, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 2, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 3, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 4, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 5, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 6, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" }
    ],
    eligibilityCriteria: [
      "Students must complete 17 years of age on or before 31st December",
      "Minimum 50% in PCB (Physics, Chemistry, Biology) in 12th Standard",
      "NEET Qualification (for Indian Students)",
      "Valid Passport",
      "No Criminal Record"
    ],
    admissionProcess: [
      "Fill the application form with required documents",
      "Document verification",
      "Admission letter issuance",
      "Visa processing assistance",
      "Travel arrangements"
    ],
    documentsRequired: [
      "10th & 12th Mark Sheets",
      "NEET Score Card",
      "Valid Passport",
      "Birth Certificate",
      "Medical Certificate",
      "Police Clearance",
      "Bank Statement",
      "Passport Size Photos"
    ],
    whyStudy: [
      "Low-cost medical education",
      "Global recognition",
      "Modern teaching methodology",
      "Excellent clinical exposure",
      "No donation required",
      "English medium of instruction",
      "World-class infrastructure",
      "Experienced faculty"
    ],
    studentLife: {
      accommodation: "Separate hostels for boys and girls with modern amenities",
      facilities: [
        "24/7 Wi-Fi",
        "Modern laboratories",
        "Digital library",
        "Sports complex",
        "Cafeteria",
        "Student lounges"
      ],
      indianFood: "Available in university canteen and nearby restaurants",
      activities: [
        "Cultural events",
        "Sports competitions",
        "Medical conferences",
        "Research opportunities"
      ]
    },
    cityAtGlance: {
      location: "Capital city of the Republic of Dagestan",
      climate: "Moderate climate with warm summers and mild winters",
      transportation: "Well-connected by air, rail, and road",
      attractions: [
        "Caspian Sea beaches",
        "Historical monuments",
        "Museums and theaters",
        "Shopping centers"
      ]
    }
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
    overview: {
      typeOfUniversity: "State Medical University",
      duration: "6 years including one year of internship",
      recognition: "WHO, NMC, ECFMG, IMED",
      intake: "September-October",
      mediumOfTeaching: "English",
      neetRequirement: "Yes",
    },
    faculties: [
      "Faculty of General Medicine",
      "Faculty of Pediatrics",
      "Faculty of Dentistry",
      "Faculty of Preventive Medicine",
      "Faculty of Pharmacy"
    ],
    feesStructure: [
      { year: 1, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 2, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 3, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 4, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 5, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" },
      { year: 6, tuitionFee: "$3,500", hostelFee: "$500", total: "$4,000" }
    ],
    eligibilityCriteria: [
      "Students must complete 17 years of age on or before 31st December",
      "Minimum 50% in PCB (Physics, Chemistry, Biology) in 12th Standard",
      "NEET Qualification (for Indian Students)",
      "Valid Passport",
      "No Criminal Record"
    ],
    admissionProcess: [
      "Fill the application form with required documents",
      "Document verification",
      "Admission letter issuance",
      "Visa processing assistance",
      "Travel arrangements"
    ],
    documentsRequired: [
      "10th & 12th Mark Sheets",
      "NEET Score Card",
      "Valid Passport",
      "Birth Certificate",
      "Medical Certificate",
      "Police Clearance",
      "Bank Statement",
      "Passport Size Photos"
    ],
    whyStudy: [
      "Low-cost medical education",
      "Global recognition",
      "Modern teaching methodology",
      "Excellent clinical exposure",
      "No donation required",
      "English medium of instruction",
      "World-class infrastructure",
      "Experienced faculty"
    ],
    studentLife: {
      accommodation: "Separate hostels for boys and girls with modern amenities",
      facilities: [
        "24/7 Wi-Fi",
        "Modern laboratories",
        "Digital library",
        "Sports complex",
        "Cafeteria",
        "Student lounges"
      ],
      indianFood: "Available in university canteen and nearby restaurants",
      activities: [
        "Cultural events",
        "Sports competitions",
        "Medical conferences",
        "Research opportunities"
      ]
    },
    cityAtGlance: {
      location: "Capital city of the Republic of Dagestan",
      climate: "Moderate climate with warm summers and mild winters",
      transportation: "Well-connected by air, rail, and road",
      attractions: [
        "Caspian Sea beaches",
        "Historical monuments",
        "Museums and theaters",
        "Shopping centers"
      ]
    }
  }
];

const UniversityPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [university, setUniversity] = useState<University | null>(null);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll use mock data
    const mockUniversity = universities.find((uni) => uni.id === Number(id));
    setUniversity(mockUniversity || null);
  }, [id]);

  if (!university) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px]">
          <img 
            src={university.image} 
            alt={university.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end">
            <div className="container mx-auto px-4 py-12 text-white">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-white mb-4 hover:bg-white/20"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft size={16} className="mr-2" /> Back
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{university.name}</h1>
              <p className="text-xl opacity-90">{university.location}</p>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 py-6">
              <div className="text-center p-4">
                <div className="text-sm text-gray-500 uppercase mb-1">Established</div>
                <div className="font-bold text-blue-900">{university.establishedYear}</div>
              </div>
              <div className="text-center p-4">
                <div className="text-sm text-gray-500 uppercase mb-1">Students</div>
                <div className="font-bold text-blue-900">{university.studentCount}</div>
              </div>
              <div className="text-center p-4">
                <div className="text-sm text-gray-500 uppercase mb-1">Medium</div>
                <div className="font-bold text-blue-900">English</div>
              </div>
              <div className="text-center p-4">
                <div className="text-sm text-gray-500 uppercase mb-1">Recognition</div>
                <div className="font-bold text-blue-900">WHO & NMC</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full justify-start overflow-x-auto">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="faculties">Faculties</TabsTrigger>
                  <TabsTrigger value="fees">Fees</TabsTrigger>
                  <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                  <TabsTrigger value="admission">Admission</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="why-study">Why Study</TabsTrigger>
                  <TabsTrigger value="student-life">Student Life</TabsTrigger>
                  <TabsTrigger value="city">City</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview">
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg border p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">University Overview</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <School className="text-blue-600 mr-3 mt-1" />
                          <div>
                            <div className="font-medium">Type of University</div>
                            <div className="text-gray-600">{university.overview.typeOfUniversity}</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="text-blue-600 mr-3 mt-1" />
                          <div>
                            <div className="font-medium">Duration of MBBS</div>
                            <div className="text-gray-600">{university.overview.duration}</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Award className="text-blue-600 mr-3 mt-1" />
                          <div>
                            <div className="font-medium">Recognition</div>
                            <div className="text-gray-600">{university.overview.recognition}</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Calendar className="text-blue-600 mr-3 mt-1" />
                          <div>
                            <div className="font-medium">Intake Period</div>
                            <div className="text-gray-600">{university.overview.intake}</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Languages className="text-blue-600 mr-3 mt-1" />
                          <div>
                            <div className="font-medium">Medium of Teaching</div>
                            <div className="text-gray-600">{university.overview.mediumOfTeaching}</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <FileCheck className="text-blue-600 mr-3 mt-1" />
                          <div>
                            <div className="font-medium">NEET Requirement</div>
                            <div className="text-gray-600">{university.overview.neetRequirement}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Faculties Tab */}
                <TabsContent value="faculties">
                  <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Faculties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {university.faculties.map((faculty) => (
                        <div key={faculty} className="flex items-start bg-blue-50 rounded-lg p-4">
                          <GraduationCap className="text-blue-600 mr-3" />
                          <span className="text-gray-800">{faculty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Fees Tab */}
                <TabsContent value="fees">
                  <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Fees Structure</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-blue-50">
                            <th className="px-4 py-2 text-left">Year</th>
                            <th className="px-4 py-2 text-left">Tuition Fee</th>
                            <th className="px-4 py-2 text-left">Hostel Fee</th>
                            <th className="px-4 py-2 text-left">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {university.feesStructure.map((fee) => (
                            <tr key={fee.year} className="border-b">
                              <td className="px-4 py-2">Year {fee.year}</td>
                              <td className="px-4 py-2">{fee.tuitionFee}</td>
                              <td className="px-4 py-2">{fee.hostelFee}</td>
                              <td className="px-4 py-2">{fee.total}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      * All fees are approximate and subject to change. Please contact for exact fee structure.
                    </p>
                  </div>
                </TabsContent>

                {/* Eligibility Tab */}
                <TabsContent value="eligibility">
                  <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
                    <div className="space-y-4">
                      {university.eligibilityCriteria.map((criteria) => (
                        <div key={criteria} className="flex items-start">
                          <Check className="text-blue-600 mr-3 mt-1" />
                          <span className="text-gray-800">{criteria}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Admission Process Tab */}
                <TabsContent value="admission">
                  <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Admission Process</h2>
                    <div className="space-y-6">
                      {university.admissionProcess.map((step, i) => (
                        <div key={step} className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                            {i + 1}
                          </div>
                          <div>
                            <p className="text-gray-800">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Documents Tab */}
                <TabsContent value="documents">
                  <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {university.documentsRequired.map((doc) => (
                        <div key={doc} className="flex items-start">
                          <FileText className="text-blue-600 mr-3" />
                          <span className="text-gray-800">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Why Study Tab */}
                <TabsContent value="why-study">
                  <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Study MBBS at {university.name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {university.whyStudy.map((reason) => (
                        <div key={reason} className="flex items-start">
                          <Check className="text-blue-600 mr-3 mt-1" />
                          <span className="text-gray-800">{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Student Life Tab */}
                <TabsContent value="student-life">
                  <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Life</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Home className="mr-2" /> Accommodation
                        </h3>
                        <p className="text-gray-700">{university.studentLife.accommodation}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Building2 className="mr-2" /> Facilities
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {university.studentLife.facilities.map((facility) => (
                            <div key={facility} className="flex items-center">
                              <Check className="text-blue-600 mr-2" />
                              <span className="text-gray-700">{facility}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4">Indian Food</h3>
                        <p className="text-gray-700">{university.studentLife.indianFood}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4">Activities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {university.studentLife.activities.map((activity) => (
                            <div key={activity} className="flex items-center">
                              <Check className="text-blue-600 mr-2" />
                              <span className="text-gray-700">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* City Tab */}
                <TabsContent value="city">
                  <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">City at a Glance</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <MapPin className="text-blue-600 mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Location</h3>
                          <p className="text-gray-700">{university.cityAtGlance.location}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Globe className="text-blue-600 mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Climate</h3>
                          <p className="text-gray-700">{university.cityAtGlance.climate}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapIcon className="text-blue-600 mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Transportation</h3>
                          <p className="text-gray-700">{university.cityAtGlance.transportation}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-4">Tourist Attractions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {university.cityAtGlance.attractions.map((attraction) => (
                            <div key={attraction} className="flex items-center">
                              <Check className="text-blue-600 mr-2" />
                              <span className="text-gray-700">{attraction}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Apply to {university.name}</h3>
                    <StudentInquiryForm universityId={university.id} />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {university.features.map((feature) => (
                        <div key={feature} className="flex items-start">
                          <Check className="text-blue-600 mr-2 mt-1" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UniversityPage;
