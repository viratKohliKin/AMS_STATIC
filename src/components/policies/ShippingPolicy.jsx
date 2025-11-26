import React from "react";
import PolicyLayout from "./PolicyLayout";

const ShippingPolicy = ({ onBack }) => {
  return (
    <PolicyLayout title="Shipping Policy" onBack={onBack}>

      <h2>Shipping Details</h2>
      <ul>
        <li>Orders processed within 24–48 hours.</li>
        <li>Delivery time: 3–7 days (India), 7–14 days (International).</li>
        <li>Email will be sent with tracking details.</li>
      </ul>

      <h2>Shipping Methods</h2>
      <ul>
        <li>Standard Shipping (Surface)</li>
        <li>Express Shipping (Air)</li>
      </ul>

      <h2>Charges</h2>
      <ul>
        <li>Based on weight and destination.</li>
        <li>Shipping fees are non-refundable.</li>
      </ul>

      <h2>Delivery Zones</h2>
      <p>We deliver to all major cities across India.</p>

      <h2>Non-Delivery</h2>
      <p>We are not liable for delays caused by courier or external factors.</p>

      <h2>Return to Sender</h2>
      <p>Re-shipping charges apply if the address is wrong or customer is unavailable.</p>

      <h2>Contact</h2>
      <p>Email: <b>aruvimedicalsystem76@gmail.com</b></p>

    </PolicyLayout>
  );
};

export default ShippingPolicy;
