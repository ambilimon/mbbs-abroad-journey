
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarIcon, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet";

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "Future Doctor Opens New Office in Mumbai",
      excerpt: "To better serve students from Western India, Future Doctor has opened a new office in Mumbai, equipped with advanced facilities for counseling and seminars.",
      date: "April 5, 2025",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "Changes in FMGE Exam Pattern from 2025",
      excerpt: "The National Board of Examinations has announced significant changes to the FMGE exam pattern that will be implemented from December 2025.",
      date: "April 2, 2025",
      category: "Exam Updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "Future Doctor Partners with 10 New Universities in Europe",
      excerpt: "Expanding its network, Future Doctor has established partnerships with 10 new medical universities across Eastern and Central Europe.",
      date: "March 25, 2025",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 4,
      title: "Scholarship Program Launched for Underprivileged Students",
      excerpt: "Future Doctor has launched a scholarship program that will cover up to 50% of tuition fees for underprivileged students pursuing MBBS abroad.",
      date: "March 20, 2025",
      category: "Scholarships",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 5,
      title: "NEET Score Requirements Updated for 2025-26 Admissions",
      excerpt: "The National Medical Commission has updated the minimum NEET score requirements for students seeking admission to foreign medical universities.",
      date: "March 15, 2025",
      category: "Admissions",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 6,
      title: "Future Doctor's FMGE Coaching Achieves 90% Success Rate",
      excerpt: "In the recent FMGE examination, 90% of students who enrolled in Future Doctor's coaching program successfully cleared the exam in their first attempt.",
      date: "March 10, 2025",
      category: "Achievements",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 7,
      title: "International Medical Education Conference to be Hosted by Future Doctor",
      excerpt: "Future Doctor will host an International Medical Education Conference in Delhi, bringing together representatives from medical universities worldwide.",
      date: "March 5, 2025",
      category: "Events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 8,
      title: "New MBBS Curriculum Implemented in Georgian Universities",
      excerpt: "Leading medical universities in Georgia have implemented a new MBBS curriculum aligned with international standards, benefiting Indian students.",
      date: "March 1, 2025",
      category: "Education Updates",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ];
  
  const categories = [
    "All News",
    "Company News",
    "Partnerships",
    "Achievements",
    "Scholarships",
    "Exam Updates",
    "Events",
    "Education Updates",
    "Admissions"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>News | Future Doctor</title>
        <meta name="description" content="Latest news and updates from Future Doctor and the medical education industry" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
        <p className="text-lg mb-8">
          Stay informed about the latest developments at Future Doctor and important updates in the field of medical education abroad.
        </p>
        
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  index === 0 
                    ? "bg-primary text-white" 
                    : "bg-secondary hover:bg-primary/10 transition-colors"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.slice(0, 2).map((news) => (
              <div key={news.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                      {news.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-3">{news.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{news.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{news.date}</span>
                    </div>
                    <a 
                      href={news.link} 
                      className="flex items-center text-primary font-medium hover:underline"
                    >
                      Read Full Story <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.slice(2).map((news) => (
            <div key={news.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img 
                src={news.image} 
                alt={news.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                    {news.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{news.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    <span>{news.date}</span>
                  </div>
                  <a 
                    href={news.link} 
                    className="flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Read More <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex">
            <button className="px-4 py-2 border rounded-l-md bg-white dark:bg-gray-800">
              Previous
            </button>
            <button className="px-4 py-2 border-t border-b border-r bg-primary text-white">
              1
            </button>
            <button className="px-4 py-2 border-t border-b bg-white dark:bg-gray-800">
              2
            </button>
            <button className="px-4 py-2 border-t border-b bg-white dark:bg-gray-800">
              3
            </button>
            <button className="px-4 py-2 border rounded-r-md bg-white dark:bg-gray-800">
              Next
            </button>
          </nav>
        </div>
        
        <div className="mt-16 bg-secondary p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
          <p className="mb-6">Subscribe to our newsletter to receive the latest news and updates directly in your inbox.</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-l-md border-t border-b border-l focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
