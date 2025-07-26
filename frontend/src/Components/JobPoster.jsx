import React from "react";
import "./JobPoster.css";

const JobPoster = () => {
  return (
    <section className="job-poster">
      <div className="poster-container">
        <div className="poster-content">
          <h1 className="poster-heading">
            Find Your <span>Dream Job</span> Today!
          </h1>
          <p className="poster-text">
            Join thousands of job seekers and land the perfect opportunity. Whether you're a fresher or an experienced professional — we've got the right job for you.
          </p>
          <div className="poster-buttons">
            <a href="/sign_in_company" className="poster-btn employer-btn">
              <i className="fas fa-briefcase"></i> Post a Job
            </a>
            <a href="/sign_in" className="poster-btn jobseeker-btn">
              <i className="fas fa-search"></i> Browse Jobs
            </a>
          </div>
          <div className="poster-stats">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Jobs Posted</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100K+</span>
              <span className="stat-label">Job Seekers</span>
            </div>
          </div>
        </div>

        <div className="poster-image">
          <img 
            src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7565.jpg" 
            alt="Job seekers and employers connecting" 
            className="featured-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/600x400?text=Job+Connection";
            }}
          />
          <div className="image-badge">
            <i className="fas fa-check-circle"></i> Trusted by top companies
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPoster;