import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShimmerButton } from "@/components/ShimmerButton";
import StudentInquiryForm from "@/components/StudentInquiryForm";
import { Link } from "react-router-dom";
import { 
  Notebook, 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Globe, 
  BarChart3, 
  CheckCircle2, 
  Clock,
  CalendarDays,
  MapPin,
  Star
} from "lucide-react";
import { CollegeCard, College } from "@/components/CollegeCard";
import { Helmet } from "react-helmet-async";

export interface AdvantageItem {
  text: string;
}

export interface ProcessStep {
  step: string;
  desc: string;
}

export interface EligibilityItem {
  text: string;
}

export interface DocumentItem {
  text: string;
}

export interface FeeStructureItem {
  name: string;
  cost: string;
  isHighlighted?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CountryPageProps {
  countryName: string;
  heroImage: string;
  countryDescription: string[];
  degreeAwarded: string;
  duration: string;
  teachingMedium: string;
  eligibilityCriteria: string;
  advantages: AdvantageItem[];
  colleges: College[];
  admissionProcess: ProcessStep[];
  eligibilityItems: EligibilityItem[];
  documents: DocumentItem[];
  feeStructure: FeeStructureItem[];
  faqs: FaqItem[];
}

export default function MBBSCountryTemplate({
  countryName,
  heroImage,
  countryDescription,
  degreeAwarded,
  duration,
  teachingMedium,
  eligibilityCriteria,
  advantages,
  colleges,
  admissionProcess,
  eligibilityItems,
  documents,
  feeStructure,
  faqs
}: CountryPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>MBBS in {countryName} | Study Medicine in {countryName}</title>
        <meta 
          name="description" 
          content={`Study MBBS in ${countryName} with globally recognized medical programs. Learn about top medical universities, fees, admission process, and more.`}
        />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img 
          src={heroImage} 
          alt={`MBBS in ${countryName}`}
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end">
          <div className="container mx-auto px-4 py-12 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">MBBS in {countryName}</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Study medicine at prestigious universities in {countryName} with globally recognized degrees at affordable costs
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/#application">
                <ShimmerButton size="lg" className="font-medium">
                  Apply Now
                </ShimmerButton>
              </Link>
              <Link to="/universities">
                <ShimmerButton size="lg" variant="outline" className="font-medium text-white border-white hover:bg-white/20">
                  Explore Universities
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Overview of MBBS in {countryName}</h2>
              {countryDescription.map((paragraph, index) => (
                <p key={index} className="text-lg mb-4">{paragraph}</p>
              ))}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Degree Awarded</h3>
                  </div>
                  <p>{degreeAwarded}</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <CalendarDays className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Duration</h3>
                  </div>
                  <p>{duration}</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Medium of Teaching</h3>
                  </div>
                  <p>{teachingMedium}</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Eligibility</h3>
                  </div>
                  <p>{eligibilityCriteria}</p>
                </div>
              </div>
            </section>
            
            {/* Advantages Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Advantages of Studying MBBS in {countryName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>{advantage.text}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Top Universities Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Medical Universities in {countryName}</h2>
              <p className="text-lg mb-6">
                {countryName} boasts several prestigious medical universities that offer high-quality medical education to international students.
                Here are the medical universities in {countryName} for international students:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {colleges.map((college) => (
                  <CollegeCard key={college.id} college={college} />
                ))}
              </div>
            </section>
            
            {/* MBBS Admission Process */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Admission Process for MBBS in {countryName}</h2>
              <p className="text-lg mb-6">
                The admission process for MBBS in {countryName} medical universities is straightforward and student-friendly.
              </p>
              
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                
                {admissionProcess.map((item, index) => (
                  <div key={index} className="ml-12 mb-6 relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Eligibility Criteria */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Eligibility Criteria for MBBS in {countryName}</h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <ul className="space-y-3">
                  {eligibilityItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            
            {/* Documents Required */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Documents Required for MBBS Admission in {countryName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-3">
                      <Notebook className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-medium">{doc.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Fees Structure */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Fee Structure for MBBS in {countryName}</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="py-3 px-4 text-left border-b border-gray-200">Particulars</th>
                      <th className="py-3 px-4 text-left border-b border-gray-200">Average Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className={fee.isHighlighted ? "bg-blue-50 font-medium" : index % 2 === 0 ? "" : "bg-gray-50"}>
                        <td className="py-3 px-4 border-b border-gray-200 font-medium">{fee.name}</td>
                        <td className="py-3 px-4 border-b border-gray-200">{fee.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Note: The fees mentioned above are approximate and may vary from university to university. 
                Please contact us for the most updated fee structure of specific universities.
              </p>
            </section>
            
            {/* FAQs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <StudentInquiryForm sticky={true} />
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>10+ years of experience in overseas education</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>Official representatives of top {countryName} universities</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>End-to-end assistance from application to visa</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>Pre-departure guidance and orientation</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>Ongoing support throughout your education</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Contact Our Counselors</h3>
                <p className="mb-4">Have queries about MBBS in {countryName}? Our expert counselors are here to help.</p>
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>123 Education Street, Mumbai, India</span>
                </div>
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 mr-2" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>info@mbbsabroadjourney.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 