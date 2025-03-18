
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface University {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  tuitionRange: string;
  features: string[];
  country: "russia" | "georgia";
}

const universities: University[] = [
  {
    id: 1,
    name: "Kabardino Balkarian State University",
    location: "Nalchik, Russia",
    description: "Renowned for Surgery, General Medicine, and Cardiology with excellent research facilities.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹20-30 Lakhs total",
    features: ["English-Medium", "WHO & NMC Approved", "Established in 1957"],
    country: "russia",
  },
  {
    id: 2,
    name: "Altai State Medical University",
    location: "Barnaul, Russia",
    description: "One of Russia's oldest medical universities with excellent research facilities.",
    image: "https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?q=80&w=1364&auto=format&fit=crop",
    tuitionRange: "₹25-35 Lakhs total",
    features: ["6-Year Program", "Modern Campus", "Strong Alumni Network"],
    country: "russia",
  },
  {
    id: 3,
    name: "Kazan Federal University",
    location: "Kazan, Russia",
    description: "A prestigious institution offering cutting-edge medical education.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹30-40 Lakhs total",
    features: ["Advanced Research", "Clinical Rotations", "Modern Labs"],
    country: "russia",
  },
  {
    id: 4,
    name: "SEU - Georgian National University",
    location: "Tbilisi, Georgia",
    description: "Top-rated university with advanced medical labs, strong clinical exposure, and international faculty.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1473&auto=format&fit=crop",
    tuitionRange: "₹30-35 Lakhs total",
    features: ["100% English Medium", "European Standard", "High FMGE Success"],
    country: "georgia",
  },
  {
    id: 5,
    name: "Tbilisi State Medical University",
    location: "Tbilisi, Georgia",
    description: "Georgia's oldest and most prestigious medical university.",
    image: "https://images.unsplash.com/photo-1593377201809-2bf7bef6dc5d?q=80&w=1373&auto=format&fit=crop",
    tuitionRange: "₹25-35 Lakhs total",
    features: ["Established in 1918", "Strong Clinical Training", "Modern Campus"],
    country: "georgia",
  },
  {
    id: 6,
    name: "New Vision University",
    location: "Tbilisi, Georgia",
    description: "Recognized by WHO, NMC, and WFME with state-of-the-art hospital affiliations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹30-40 Lakhs total",
    features: ["Advanced Facilities", "International Faculty", "Hospital Affiliations"],
    country: "georgia",
  },
];

const UniversitySection = () => {
  const [activeTab, setActiveTab] = useState<string>("russia");
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

  return (
    <section id="universities" ref={sectionRef} className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="chip mb-4 section-animate">Top Universities</div>
        <h2 className="heading-md mb-6 section-animate stagger-1">
          Explore Premier Medical Universities Abroad
        </h2>
        <p className="text-gray-600 section-animate stagger-2">
          Discover world-class medical universities in Russia and Georgia offering
          high-quality MBBS programs with international standards.
        </p>
      </div>

      <Tabs defaultValue="russia" value={activeTab} onValueChange={setActiveTab} className="section-animate stagger-3">
        <div className="flex justify-center mb-10">
          <TabsList className="grid grid-cols-2 w-full max-w-md">
            <TabsTrigger value="russia" className="text-sm md:text-base">
              MBBS in Russia
            </TabsTrigger>
            <TabsTrigger value="georgia" className="text-sm md:text-base">
              MBBS in Georgia
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="russia" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities
              .filter((uni) => uni.country === "russia")
              .slice(0, 3)
              .map((university, index) => (
                <div
                  key={university.id}
                  className="university-card overflow-hidden section-animate"
                  style={{ transitionDelay: `${0.1 * (index + 4)}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        {university.tuitionRange}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{university.location}</p>
                    <p className="text-gray-600 mb-4">{university.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {university.features.map((feature, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link to={`/university/${university.id}`}>
                      <Button variant="outline" className="w-full mt-2">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline">View All Russian Universities</Button>
          </div>
        </TabsContent>

        <TabsContent value="georgia" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities
              .filter((uni) => uni.country === "georgia")
              .slice(0, 3)
              .map((university, index) => (
                <div
                  key={university.id}
                  className="university-card overflow-hidden section-animate"
                  style={{ transitionDelay: `${0.1 * (index + 4)}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        {university.tuitionRange}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{university.location}</p>
                    <p className="text-gray-600 mb-4">{university.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {university.features.map((feature, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link to={`/university/${university.id}`}>
                      <Button variant="outline" className="w-full mt-2">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline">View All Georgian Universities</Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-20 bg-blue-50 rounded-2xl overflow-hidden section-animate stagger-5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-10">
            <div className="chip mb-4">Why Choose {activeTab === "russia" ? "Russia" : "Georgia"}?</div>
            <h3 className="heading-md mb-6">
              Benefits of MBBS in {activeTab === "russia" ? "Russia" : "Georgia"}
            </h3>
            <ul className="space-y-4">
              {activeTab === "russia" ? (
                <>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check size={16} className="text-blue-700" />
                    </div>
                    <div>
                      <span className="font-medium">Affordable Education</span>
                      <p className="text-sm text-gray-600">Tuition starts at ₹20-40 Lakhs total</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check size={16} className="text-blue-700" />
                    </div>
                    <div>
                      <span className="font-medium">English-Medium Courses</span>
                      <p className="text-sm text-gray-600">6-Year comprehensive program taught in English</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check size={16} className="text-blue-700" />
                    </div>
                    <div>
                      <span className="font-medium">FMGE/NEXT Coaching</span>
                      <p className="text-sm text-gray-600">Specialized coaching available for licensing exams</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check size={16} className="text-blue-700" />
                    </div>
                    <div>
                      <span className="font-medium">Low Cost of Living</span>
                      <p className="text-sm text-gray-600">Student-friendly cities with affordable accommodation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check size={16} className="text-blue-700" />
                    </div>
                    <div>
                      <span className="font-medium">Clinical Rotations</span>
                      <p className="text-sm text-gray-600">Guaranteed training in leading hospitals</p>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check size={16} className="text-blue-700" />
                    </div>
                    <div>
                      <span className="font-medium">100% English-Medium Programs</span>
                      <p className="text-sm text-gray-600">All courses and clinical training in English</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check size={16} className="text-blue-700" />
                    </div>
                    <div>
                      <span className="font-medium">Affordable Tuition</span>
                      <p className="text-sm text-gray-600">Total education cost of ₹25-35 Lakhs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check size={16} className="text-blue-700" />
                    </div>
                    <div>
                      <span className="font-medium">European Standard Education</span>
                      <p className="text-sm text-gray-600">Safe environment with high-quality medical training</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check size={16} className="text-blue-700" />
                    </div>
                    <div>
                      <span className="font-medium">High FMGE Passing Rate</span>
                      <p className="text-sm text-gray-600">Strong track record in licensing examinations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check size={16} className="text-blue-700" />
                    </div>
                    <div>
                      <span className="font-medium">Global PG Opportunities</span>
                      <p className="text-sm text-gray-600">Pathway to postgraduate studies in the US, UK, or Europe</p>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="relative h-full min-h-[300px] lg:min-h-full bg-blue-100">
            <img
              src={activeTab === "russia" 
                ? "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=1470&auto=format&fit=crop" 
                : "https://images.unsplash.com/photo-1600697230637-36eec499637e?q=80&w=1470&auto=format&fit=crop"}
              alt={`MBBS in ${activeTab === "russia" ? "Russia" : "Georgia"}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversitySection;
