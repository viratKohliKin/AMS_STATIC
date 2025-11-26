import React from "react";
import PolicyLayout from "./PolicyLayout";

const RefundPolicy = ({ onBack }) => {
  return (
    <PolicyLayout title="Return & Refund Policy" onBack={onBack}>

      <h2>Eligibility</h2>
      <ul>
        <li>Return window: 30 days.</li>
        <li>Product must be unused, original packaging, invoice required.</li>
        <li>Physical damage not eligible.</li>
      </ul>

      <h2>Refund Process</h2>
      <ol>
        <li>Email request: aruvimedicalsystem76@gmail.com</li>
        <li>Share invoice & reason for return</li>
        <li>Refund issued in 5–7 business days</li>
      </ol>

      <h2>Refund Method</h2>
      <ul>
        <li>Online → original payment method</li>
        <li>COD → electronic transfer</li>
      </ul>

      <h2>Shipping Costs</h2>
      <p>Shipping fees are non-refundable.</p>

      <h2>Contact</h2>
      <p>Email: <b>aruvimedicalsystem76@gmail.com</b></p>

    </PolicyLayout>
  );
};

export default RefundPolicy;
