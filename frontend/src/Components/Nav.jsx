import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (localStorage.getItem("companyAuth")) {
      localStorage.removeItem("companyAuth");
      alert("Company logged out successfully!");
      navigate("/sign_in_company");
    } 
    else if (localStorage.getItem("userAuth")) {
      localStorage.removeItem("userAuth");
      alert("User logged out successfully!");
      navigate("/sign_in");
    } 
    else {
      navigate("/");
    }
  };

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Job<span>Finder</span></Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link>
          <Link to="/companies" onClick={() => setMenuOpen(false)}>Companies</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          {/* Logout link */}
          <span 
            onClick={() => { 
              setMenuOpen(false); 
              handleLogout(); 
            }} 
            style={{ cursor: "pointer", color: "red" }}
          >
            Logout
          </span>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar top ${menuOpen ? 'rotate-top' : ''}`}></div>
          <div className={`bar middle ${menuOpen ? 'hide' : ''}`}></div>
          <div className={`bar bottom ${menuOpen ? 'rotate-bottom' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
