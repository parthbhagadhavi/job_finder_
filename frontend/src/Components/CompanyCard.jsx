import React from 'react';
import './CompanyCard.css';
import { Link } from 'react-router-dom';

const CompanyCards = () => {
  return (
    <div className="company-cards-container">
      <div className="cards-grid">
        {/* Card 1 */}
        <div className="company-card">
          <div className="card-badge">Featured</div>
          <div className="card-header">
            <div className="logo-container">
              <img 
                src="https://logo.clearbit.com/google.com" 
                alt="Google Logo" 
                className="company-logo" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/100?text=G";
                }}
              />
            </div>
            <div className="company-info">
              <h3 className="company-name">Google LLC</h3>
              <div className="company-meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i> Hyderabad, India
                </span>
                <span className="job-type">
                  <i className="fas fa-briefcase"></i> Full Time
                </span>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h4 className="job-title">Frontend Developer</h4>
            <div className="salary">
              <i className="fas fa-rupee-sign"></i> ₹12,00,000 / year
            </div>
            <p className="job-description">
              Work with modern UI technologies like React, Redux, and TypeScript to build innovative web applications.
            </p>
            <div className="skills-tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">UI/UX</span>
            </div>
          </div>
          <div className="card-footer">
            <Link to="/apply" className="apply-button">
              Apply Now <i className="fas fa-arrow-right"></i>
            </Link>
            <button className="save-button">
              <i className="far fa-bookmark"></i>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="company-card">
          <div className="card-header">
            <div className="logo-container">
              <img 
                src="https://logo.clearbit.com/microsoft.com" 
                alt="Microsoft Logo" 
                className="company-logo" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/100?text=M";
                }}
              />
            </div>
            <div className="company-info">
              <h3 className="company-name">Microsoft</h3>
              <div className="company-meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i> Bengaluru, India
                </span>
                <span className="job-type">
                  <i className="fas fa-briefcase"></i> Internship
                </span>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h4 className="job-title">Software Intern</h4>
            <div className="salary">
              <i className="fas fa-rupee-sign"></i> ₹30,000 / month
            </div>
            <p className="job-description">
              Learn from experts and build real-world projects using C#, .NET, and Azure cloud technologies.
            </p>
            <div className="skills-tags">
              <span className="tag">C#</span>
              <span className="tag">.NET</span>
              <span className="tag">Azure</span>
            </div>
          </div>
          <div className="card-footer">
            <Link to="/apply" className="apply-button">
              Apply Now <i className="fas fa-arrow-right"></i>
            </Link>
            <button className="save-button">
              <i className="far fa-bookmark"></i>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="company-card">
          <div className="card-header">
            <div className="logo-container">
              <img 
                src="https://logo.clearbit.com/amazon.com" 
                alt="Amazon Logo" 
                className="company-logo" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/100?text=A";
                }}
              />
            </div>
            <div className="company-info">
              <h3 className="company-name">Amazon</h3>
              <div className="company-meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i> Remote
                </span>
                <span className="job-type">
                  <i className="fas fa-briefcase"></i> Part Time
                </span>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h4 className="job-title">Backend Engineer</h4>
            <div className="salary">
              <i className="fas fa-rupee-sign"></i> ₹15,00,000 / year
            </div>
            <p className="job-description">
              Develop scalable APIs and backend systems using Node.js and AWS Lambda in a remote work environment.
            </p>
            <div className="skills-tags">
              <span className="tag">Node.js</span>
              <span className="tag">AWS</span>
              <span className="tag">API</span>
            </div>
          </div>
          <div className="card-footer">
            <Link to="/apply" className="apply-button">
              Apply Now <i className="fas fa-arrow-right"></i>
            </Link>
            <button className="save-button">
              <i className="far fa-bookmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCards;