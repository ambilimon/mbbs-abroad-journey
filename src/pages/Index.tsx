
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyMBBSAbroad from "@/components/WhyMBBSAbroad";
import UniversitySection from "@/components/UniversitySection";
import FeaturedUniversity from "@/components/FeaturedUniversity";
import ApplicationSection from "@/components/ApplicationSection";
import Footer from "@/components/Footer";

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
