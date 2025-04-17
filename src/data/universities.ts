import { University } from "@/pages/UniversitiesPage";

// List of all possible facilities for filtering
export const facilityOptions = [
  "Library",
  "Laboratory",
  "Cafeteria",
  "Accommodation",
  "WiFi",
  "Sports Complex",
  "Computer Lab",
  "Medical Center",
  "Student Lounge",
  "Gym",
  "Swimming Pool",
  "Research Center",
  "Auditorium",
  "Study Rooms",
  "International Student Office"
];

// Complete list of medical universities
export const universities: University[] = [
  // Russia Universities
  {
    id: 1,
    name: "Altai State Medical University",
    country: "Russia",
    city: "Barnaul",
    tuitionFee: 20000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/RUSSIA/ALTAI.jpg",
    facilities: ["Library", "Laboratory", "Cafeteria", "Accommodation", "Medical Center"],
    rating: 4.3,
    category: "Medical",
    description: "One of Russia's premier medical institutions known for its excellent medical education and research facilities",
    longDescription: "Altai State Medical University is renowned for its comprehensive medical education programs and state-of-the-art facilities. The university offers a perfect blend of theoretical knowledge and practical training.",
    establishedYear: "1954",
    studentCount: "12,000+",
    facultyCount: "800+",
    hospitalAffiliations: ["Altai Regional Clinical Hospital", "City Clinical Hospital No. 1", "Children's Regional Clinical Hospital"],
    recognition: ["WHO", "Medical Council of India", "Ministry of Education and Science of Russia"],
    courses: [
      { name: "General Medicine (MBBS)", duration: "6 years", fees: "$4,000/year" },
      { name: "Dentistry", duration: "5 years", fees: "$4,200/year" },
      { name: "Pharmacy", duration: "5 years", fees: "$3,800/year" }
    ],
    admissionProcess: [
      "Submit online application",
      "Provide academic transcripts",
      "English proficiency test scores",
      "Medical fitness certificate",
      "Visa documentation"
    ],
    eligibility: [
      "Minimum 50% in PCB (Physics, Chemistry, Biology)",
      "NEET qualification (for Indian students)",
      "Age 17-25 years",
      "English proficiency"
    ],
    advantages: [
      "Affordable tuition fees",
      "Modern infrastructure",
      "Multicultural environment",
      "Clinical exposure from early years",
      "International faculty"
    ],
    documents: [
      "10th and 12th mark sheets",
      "NEET scorecard",
      "Passport",
      "Medical certificate",
      "English proficiency certificate"
    ],
    scholarships: [
      "Merit-based scholarships",
      "Sports scholarships",
      "Research fellowships",
      "Government grants"
    ],
    hostelInfo: "Separate hostels for boys and girls with modern amenities, 24/7 security, and Wi-Fi facilities",
    indianFoodAvailability: "Indian mess available with vegetarian and non-vegetarian options"
  },
  {
    id: 2,
    name: "Bashkir State Medical University",
    country: "Russia",
    city: "Ufa",
    tuitionFee: 22000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/RUSSIA/BASHKIR.jpg",
    facilities: ["Library", "Laboratory", "Medical Center", "Research Center"],
    rating: 4.4,
    category: "Medical"
  },
  {
    id: 3,
    name: "Mari State University",
    country: "Russia",
    city: "Yoshkar-Ola",
    tuitionFee: 18000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/RUSSIA/MARI.jpg",
    facilities: ["Library", "Laboratory", "Accommodation", "WiFi"],
    rating: 4.2,
    category: "Medical",
    description: "A prestigious medical university offering quality education in a student-friendly environment",
    longDescription: "Mari State University combines traditional medical education with modern teaching methodologies. The university is known for its personalized attention to students and strong practical training.",
    establishedYear: "1972",
    studentCount: "10,000+",
    facultyCount: "600+",
    hospitalAffiliations: ["Mari Republican Clinical Hospital", "City Hospital of Yoshkar-Ola", "Regional Children's Hospital"],
    recognition: ["WHO", "Medical Council of India", "Russian Ministry of Education"],
    courses: [
      { name: "General Medicine (MBBS)", duration: "6 years", fees: "$3,800/year" },
      { name: "Dentistry", duration: "5 years", fees: "$4,000/year" },
      { name: "Pharmacy", duration: "5 years", fees: "$3,500/year" }
    ],
    admissionProcess: [
      "Application form submission",
      "Academic credentials verification",
      "Language proficiency test",
      "Medical examination",
      "Visa application"
    ],
    eligibility: [
      "Minimum 50% in PCB",
      "NEET qualification (for Indian students)",
      "Age: 17-25 years",
      "English language proficiency"
    ],
    advantages: [
      "Affordable education",
      "Modern teaching facilities",
      "International student support",
      "Practical training focus",
      "Safe campus environment"
    ],
    documents: [
      "Academic certificates",
      "NEET scorecard",
      "Passport copy",
      "Health certificate",
      "Language proficiency proof"
    ],
    scholarships: [
      "Merit scholarships",
      "Sports excellence awards",
      "Cultural talent grants",
      "Financial aid programs"
    ],
    hostelInfo: "Comfortable hostel accommodation with modern amenities, study rooms, and security",
    indianFoodAvailability: "Indian food available in university cafeteria with special arrangements for vegetarians"
  },
  // Georgia Universities
  {
    id: 4,
    name: "Batumi Shote Rustavli State University",
    country: "Georgia",
    city: "Batumi",
    tuitionFee: 15000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/GEORGIA/BATUMI.jpg",
    facilities: ["Library", "Laboratory", "Cafeteria", "International Student Office"],
    rating: 4.3,
    category: "Medical",
    description: "A prestigious Georgian medical university known for its international standards and quality education",
    longDescription: "Batumi Shota Rustaveli State University offers world-class medical education with a focus on practical training and modern teaching methodologies. The university provides an excellent learning environment for international students.",
    establishedYear: "1935",
    studentCount: "9,000+",
    facultyCount: "500+",
    hospitalAffiliations: ["Batumi Regional Hospital", "University Medical Center", "Children's Medical Center"],
    recognition: ["WHO", "Medical Council of India", "Ministry of Education of Georgia"],
    courses: [
      { name: "General Medicine (MBBS)", duration: "6 years", fees: "$4,000/year" },
      { name: "Dentistry", duration: "5 years", fees: "$4,200/year" },
      { name: "Pharmacy", duration: "4 years", fees: "$3,800/year" }
    ],
    admissionProcess: [
      "Online application submission",
      "Document verification",
      "Admission interview",
      "Medical check-up",
      "Visa processing"
    ],
    eligibility: [
      "Minimum 50% in PCB",
      "NEET qualification (for Indian students)",
      "Age 17-25 years",
      "English proficiency required"
    ],
    advantages: [
      "Affordable tuition fees",
      "Modern infrastructure",
      "Beautiful campus location",
      "Strong clinical exposure",
      "International faculty"
    ],
    documents: [
      "High school transcripts",
      "NEET scorecard",
      "Valid passport",
      "Medical certificate",
      "English proficiency certificate"
    ],
    scholarships: [
      "Academic merit scholarships",
      "Sports scholarships",
      "Cultural scholarships",
      "Need-based grants"
    ],
    hostelInfo: "Well-furnished hostels with modern amenities, separate blocks for boys and girls",
    indianFoodAvailability: "Indian cuisine available in campus cafeteria with vegetarian options"
  },
  {
    id: 5,
    name: "Caucasus International University",
    country: "Georgia",
    city: "Tbilisi",
    tuitionFee: 16000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/GEORGIA/CAUCASUS.jpg",
    facilities: ["Library", "Laboratory", "WiFi", "Medical Center"],
    rating: 4.2,
    category: "Medical",
    description: "A leading private medical university in Georgia offering high-quality international education",
    longDescription: "Caucasus International University is committed to excellence in medical education, combining theoretical knowledge with hands-on clinical experience. The university provides a multicultural environment ideal for international students.",
    establishedYear: "1995",
    studentCount: "8,500+",
    facultyCount: "450+",
    hospitalAffiliations: ["Tbilisi Central Hospital", "CIU University Clinic", "Georgian-American Medical Center"],
    recognition: ["WHO", "Medical Council of India", "Georgian Medical Council"],
    courses: [
      { name: "General Medicine (MBBS)", duration: "6 years", fees: "$4,500/year" },
      { name: "Dentistry", duration: "5 years", fees: "$4,800/year" },
      { name: "Pharmacy", duration: "4 years", fees: "$4,000/year" }
    ],
    admissionProcess: [
      "Online registration",
      "Document submission",
      "Entrance examination",
      "Medical examination",
      "Visa application support"
    ],
    eligibility: [
      "Minimum 55% in PCB",
      "NEET qualified (for Indian students)",
      "Age: 17-25 years",
      "English language proficiency"
    ],
    advantages: [
      "Modern teaching methodology",
      "International faculty members",
      "Advanced clinical facilities",
      "Strong research programs",
      "Career guidance support"
    ],
    documents: [
      "Academic transcripts",
      "NEET score certificate",
      "Passport copy",
      "Health certificate",
      "Language proficiency proof"
    ],
    scholarships: [
      "Academic excellence awards",
      "Research scholarships",
      "Sports achievement grants",
      "Financial assistance programs"
    ],
    hostelInfo: "Modern hostel facilities with 24/7 security, internet connectivity, and study areas",
    indianFoodAvailability: "Indian food court with dedicated Indian chefs and diverse menu options"
  },
  // Philippines Universities
  {
    id: 17,
    name: "Lyceum of the Philippines University",
    country: "Philippines",
    city: "Manila",
    tuitionFee: 8000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/PHILIPPINES/LYCEUM.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.2,
    category: "Medical",
    description: "Leading university for medical education in Philippines",
    longDescription: "LPU offers comprehensive medical education with modern facilities."
  },
  {
    id: 18,
    name: "Davao Medical School Foundation",
    country: "Philippines",
    city: "Davao",
    tuitionFee: 8200,
    currency: "$",
    image: "/UNIVERSITY IMAGES/PHILIPPINES/DAVAO.jpg",
    facilities: ["Library", "Laboratory", "Hospital", "Research Center"],
    rating: 4.3,
    category: "Medical",
    description: "Premier medical school with excellent clinical exposure",
    longDescription: "DMSF provides quality medical education with strong emphasis on clinical training."
  },
  {
    id: 19,
    name: "Emilio Aguinaldo Medical Center",
    country: "Philippines",
    city: "Cavite",
    tuitionFee: 8100,
    currency: "$",
    image: "/UNIVERSITY IMAGES/PHILIPPINES/EMILIO.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.1,
    category: "Medical",
    description: "Well-established medical center for aspiring doctors",
    longDescription: "EAMC offers comprehensive medical education with modern facilities."
  },
  {
    id: 20,
    name: "Our Lady of Fatima University",
    country: "Philippines",
    city: "Valenzuela",
    tuitionFee: 8300,
    currency: "$",
    image: "/UNIVERSITY IMAGES/PHILIPPINES/FATIMA.jpg",
    facilities: ["Library", "Laboratory", "Hospital", "Research Center"],
    rating: 4.4,
    category: "Medical",
    description: "Leading medical university with strong clinical program",
    longDescription: "OLFU is known for its excellent medical education and clinical training."
  },
  {
    id: 21,
    name: "UV Gullas College of Medicine",
    country: "Philippines",
    city: "Cebu",
    tuitionFee: 8000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/PHILIPPINES/UVGULLAS.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.2,
    category: "Medical",
    description: "Established medical college with modern teaching methods",
    longDescription: "UV Gullas provides quality medical education with focus on practical training."
  },
  {
    id: 22,
    name: "University of Perpetual Help System",
    country: "Philippines",
    city: "Las Piñas",
    tuitionFee: 8200,
    currency: "$",
    image: "/UNIVERSITY IMAGES/PHILIPPINES/PERPETUAL.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.3,
    category: "Medical",
    description: "Comprehensive medical education with modern facilities",
    longDescription: "UPHS offers excellent medical education with strong clinical exposure."
  },
  // Belarus Universities
  {
    id: 23,
    name: "Belarusian State Medical University",
    country: "Belarus",
    city: "Minsk",
    tuitionFee: 4800,
    currency: "$",
    image: "/UNIVERSITY IMAGES/BELARUS/BSMU.jpg",
    facilities: ["Library", "Laboratory", "Hospital", "Research Center"],
    rating: 4.5,
    category: "Medical",
    description: "Premier medical university in Belarus",
    longDescription: "BSMU is one of the oldest and most prestigious medical universities in Belarus."
  },
  {
    id: 24,
    name: "Grodno State Medical University",
    country: "Belarus",
    city: "Grodno",
    tuitionFee: 4600,
    currency: "$",
    image: "/UNIVERSITY IMAGES/BELARUS/GRODNO.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.3,
    category: "Medical",
    description: "Leading medical university in Grodno",
    longDescription: "GSMU offers quality medical education with modern facilities."
  },
  {
    id: 25,
    name: "Vitebsk State Medical University",
    country: "Belarus",
    city: "Vitebsk",
    tuitionFee: 4700,
    currency: "$",
    image: "/UNIVERSITY IMAGES/BELARUS/VITEBSK.jpg",
    facilities: ["Library", "Laboratory", "Hospital", "Research Center"],
    rating: 4.4,
    category: "Medical",
    description: "Renowned for medical education and research",
    longDescription: "VSMU provides excellent medical education with strong research focus."
  },
  // Moldova Universities
  {
    id: 10,
    name: "Nicolae Testemitanu State University of Medicine",
    country: "Moldova",
    city: "Chisinau",
    tuitionFee: 16000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/MOLDOVA/NICOLAE.jpg",
    facilities: ["Library", "Laboratory", "Medical Center", "Research Center"],
    rating: 4.2,
    category: "Medical"
  },
  // Bulgaria Universities
  {
    id: 11,
    name: "Medical University Pleven",
    country: "Bulgaria",
    city: "Pleven",
    tuitionFee: 19000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/BULGARIA/PLEVEN.jpg",
    facilities: ["Library", "Laboratory", "Medical Center", "Research Center"],
    rating: 4.3,
    category: "Medical"
  },
  // Uzbekistan Universities
  {
    id: 12,
    name: "Andijan State Medical Institute",
    country: "Uzbekistan",
    city: "Andijan",
    tuitionFee: 15000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/UZBEKISTAN/ANDIJAN.jpg",
    facilities: ["Library", "Laboratory", "Medical Center"],
    rating: 4.1,
    category: "Medical"
  },
  // Additional Georgia Universities
  {
    id: 14,
    name: "European University",
    country: "Georgia",
    city: "Tbilisi",
    tuitionFee: 15500,
    currency: "$",
    image: "/UNIVERSITY IMAGES/GEORGIA/EUROPEAN.jpg",
    facilities: ["Library", "Laboratory", "Cafeteria", "Research Center"],
    rating: 4.3,
    category: "Medical",
    description: "Modern medical university with European standards",
    longDescription: "European University offers world-class medical education with modern facilities and international faculty.",
    establishedYear: "2012",
    studentCount: "5,000+",
    facultyCount: "300+",
    hospitalAffiliations: ["European University Hospital", "Tbilisi Medical Center"],
    recognition: ["WHO", "Medical Council of India", "Ministry of Education of Georgia"],
    courses: [
      { name: "General Medicine (MBBS)", duration: "6 years", fees: "$5,500/year" }
    ],
    admissionProcess: [
      "Online application",
      "Document verification",
      "Medical check-up",
      "Visa processing"
    ],
    eligibility: [
      "Minimum 50% in PCB",
      "NEET qualification (for Indian students)",
      "Age 17-25 years"
    ]
  },
  {
    id: 15,
    name: "Georgian National University (SEU)",
    country: "Georgia",
    city: "Tbilisi",
    tuitionFee: 15300,
    currency: "$",
    image: "/UNIVERSITY IMAGES/GEORGIA/SEU.jpg",
    facilities: ["Library", "Laboratory", "Research Center"],
    rating: 4.2,
    category: "Medical",
    description: "Leading private university for medical education",
    longDescription: "SEU provides quality medical education with modern infrastructure and experienced faculty."
  },
  {
    id: 16,
    name: "Tbilisi State Medical University",
    country: "Georgia",
    city: "Tbilisi",
    tuitionFee: 15800,
    currency: "$",
    image: "/UNIVERSITY IMAGES/GEORGIA/TBILISI.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.5,
    category: "Medical",
    description: "One of the oldest and most prestigious medical universities",
    longDescription: "TSMU is renowned for its excellence in medical education and research."
  },
  // Moldova University
  {
    id: 26,
    name: "Nicolae Testemitanu State University of Medicine and Pharmacy",
    country: "Moldova",
    city: "Chisinau",
    tuitionFee: 5000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/MOLDOVA/NICOLAE.jpg",
    facilities: ["Library", "Laboratory", "Hospital", "Research Center"],
    rating: 4.4,
    category: "Medical",
    description: "Leading medical university in Moldova",
    longDescription: "Nicolae Testemitanu State University offers excellent medical education with European standards."
  },
  // Bulgaria University
  {
    id: 27,
    name: "Medical University Pleven",
    country: "Bulgaria",
    city: "Pleven",
    tuitionFee: 8000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/BULGARIA/PLEVEN.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.3,
    category: "Medical",
    description: "Modern medical university with European standards",
    longDescription: "Medical University Pleven provides quality education with strong clinical focus."
  },
  // Bosnia University
  {
    id: 28,
    name: "The University of East Sarajevo",
    country: "Bosnia",
    city: "East Sarajevo",
    tuitionFee: 7000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/BOSNIA/EASTSARAJEVO.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.2,
    category: "Medical",
    description: "Leading medical university in Bosnia",
    longDescription: "The University of East Sarajevo offers comprehensive medical education."
  },
  // Uzbekistan Universities
  {
    id: 29,
    name: "Andijan State Medical Institute",
    country: "Uzbekistan",
    city: "Andijan",
    tuitionFee: 4000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/UZBEKISTAN/ANDIJAN.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.1,
    category: "Medical",
    description: "Well-established medical institute",
    longDescription: "Andijan State Medical Institute provides quality medical education."
  },
  {
    id: 30,
    name: "Bukhara State Medical University",
    country: "Uzbekistan",
    city: "Bukhara",
    tuitionFee: 4200,
    currency: "$",
    image: "/UNIVERSITY IMAGES/UZBEKISTAN/BUKHARA.jpg",
    facilities: ["Library", "Laboratory", "Hospital", "Research Center"],
    rating: 4.2,
    category: "Medical",
    description: "Modern medical university in Bukhara",
    longDescription: "Bukhara State Medical University offers comprehensive medical programs."
  },
  {
    id: 31,
    name: "Tashkent Medical Academy",
    country: "Uzbekistan",
    city: "Tashkent",
    tuitionFee: 4500,
    currency: "$",
    image: "/UNIVERSITY IMAGES/UZBEKISTAN/TASHKENT.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.4,
    category: "Medical",
    description: "Premier medical academy in Uzbekistan",
    longDescription: "Tashkent Medical Academy is known for its excellent medical education."
  },
  // Kazakhstan Universities
  {
    id: 32,
    name: "Al-Farabi National University",
    country: "Kazakhstan",
    city: "Almaty",
    tuitionFee: 4800,
    currency: "$",
    image: "/UNIVERSITY IMAGES/KAZAKHSTAN/ALFARABI.jpg",
    facilities: ["Library", "Laboratory", "Hospital", "Research Center"],
    rating: 4.4,
    category: "Medical",
    description: "Leading national university in Kazakhstan",
    longDescription: "Al-Farabi National University offers excellent medical education."
  },
  {
    id: 33,
    name: "Astana Medical University",
    country: "Kazakhstan",
    city: "Astana",
    tuitionFee: 4600,
    currency: "$",
    image: "/UNIVERSITY IMAGES/KAZAKHSTAN/ASTANA.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.3,
    category: "Medical",
    description: "Modern medical university in the capital",
    longDescription: "Astana Medical University provides quality medical education."
  },
  {
    id: 34,
    name: "Caspian International School of Medicine",
    country: "Kazakhstan",
    city: "Aktau",
    tuitionFee: 4500,
    currency: "$",
    image: "/UNIVERSITY IMAGES/KAZAKHSTAN/CASPIAN.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.2,
    category: "Medical",
    description: "International medical school",
    longDescription: "CISM offers modern medical education with international standards."
  },
  {
    id: 35,
    name: "Kazakh National Medical University",
    country: "Kazakhstan",
    city: "Almaty",
    tuitionFee: 5000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/KAZAKHSTAN/KAZAKH.jpg",
    facilities: ["Library", "Laboratory", "Hospital", "Research Center"],
    rating: 4.5,
    category: "Medical",
    description: "Premier medical university in Kazakhstan",
    longDescription: "KazNMU is one of the oldest and most prestigious medical universities."
  },
  {
    id: 36,
    name: "South Kazakhstan Medical Academy",
    country: "Kazakhstan",
    city: "Shymkent",
    tuitionFee: 4400,
    currency: "$",
    image: "/UNIVERSITY IMAGES/KAZAKHSTAN/SOUTHKAZAKH.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.2,
    category: "Medical",
    description: "Leading medical academy in South Kazakhstan",
    longDescription: "SKMA provides comprehensive medical education."
  },
  {
    id: 37,
    name: "University of International Business",
    country: "Kazakhstan",
    city: "Almaty",
    tuitionFee: 4700,
    currency: "$",
    image: "/UNIVERSITY IMAGES/KAZAKHSTAN/UIB.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.3,
    category: "Medical",
    description: "Modern university with international standards",
    longDescription: "UIB offers quality medical education with international collaboration."
  },
  // Kyrgyzstan Universities
  {
    id: 38,
    name: "Asian Medical Institute",
    country: "Kyrgyzstan",
    city: "Kant",
    tuitionFee: 4000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/KYRGYZSTAN/ASIAN.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.1,
    category: "Medical",
    description: "Modern medical institute",
    longDescription: "Asian Medical Institute provides quality medical education."
  },
  {
    id: 39,
    name: "Bishkek International Medical Institute",
    country: "Kyrgyzstan",
    city: "Bishkek",
    tuitionFee: 4200,
    currency: "$",
    image: "/UNIVERSITY IMAGES/KYRGYZSTAN/BISHKEK.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.2,
    category: "Medical",
    description: "International medical institute in capital",
    longDescription: "BIMI offers modern medical education with international standards."
  },
  {
    id: 40,
    name: "International School of Medicine",
    country: "Kyrgyzstan",
    city: "Bishkek",
    tuitionFee: 4300,
    currency: "$",
    image: "/UNIVERSITY IMAGES/KYRGYZSTAN/ISM.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.3,
    category: "Medical",
    description: "Leading international medical school",
    longDescription: "ISM provides excellent medical education with modern facilities."
  },
  {
    id: 41,
    name: "Osh State Medical University",
    country: "Kyrgyzstan",
    city: "Osh",
    tuitionFee: 4100,
    currency: "$",
    image: "/UNIVERSITY IMAGES/KYRGYZSTAN/OSH.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.2,
    category: "Medical",
    description: "Well-established medical university",
    longDescription: "OSMU offers comprehensive medical education."
  },
  // Malaysia Universities
  {
    id: 42,
    name: "Lincoln University College",
    country: "Malaysia",
    city: "Petaling Jaya",
    tuitionFee: 12000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/MALAYSIA/LINCOLN.jpg",
    facilities: ["Library", "Laboratory", "Hospital", "Research Center"],
    rating: 4.3,
    category: "Medical",
    description: "Modern medical college with international standards",
    longDescription: "LUC provides quality medical education with modern facilities."
  },
  {
    id: 43,
    name: "MAHSA University",
    country: "Malaysia",
    city: "Kuala Lumpur",
    tuitionFee: 12500,
    currency: "$",
    image: "/UNIVERSITY IMAGES/MALAYSIA/MAHSA.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.4,
    category: "Medical",
    description: "Leading private medical university",
    longDescription: "MAHSA University offers excellent medical education."
  },
  {
    id: 44,
    name: "Manipal International University",
    country: "Malaysia",
    city: "Nilai",
    tuitionFee: 12300,
    currency: "$",
    image: "/UNIVERSITY IMAGES/MALAYSIA/MANIPAL.jpg",
    facilities: ["Library", "Laboratory", "Hospital", "Research Center"],
    rating: 4.4,
    category: "Medical",
    description: "International branch of Manipal Group",
    longDescription: "MIU provides world-class medical education."
  },
  // Nepal Universities
  {
    id: 45,
    name: "Janaki Medical College",
    country: "Nepal",
    city: "Janakpur",
    tuitionFee: 8000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/NEPAL/JANAKI.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.1,
    category: "Medical",
    description: "Established medical college",
    longDescription: "JMC offers quality medical education with modern facilities."
  },
  {
    id: 46,
    name: "Kathmandu Medical College",
    country: "Nepal",
    city: "Kathmandu",
    tuitionFee: 8500,
    currency: "$",
    image: "/UNIVERSITY IMAGES/NEPAL/KATHMANDU.jpg",
    facilities: ["Library", "Laboratory", "Hospital", "Research Center"],
    rating: 4.3,
    category: "Medical",
    description: "Premier medical college in capital",
    longDescription: "KMC provides excellent medical education with research focus."
  },
  {
    id: 47,
    name: "Nepalgunj Medical College",
    country: "Nepal",
    city: "Nepalgunj",
    tuitionFee: 8200,
    currency: "$",
    image: "/UNIVERSITY IMAGES/NEPAL/NEPALGUNJ.jpg",
    facilities: ["Library", "Laboratory", "Hospital"],
    rating: 4.2,
    category: "Medical",
    description: "Well-established medical college",
    longDescription: "NMC offers comprehensive medical education."
  }
];
