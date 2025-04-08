
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Award, BookOpen, Users, Calendar, BarChart } from "lucide-react";
import { Helmet } from "react-helmet";

const CoachingPage = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Comprehensive Study Material",
      description: "Access to meticulously crafted study materials covering all subjects and topics as per the latest exam pattern"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Faculty",
      description: "Learn from experienced doctors and educators who have in-depth knowledge of FMGE/NEXT exam patterns and requirements"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Flexible Schedules",
      description: "Choose from various batch timings designed to accommodate different time zones and student schedules"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Performance Tracking",
      description: "Regular assessments and detailed performance analytics to identify strengths and areas needing improvement"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>FMGE/NEXT Coaching | Future Doctor</title>
        <meta name="description" content="Comprehensive coaching for FMGE and NEXT examinations" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-8">FMGE/NEXT Coaching</h1>
        
        <p className="text-lg mb-12">
          Future Doctor offers specialized coaching programs for the Foreign Medical Graduate Examination (FMGE) and National Exit Test (NEXT), helping international medical graduates clear these mandatory exams to practice medicine in India.
        </p>
        
        <div className="bg-secondary p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Our Coaching?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Coaching Programs</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-primary text-white p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Basic Program</h3>
                <p className="text-white/80 mb-4">For early preparation</p>
                <p className="text-3xl font-bold">₹30,000</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>6 months program</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Online live classes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Basic study material</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>10 mock tests</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Email support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/#contact" className="block text-center py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden shadow-lg relative">
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">Popular</span>
              </div>
              <div className="bg-blue-700 text-white p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Standard Program</h3>
                <p className="text-white/80 mb-4">Most comprehensive</p>
                <p className="text-3xl font-bold">₹45,000</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>9 months program</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Online live classes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Advanced study material</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>25 mock tests</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Email & phone support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>1-on-1 doubt clearing sessions</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/#contact" className="block text-center py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-primary text-white p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Premium Program</h3>
                <p className="text-white/80 mb-4">Personalized coaching</p>
                <p className="text-3xl font-bold">₹60,000</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>12 months program</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Online & offline classes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Premium study material</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited mock tests</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>24/7 support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Personal mentor</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/#contact" className="block text-center py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Exam Success Rates</h2>
          <div className="bg-secondary p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">85%</h3>
                <p className="text-gray-600 dark:text-gray-300">Students clear FMGE in first attempt</p>
              </div>
              <div>
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">90%</h3>
                <p className="text-gray-600 dark:text-gray-300">Students clear FMGE within two attempts</p>
              </div>
              <div>
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">500+</h3>
                <p className="text-gray-600 dark:text-gray-300">Successful FMGE candidates in the last 5 years</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Ace Your Medical Licensing Exam?</h2>
          <p className="text-lg mb-8">Join our specialized coaching programs and increase your chances of clearing FMGE/NEXT on the first attempt.</p>
          <a 
            href="/#contact" 
            className="inline-block px-8 py-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Request More Information
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoachingPage;
