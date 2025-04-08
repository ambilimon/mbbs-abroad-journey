
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";

const ServicesPage = () => {
  const services = [
    {
      title: "University Selection",
      description: "We help students choose the right university based on their academic profile, budget, and preferences.",
      features: [
        "Personalized university recommendations",
        "Detailed information about curriculum, facilities, and recognition",
        "Insights into campus life and accommodation options",
        "Comparative analysis of different universities"
      ]
    },
    {
      title: "Admission Assistance",
      description: "We guide students through the entire admission process, from application submission to securing admission.",
      features: [
        "Document preparation and verification",
        "Application submission",
        "Interview preparation",
        "Admission letter processing"
      ]
    },
    {
      title: "Visa Guidance",
      description: "We provide comprehensive visa assistance to ensure a smooth visa application process.",
      features: [
        "Documentation for visa application",
        "Visa interview preparation",
        "Visa application submission",
        "Visa tracking and follow-up"
      ]
    },
    {
      title: "Pre-Departure Guidance",
      description: "We prepare students for their journey abroad with essential information and tips.",
      features: [
        "Pre-departure orientation sessions",
        "Cultural adaptation tips",
        "Packing guidance",
        "Travel arrangements assistance"
      ]
    },
    {
      title: "Post-Admission Support",
      description: "Our support continues even after students reach their destination.",
      features: [
        "Airport pickup arrangements",
        "Accommodation assistance",
        "Local SIM card and bank account setup",
        "Orientation to local environment"
      ]
    },
    {
      title: "FMGE/NEXT Coaching",
      description: "We provide specialized coaching for the Foreign Medical Graduate Examination and NEXT to help students practice medicine in India after completing their MBBS abroad.",
      features: [
        "Comprehensive study material",
        "Regular mock tests",
        "One-on-one doubt clearing sessions",
        "Performance tracking and improvement strategies"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Services | Future Doctor</title>
        <meta name="description" content="Comprehensive services for students pursuing MBBS abroad" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        
        <p className="text-lg mb-12">
          At Future Doctor, we offer end-to-end services to make your journey of studying medicine abroad smooth and hassle-free. Our comprehensive services cover every aspect of studying abroad, from university selection to post-admission support.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <h3 className="font-medium mb-3">What we offer:</h3>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-secondary p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Need Personalized Guidance?</h2>
          <p className="text-lg mb-6">
            Our team of expert counselors is ready to provide personalized guidance tailored to your specific needs and preferences.
          </p>
          <a 
            href="/#contact" 
            className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
