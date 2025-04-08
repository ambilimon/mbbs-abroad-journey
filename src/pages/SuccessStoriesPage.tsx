
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Star } from "lucide-react";

const SuccessStoriesPage = () => {
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      university: "Tbilisi State Medical University, Georgia",
      year: "2018",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      quote: "Future Doctor guided me through every step of my journey, from university selection to FMGE preparation. Today, I'm working as a successful doctor in a leading hospital in Delhi.",
      achievement: "Cleared FMGE in first attempt with 78% score"
    },
    {
      name: "Dr. Rahul Patel",
      university: "Kazakh National Medical University, Kazakhstan",
      year: "2017",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      quote: "The guidance and support I received from Future Doctor was invaluable. Their FMGE coaching program was comprehensive and targeted, helping me clear the exam in my first attempt.",
      achievement: "Currently pursuing MD in Pediatrics at AIIMS"
    },
    {
      name: "Dr. Aisha Khan",
      university: "Batumi Shota Rustaveli State University, Georgia",
      year: "2019",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      quote: "I was anxious about studying medicine abroad, but Future Doctor made the entire process seamless. Their post-admission support and FMGE coaching were exceptional.",
      achievement: "Working at a government hospital in Mumbai"
    },
    {
      name: "Dr. Vikram Singh",
      university: "Kyrgyz State Medical Academy, Kyrgyzstan",
      year: "2016",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      quote: "Future Doctor not only helped me choose the right university but also prepared me well for the challenges of studying abroad. Their continuous support played a crucial role in my success.",
      achievement: "Running a successful clinic in Bangalore"
    },
    {
      name: "Dr. Sneha Reddy",
      university: "Far Eastern Federal University, Russia",
      year: "2020",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      quote: "The structured FMGE coaching by Future Doctor helped me understand complex topics with ease. The mock tests were particularly helpful in building my confidence.",
      achievement: "Cleared FMGE with distinction"
    },
    {
      name: "Dr. Nikhil Verma",
      university: "Vitebsk State Medical University, Belarus",
      year: "2019",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      quote: "My experience with Future Doctor was phenomenal. Their team was always available to address my concerns and guide me in the right direction.",
      achievement: "Selected for a prestigious medical research program in the UK"
    }
  ];
  
  const statistics = [
    { number: "2000+", label: "Successful Placements" },
    { number: "85%", label: "FMGE Success Rate" },
    { number: "15+", label: "Countries Covered" },
    { number: "100+", label: "Partner Universities" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Success Stories | Future Doctor</title>
        <meta name="description" content="Real success stories of students who pursued MBBS abroad through Future Doctor" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Success Stories</h1>
        
        <p className="text-lg mb-12">
          At Future Doctor, we take pride in the success of our students. Here are some inspiring stories of students who pursued MBBS abroad through our guidance and are now successful medical professionals.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-16 w-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{testimonial.university}</p>
                    <p className="text-sm text-gray-500">Graduated: {testimonial.year}</p>
                  </div>
                </div>
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="bg-primary/10 p-3 rounded">
                  <p className="font-medium text-primary">{testimonial.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-secondary rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Success in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">FMGE Success Stories</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="py-3 px-4 border text-left">Name</th>
                  <th className="py-3 px-4 border text-left">University</th>
                  <th className="py-3 px-4 border text-left">FMGE Attempt</th>
                  <th className="py-3 px-4 border text-left">Score</th>
                  <th className="py-3 px-4 border text-left">Current Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border">Dr. Amit Kumar</td>
                  <td className="py-3 px-4 border">Tbilisi State Medical University</td>
                  <td className="py-3 px-4 border">1st attempt</td>
                  <td className="py-3 px-4 border">82%</td>
                  <td className="py-3 px-4 border">Junior Resident, AIIMS Delhi</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border">Dr. Neha Gupta</td>
                  <td className="py-3 px-4 border">Kazakh National Medical University</td>
                  <td className="py-3 px-4 border">1st attempt</td>
                  <td className="py-3 px-4 border">76%</td>
                  <td className="py-3 px-4 border">Medical Officer, Mumbai</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border">Dr. Rajesh Khanna</td>
                  <td className="py-3 px-4 border">Vitebsk State Medical University</td>
                  <td className="py-3 px-4 border">2nd attempt</td>
                  <td className="py-3 px-4 border">72%</td>
                  <td className="py-3 px-4 border">Private Practice, Chennai</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border">Dr. Priyanka Joshi</td>
                  <td className="py-3 px-4 border">Kyrgyz State Medical Academy</td>
                  <td className="py-3 px-4 border">1st attempt</td>
                  <td className="py-3 px-4 border">79%</td>
                  <td className="py-3 px-4 border">Junior Resident, PGIMER Chandigarh</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border">Dr. Arjun Singh</td>
                  <td className="py-3 px-4 border">Far Eastern Federal University</td>
                  <td className="py-3 px-4 border">1st attempt</td>
                  <td className="py-3 px-4 border">75%</td>
                  <td className="py-3 px-4 border">MD Student, JIPMER</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Want to Be Our Next Success Story?</h2>
          <p className="text-lg mb-8">Start your journey towards becoming a successful doctor with our expert guidance.</p>
          <a 
            href="/#contact" 
            className="inline-block px-8 py-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Begin Your Journey Today
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;
