import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarIcon, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why MBBS in Georgia is a Popular Choice for Indian Students",
      excerpt: "Discover why Georgia has become one of the top destinations for Indian students pursuing MBBS abroad.",
      category: "Study Abroad",
      author: "Dr. Rajesh Kumar",
      date: "April 2, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "FMGE Preparation: A Comprehensive Guide for Foreign Medical Graduates",
      excerpt: "Essential tips and strategies to help foreign medical graduates clear the FMGE examination on their first attempt.",
      category: "Exam Preparation",
      author: "Dr. Neha Sharma",
      date: "March 28, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Comparing Medical Education in Russia, Georgia, and Kazakhstan",
      excerpt: "A detailed comparison of medical education systems, fee structures, and career prospects in these popular destinations.",
      category: "Comparison",
      author: "Dr. Amit Patel",
      date: "March 20, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Cultural Adaptation: Thriving as an Indian Student in a Foreign Country",
      excerpt: "Practical tips for Indian students to adapt to a new culture while pursuing their medical education abroad.",
      category: "Student Life",
      author: "Dr. Priya Malhotra",
      date: "March 15, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Scholarships for Indian Students Pursuing MBBS Abroad",
      excerpt: "A comprehensive guide to scholarships, grants, and financial aid available for Indian students studying medicine abroad.",
      category: "Financial Aid",
      author: "Dr. Suresh Verma",
      date: "March 10, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "The Future of Medical Education: Global Trends and Opportunities",
      excerpt: "Exploring emerging trends in global medical education and how they impact career opportunities for international medical graduates.",
      category: "Career Insights",
      author: "Dr. Ananya Singh",
      date: "March 5, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];
  
  const categories = [
    "All",
    "Study Abroad",
    "Exam Preparation",
    "Student Life",
    "Career Insights",
    "Financial Aid",
    "Comparison"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog | Future Doctor</title>
        <meta name="description" content="Latest articles, guides, and insights for students pursuing MBBS abroad" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-4">Blog & Articles</h1>
        <p className="text-lg mb-8">
          Stay updated with the latest information, guides, and insights about studying medicine abroad and preparing for your medical career.
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="text-primary font-medium hover:underline">
                  Read More →
                </Link>
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
          <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Stay updated with the latest articles, news, and insights about studying medicine abroad.</p>
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

export default BlogPage;
