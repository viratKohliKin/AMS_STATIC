import React from "react";
import "./policy.css";

const PolicyLayout = ({ title, children, onBack }) => {
  return (
    <div className="policy-wrapper">
      <button className="policy-back-btn" onClick={onBack}>← Back</button>

      <div className="policy-box">
        <h1>{title}</h1>
        <div className="policy-content">{children}</div>
      </div>
    </div>
  );
};

export default PolicyLayout;
