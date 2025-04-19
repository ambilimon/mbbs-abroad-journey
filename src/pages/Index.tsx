
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyMBBSAbroad from "@/components/WhyMBBSAbroad";
import UniversitySection from "@/components/UniversitySection";
import FeaturedUniversity from "@/components/FeaturedUniversity";
import ApplicationSection from "@/components/ApplicationSection";
import WebinarPromoSection from "@/components/WebinarPromoSection";
import Footer from "@/components/Footer";
import { initializeDatabase } from "@/lib/database";
import { supabase } from "@/lib/supabase";
import { toast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";

const Index = () => {
  // Fetch universities data
  const { data: universities, error } = useQuery({
    queryKey: ['universities'],
    queryFn: async () => {
      const { data, error } = await supabase.from('universities').select('*');
      if (error) throw error;
      return data;
    }
  });

  useEffect(() => {
    if (error) {
      console.error('Error fetching universities:', error);
      toast({
        title: "Error loading universities",
        description: "Please try refreshing the page",
        variant: "destructive",
      });
    }
  }, [error]);

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhyMBBSAbroad />
      <WebinarPromoSection />
      <UniversitySection universities={universities || []} />
      <FeaturedUniversity />
      <ApplicationSection />
      <Footer />
    </div>
  );
};

export default Index;
