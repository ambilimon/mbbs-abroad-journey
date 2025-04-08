
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service | Future Doctor</title>
        <meta name="description" content="Terms of Service for Future Doctor - MBBS Abroad Consultancy" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="mb-6">
            Last updated: April 8, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            These Terms of Service ("Terms") govern your use of the Future Doctor website and services provided by Future Doctor ("we," "our," or "us"). By accessing our website or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our website or use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services Description</h2>
          <p className="mb-4">
            Future Doctor provides educational consultancy services for students seeking to pursue medical education abroad. Our services include, but are not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>University selection and admission guidance</li>
            <li>Documentation assistance</li>
            <li>Visa guidance</li>
            <li>Pre-departure orientation</li>
            <li>Accommodation arrangements</li>
            <li>FMGE/NEXT coaching</li>
          </ul>
          <p className="mb-4">
            We act as facilitators between students and educational institutions. We do not guarantee admission to any institution or the outcome of visa applications, as these decisions are made by the respective universities and government authorities.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts and Registration</h2>
          <p className="mb-4">
            Some portions of our website or services may require you to create an account. When you register for an account, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your account credentials confidential</li>
            <li>Take responsibility for all activities that occur under your account</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
          </ul>
          <p className="mb-4">
            We reserve the right to suspend or terminate your account if any information provided during registration or thereafter proves to be inaccurate, incomplete, or misleading.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Obligations</h2>
          <p className="mb-4">
            When using our website and services, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Comply with all applicable laws and regulations</li>
            <li>Provide accurate and truthful information</li>
            <li>Respect the intellectual property rights of others</li>
            <li>Not engage in any activity that could harm our website, services, or other users</li>
            <li>Not use our services for any illegal or unauthorized purpose</li>
            <li>Not attempt to gain unauthorized access to any part of our website or systems</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Fees and Payments</h2>
          <p className="mb-4">
            We charge fees for certain services, which are clearly communicated to you before you engage our services. By agreeing to use these services, you agree to pay all applicable fees.
          </p>
          <p className="mb-4">
            Payment terms:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>All fees are payable in advance unless otherwise specified</li>
            <li>We accept payments through authorized channels only</li>
            <li>All payments should be made in the name of "Future Doctor"</li>
            <li>We issue receipts for all payments received</li>
          </ul>
          <p className="mb-4">
            Refund policy:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Refund terms are specific to each service and will be communicated to you in advance</li>
            <li>Service fees are generally non-refundable once services have been initiated</li>
            <li>University and visa application fees are subject to the refund policies of the respective institutions and embassies</li>
            <li>For further details, please refer to our Refund Policy</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
          <p className="mb-4">
            The content on our website, including text, graphics, logos, images, and software, is the property of Future Doctor or our content suppliers and is protected by copyright and other intellectual property laws. You may not use, reproduce, distribute, or create derivative works from this content without our explicit permission.
          </p>
          <p className="mb-4">
            Our name, logo, and all related names, logos, product and service names, designs, and slogans are our trademarks. You may not use these without our prior written permission.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Disclaimer of Warranties</h2>
          <p className="mb-4">
            Our website and services are provided on an "as is" and "as available" basis. We make no warranties or representations, express or implied, regarding the operation of our website or the content, information, materials, or products included on our website or services.
          </p>
          <p className="mb-4">
            We disclaim all warranties, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that our website or services will be uninterrupted or error-free, that defects will be corrected, or that our website or services are free of viruses or other harmful components.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">
            To the fullest extent permitted by law, Future Doctor shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The use or inability to use our website or services</li>
            <li>Unauthorized access to or alteration of your transmissions or data</li>
            <li>Statements or conduct of any third party on our website</li>
            <li>Any other matter relating to our website or services</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify, defend, and hold harmless Future Doctor, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your use of our website or services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another</li>
            <li>Your conduct in connection with our website or services</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law and Jurisdiction</h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to These Terms</h2>
          <p className="mb-4">
            We reserve the right to modify or replace these Terms at any time. The updated version will be indicated by an updated "Last Updated" date. It is your responsibility to check these Terms periodically for changes. Your continued use of our website or services after any changes to these Terms constitutes your acceptance of such changes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Severability</h2>
          <p className="mb-4">
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">13. Entire Agreement</h2>
          <p className="mb-4">
            These Terms constitute the entire agreement between you and Future Doctor regarding your use of our website and services, superseding any prior agreements between you and Future Doctor.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">14. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mb-4">
            Future Doctor<br />
            Office #123, ABC Complex, MG Road<br />
            Bangalore - 560001, India<br />
            Email: legal@futuredoctor.com<br />
            Phone: +91 98765 43210
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
