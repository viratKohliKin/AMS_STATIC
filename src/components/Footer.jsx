import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';
const Footer = ({ company,onNavigate  }) => {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-content">

          {/* Company Section */}
          <div className="footer-section">
            {company.logo.type === 'text' ? (
              <h3>{company.logo.text}</h3>
            ) : (
              <img 
                src={company.logo.image}
                alt={company.name}
                className="footer-logo"
              />
            )}
            <p>
              {company.tagline} Your trusted partner in medical equipment supply, 
              delivering excellence in healthcare solutions worldwide.
            </p>

            <div className="social-links">
              <a href={company.social.facebook}><FaFacebook /></a>
              <a href={company.social.twitter}><FaTwitter /></a>
              <a href={company.social.linkedin}><FaLinkedin /></a>
              <a href={company.social.instagram}><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="footer-section policy-links">
            <h4>Policy Information</h4>
            <ul>
              <li>
                <a style={{ cursor: "pointer" }} onClick={() => onNavigate('payment-policy')}>
                  Payment Policy
                </a>
              </li>
              <li>
                <a style={{ cursor: "pointer" }} onClick={() => onNavigate('refund-policy')}>
                  Return & Refund Policy
                </a>
              </li>
              <li>
                <a style={{ cursor: "pointer" }} onClick={() => onNavigate('shipping-policy')}>
                  Shipping Policy
                </a>
              </li>
              <li>
                <a style={{ cursor: "pointer" }} onClick={() => onNavigate('privacy-policy')}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a style={{ cursor: "pointer" }} onClick={() => onNavigate('terms')}>
                  Terms & Conditions
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📞 {company.contact.phone.primary}</p>
              <p>✉️ {company.contact.email.primary}</p>
              <p>📍 {company.contact.address.headOffice}</p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods">
          <img
            src="https://image.cdn.shpy.in/static/web-store/payment-methods.png"
            alt="Online Payment Methods"
            className="payment-img"
          />
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
