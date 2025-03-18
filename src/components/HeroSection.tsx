
import { useEffect, useRef } from "react";
import AnimatedButton from "./AnimatedButton";

const HeroSection = () => {
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
              <AnimatedButton variant="highlight" size="lg">
                Apply Now
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg">
                Explore Universities
              </AnimatedButton>
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-smooth-lg">
                <img 
                  src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1470&auto=format&fit=crop" 
                  alt="Medical students in laboratory" 
                  className="w-full h-full object-cover animate-blur-in"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-smooth animate-fade-in-up">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
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
