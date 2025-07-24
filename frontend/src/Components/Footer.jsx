import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Job<span>Hunt</span></h2>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/jobs">Jobs</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>

        <p className="footer-copy">© 2025 JobHunt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
