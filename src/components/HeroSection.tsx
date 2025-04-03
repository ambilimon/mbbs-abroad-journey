
import { useSupabase } from '@/hooks/useSupabase';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from "react";
import AnimatedButton from "./AnimatedButton";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { University } from '@/data/medical-universities';
import { Hospital, Globe, GraduationCap, Users, MapPin } from 'lucide-react';

// Sample university data for the carousel
const carouselUniversities = [
  {
    id: 1,
    name: "Oxford Medical College",
    country: "United Kingdom",
    students: "15,000+",
    established: "1096",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "World-renowned for medical research and innovation"
  },
  {
    id: 2,
    name: "Tbilisi State Medical University",
    country: "Georgia",
    students: "10,000+",
    established: "1918",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop",
    description: "Historical excellence in medical education since 1918"
  },
  {
    id: 3,
    name: "Kyiv Medical University",
    country: "Ukraine",
    students: "8,000+",
    established: "1841",
    image: "https://images.unsplash.com/photo-1598018553943-93e017e803df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Modern approach to medical training with clinical focus"
  },
  {
    id: 4,
    name: "Berlin Institute of Health",
    country: "Germany",
    students: "12,000+",
    established: "1935",
    image: "https://images.unsplash.com/photo-1544298621-35a989e4e54a?q=80&w=2070&auto=format&fit=crop",
    description: "Cutting-edge research and breakthrough medical technologies"
  }
];

const HeroSection = () => {
  const { user } = useSupabase();
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll(".section-animate");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".section-animate");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-float -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-float animation-delay-2000 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="chip mb-4 section-animate stagger-1">MBBS Abroad Journey</div>
            <h1 className="heading-lg mb-6 section-animate stagger-2">
              Start Your <span className="hero-text-gradient">MBBS Journey Abroad</span> – Affordable, Globally Recognized, and Hassle-Free!
            </h1>
            <p className="text-lg text-gray-600 mb-8 section-animate stagger-3">
              Get a globally recognized MBBS degree at 1/4th the cost of Indian private medical colleges, with no donation and direct admission in WHO, NMC, and UNESCO-approved universities.
            </p>
            <div className="flex flex-wrap gap-4 section-animate stagger-4">
              {user ? (
                <Link to="/dashboard">
                  <AnimatedButton variant="highlight" size="lg">
                    Go to Dashboard
                  </AnimatedButton>
                </Link>
              ) : (
                <>
                  <Link to="/auth?mode=signup">
                    <AnimatedButton variant="highlight" size="lg">
                      Sign Up
                    </AnimatedButton>
                  </Link>
                  <Link to="/auth?mode=signin">
                    <AnimatedButton variant="outline" size="lg">
                      Sign In
                    </AnimatedButton>
                  </Link>
                </>
              )}
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4 section-animate stagger-5">
              <div className="text-center p-4">
                <h3 className="text-3xl font-bold text-blue-700">100+</h3>
                <p className="text-sm text-gray-600">Partner Universities</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-3xl font-bold text-blue-700">2000+</h3>
                <p className="text-sm text-gray-600">Students Placed</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-3xl font-bold text-blue-700">95%</h3>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 section-animate">
            <div className="relative">
              <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                  {carouselUniversities.map((university) => (
                    <CarouselItem key={university.id}>
                      <div className="p-1">
                        <div className="rounded-2xl overflow-hidden shadow-smooth-lg">
                          <div className="relative">
                            <div className="aspect-[4/3] w-full">
                              <img 
                                src={university.image} 
                                alt={`${university.name} campus`} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute top-4 left-4">
                              <Badge variant="secondary" className="bg-white/80 text-blue-700">
                                {university.country}
                              </Badge>
                            </div>
                          </div>
                          <div className="p-5 bg-white">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{university.name}</h3>
                            <p className="text-gray-600 mb-4">{university.description}</p>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="flex items-center">
                                <GraduationCap size={16} className="mr-2 text-blue-600" />
                                <span className="text-sm text-gray-700">Est. {university.established}</span>
                              </div>
                              <div className="flex items-center">
                                <Users size={16} className="mr-2 text-blue-600" />
                                <span className="text-sm text-gray-700">{university.students}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
              </Carousel>

              <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-smooth animate-fade-in-up">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Hospital className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">WHO & NMC Approved</p>
                    <p className="text-xs text-gray-500">Globally Recognized Degrees</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 glass-card rounded-xl p-4 shadow-smooth animate-fade-in-up animation-delay-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Globe className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Affordable Tuition</p>
                    <p className="text-xs text-gray-500">Starting at ₹20 Lakhs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
