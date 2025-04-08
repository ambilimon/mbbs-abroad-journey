
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Us | Future Doctor</title>
        <meta name="description" content="Learn about our mission and vision to help students pursue MBBS abroad" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Founded in 2010, Future Doctor has been a trusted partner for thousands of aspiring medical students seeking quality education abroad. Our mission is to guide students through every step of their journey to becoming successful medical professionals.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            To simplify the process of pursuing medical education abroad by providing comprehensive guidance, support, and resources to students, helping them make informed decisions about their future.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p className="mb-6">
            To be the leading educational consultancy for medical studies abroad, known for integrity, personalized approach, and successful student placements in prestigious medical universities worldwide.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-3">Over 10 years of experience in educational consultancy</li>
            <li className="mb-3">More than 2000 successful student placements</li>
            <li className="mb-3">Partnerships with 100+ renowned medical universities across 15+ countries</li>
            <li className="mb-3">Dedicated support team available 24/7</li>
            <li className="mb-3">Comprehensive services from application to settlement</li>
            <li className="mb-3">Post-admission support and FMGE/NEXT coaching</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
          <p className="mb-6">
            Our team consists of experienced education consultants, many of whom have studied abroad themselves and understand the challenges students face. We also have medical professionals on board who provide valuable insights into medical education requirements and career prospects.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
          <p className="mb-6">
            We believe in a personalized approach to education consultancy. We understand that each student has unique needs, preferences, and circumstances. Our counselors take the time to understand these factors before recommending universities and countries for medical studies.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p>We provide honest and transparent guidance to students, helping them make informed decisions about their education.</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p>We strive for excellence in all our services, ensuring students receive the best guidance and support.</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Student-Centric</h3>
              <p>Students' interests are at the heart of everything we do, and we work tirelessly to help them achieve their goals.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
