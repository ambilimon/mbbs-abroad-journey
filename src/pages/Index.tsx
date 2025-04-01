import { useEffect } from 'react';

import ApplicationSection from '@/components/ApplicationSection';
import FeaturedUniversity from '@/components/FeaturedUniversity';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import UniversitySection from '@/components/UniversitySection';
import WhyMBBSAbroad from '@/components/WhyMBBSAbroad';

const Index = () => {
  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        }
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".section-animate");
    for (const el of animatedElements) {
      observer.observe(el);
    }

    return () => {
      for (const el of animatedElements) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyMBBSAbroad />
      <UniversitySection />
      <FeaturedUniversity />
      <ApplicationSection />
      <Footer />
    </div>
  );
};

export default Index;
