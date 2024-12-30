import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-links">
            
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>Sustainability</li>
              <li>Leadership Team</li>
              <li>News & Media</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Models</h4>
            <ul>
              <li>Captive Model</li>
              <li>BOT</li>
              <li>Shared Services Model</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Industries</h4>
            <ul>
              <li>Banking & Finance</li>
              <li>Sciences & Healthcare</li>
              <li>Technology & Software</li>
              <li>Education & Training</li>
              <li>Hospitality & Leisure</li>
              <li>Power & Utilities</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li>contact@gcc.com</li>
              <li>+2 011 614 5741</li>
            </ul>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>

        <div className="get-in-touch">
          <span className="get-in-touch-line">Get in</span>
          <span className="get-in-touch-line">Touch →</span>
        </div>
      </div>
      <div className="footer-bottom mt-5">
        <p>©2024 GCC Connect. All Rights Reserved. Designed and Maintained by dChai</p>
        <p>Terms & Conditions • Privacy Policy • Sitemap</p>
      </div>
    </footer>
  );
};

export default Footer;
