import React from "react";
import PolicyLayout from "./PolicyLayout";

const PaymentPolicy = ({ onBack }) => {
  return (
    <PolicyLayout title="Payment Policy" onBack={onBack}>

      <h2>Payment Methods</h2>
      <ul>
        <li>Debit/Credit Cards</li>
        <li>Net Banking</li>
        <li>UPI / Wallets (Paytm, GPay)</li>
        <li>Cash on Delivery</li>
      </ul>

      <h2>Payment Terms</h2>
      <ul>
        <li>Full payment required while ordering.</li>
        <li>Taxes included unless mentioned.</li>
        <li>Secure encrypted payment gateway.</li>
      </ul>

      <h2>Refunds</h2>
      <ul>
        <li>Processed within 5–7 business days.</li>
        <li>Returned to the original payment method.</li>
      </ul>

      <h2>Payment Security</h2>
      <ul>
        <li>We do not store card details.</li>
        <li>All payments are encrypted.</li>
      </ul>

      <h2>Failed Payments</h2>
      <p>Please retry or contact your bank.</p>

      <h2>Contact</h2>
      <p>Email: <b>aruvimedicalsystem76@gmail.com</b></p>

    </PolicyLayout>
  );
};

export default PaymentPolicy;
