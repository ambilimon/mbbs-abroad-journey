
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SitemapPage = () => {
  const sitemapLinks = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
        { name: "Our Services", url: "/services" },
        { name: "Universities", url: "/universities" },
        { name: "Contact", url: "/#contact" }
      ]
    },
    {
      category: "Country Pages",
      links: [
        { name: "MBBS in Russia", url: "/country/russia" },
        { name: "MBBS in Georgia", url: "/country/georgia" },
        { name: "MBBS in Kazakhstan", url: "/country/kazakhstan" },
        { name: "MBBS in Kyrgyzstan", url: "/country/kyrgyzstan" },
        { name: "MBBS in Philippines", url: "/country/philippines" },
        { name: "MBBS in Bangladesh", url: "/country/bangladesh" }
      ]
    },
    {
      category: "Student Resources",
      links: [
        { name: "Admission Process", url: "/admission-process" },
        { name: "FMGE/NEXT Coaching", url: "/coaching" },
        { name: "Success Stories", url: "/success-stories" },
        { name: "Blog & Articles", url: "/blog" },
        { name: "News & Updates", url: "/news" },
        { name: "FAQ", url: "/faq" },
        { name: "Webinars", url: "/webinar" }
      ]
    },
    {
      category: "Legal Information",
      links: [
        { name: "Terms of Service", url: "/terms-of-service" },
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Refund Policy", url: "/refund-policy" }
      ]
    },
    {
      category: "Account",
      links: [
        { name: "Login", url: "/auth" },
        { name: "Dashboard", url: "/dashboard" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sitemap | Future Doctor</title>
        <meta name="description" content="Navigate through all pages and resources on Future Doctor" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
        <p className="text-lg mb-8">
          Find and navigate to any page on our website using this comprehensive sitemap.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapLinks.map((category, index) => (
            <div key={index} className="border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
              <ul className="space-y-3">
                {category.links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.url} 
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SitemapPage;
