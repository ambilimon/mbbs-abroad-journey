
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const AdmissionProcessPage = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Schedule a free consultation with our expert counselors to discuss your academic background, budget, preferences, and career goals.",
      timeframe: "1-2 days"
    },
    {
      number: "02",
      title: "University Selection",
      description: "Based on your profile, we'll recommend suitable universities that match your requirements and preferences.",
      timeframe: "3-5 days"
    },
    {
      number: "03",
      title: "Document Preparation",
      description: "Prepare all required documents including academic certificates, passport, photographs, and other university-specific requirements.",
      timeframe: "1-2 weeks"
    },
    {
      number: "04",
      title: "Application Submission",
      description: "We'll help you complete and submit applications to your chosen universities with all necessary documents.",
      timeframe: "1 week"
    },
    {
      number: "05",
      title: "Admission Confirmation",
      description: "Receive acceptance letters from universities and make an informed decision about where to enroll.",
      timeframe: "2-4 weeks"
    },
    {
      number: "06",
      title: "Fee Payment",
      description: "Complete the tuition fee payment process for the first year or semester as required by the university.",
      timeframe: "1-2 days"
    },
    {
      number: "07",
      title: "Visa Application",
      description: "Prepare visa application documents, schedule visa interviews, and submit your visa application.",
      timeframe: "2-4 weeks"
    },
    {
      number: "08",
      title: "Pre-Departure Guidance",
      description: "Attend our pre-departure orientation session to prepare for your journey abroad, including tips on accommodation, local customs, and what to pack.",
      timeframe: "1 week before departure"
    },
    {
      number: "09",
      title: "Arrival & Settlement",
      description: "Arrive at your destination where our local representatives will assist with initial settlement, including accommodation and university registration.",
      timeframe: "1-3 days after arrival"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Admission Process | Future Doctor</title>
        <meta name="description" content="Step-by-step guide to the admission process for MBBS abroad" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Admission Process</h1>
        
        <p className="text-lg mb-12">
          At Future Doctor, we've simplified the complex process of securing admission for MBBS studies abroad. Our step-by-step approach ensures that students navigate the entire journey smoothly, from initial consultation to arrival at the university.
        </p>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 border-b pb-8">
              <div className="md:w-1/6">
                <div className="bg-primary text-white text-2xl font-bold h-16 w-16 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
              </div>
              <div className="md:w-5/6">
                <h2 className="text-2xl font-semibold mb-3">{step.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{step.description}</p>
                <p className="text-sm font-medium text-primary">Estimated timeframe: {step.timeframe}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>
          <p className="mb-6">The following documents are generally required for MBBS admission abroad:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc pl-5 space-y-2">
              <li>10th Standard Mark Sheet</li>
              <li>12th Standard Mark Sheet</li>
              <li>NEET Scorecard (if applicable)</li>
              <li>Passport (valid for at least 18 months)</li>
              <li>Passport-sized photographs</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li>Birth Certificate</li>
              <li>Medical Certificate</li>
              <li>Character Certificate</li>
              <li>Transfer Certificate</li>
              <li>Migration Certificate</li>
            </ul>
          </div>
          <p className="mt-6 text-sm text-gray-500">Note: Document requirements may vary based on the university and country you're applying to.</p>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-lg mb-8">Our expert counselors are here to guide you through every step of the admission process.</p>
          <a 
            href="/#contact" 
            className="inline-block px-8 py-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdmissionProcessPage;
