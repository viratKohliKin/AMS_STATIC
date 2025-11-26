import React from "react";
import PolicyLayout from "./PolicyLayout";

const TermsConditions = ({ onBack }) => {
  return (
    <PolicyLayout title="Terms & Conditions" onBack={onBack}>

      <h2>Introduction</h2>
      <p>
        These Terms & Conditions govern your access and use of our website, services, and products.
        By using our site, you agree to comply with these terms.
      </p>

      <h2>Use of Website</h2>
      <ul>
        <li>Users must provide accurate and complete information.</li>
        <li>Misuse of website, data scraping, or fraudulent activity is prohibited.</li>
        <li>We reserve the right to restrict access at any time.</li>
      </ul>

      <h2>Product Information</h2>
      <p>
        We ensure all product details are accurate, but minor variations in color, packaging, or specifications may occur.
      </p>

      <h2>Orders & Payments</h2>
      <ul>
        <li>Orders are confirmed only after successful payment.</li>
        <li>We reserve the right to cancel or reject orders due to stock issues or incorrect information.</li>
      </ul>

      <h2>Shipping</h2>
      <p>
        Shipping timelines are estimates and may vary due to courier delays or external factors.
      </p>

      <h2>Returns & Refunds</h2>
      <p>
        Returns and refunds are handled as per our official Return & Refund Policy provided on the website.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        We are not liable for indirect, incidental, or consequential damages caused by misuse or delays.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We may update these Terms & Conditions at any time. Continued use of the site means you accept the updated terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        For questions regarding these terms, email us at:  
        <b>aruvimedicalsystem76@gmail.com</b>
      </p>

    </PolicyLayout>
  );
};

export default TermsConditions;
