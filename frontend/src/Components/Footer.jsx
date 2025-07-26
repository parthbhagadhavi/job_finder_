import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <h2 className="footer-logo">Job<span>Hunt</span></h2>
            <p className="footer-tagline">Connecting talent with opportunity</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/jobs">Browse Jobs</a></li>
              <li><a href="/post-job">Post a Job</a></li>
              <li><a href="/candidates">Candidate Profiles</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="footer-text">Subscribe to get job alerts and updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 JobHunt. All rights reserved.</p>
          <div className="footer-payments">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-apple-pay"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;