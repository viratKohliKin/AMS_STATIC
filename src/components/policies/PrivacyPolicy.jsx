import React from "react";
import PolicyLayout from "./PolicyLayout";

const PrivacyPolicy = ({ onBack }) => {
  return (
    <PolicyLayout title="Privacy Policy" onBack={onBack}>

      <h2>Introduction</h2>
      <p>
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Personal details: Name, phone number, email.</li>
        <li>Order information: Address, payment details (not stored).</li>
        <li>Technical data: IP, device information, browser type.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To process and deliver your orders.</li>
        <li>To improve our website and services.</li>
        <li>To communicate updates, offers, and service notifications.</li>
        <li>To prevent fraud and ensure secure transactions.</li>
      </ul>

      <h2>Data Protection</h2>
      <p>
        We use secure encrypted systems and industry-standard safety protocols to protect your data from unauthorized access.
      </p>

      <h2>Sharing of Information</h2>
      <p>
        We do not sell or rent your personal information.  
        Data may be shared only with:
      </p>
      <ul>
        <li>Trusted delivery partners</li>
        <li>Payment gateways</li>
        <li>Legal authorities (only when required)</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We use cookies to enhance your browsing experience and improve site performance.
      </p>

      <h2>Your Rights</h2>
      <ul>
        <li>Request data deletion</li>
        <li>Update your information</li>
        <li>Opt out of marketing communication</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        If you have questions regarding this Privacy Policy, please contact us at:  
        <b>aruvimedicalsystem76@gmail.com</b>
      </p>

    </PolicyLayout>
  );
};

export default PrivacyPolicy;
