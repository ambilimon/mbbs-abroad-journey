
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyMBBSAbroad from "@/components/WhyMBBSAbroad";
import UniversitySection from "@/components/UniversitySection";
import FeaturedUniversity from "@/components/FeaturedUniversity";
import ApplicationSection from "@/components/ApplicationSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".section-animate");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Admin Dashboard Link */}
      <div className="container mx-auto px-4 pt-4 flex justify-end">
        <Link to="/dashboard">
          <Button variant="outline" size="sm">Admin Dashboard</Button>
        </Link>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Why MBBS Abroad Section */}
      <WhyMBBSAbroad />

      {/* University Section */}
      <UniversitySection />

      {/* Featured University */}
      <FeaturedUniversity />

      {/* Application Section */}
      <ApplicationSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
