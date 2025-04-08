
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState("General");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestions, setOpenQuestions] = useState<number[]>([0]);
  
  const categories = [
    "General",
    "Admission",
    "Visa",
    "Fees & Expenses",
    "Life Abroad",
    "FMGE/NEXT",
    "Career"
  ];
  
  const faqsByCategory = {
    "General": [
      {
        question: "Why should I pursue MBBS abroad?",
        answer: "Pursuing MBBS abroad offers several advantages, including lower tuition fees compared to private medical colleges in India, easier admission process, globally recognized degrees, exposure to advanced medical technologies, and diverse cultural experiences that enhance personal growth. Many foreign medical universities also offer English-medium instruction, making it accessible for Indian students."
      },
      {
        question: "Are medical degrees from foreign universities recognized in India?",
        answer: "Yes, medical degrees from foreign universities listed in the World Directory of Medical Schools (WDOMS) are recognized in India. However, graduates must clear the Foreign Medical Graduate Examination (FMGE) or the upcoming National Exit Test (NEXT) to practice medicine in India. It's important to verify that your chosen university is recognized by the National Medical Commission (NMC) before enrollment."
      },
      {
        question: "How does Future Doctor help students?",
        answer: "Future Doctor provides comprehensive support throughout the entire process of studying medicine abroad. Our services include university selection based on your academic profile and budget, admission guidance, documentation assistance, visa support, pre-departure orientation, accommodation arrangements, and post-admission services including FMGE/NEXT coaching. We maintain partnerships with 100+ medical universities across 15+ countries to provide the best options for our students."
      },
      {
        question: "Which countries are popular for MBBS among Indian students?",
        answer: "Popular destinations for MBBS among Indian students include Russia, Georgia, Kazakhstan, Kyrgyzstan, Philippines, Bangladesh, Armenia, and Belarus. These countries offer quality medical education at affordable costs, have English-medium programs, provide a safe environment for international students, and offer degrees recognized by international medical councils."
      }
    ],
    "Admission": [
      {
        question: "What are the eligibility criteria for admission to foreign medical universities?",
        answer: "The general eligibility criteria include: Minimum 50% marks in 10+2 with Physics, Chemistry, and Biology (45% for reserved categories), NEET qualification as per NMC guidelines, age between 17-25 years (with some relaxation for reserved categories), and English language proficiency. Some universities may have additional requirements, so it's important to check specific university criteria."
      },
      {
        question: "Is NEET mandatory for studying MBBS abroad?",
        answer: "Yes, as per the National Medical Commission (NMC) regulations, NEET qualification is mandatory for Indian students seeking admission to foreign medical universities. This rule ensures that students meet the minimum standards required to study medicine. However, the minimum NEET score requirement may vary by country and university."
      },
      {
        question: "What is the admission process for medical universities abroad?",
        answer: "The general admission process includes: Submitting an application form with required documents, paying the application fee, receiving an invitation letter upon acceptance, paying the initial tuition fee, obtaining an official admission letter, applying for a student visa, and finally traveling to the destination country. Future Doctor guides students through each of these steps to ensure a smooth process."
      },
      {
        question: "When should I apply for admission to study MBBS abroad?",
        answer: "The ideal time to apply is right after the 12th board exams and NEET results, typically between June and August for the fall intake. Some universities also have spring intakes (January-February). It's advisable to start researching and shortlisting universities at least 6 months before the intended admission date to ensure ample time for the application process and visa formalities."
      }
    ],
    "Visa": [
      {
        question: "How do I apply for a student visa?",
        answer: "The student visa application process generally involves: Receiving an official admission letter from the university, gathering required documents (passport, admission letter, financial statements, medical certificates, etc.), filling out the visa application form, paying the visa fee, scheduling and attending a visa interview at the respective country's embassy or consulate, and waiting for visa processing. Future Doctor provides comprehensive visa guidance to ensure a smooth application process."
      },
      {
        question: "What documents are required for a student visa?",
        answer: "Common documents required for a student visa include: Valid passport (with at least 18 months validity), official admission letter from the university, proof of tuition fee payment, financial statements showing sufficient funds to support your stay, medical and fitness certificates, travel insurance, passport-sized photographs, visa application form, and a statement of purpose. Additional documents may be required depending on the specific country's regulations."
      },
      {
        question: "How long does it take to get a student visa?",
        answer: "The visa processing time varies by country, ranging from 2-8 weeks. Russian visa typically takes 2-3 weeks, Georgian visa 2-4 weeks, Kazakhstan visa 3-4 weeks, and Philippines visa 4-6 weeks. It's recommended to apply well in advance of your intended travel date. Future Doctor assists in timely visa application to avoid any last-minute complications."
      },
      {
        question: "Can family members visit me while I'm studying abroad?",
        answer: "Yes, family members can visit students studying abroad on a visitor visa. The requirements for a visitor visa vary by country but generally include an invitation letter, proof of relationship, financial statements, and travel insurance. The duration of stay allowed on a visitor visa typically ranges from 30 to 90 days, depending on the country's visa regulations."
      }
    ],
    "Fees & Expenses": [
      {
        question: "What is the average cost of studying MBBS abroad?",
        answer: "The cost varies significantly by country. On average, tuition fees range from: $3,000-$5,000 per year in Kyrgyzstan, $4,000-$7,000 per year in Russia, $5,000-$8,000 per year in Georgia, $3,500-$6,000 per year in Kazakhstan, and $6,000-$8,000 per year in the Philippines. Additional living expenses typically range from $2,000 to $4,000 per year, depending on the city and lifestyle."
      },
      {
        question: "Are there scholarships available for Indian students?",
        answer: "Yes, several scholarships are available for Indian students pursuing MBBS abroad. These include university-specific scholarships, government scholarships offered by host countries, Indian government scholarships for studies abroad, and merit-based scholarships based on academic performance. Future Doctor helps eligible students identify and apply for suitable scholarship opportunities."
      },
      {
        question: "What are the living expenses in different countries?",
        answer: "Monthly living expenses (including accommodation, food, transportation, and utilities) range from: $200-$300 in Kyrgyzstan, $250-$400 in Kazakhstan, $300-$500 in Russia, $300-$450 in Georgia, and $300-$500 in the Philippines. University cities generally have lower living costs compared to capital cities. On-campus accommodation is often more affordable than private housing."
      },
      {
        question: "Is it possible to work part-time while studying medicine abroad?",
        answer: "The regulations for part-time work during studies vary by country. Some countries like Russia allow students to work up to 20 hours per week during semester and full-time during holidays, while others have stricter regulations. It's important to note that medical programs are intensive, leaving limited time for part-time work. Students should focus primarily on their studies and consider part-time work only if they can manage their academic responsibilities effectively."
      }
    ],
    "Life Abroad": [
      {
        question: "How is the campus life in foreign medical universities?",
        answer: "Campus life in foreign medical universities is vibrant and multicultural. Most universities offer modern facilities including well-equipped laboratories, digital libraries, sports facilities, and student activity centers. Universities typically organize cultural events, sports competitions, and scientific conferences. Many have Indian student associations that organize celebrations of Indian festivals and cultural events, helping students maintain their cultural connections while abroad."
      },
      {
        question: "What are the accommodation options available?",
        answer: "Students typically have two main accommodation options: university hostels and private apartments. University hostels are more affordable, provide better security, and offer easier social integration. They usually cost between $50-$150 per month depending on the country. Private apartments offer more independence but are more expensive, typically ranging from $200-$400 per month. Future Doctor helps students arrange suitable accommodation based on their preferences and budget."
      },
      {
        question: "Is Indian food available in these countries?",
        answer: "Indian food availability varies by country and city. Major cities in all MBBS destinations have Indian restaurants. Additionally, cities with large Indian student populations often have Indian grocery stores where students can buy ingredients to cook their own meals. Many university hostels have common kitchens where students can prepare their own food. Some universities with substantial Indian student populations even offer Indian cuisine in their cafeterias."
      },
      {
        question: "How safe are these countries for Indian students?",
        answer: "Countries popular for MBBS studies are generally safe for international students. Universities take special measures to ensure student safety with security personnel, CCTV cameras, and secure campus areas. Most universities have international student departments that provide support and guidance. It's always advisable to follow basic safety precautions, respect local laws and customs, and stay in touch with the Indian embassy or consulate in the host country."
      }
    ],
    "FMGE/NEXT": [
      {
        question: "What is FMGE and why is it important?",
        answer: "The Foreign Medical Graduate Examination (FMGE) is a screening test conducted by the National Board of Examinations (NBE) for Indian citizens with medical degrees from foreign universities. Passing the FMGE is mandatory to practice medicine in India. The exam evaluates whether the knowledge and clinical skills of foreign medical graduates are at par with Indian medical graduates. From 2023 onwards, the FMGE is being replaced by the National Exit Test (NEXT)."
      },
      {
        question: "What is the passing criteria for FMGE?",
        answer: "The FMGE consists of 300 multiple-choice questions, divided into two papers of 150 questions each. To pass the FMGE, candidates must score a minimum of 150 marks out of 300 (50%). The exam covers 19 pre-clinical, para-clinical, and clinical subjects that are part of the MBBS curriculum in India."
      },
      {
        question: "How does Future Doctor help in FMGE/NEXT preparation?",
        answer: "Future Doctor offers comprehensive FMGE/NEXT coaching programs that include: Structured study material covering all subjects, regular mock tests based on the latest pattern, personalized doubt-clearing sessions, performance analysis and improvement strategies, and guidance from FMGE-qualified doctors. Our coaching programs are available in both online and offline formats to suit different student preferences."
      },
      {
        question: "What is NEXT and how is it different from FMGE?",
        answer: "The National Exit Test (NEXT) is replacing the FMGE as part of the National Medical Commission Act. NEXT serves multiple purposes: it's a qualifying final exam for MBBS students, a screening test for foreign medical graduates, and a basis for postgraduate medical course admissions. Unlike FMGE which is purely theoretical, NEXT includes both theoretical knowledge and clinical skills assessment, making it a more comprehensive evaluation of medical competency."
      }
    ],
    "Career": [
      {
        question: "What are my career prospects after completing MBBS abroad?",
        answer: "After completing MBBS abroad and clearing the FMGE/NEXT, graduates have several career options: Practicing as a medical officer in government or private hospitals in India, pursuing post-graduation (MD/MS) in India through NEET-PG, exploring post-graduation opportunities in the country of study or other countries, joining healthcare management roles, or pursuing research opportunities. Many foreign medical graduates successfully establish careers in clinical practice, research, and academia."
      },
      {
        question: "Can I pursue post-graduation (MD/MS) in India after MBBS abroad?",
        answer: "Yes, after completing MBBS abroad and clearing the FMGE/NEXT, you become eligible to appear for NEET-PG (or equivalent exam as per evolving regulations) to pursue post-graduation in India. Foreign medical graduates compete on equal terms with Indian medical graduates for post-graduate seats. Many of our students have successfully secured PG seats in prestigious institutions across India."
      },
      {
        question: "What support does Future Doctor provide after I complete my medical degree?",
        answer: "Future Doctor provides comprehensive post-graduation support including: FMGE/NEXT coaching, career counseling services, guidance for internship opportunities, assistance with document verification and registration processes with state medical councils, preparation for NEET-PG or other post-graduate entrance exams, and networking opportunities with our alumni working in various medical fields. Our support continues until you are well-established in your medical career."
      },
      {
        question: "Can I practice in countries other than India after completing MBBS abroad?",
        answer: "Yes, with a medical degree from a recognized university, you can practice in various countries after clearing their respective medical licensing exams. For the US, you need to clear the USMLE; for the UK, the PLAB; for Canada, the MCCQE; and for Australia, the AMC. The specific requirements and licensing processes vary by country. Some countries also have language proficiency requirements. Future Doctor provides guidance on international licensing pathways for students interested in global medical careers."
      }
    ]
  };
  
  type FaqCategories = keyof typeof faqsByCategory;
  
  const toggleQuestion = (index: number) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter(item => item !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
  };
  
  const filteredFaqs = searchQuery 
    ? Object.entries(faqsByCategory).flatMap(([category, questions]) => 
        questions.filter(q => 
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(q => ({...q, category}))
      )
    : faqsByCategory[activeCategory as FaqCategories];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Frequently Asked Questions | Future Doctor</title>
        <meta name="description" content="Find answers to common questions about studying medicine abroad" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg mb-8">
          Find answers to common questions about studying MBBS abroad, admission processes, visa requirements, and more.
        </p>
        
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute top-1/2 transform -translate-y-1/2 left-4 h-5 w-5 text-gray-400" />
        </div>
        
        {!searchQuery && (
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-4 pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    activeCategory === category 
                      ? "bg-primary text-white" 
                      : "bg-secondary hover:bg-primary/10 transition-colors"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          {searchQuery ? (
            filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq: any, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-5 text-left bg-secondary hover:bg-secondary/80 transition-colors"
                    onClick={() => toggleQuestion(index)}
                  >
                    <div>
                      <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded mr-3">
                        {faq.category}
                      </span>
                      <span className="font-medium">{faq.question}</span>
                    </div>
                    {openQuestions.includes(index) ? (
                      <ChevronUp className="h-5 w-5 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0" />
                    )}
                  </button>
                  {openQuestions.includes(index) && (
                    <div className="p-5 bg-white dark:bg-gray-800">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">No results found for "{searchQuery}"</p>
                <button 
                  className="mt-4 text-primary hover:underline"
                  onClick={() => setSearchQuery("")}
                >
                  Clear search and show all FAQs
                </button>
              </div>
            )
          ) : (
            faqsByCategory[activeCategory as FaqCategories].map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-5 text-left bg-secondary hover:bg-secondary/80 transition-colors"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openQuestions.includes(index) ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {openQuestions.includes(index) && (
                  <div className="p-5 bg-white dark:bg-gray-800">
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        
        <div className="mt-16 bg-secondary p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Didn't Find Your Answer?</h2>
          <p className="mb-6">Contact our team of experts for personalized assistance with your queries.</p>
          <a 
            href="/#contact" 
            className="inline-block px-8 py-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FaqPage;
