
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy | Future Doctor</title>
        <meta name="description" content="Privacy Policy for Future Doctor - MBBS Abroad Consultancy" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-6">
            Last updated: April 8, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Future Doctor ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or communicate with us.
          </p>
          <p className="mb-4">
            By accessing or using our services, you consent to the practices described in this Privacy Policy. If you do not agree with the practices described in this policy, please do not use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-medium mt-6 mb-3">Personal Information</h3>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fill out forms on our website</li>
            <li>Register for webinars or events</li>
            <li>Contact us via email, phone, or other communication channels</li>
            <li>Subscribe to our newsletter</li>
            <li>Apply for admission to universities through our services</li>
            <li>Participate in surveys or feedback forms</li>
          </ul>
          <p className="mb-4">
            This information may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name, email address, phone number, and physical address</li>
            <li>Academic records and educational history</li>
            <li>Date of birth and nationality</li>
            <li>Passport information and identification documents</li>
            <li>Financial information (for processing application fees or service charges)</li>
            <li>Career interests and preferences</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Automatically Collected Information</h3>
          <p className="mb-4">
            When you visit our website, we may automatically collect certain information about your device and usage, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address and geographic location</li>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referral sources</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">
            We may use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing, maintaining, and improving our services</li>
            <li>Processing university applications and admissions</li>
            <li>Communicating with you about our services, updates, and events</li>
            <li>Responding to your inquiries and requests</li>
            <li>Sending promotional materials and newsletters</li>
            <li>Conducting research and analysis to enhance our services</li>
            <li>Ensuring compliance with legal obligations</li>
            <li>Protecting our rights, property, or safety, and that of our users</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Information Sharing and Disclosure</h2>
          <p className="mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Universities and educational institutions to process your applications</li>
            <li>Service providers who assist us in operating our business</li>
            <li>Government agencies for visa processing or legal requirements</li>
            <li>Professional advisors such as lawyers, accountants, and insurers</li>
            <li>Third parties in connection with a merger, acquisition, or sale of assets</li>
            <li>With your consent or at your direction</li>
          </ul>
          <p className="mb-4">
            We do not sell, rent, or lease your personal information to third parties for their marketing purposes without your explicit consent.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights and Choices</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, which may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Accessing, correcting, or deleting your personal information</li>
            <li>Withdrawing your consent to our processing of your information</li>
            <li>Requesting a copy of your personal information</li>
            <li>Objecting to certain processing activities</li>
            <li>Opting out of marketing communications</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us using the information provided in the "Contact Us" section.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies and Similar Technologies</h2>
          <p className="mb-4">
            Our website uses cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools. However, disabling cookies may limit your ability to use certain features of our website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. International Data Transfers</h2>
          <p className="mb-4">
            Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We will take appropriate measures to ensure that your personal information remains protected in accordance with this Privacy Policy.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
          <p className="mb-4">
            Our services are not intended for individuals under the age of 16 without parental consent. We do not knowingly collect personal information from children under 16. If you believe we have collected personal information from a child under 16, please contact us, and we will take steps to delete such information.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="mb-4">
            Future Doctor<br />
            Office #123, ABC Complex, MG Road<br />
            Bangalore - 560001, India<br />
            Email: privacy@futuredoctor.com<br />
            Phone: +91 98765 43210
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
