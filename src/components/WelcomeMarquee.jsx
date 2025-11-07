import React from 'react';
import './WelcomeMarquee.css';

const WelcomeMarquee = () => {
  const messages = [
    "🏥 Welcome to Aruvi Medical System - Your Trusted Medical Equipment Partner",
    "⭐ Premium Quality Medical Equipments", 
    "🏆 Trusted by Hospitals & Healthcare Facilities all over india",
    "🔒 Certified • Approved • Quality Guaranteed",
    "🚚 Fast Delivery • Installation Support • 24/7/365 Customer Service"
  ];

  return (
    <div className="welcome-marquee">
      <div className="marquee-content">
        {messages.map((message, index) => (
          <span key={index} className="marquee-item">
            {message} &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {messages.map((message, index) => (
          <span key={`dup-${index}`} className="marquee-item">
            {message} &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default WelcomeMarquee;