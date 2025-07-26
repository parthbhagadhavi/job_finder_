import React, { useState } from 'react';
import './ApplyForm.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ApplyForm = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const companyEmail = location.state?.companyEmail || '';
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    resume: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post('http://localhost:3232/email_apply', {...formData, companyEmail});
      navigate('/user_poster');
    } catch (error) {
      console.error('Application error:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="application-container">
      <div className="application-card">
        <div className="application-header">
          <h2>Apply for This Position</h2>
          <p>Fill out the form below to submit your application</p>
        </div>
        
        <form className="application-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3 className="section-title">Personal Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user icon"></i> Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope icon"></i> Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">
                  <i className="fas fa-phone icon"></i> Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (123) 456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h3 className="section-title">Education & Experience</h3>
            <div className="form-group">
              <label htmlFor="education">
                <i className="fas fa-graduation-cap icon"></i> Education*
              </label>
              <input
                type="text"
                id="education"
                name="education"
                placeholder="e.g. B.Sc Computer Science, University of XYZ"
                value={formData.education}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="resume">
                <i className="fas fa-file-alt icon"></i> Resume/CV Link*
              </label>
              <input
                type="url"
                id="resume"
                name="resume"
                placeholder="https://drive.google.com/your-resume"
                value={formData.resume}
                onChange={handleChange}
                required
              />
              <small className="form-hint">Upload your resume to Google Drive/Dropbox and share the link</small>
            </div>
          </div>
          
          <div className="form-section">
            <h3 className="section-title">Additional Information</h3>
            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment-dots icon"></i> Cover Letter*
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us why you're the perfect candidate for this position..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <small className="form-hint">Minimum 100 characters</small>
            </div>
          </div>
          
          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Submitting...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Submit Application
                </>
              )}
            </button>
            <p className="form-note">* indicates required field</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;