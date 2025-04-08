import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { medicalUniversities } from "@/data/medical-universities";
import CountryUniversityList from "@/components/CountryUniversityList";
import StudentInquiryForm from "@/components/StudentInquiryForm";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { availableCountries } from "@/components/inquiry-form/types";
import { Helmet } from "react-helmet-async";

const countryInfo: Record<string, {
  heading: string;
  description: string;
  benefits: string[];
  image: string;
}> = {
  "russia": {
    heading: "Study MBBS in Russia",
    description: "Russia is a popular destination for international medical students, offering high-quality education at affordable costs. Russian medical universities are recognized by WHO, UNESCO, and medical councils worldwide.",
    benefits: [
      "Affordable tuition fees compared to western countries",
      "Globally recognized medical degrees",
      "No entrance exams for admission",
      "English-medium programs available",
      "Advanced infrastructure and research facilities",
      "Cultural diversity and rich heritage"
    ],
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  "georgia": {
    heading: "Study MBBS in Georgia",
    description: "Georgia offers world-class medical education with its European standards and innovative teaching methods. Medical universities in Georgia provide quality education at reasonable costs.",
    benefits: [
      "European standard education system",
      "WHO and UNESCO recognized universities",
      "No donation or capitation fees",
      "Low cost of living and affordable tuition",
      "Safe environment for international students",
      "Easy admission process with no entrance exams"
    ],
    image: "https://images.unsplash.com/photo-1565008576549-57cf2b6629a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
  },
  "kazakhstan": {
    heading: "Study MBBS in Kazakhstan",
    description: "Kazakhstan is emerging as a preferred destination for medical education with its modern teaching methodologies and international exposure. Universities in Kazakhstan offer medical degrees recognized globally.",
    benefits: [
      "Affordable tuition fees with high-quality education",
      "Recognized by major medical councils worldwide",
      "Modern infrastructure and teaching facilities",
      "Multicultural learning environment",
      "Scholarships available for international students",
      "Practical clinical exposure from early years"
    ],
    image: "https://images.unsplash.com/photo-1584812720081-6e600e93d083?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
};

const CountryPage = () => {
  const { country } = useParams<{ country: string }>();
  const normalizedCountry = country ? country.toLowerCase() : "";
  const info = countryInfo[normalizedCountry] || {
    heading: `Study MBBS in ${country}`,
    description: `Explore medical universities in ${country} offering quality education for international students.`,
    benefits: [],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop"
  };

  const displayCountry = country ? country.charAt(0).toUpperCase() + country.slice(1) : "";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{`MBBS in ${displayCountry} | Future Doctor`}</title>
        <meta name="description" content={`Comprehensive guide to studying MBBS in ${displayCountry}. Explore top medical universities, admission process, and student opportunities.`} />
      </Helmet>
      
      <Navbar />
      
      <section className="relative h-[50vh] min-h-[400px]">
        <img 
          src={info.image} 
          alt={`MBBS in ${displayCountry}`}
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end">
          <div className="container mx-auto px-4 py-12 text-white">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-white border-white mb-4 hover:bg-white/20"
              asChild
            >
              <Link to="/universities">
                <ArrowLeft size={16} className="mr-2" /> Back to All Universities
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{info.heading}</h1>
          </div>
        </div>
      </section>
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <p className="text-lg mb-6">{info.description}</p>
              
              {info.benefits.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-4">Benefits of Studying in {displayCountry}</h2>
                  <ul className="space-y-2 mb-6">
                    {info.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Medical Universities in {displayCountry}</h2>
            <CountryUniversityList 
              universities={medicalUniversities} 
              country={displayCountry} 
            />
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <StudentInquiryForm sticky={true} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CountryPage;
