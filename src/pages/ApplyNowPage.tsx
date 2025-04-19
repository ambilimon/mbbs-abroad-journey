import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { Rocket, Phone, Globe, Check } from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import { useToast } from "@/components/ui/use-toast";
import { countryUniversities } from "@/data/countryUniversities";

const ApplyNowPage = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    neetScore: "",
    country: "",
    university: "",
    message: ""
  });

  // Get available universities based on selected country
  const availableUniversities = formData.country ? countryUniversities[formData.country] || [] : [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => {
      // If country changes, reset university selection
      if (id === 'country') {
        return { ...prev, [id]: value, university: '' };
      }
      return { ...prev, [id]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Application Submitted!",
      description: "We'll contact you shortly to discuss your MBBS abroad journey.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      neetScore: "",
      country: "",
      university: "",
      message: ""
    });
  };

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Apply for MBBS Abroad</h1>
              <p className="text-xl opacity-90">
                Start your medical education journey with expert guidance and support
              </p>
            </div>
          </div>
        </div>
        
        <section ref={sectionRef} className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4 section-animate">
              Admission 2025
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 section-animate stagger-1">
              Start Your MBBS Journey Abroad Today
            </h2>
            <p className="text-gray-600 section-animate stagger-2">
              Admissions for MBBS 2025 are now open. Secure your seat with minimal documentation 
              and expert guidance from our counselors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="section-animate stagger-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-semibold mb-6">How to Apply</h3>
                
                <div className="space-y-8">
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Qualify NEET</h4>
                      <p className="text-gray-600">
                        Have a valid NEET score. No separate entrance exam is required 
                        for admission to foreign medical universities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Apply Online</h4>
                      <p className="text-gray-600">
                        Fill out our application form and submit the required documents. 
                        Our team will guide you through the process.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Secure Your Seat</h4>
                      <p className="text-gray-600">
                        Pay a minimal booking amount of ₹10,000 to secure your seat 
                        in your preferred university.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Visa & Travel Arrangements</h4>
                      <p className="text-gray-600">
                        Our team will assist with visa processing, travel arrangements, 
                        and pre-departure orientation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white rounded-lg border border-blue-100">
                  <h4 className="font-medium flex items-center text-blue-800 mb-2">
                    <Check className="h-5 w-5 mr-2" />
                    Required Documents
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                      NEET Score Card
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                      10th & 12th Mark Sheets
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                      Valid Passport
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                      Passport Size Photographs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="section-animate stagger-4">
              <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                <Rocket className="h-12 w-12 text-blue-700 mb-6" />
                <h3 className="text-2xl font-semibold mb-6">Ready to Begin Your MBBS Journey?</h3>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our expert counselors will get in touch with you to guide 
                  you through the admission process.
                </p>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="neetScore" className="block text-sm font-medium text-gray-700 mb-1">
                        NEET Score
                      </label>
                      <input
                        type="text"
                        id="neetScore"
                        value={formData.neetScore}
                        onChange={handleChange}
                        placeholder="Enter your NEET score"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Country
                    </label>
                    <select
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select your preferred country</option>
                      {Object.keys(countryUniversities).map((country) => (
                        <option key={country} value={country}>
                          {country.charAt(0).toUpperCase() + country.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred University
                    </label>
                    <select
                      id="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      disabled={!formData.country}
                    >
                      <option value="">
                        {formData.country ? "Select your preferred university" : "Please select a country first"}
                      </option>
                      {availableUniversities.map((university) => (
                        <option key={university.id} value={university.value}>
                          {university.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any specific questions or requirements"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  
                  <AnimatedButton variant="highlight" className="w-full" size="lg" type="submit">
                    Submit Application
                  </AnimatedButton>
                </form>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-4">You can also reach us directly:</p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-700 mr-2" />
                      <span className="text-sm">+91 9901712001</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-blue-700 mr-2" />
                      <span className="text-sm">info@futuredoctoredu.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplyNowPage; 