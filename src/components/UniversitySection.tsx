import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
  image: string;
  tuitionRange: string;
  features: string[];
  country: "russia" | "georgia" | "philippines" | "belarus" | "moldova" | "bulgaria" | "bosnia" | "uzbekistan" | "kazakhstan" | "kyrgyzstan" | "malaysia" | "nepal";
}

const universities: University[] = [
  // Russia
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
    name: "Bashkir State Medical University",
    location: "Ufa, Russia",
    description: "Prestigious medical institution known for high-quality education and research.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1473&auto=format&fit=crop",
    tuitionRange: "₹22-32 Lakhs total",
    features: ["English Medium", "WHO Recognized", "Modern Infrastructure"],
    country: "russia",
  },
  {
    id: 4,
    name: "Mari State University",
    location: "Yoshkar-Ola, Russia",
    description: "Offers comprehensive medical programs with a focus on practical training.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop", 
    tuitionRange: "₹18-28 Lakhs total",
    features: ["Clinical Exposure", "Affordable Fees", "NMC Approved"],
    country: "russia",
  },
  {
    id: 5,
    name: "Syktyvkar State University",
    location: "Syktyvkar, Russia",
    description: "Known for medical education with strong emphasis on research methodology.",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹20-30 Lakhs total",
    features: ["Research Focus", "Modern Labs", "English Medium"],
    country: "russia",
  },
  {
    id: 6,
    name: "V.I Vernadsky Crimean Federal University",
    location: "Simferopol, Russia",
    description: "Historic institution offering progressive medical education since 1918.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹22-32 Lakhs total",
    features: ["Historical Campus", "Strong Clinical Training", "International Faculty"],
    country: "russia",
  },
  {
    id: 7,
    name: "Orel State Medical University",
    location: "Orel, Russia",
    description: "Modern medical education with state-of-the-art facilities and equipment.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop",
    tuitionRange: "₹19-29 Lakhs total",
    features: ["Advanced Equipment", "Clinical Rotations", "Student-Friendly Campus"],
    country: "russia",
  },
  {
    id: 8,
    name: "South Ural State Medical University",
    location: "Chelyabinsk, Russia",
    description: "Leading medical university with comprehensive education and clinical practice.",
    image: "https://images.unsplash.com/photo-1533042789716-e9a9c97cf4ee?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹21-31 Lakhs total", 
    features: ["WHO Recognized", "Hospital Affiliations", "Advanced Research"],
    country: "russia",
  },
  {
    id: 9,
    name: "Tver State Medical University",
    location: "Tver, Russia",
    description: "Renowned for innovative teaching methods and strong international connections.",
    image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹20-30 Lakhs total",
    features: ["International Collaborations", "Modern Campus", "Clinical Training"],
    country: "russia",
  },
  {
    id: 10,
    name: "Ulyanovsk State University",
    location: "Ulyanovsk, Russia", 
    description: "Progressive medical institution with strong focus on practical skills development.",
    image: "https://images.unsplash.com/photo-1593377201809-2bf7bef6dc5d?q=80&w=1373&auto=format&fit=crop",
    tuitionRange: "₹19-29 Lakhs total",
    features: ["Practical Training", "Modern Facilities", "English Medium"],
    country: "russia",
  },
  {
    id: 11,
    name: "Orenburg State Medical University",
    location: "Orenburg, Russia",
    description: "Established medical university known for quality education and research excellence.",
    image: "https://images.unsplash.com/photo-1607582544116-448c7a129338?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹20-30 Lakhs total",
    features: ["Research Excellence", "Clinical Experience", "Modern Infrastructure"],
    country: "russia",
  },
  // Georgia
  {
    id: 12,
    name: "SEU - Georgian National University",
    location: "Tbilisi, Georgia",
    description: "Top-rated university with advanced medical labs, strong clinical exposure, and international faculty.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1473&auto=format&fit=crop",
    tuitionRange: "₹30-35 Lakhs total",
    features: ["100% English Medium", "European Standard", "High FMGE Success"],
    country: "georgia",
  },
  {
    id: 13,
    name: "Tbilisi State Medical University",
    location: "Tbilisi, Georgia",
    description: "Georgia's oldest and most prestigious medical university.",
    image: "https://images.unsplash.com/photo-1593377201809-2bf7bef6dc5d?q=80&w=1373&auto=format&fit=crop",
    tuitionRange: "₹25-35 Lakhs total",
    features: ["Established in 1918", "Strong Clinical Training", "Modern Campus"],
    country: "georgia",
  },
  {
    id: 14,
    name: "Batumi Shota Rustaveli State University",
    location: "Batumi, Georgia",
    description: "Coastal university offering quality medical education with modern facilities.",
    image: "https://images.unsplash.com/photo-1600697230637-36eec499637e?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹28-38 Lakhs total",
    features: ["Scenic Location", "English Medium", "NMC Recognized"],
    country: "georgia",
  },
  {
    id: 15,
    name: "Caucasus International University",
    location: "Tbilisi, Georgia",
    description: "Modern university with European standards and international recognition.",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹27-37 Lakhs total",
    features: ["International Standards", "Clinical Training", "Modern Infrastructure"],
    country: "georgia",
  },
  {
    id: 16,
    name: "European University",
    location: "Tbilisi, Georgia",
    description: "EU-standard medical education with emphasis on practical clinical skills.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹29-39 Lakhs total",
    features: ["European Curriculum", "Modern Facilities", "Clinical Rotations"],
    country: "georgia",
  },
  // Philippines
  {
    id: 17,
    name: "Lyceum of the Philippines University",
    location: "Manila, Philippines",
    description: "Renowned institution offering quality medical education at affordable costs.",
    image: "https://images.unsplash.com/photo-1596496685980-ff44e1c59a91?q=80&w=1470&auto=format&fit=crop", 
    tuitionRange: "₹15-25 Lakhs total",
    features: ["English Medium", "Clinical Training", "Affordable Education"],
    country: "philippines",
  },
  {
    id: 18,
    name: "Davao Medical School Foundation",
    location: "Davao City, Philippines",
    description: "Specialized medical institution with strong focus on community healthcare.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹18-28 Lakhs total",
    features: ["Community Focus", "Modern Campus", "Practical Training"],
    country: "philippines",
  },
  {
    id: 19,
    name: "Emilio Aguinaldo Medical Center",
    location: "Cavite, Philippines",
    description: "Comprehensive medical training with advanced hospital facilities.",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=1474&auto=format&fit=crop",
    tuitionRange: "₹16-26 Lakhs total",
    features: ["Hospital-Based", "Clinical Experience", "Modern Equipment"],
    country: "philippines",
  },
  {
    id: 20,
    name: "Our Lady of Fatima University",
    location: "Valenzuela, Philippines",
    description: "Leading medical university with focus on holistic healthcare education.",
    image: "https://images.unsplash.com/photo-1607235332404-68d4a152c0c1?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹17-27 Lakhs total", 
    features: ["Holistic Approach", "Modern Facilities", "Strong Faculty"],
    country: "philippines",
  },
  {
    id: 21,
    name: "UV Gullas College of Medicine",
    location: "Cebu City, Philippines",
    description: "Established medical college known for excellent FMGE preparation.",
    image: "https://images.unsplash.com/photo-1563447080728-2b142f559d25?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹18-28 Lakhs total",
    features: ["High FMGE Success", "English Medium", "Clinical Exposure"],
    country: "philippines",
  },
  {
    id: 22,
    name: "University of Perpetual Help System",
    location: "Las Piñas, Philippines",
    description: "Comprehensive medical education integrating theory and practice.",
    image: "https://images.unsplash.com/photo-1579711739633-67345a366c82?q=80&w=1470&auto=format&fit=crop", 
    tuitionRange: "₹16-26 Lakhs total",
    features: ["Integrated Curriculum", "Modern Campus", "Practical Experience"],
    country: "philippines",
  },
  // Belarus
  {
    id: 23,
    name: "Belarusian State Medical University",
    location: "Minsk, Belarus",
    description: "Prestigious medical university with a rich history of medical excellence.",
    image: "https://images.unsplash.com/photo-1543333995-a78aea2eee50?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹22-32 Lakhs total",
    features: ["Historical Institution", "WHO Recognized", "Strong Research"],
    country: "belarus",
  },
  {
    id: 24,
    name: "Grodno State Medical University",
    location: "Grodno, Belarus",
    description: "Leading medical education provider with advanced clinical training.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹20-30 Lakhs total", 
    features: ["Clinical Focus", "Modern Equipment", "International Recognition"],
    country: "belarus",
  },
  {
    id: 25,
    name: "Vitebsk State Medical University",
    location: "Vitebsk, Belarus",
    description: "Renowned for innovative medical education and strong clinical practice.",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹21-31 Lakhs total",
    features: ["Innovation Focus", "Clinical Training", "NMC Approved"],
    country: "belarus",
  },
  // Moldova
  {
    id: 26,
    name: "Nicolae Testemitanu State University of Medicine and Pharmacy",
    location: "Chisinau, Moldova",
    description: "Leading medical institution in Moldova with European standards.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop", 
    tuitionRange: "₹24-34 Lakhs total",
    features: ["European Standards", "English Medium", "WHO Recognized"],
    country: "moldova",
  },
  // Bulgaria
  {
    id: 27,
    name: "Medical University Pleven",
    location: "Pleven, Bulgaria",
    description: "Modern European medical university with advanced simulation centers.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1332&auto=format&fit=crop",
    tuitionRange: "₹25-35 Lakhs total",
    features: ["EU Standards", "Simulation Training", "Modern Facilities"],
    country: "bulgaria",
  },
  // Bosnia
  {
    id: 28,
    name: "The University of East Sarajevo",
    location: "East Sarajevo, Bosnia and Herzegovina",
    description: "Quality medical education with European recognition and standards.",
    image: "https://images.unsplash.com/photo-1577274803759-eb132760ecb3?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹24-34 Lakhs total", 
    features: ["European Recognition", "Clinical Training", "Affordable Education"],
    country: "bosnia",
  },
  // Uzbekistan
  {
    id: 29,
    name: "Andijan State Medical Institute",
    location: "Andijan, Uzbekistan",
    description: "Established medical institute with strong focus on clinical skills.",
    image: "https://images.unsplash.com/photo-1551601651-bc60f254d532?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹18-28 Lakhs total",
    features: ["Clinical Focus", "Modern Campus", "Affordable"],
    country: "uzbekistan",
  },
  {
    id: 30,
    name: "Bukhara State Medical University",
    location: "Bukhara, Uzbekistan",
    description: "Historic institution offering quality medical education and training.",
    image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?q=80&w=1394&auto=format&fit=crop",
    tuitionRange: "₹19-29 Lakhs total",
    features: ["Historical Setting", "Modern Facilities", "Clinical Practice"],
    country: "uzbekistan",
  },
  {
    id: 31,
    name: "Tashkent Medical Academy",
    location: "Tashkent, Uzbekistan",
    description: "Premier medical academy with comprehensive healthcare education.",
    image: "https://images.unsplash.com/photo-1607235332404-68d4a152c0c1?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹20-30 Lakhs total",
    features: ["Comprehensive Programs", "Research Focus", "Clinical Exposure"],
    country: "uzbekistan",
  },
  // Kazakhstan
  {
    id: 32,
    name: "Al-Farabi National University",
    location: "Almaty, Kazakhstan",
    description: "Prestigious national university with strong medical programs.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop",
    tuitionRange: "₹22-32 Lakhs total",
    features: ["National Recognition", "Modern Campus", "Research Opportunities"],
    country: "kazakhstan",
  },
  {
    id: 33,
    name: "Astana Medical University",
    location: "Astana, Kazakhstan",
    description: "Modern medical university in the capital with advanced facilities.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1332&auto=format&fit=crop",
    tuitionRange: "₹23-33 Lakhs total", 
    features: ["Advanced Facilities", "English Medium", "Clinical Training"],
    country: "kazakhstan",
  },
  {
    id: 34,
    name: "Caspian International School of Medicine",
    location: "Aktau, Kazakhstan",
    description: "International medical school with focus on global healthcare standards.",
    image: "https://images.unsplash.com/photo-1551601651-bc60f254d532?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹24-34 Lakhs total",
    features: ["International Standards", "Global Perspective", "Modern Training"],
    country: "kazakhstan",
  },
  {
    id: 35,
    name: "Kazakh National Medical University",
    location: "Almaty, Kazakhstan",
    description: "Leading medical university with comprehensive healthcare education.",
    image: "https://images.unsplash.com/photo-1579711739633-67345a366c82?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹22-32 Lakhs total",
    features: ["Comprehensive Programs", "Modern Facilities", "Clinical Experience"],
    country: "kazakhstan",
  },
  {
    id: 36,
    name: "South Kazakhstan Medical Academy",
    location: "Shymkent, Kazakhstan",
    description: "Regional medical academy known for quality education and training.",
    image: "https://images.unsplash.com/photo-1533042789716-e9a9c97cf4ee?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹21-31 Lakhs total",
    features: ["Regional Focus", "Practical Training", "Modern Campus"],
    country: "kazakhstan",
  },
  {
    id: 37,
    name: "University of International Business",
    location: "Almaty, Kazakhstan",
    description: "Modern university combining medical education with business aspects.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹23-33 Lakhs total", 
    features: ["Business Integration", "Modern Approach", "International Faculty"],
    country: "kazakhstan",
  },
  // Kyrgyzstan
  {
    id: 38,
    name: "Asian Medical Institute",
    location: "Kant, Kyrgyzstan",
    description: "Leading medical institute with focus on Asian and global medical practices.",
    image: "https://images.unsplash.com/photo-1563447080728-2b142f559d25?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹18-28 Lakhs total",
    features: ["Asian Focus", "Global Standards", "Affordable Education"],
    country: "kyrgyzstan",
  },
  {
    id: 39,
    name: "Bishkek International Medical Institute",
    location: "Bishkek, Kyrgyzstan",
    description: "International medical institute with modern healthcare education.",
    image: "https://images.unsplash.com/photo-1607582544116-448c7a129338?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹19-29 Lakhs total",
    features: ["International Standards", "Modern Campus", "Clinical Experience"],
    country: "kyrgyzstan",
  },
  {
    id: 40,
    name: "International School of Medicine",
    location: "Bishkek, Kyrgyzstan",
    description: "Global approach to medical education with diverse faculty.",
    image: "https://images.unsplash.com/photo-1551084157-1e1c973dc482?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹20-30 Lakhs total",
    features: ["Global Approach", "Diverse Faculty", "Clinical Training"],
    country: "kyrgyzstan",
  },
  {
    id: 41,
    name: "Osh State Medical University",
    location: "Osh, Kyrgyzstan",
    description: "Established university with strong regional healthcare focus.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1332&auto=format&fit=crop",
    tuitionRange: "₹19-29 Lakhs total",
    features: ["Regional Focus", "Established Programs", "Clinical Practice"],
    country: "kyrgyzstan",
  },
  // Malaysia
  {
    id: 42,
    name: "Lincoln University College",
    location: "Selangor, Malaysia",
    description: "Modern university with international standards and recognition.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1332&auto=format&fit=crop",
    tuitionRange: "₹35-45 Lakhs total",
    features: ["International Standards", "Modern Campus", "Quality Education"],
    country: "malaysia",
  },
  {
    id: 43,
    name: "MAHSA University",
    location: "Kuala Lumpur, Malaysia",
    description: "Leading healthcare university with state-of-the-art facilities.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop",
    tuitionRange: "₹36-46 Lakhs total",
    features: ["Advanced Facilities", "Strong Faculty", "Clinical Training"],
    country: "malaysia",
  },
  {
    id: 44,
    name: "Manipal International University",
    location: "Nilai, Malaysia",
    description: "Branch of prestigious Manipal University with global standards.",
    image: "https://images.unsplash.com/photo-1533042789716-e9a9c97cf4ee?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹38-48 Lakhs total",
    features: ["Global Network", "Modern Campus", "Quality Education"],
    country: "malaysia",
  },
  // Nepal
  {
    id: 45,
    name: "Janaki Medical College",
    location: "Janakpur, Nepal",
    description: "Quality medical education with focus on rural healthcare needs.",
    image: "https://images.unsplash.com/photo-1551601651-bc60f254d532?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹25-35 Lakhs total",
    features: ["Rural Focus", "Practical Training", "Accessible Education"],
    country: "nepal",
  },
  {
    id: 46,
    name: "Kathmandu Medical College",
    location: "Kathmandu, Nepal",
    description: "Premier medical institution in Nepal's capital with modern facilities.",
    image: "https://images.unsplash.com/photo-1563447080728-2b142f559d25?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹27-37 Lakhs total",
    features: ["Modern Facilities", "Central Location", "Strong Faculty"],
    country: "nepal",
  },
  {
    id: 47,
    name: "Nepalgunj Medical College",
    location: "Nepalgunj, Nepal",
    description: "Regional medical college focusing on practical healthcare skills.",
    image: "https://images.unsplash.com/photo-1533042789716-e9a9c97cf4ee?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹26-36 Lakhs total",
    features: ["Practical Focus", "Regional Healthcare", "Clinical Experience"],
    country: "nepal",
  }
];

const countryNames: Record<string, string> = {
  "russia": "Russia",
  "georgia": "Georgia",
  "philippines": "Philippines",
  "belarus": "Belarus",
  "moldova": "Moldova", 
  "bulgaria": "Bulgaria",
  "bosnia": "Bosnia",
  "uzbekistan": "Uzbekistan",
  "kazakhstan": "Kazakhstan",
  "kyrgyzstan": "Kyrgyzstan",
  "malaysia": "Malaysia",
  "nepal": "Nepal"
};

const countryGroups = [
  ["russia", "georgia"], 
  ["philippines", "belarus"], 
  ["moldova", "bulgaria", "bosnia"], 
  ["uzbekistan", "kazakhstan"], 
  ["kyrgyzstan", "malaysia", "nepal"]
];

const UniversitySection = () => {
  const [activeTab, setActiveTab] = useState<string>("russia");
  const [activeGroup, setActiveGroup] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        }
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll(".section-animate");
      for (const el of elements) {
        observer.observe(el);
      }
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".section-animate");
        for (const el of elements) {
          observer.unobserve(el);
        }
      }
    };
  }, []);

  // Find the group containing the active tab
  useEffect(() => {
    const groupIndex = countryGroups.findIndex(group => 
      group.includes(activeTab)
    );
    if (groupIndex !== -1) {
      setActiveGroup(groupIndex);
    }
  }, [activeTab]);

  return (
    <section id="universities" ref={sectionRef} className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="chip mb-4 section-animate">Top Universities</div>
        <h2 className="heading-md mb-6 section-animate stagger-1">
          Explore Premier Medical Universities Abroad
        </h2>
        <p className="text-gray-600 section-animate stagger-2">
          Discover world-class medical universities across various countries offering
          high-quality MBBS programs with international standards.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          {countryGroups.map((group) => (
            <div
              key={`group-${group.join('-')}`}
              className={`mb-8 ${
                activeGroup === countryGroups.indexOf(group) ? "block" : "hidden"
              }`}
            >
              <TabsList className="w-full flex flex-wrap justify-center mb-8">
                {group.map((country) => (
                  <TabsTrigger
                    key={country}
                    value={country}
                    className="px-6 py-3"
                  >
                    {countryNames[country]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          ))}

          {Object.keys(countryNames).map((country) => (
            <TabsContent key={country} value={country} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {universities
                  .filter((uni) => uni.country === country)
                  .map((university) => (
                    <div
                      key={university.id}
                      className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-200 hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={university.image}
                          alt={university.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-primary">
                          {university.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {university.location}
                        </p>
                        <p className="text-gray-700 mb-4 line-clamp-3">
                          {university.description}
                        </p>
                        <div className="mb-4">
                          <span className="text-primary font-medium">
                            Tuition: {university.tuitionRange}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {university.features.map((feature) => (
                            <div
                              key={`feature-${university.id}-${feature}`}
                              className="flex items-center text-gray-700"
                            >
                              <Check
                                size={16}
                                className="text-green-500 mr-2 flex-shrink-0"
                              />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Link to={`/university/${university.id}`}>
                            <Button
                              variant="outline"
                              className="w-full bg-white border-primary text-primary hover:bg-primary hover:text-white"
                            >
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-12 text-center">
                <Link to={`/university/${universities.find(uni => uni.country === country)?.id || 1}`}>
                  <Button className="bg-primary hover:bg-primary/90">
                    View Sample {countryNames[country]} University
                  </Button>
                </Link>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Compare Universities
          </h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>University</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Tuition</TableHead>
                <TableHead>Key Features</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {universities.slice(0, 5).map((university) => (
                <TableRow key={university.id}>
                  <TableCell className="font-medium">
                    {university.name}
                  </TableCell>
                  <TableCell>{university.location}</TableCell>
                  <TableCell>{university.tuitionRange}</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-5">
                      {university.features.map((feature) => (
                        <li key={`compare-${university.id}-${feature}`} className="text-sm">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default UniversitySection;
