import React from 'react';
import './CompanyCard.css';
import { Link } from 'react-router-dom';

const CompanyCards = () => {
  return (
    <div>
     

      {/* Cards Container */}
      <div className="card-container">
        
        {/* Card 1 */}
        <div className="company-card">
          <div className="card-header">
            <img src="https://logo.clearbit.com/google.com" alt="Company Logo" className="company-logo" />
            <div>
              <h2>Google LLC</h2>
              <p>Location: Hyderabad, India</p>
              <p>Type: Full Time</p>
            </div>
          </div>
          <div className="card-body">
            <p><strong>Role:</strong> Frontend Developer</p>
            <p><strong>Salary:</strong> ₹12,00,000 / year</p>
            <p className="description">Work with modern UI technologies like React, Redux, and TypeScript.</p>
          </div>
          <div className="card-footer">
       
          </div>
        </div>

        {/* Card 2 */}
        <div className="company-card">
          <div className="card-header">
            <img src="https://logo.clearbit.com/microsoft.com" alt="Company Logo" className="company-logo" />
            <div>
              <h2>Microsoft</h2>
              <p>Location: Bengaluru, India</p>
              <p>Type: Internship</p>
            </div>
          </div>
          <div className="card-body">
            <p><strong>Role:</strong> Software Intern</p>
            <p><strong>Salary:</strong> ₹30,000 / month</p>
            <p className="description">Learn from experts and build real-world projects using C#, .NET, and Azure.</p>
          </div>
          <div className="card-footer">
      
          </div>
        </div>

        {/* Card 3 */}
        <div className="company-card">
          <div className="card-header">
            <img src="https://logo.clearbit.com/amazon.com" alt="Company Logo" className="company-logo" />
            <div>
              <h2>Amazon</h2>
              <p>Location: Remote</p>
              <p>Type: Part Time</p>
            </div>
          </div>
          <div className="card-body">
            <p><strong>Role:</strong> Backend Engineer</p>
            <p><strong>Salary:</strong> ₹15,00,000 / year</p>
            <p className="description">Develop APIs and backend systems using Node.js and AWS Lambda.</p>
          </div>
          <div className="card-footer">

          </div>
        </div>

      </div>
    </div>
  );
};

export default CompanyCards;
