import { useState } from "react";
import { UniversityCard } from "@/components/UniversityCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
interface University {
  id: number;
  name: string;
  location: string;
  city: string;
  tuitionFee: number;
  currency: string;
  facilities: string[];
  description: string;
  features: string[];
  image: string;
  country: string;
  rating: number;
  category: string;
  duration?: string;
  medium?: string;
}

const universities: University[] = [
  // Russia
  {
    id: 1,
    name: "Altai State Medical University",
    country: "russia",
    location: "Russia",
    city: "Barnaul",
    tuitionFee: 5000,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "A well-known medical university in Russia.",
    features: ["Affordable", "English medium", "Recognized by WHO"],
    facilities: ["Library", "Hostel"],
    rating: 4.5,
    category: "Medical",
  },

  // Russia
  {
    id: 2,
    name: "Bashkir State Medical University",
    country: "russia",
    location: "Russia",
    city: "Ufa",
    tuitionFee: 4800,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "A top-rated medical university located in Ufa.",
    features: ["Recognized by WHO", "Affordable fees"],
    facilities: ["Library", "Hostel"],
    rating: 4.3,
    category: "Medical",
  },
  {
    id: 3,
    name: "Mari State University",
    country: "russia",
    location: "Russia",
    city: "Yoshkar-Ola",
    tuitionFee: 4700,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Popular among Indian students pursuing MBBS.",
    features: ["WHO recognition", "English medium"],
    facilities: ["Library", "Hostel"],
    rating: 4.2,
    category: "Medical",
  },
  {
    id: 4,
    name: "Syktyvkar State University",
    country: "russia",
    location: "Russia",
    city: "Syktyvkar",
    tuitionFee: 4500,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Renowned for medical and technical education.",
    features: ["Low cost", "Modern labs"],
    facilities: ["Library", "Cafeteria"],
    rating: 4.1,
    category: "Medical",
  },
  {
    id: 5,
    name: "V.I Vernadsky Crimean Federal University",
    country: "russia",
    location: "Russia",
    city: "Simferopol",
    tuitionFee: 5000,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "One of the leading federal universities in Crimea.",
    features: ["WHO/NMC approved", "Modern campus"],
    facilities: ["Library", "Gym", "Hostel"],
    rating: 4.4,
    category: "Medical",
  },
  {
    id: 6,
    name: "Orel State Medical University",
    country: "russia",
    location: "Russia",
    city: "Orel",
    tuitionFee: 4600,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Affordable and quality education for international students.",
    features: ["Recognized globally", "Affordable"],
    facilities: ["Library", "Sports Complex"],
    rating: 4.2,
    category: "Medical",
  },
  {
    id: 7,
    name: "South Ural State Medical University",
    country: "russia",
    location: "Russia",
    city: "Chelyabinsk",
    tuitionFee: 4800,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Modern infrastructure and globally recognized curriculum.",
    features: ["English medium", "Research oriented"],
    facilities: ["Library", "Labs", "Hostel"],
    rating: 4.5,
    category: "Medical",
  },
  {
    id: 8,
    name: "Tver State Medical University",
    country: "russia",
    location: "Russia",
    city: "Tver",
    tuitionFee: 4700,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Well-established university with English programs.",
    features: ["WHO listed", "Clinical exposure"],
    facilities: ["Library", "Hospital"],
    rating: 4.3,
    category: "Medical",
  },
  {
    id: 9,
    name: "Kabardino Balkarian State University",
    country: "russia",
    location: "Russia",
    city: "Nalchik",
    tuitionFee: 4500,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Offers a variety of programs including MBBS.",
    features: ["Affordable", "Recognized by NMC"],
    facilities: ["Library", "Labs"],
    rating: 4.1,
    category: "Medical",
  },
  {
    id: 10,
    name: "Ulyanovsk State University",
    country: "russia",
    location: "Russia",
    city: "Ulyanovsk",
    tuitionFee: 4600,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "High reputation in research and clinical training.",
    features: ["Low cost", "English curriculum"],
    facilities: ["Library", "Sports Facilities"],
    rating: 4.2,
    category: "Medical",
  },
  {
    id: 11,
    name: "Orenburg State Medical University",
    country: "russia",
    location: "Russia",
    city: "Orenburg",
    tuitionFee: 4700,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Well-established Russian MBBS destination.",
    features: ["Top FMGE results", "Affordable"],
    facilities: ["Library", "Canteen", "Hostel"],
    rating: 4.3,
    category: "Medical",
  },

  // Georgia
  {
    id: 12,
    name: "Batumi Shote Rustaveli State University",
    country: "georgia",
    location: "Georgia",
    city: "Batumi",
    tuitionFee: 5000,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Public university known for modern MBBS education.",
    features: ["WHO approved", "English medium", "Affordable"],
    facilities: ["Library", "Hostel", "Labs"],
    rating: 4.3,
    category: "Medical",
  },
  {
    id: 13,
    name: "Caucasus International University",
    country: "georgia",
    location: "Georgia",
    city: "Tbilisi",
    tuitionFee: 5200,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Private medical university with modern facilities.",
    features: ["English taught", "Highly rated", "International students"],
    facilities: ["Library", "Sports Center", "Hostel"],
    rating: 4.4,
    category: "Medical",
  },
  {
    id: 14,
    name: "European University",
    country: "georgia",
    location: "Georgia",
    city: "Tbilisi",
    tuitionFee: 5100,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Recognized for strong medical curriculum and exposure.",
    features: ["Recognized by NMC", "Clinical training", "Affordable"],
    facilities: ["Library", "Labs", "Hostel"],
    rating: 4.2,
    category: "Medical",
  },
  {
    id: 15,
    name: "Georgian National University (SEU)",
    country: "georgia",
    location: "Georgia",
    city: "Tbilisi",
    tuitionFee: 5000,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "One of Georgia’s top private universities.",
    features: ["NMC approved", "English medium", "Affordable tuition"],
    facilities: ["Library", "Sports Grounds"],
    rating: 4.3,
    category: "Medical",
  },
  {
    id: 16,
    name: "Tbilisi State Medical University",
    country: "georgia",
    location: "Georgia",
    city: "Tbilisi",
    tuitionFee: 5300,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Oldest and most prestigious medical university in Georgia.",
    features: ["Top-tier education", "FMGE success", "Globally recognized"],
    facilities: ["Library", "Labs", "Clinical Centers"],
    rating: 4.5,
    category: "Medical",
  },

  // Philippines
  {
    id: 17,
    name: "Lyceum of the Philippines University",
    country: "philippines",
    location: "Philippines",
    city: "Manila",
    tuitionFee: 4200,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description:
      "Offers an American-style curriculum and excellent clinical training.",
    features: ["English medium", "US-based system", "Affordable"],
    facilities: ["Library", "Labs", "Hostel"],
    rating: 4.3,
    category: "Medical",
  },
  {
    id: 18,
    name: "Davao Medical School Foundation",
    country: "philippines",
    location: "Philippines",
    city: "Davao",
    tuitionFee: 4300,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description:
      "Popular among Indian students for quality education and FMGE results.",
    features: ["FMGE success", "English medium", "WHO recognized"],
    facilities: ["Library", "Clinical Labs", "Hostel"],
    rating: 4.5,
    category: "Medical",
  },
  {
    id: 19,
    name: "Emilio Aguinaldo Medical Center",
    country: "philippines",
    location: "Philippines",
    city: "Manila",
    tuitionFee: 4000,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Well-equipped and focused on hands-on clinical experience.",
    features: ["Affordable", "Modern training", "English programs"],
    facilities: ["Hospital", "Library", "Labs"],
    rating: 4.2,
    category: "Medical",
  },
  {
    id: 20,
    name: "Our Lady of Fatima University",
    country: "philippines",
    location: "Philippines",
    city: "Valenzuela",
    tuitionFee: 4100,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Accredited university known for high educational standards.",
    features: ["Global recognition", "Clinical exposure", "English taught"],
    facilities: ["Library", "Sports Facilities", "Hostel"],
    rating: 4.4,
    category: "Medical",
  },
  {
    id: 21,
    name: "UV Gullas College of Medicine",
    country: "philippines",
    location: "Philippines",
    city: "Cebu",
    tuitionFee: 4150,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description:
      "Highly reputed private medical college with excellent facilities.",
    features: ["English programs", "Affordable cost", "Recognized worldwide"],
    facilities: ["Library", "Labs", "Hostel"],
    rating: 4.3,
    category: "Medical",
  },
  {
    id: 22,
    name: "University of Perpetual Help System",
    country: "philippines",
    location: "Philippines",
    city: "Las Piñas",
    tuitionFee: 4200,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Focuses on practical training and academic excellence.",
    features: ["Modern infrastructure", "NMC approved", "English medium"],
    facilities: ["Library", "Clinical Labs", "Cafeteria"],
    rating: 4.4,
    category: "Medical",
  },

  // Belarus
  {
    id: 23,
    name: "Belarusian State Medical University",
    country: "belarus",
    location: "Belarus",
    city: "Minsk",
    tuitionFee: 4500,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description:
      "Premier medical university in Belarus, known for global recognition.",
    features: ["WHO approved", "Affordable tuition", "Modern facilities"],
    facilities: ["Library", "Hostel", "Labs"],
    rating: 4.4,
    category: "Medical",
  },
  {
    id: 24,
    name: "Grodno State Medical University",
    country: "belarus",
    location: "Belarus",
    city: "Grodno",
    tuitionFee: 4400,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Offers practical medical training and modern campus life.",
    features: ["Clinical exposure", "Modern labs", "Affordable"],
    facilities: ["Library", "Hostel", "Hospital"],
    rating: 4.3,
    category: "Medical",
  },
  {
    id: 25,
    name: "Vitebsk State Medical University",
    country: "belarus",
    location: "Belarus",
    city: "Vitebsk",
    tuitionFee: 4300,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description:
      "Provides international-standard education at affordable cost.",
    features: ["Recognized by NMC", "English programs", "Modern campus"],
    facilities: ["Library", "Gym", "Labs"],
    rating: 4.2,
    category: "Medical",
  },

  // Moldova
  {
    id: 26,
    name: "Nicolae Testemitanu State University of Medicine and Pharmacy",
    country: "moldova",
    location: "Moldova",
    city: "Chisinau",
    tuitionFee: 4200,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "National university offering top-notch medical programs.",
    features: ["WHO recognized", "Clinical training", "English curriculum"],
    facilities: ["Library", "Labs", "Hostel"],
    rating: 4.3,
    category: "Medical",
  },
  // Bulgaria
  {
    id: 27,
    name: "Medical University Pleven",
    country: "bulgaria",
    location: "Bulgaria",
    city: "Pleven",
    tuitionFee: 4600,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description:
      "Renowned medical university with strong international presence.",
    features: ["EU standard", "English medium", "Affordable tuition"],
    facilities: ["Library", "Labs", "Student Hostel"],
    rating: 4.4,
    category: "Medical",
  },

  // Bosnia
  {
    id: 28,
    name: "The University of East Sarajevo",
    country: "bosnia",
    location: "Bosnia and Herzegovina",
    city: "East Sarajevo",
    tuitionFee: 4100,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description:
      "Public university known for accessible and quality medical education.",
    features: [
      "Recognized globally",
      "Affordable cost",
      "Multicultural environment",
    ],
    facilities: ["Library", "Labs", "Dormitory"],
    rating: 4.2,
    category: "Medical",
  },

  // Uzbekistan
  {
    id: 29,
    name: "Andijan State Medical Institute",
    country: "uzbekistan",
    location: "Uzbekistan",
    city: "Andijan",
    tuitionFee: 4000,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Government medical institute known for clinical excellence.",
    features: ["Affordable", "English curriculum", "WHO approved"],
    facilities: ["Library", "Hostel", "Clinical Labs"],
    rating: 4.2,
    category: "Medical",
  },
  {
    id: 30,
    name: "Bukhara State Medical University",
    country: "uzbekistan",
    location: "Uzbekistan",
    city: "Bukhara",
    tuitionFee: 4100,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Reputed medical university with modern infrastructure.",
    features: ["Recognized by NMC", "English taught", "Affordable"],
    facilities: ["Library", "Hostel", "Labs"],
    rating: 4.3,
    category: "Medical",
  },
  {
    id: 31,
    name: "Tashkent Medical Academy",
    country: "uzbekistan",
    location: "Uzbekistan",
    city: "Tashkent",
    tuitionFee: 4300,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Prestigious medical academy in Uzbekistan's capital.",
    features: ["Clinical exposure", "Top-ranked", "English medium"],
    facilities: ["Library", "Cafeteria", "Labs"],
    rating: 4.4,
    category: "Medical",
  },

  // Kazakhstan
  {
    id: 32,
    name: "Al-Farabi National University",
    country: "kazakhstan",
    location: "Kazakhstan",
    city: "Almaty",
    tuitionFee: 4700,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Top national university with a strong medical faculty.",
    features: ["Recognized by WHO", "Affordable", "Modern labs"],
    facilities: ["Library", "Hostel", "Clinical Training"],
    rating: 4.5,
    category: "Medical",
  },
  {
    id: 33,
    name: "Astana Medical University",
    country: "kazakhstan",
    location: "Kazakhstan",
    city: "Astana",
    tuitionFee: 4800,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Highly recognized for MBBS programs and modern training.",
    features: ["WHO approved", "English medium", "Research focused"],
    facilities: ["Library", "Labs", "Sports Facility"],
    rating: 4.4,
    category: "Medical",
  },
  {
    id: 34,
    name: "Caspian International School of Medicine",
    country: "kazakhstan",
    location: "Kazakhstan",
    city: "Almaty",
    tuitionFee: 4600,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Modern institute known for advanced simulation labs.",
    features: ["Affordable", "English instruction", "WHO listed"],
    facilities: ["Library", "Clinical Training", "WiFi"],
    rating: 4.3,
    category: "Medical",
  },
  {
    id: 35,
    name: "Kazakh National Medical University",
    country: "kazakhstan",
    location: "Kazakhstan",
    city: "Almaty",
    tuitionFee: 4900,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description:
      "One of the best and oldest medical universities in Kazakhstan.",
    features: ["Globally recognized", "FMGE success", "Experienced faculty"],
    facilities: ["Library", "Hostel", "Research Centers"],
    rating: 4.6,
    category: "Medical",
  },
  {
    id: 36,
    name: "South Kazakhstan Medical Academy",
    country: "kazakhstan",
    location: "Kazakhstan",
    city: "Shymkent",
    tuitionFee: 4500,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Affordable and popular among international students.",
    features: ["Low cost", "NMC approved", "Clinical training"],
    facilities: ["Library", "Labs", "Student Center"],
    rating: 4.2,
    category: "Medical",
  },
  {
    id: 37,
    name: "University of International Business",
    country: "kazakhstan",
    location: "Kazakhstan",
    city: "Almaty",
    tuitionFee: 4400,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Known for integrating business and medical sciences.",
    features: ["International exposure", "Affordable", "Modern teaching"],
    facilities: ["Library", "Hostel", "Classrooms"],
    rating: 4.1,
    category: "Medical",
  },

  // Kyrgyzstan
  {
    id: 38,
    name: "Asian Medical Institute",
    country: "kyrgyzstan",
    location: "Kyrgyzstan",
    city: "Kant",
    tuitionFee: 4000,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description:
      "Top choice for Indian students with affordable MBBS programs.",
    features: ["English medium", "NMC approved", "Low living cost"],
    facilities: ["Library", "Labs", "Hostel"],
    rating: 4.2,
    category: "Medical",
  },
  {
    id: 39,
    name: "Bishkek International Medical Institute",
    country: "kyrgyzstan",
    location: "Kyrgyzstan",
    city: "Bishkek",
    tuitionFee: 4200,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Offers affordable and quality education in the capital city.",
    features: ["Recognized by WHO", "English medium", "Affordable"],
    facilities: ["Library", "Clinical Training", "Cafeteria"],
    rating: 4.3,
    category: "Medical",
  },
  {
    id: 40,
    name: "International School of Medicine",
    country: "kyrgyzstan",
    location: "Kyrgyzstan",
    city: "Bishkek",
    tuitionFee: 4300,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Prestigious medical school with international student base.",
    features: ["NMC listed", "Practical training", "English instruction"],
    facilities: ["Library", "Hostel", "Hospital access"],
    rating: 4.4,
    category: "Medical",
  },
  {
    id: 41,
    name: "Osh State Medical University",
    country: "kyrgyzstan",
    location: "Kyrgyzstan",
    city: "Osh",
    tuitionFee: 4100,
    currency: "USD",
    duration: "6 years",
    medium: "English",
    image: "",
    description: "Popular public university known for affordable MBBS.",
    features: ["Clinical rotations", "Low cost", "English programs"],
    facilities: ["Library", "Labs", "Student Hostel"],
    rating: 4.2,
    category: "Medical",
  },

  // Malaysia
  {
    id: 42,
    name: "Lincoln University College",
    country: "malaysia",
    location: "Malaysia",
    city: "Petaling Jaya",
    tuitionFee: 4500,
    currency: "USD",
    duration: "5 years",
    medium: "English",
    image: "",
    description: "A growing university offering MBBS with modern technology.",
    features: ["English taught", "Affordable", "Urban location"],
    facilities: ["Library", "WiFi", "Labs"],
    rating: 4.1,
    category: "Medical",
  },
  {
    id: 43,
    name: "Mahsa University",
    country: "malaysia",
    location: "Malaysia",
    city: "Selangor",
    tuitionFee: 4700,
    currency: "USD",
    duration: "5 years",
    medium: "English",
    image: "",
    description: "A leading private university in Malaysia for medicine.",
    features: ["Clinical training", "Modern campus", "NMC approved"],
    facilities: ["Library", "Simulation Labs", "Hostel"],
    rating: 4.3,
    category: "Medical",
  },
  {
    id: 44,
    name: "Manipal International University",
    country: "malaysia",
    location: "Malaysia",
    city: "Nilai",
    tuitionFee: 4800,
    currency: "USD",
    duration: "5 years",
    medium: "English",
    image: "",
    description: "Part of the renowned Manipal Group with excellent training.",
    features: ["Indian curriculum", "International exposure", "English medium"],
    facilities: ["Library", "Student Housing", "Labs"],
    rating: 4.4,
    category: "Medical",
  },

  // Nepal
  {
    id: 45,
    name: "Janaki Medical College",
    country: "nepal",
    location: "Nepal",
    city: "Janakpur",
    tuitionFee: 4300,
    currency: "USD",
    duration: "5.5 years",
    medium: "English",
    image: "",
    description: "Private medical college approved by NMC and WHO.",
    features: ["Affordable", "English medium", "Good FMGE result"],
    facilities: ["Library", "Cafeteria", "Labs"],
    rating: 4.1,
    category: "Medical",
  },
  {
    id: 46,
    name: "Kathmandu Medical College",
    country: "nepal",
    location: "Nepal",
    city: "Kathmandu",
    tuitionFee: 4600,
    currency: "USD",
    duration: "5.5 years",
    medium: "English",
    image: "",
    description: "Leading institute in Nepal for medical education.",
    features: ["NMC listed", "Modern hospital", "Experienced faculty"],
    facilities: ["Library", "Hostel", "Labs"],
    rating: 4.3,
    category: "Medical",
  },
  {
    id: 47,
    name: "Nepalgunj Medical College",
    country: "nepal",
    location: "Nepal",
    city: "Nepalgunj",
    tuitionFee: 4500,
    currency: "USD",
    duration: "5.5 years",
    medium: "English",
    image: "",
    description: "Recognized institution with international curriculum.",
    features: ["Clinical exposure", "WHO/NMC approved", "Low cost"],
    facilities: ["Library", "Hostel", "Hospital Access"],
    rating: 4.2,
    category: "Medical",
  }
];

export default function UniversitySection() {
  const [selectedCountry, setSelectedCountry] = useState("russia");

  const countries = Array.from(new Set(universities.map((uni) => uni.country)));
  const filteredUniversities = universities.filter(
    (uni) => uni.country === selectedCountry
  );

  return (
    <div className="px-4 md:px-8 py-10">
      <Tabs defaultValue={selectedCountry} onValueChange={setSelectedCountry}>
        <TabsList className="flex flex-wrap justify-center gap-2 mb-6">
          {countries.map((country) => (
            <TabsTrigger key={country} value={country}>
              {country.charAt(0).toUpperCase() + country.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCountry}>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
            {filteredUniversities.map((uni) => (
              <UniversityCard key={uni.id} university={uni} viewMode="grid" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
