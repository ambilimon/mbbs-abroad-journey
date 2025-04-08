
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Refund Policy | Future Doctor</title>
        <meta name="description" content="Refund Policy for Future Doctor - MBBS Abroad Consultancy" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-6">
            Last updated: April 8, 2025
          </p>
          
          <p className="mb-6">
            At Future Doctor, we strive to provide high-quality services and maintain transparency in all our dealings. This Refund Policy outlines the terms and conditions for refunds related to our services. By engaging our services, you agree to the terms of this Refund Policy.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Consultation and Registration Fees</h2>
          <p className="mb-4">
            Initial consultation fees and registration fees are non-refundable. These fees cover the cost of our initial assessment, counseling, and administrative setup for your case.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Package Fees</h2>
          <h3 className="text-xl font-medium mt-6 mb-3">2.1 Cancellation Before Service Initiation</h3>
          <p className="mb-4">
            If you cancel our services before we have initiated any process (university application, documentation, etc.):
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Within 7 days of payment: 80% refund of the service package fee</li>
            <li>Between 8-14 days of payment: 50% refund of the service package fee</li>
            <li>After 14 days of payment: No refund</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">2.2 Cancellation After Service Initiation</h3>
          <p className="mb-4">
            Once we have initiated services (university applications, documentation process, etc.), the service package fees are generally non-refundable. However, in exceptional circumstances, we may consider partial refunds on a case-by-case basis, subject to the stage of service completion.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. University Application Fees</h2>
          <p className="mb-4">
            University application fees are paid directly to the universities or through us as facilitators. Refund of these fees is subject to the respective university's refund policy. We will assist you in applying for refunds from universities where applicable, but we cannot guarantee the outcome of such refund requests.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Tuition Fees</h2>
          <p className="mb-4">
            Tuition fees are paid directly to the educational institutions. Refunds of tuition fees are subject to the refund policies of the respective institutions. Our role is limited to facilitating communication between you and the institution regarding refund requests.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. FMGE/NEXT Coaching Fees</h2>
          <h3 className="text-xl font-medium mt-6 mb-3">5.1 Cancellation Before Program Starts</h3>
          <p className="mb-4">
            If you cancel your enrollment in our coaching program before it starts:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>More than 14 days before the program start date: 70% refund</li>
            <li>7-14 days before the program start date: 50% refund</li>
            <li>Less than 7 days before the program start date: No refund</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">5.2 Cancellation After Program Starts</h3>
          <p className="mb-4">
            Once the coaching program has started, fees are non-refundable. However, we may offer the following alternatives:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Transfer to the next batch (subject to availability)</li>
            <li>Access to recorded sessions and study materials for the duration of the program</li>
            <li>Credit for other services offered by Future Doctor</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Visa Rejection Cases</h2>
          <p className="mb-4">
            If your visa application is rejected despite following all our guidance and providing accurate information:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>We will assist you in applying to alternative universities in countries with higher visa success rates without additional service charges</li>
            <li>If you choose to discontinue the process entirely, a partial refund may be considered based on the services already provided</li>
          </ul>
          <p className="mb-4">
            Please note that visa application fees paid to embassies/consulates are generally non-refundable.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Accommodation and Travel Arrangements</h2>
          <p className="mb-4">
            Refunds for accommodation bookings, travel arrangements, or other third-party services facilitated through us are subject to the refund policies of the respective service providers.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Refund Process</h2>
          <p className="mb-4">
            To request a refund:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Submit a written refund request to refunds@futuredoctor.com</li>
            <li>Include your full name, contact details, payment receipt, and reason for the refund request</li>
            <li>We will acknowledge your request within 3 business days</li>
            <li>Refund requests will be processed within 14 business days from approval</li>
            <li>Refunds will be processed through the original payment method when possible</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Exceptional Circumstances</h2>
          <p className="mb-4">
            In case of exceptional circumstances such as medical emergencies (supported by documentation), family emergencies, or natural disasters, we may consider refund requests on a case-by-case basis, even if they fall outside the standard refund policy.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Service Guarantees</h2>
          <p className="mb-4">
            For services where we offer specific guarantees:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>If we fail to deliver the guaranteed service despite your full cooperation and provision of accurate information, you may be eligible for a full or partial refund as specified in the service agreement</li>
            <li>Claims under service guarantees must be submitted within 30 days of the service completion deadline</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Disputed Charges</h2>
          <p className="mb-4">
            If you believe you have been charged incorrectly:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact us immediately at finance@futuredoctor.com</li>
            <li>Provide details of the transaction and the reason you believe it is incorrect</li>
            <li>We will investigate and respond within 7 business days</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Changes to This Policy</h2>
          <p className="mb-4">
            We reserve the right to modify or update this Refund Policy at any time. Changes will be effective immediately upon posting on our website. It is your responsibility to review this policy periodically for changes. Your continued use of our services after any modifications to this Refund Policy constitutes your acceptance of such changes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Refund Policy or would like to request a refund, please contact us at:
          </p>
          <p className="mb-4">
            Future Doctor<br />
            Office #123, ABC Complex, MG Road<br />
            Bangalore - 560001, India<br />
            Email: refunds@futuredoctor.com<br />
            Phone: +91 98765 43210
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicyPage;
