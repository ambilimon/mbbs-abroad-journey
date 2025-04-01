
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft } from "lucide-react";
import StudentInquiryForm from "@/components/StudentInquiryForm";

const DynamicUniversityPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [university, setUniversity] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load university data from localStorage
    try {
      const stored = localStorage.getItem('universities');
      if (stored) {
        const universities = JSON.parse(stored);
        const foundUniversity = universities.find((u: any) => u.id === parseInt(id || '0'));
        setUniversity(foundUniversity || null);
      }
      setLoading(false);
    } catch (e) {
      console.error("Error loading university data", e);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex justify-center items-center">
          <div className="animate-pulse">Loading university information...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!university) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">University Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the university you're looking for.</p>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section with University Image */}
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
        
        {/* University Details */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-blue-50 p-4 rounded-lg mb-8 inline-block">
                <span className="text-blue-700 font-medium">{university.tuitionRange}</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">About {university.name}</h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                {university.description}
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {university.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                      <Check size={16} className="text-blue-700" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Application Form */}
            <div className="lg:col-span-1 sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Interested in {university.name}?</h3>
                  <p className="text-gray-600 mb-6">
                    Fill out this form and our counselors will get in touch with you shortly to guide you through the application process.
                  </p>
                  <StudentInquiryForm universityId={university.id} />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DynamicUniversityPage;
