import React, { useState } from "react";
import "./Add_job.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add_job = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary: "",
    deadline: "",
    experience: "",
    qualification: "",
    description: "",
    skills: "",
    logo: null,
    website: "",
    email: "",
    category: "",
    perks: "",
    workingDays: "",
    tags: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:3232/add-job', data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        navigate('/poster_page');
      }, 2000);
    } catch (err) {
      console.error("Error posting job", err);
      alert("Error posting job. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="job-form-wrapper">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="success-popup">
          <div className="popup-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4BB543"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3>Job Posted Successfully!</h3>
            <p>Your job listing has been created.</p>
          </div>
        </div>
      )}

      <div className="job-form-container">
        <div className="form-header">
          <h2>Post a New Job Opportunity</h2>
          <p>Fill out the form below to list your job opening</p>
        </div>
        
        <form onSubmit={handleSubmit} className="job-form">
          <div className="form-section">
            <h3 className="section-title">Basic Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="title">Job Title*</label>
                <input 
                  type="text" 
                  id="title" 
                  name="title" 
                  placeholder="e.g. Frontend Developer" 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company Name*</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  placeholder="Your company name" 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="location">Job Location*</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  placeholder="e.g. Bangalore, Remote" 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="type">Job Type*</label>
                <select id="type" name="type" onChange={handleChange} required>
                  <option value="">Select job type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="category">Job Category*</label>
                <select id="category" name="category" onChange={handleChange} required>
                  <option value="">Select category</option>
                  <option value="IT">IT</option>
                  <option value="Marketing">Marketing</option>
                  <option value="HR">HR</option>
                  <option value="Sales">Sales</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="salary">Salary Range</label>
                <input 
                  type="text" 
                  id="salary" 
                  name="salary" 
                  placeholder="e.g. ₹8,00,000 - ₹12,00,000" 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="deadline">Application Deadline*</label>
                <input 
                  type="date" 
                  id="deadline" 
                  name="deadline" 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h3 className="section-title">Requirements</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="experience">Experience Required</label>
                <input 
                  type="text" 
                  id="experience" 
                  name="experience" 
                  placeholder="e.g. 3-5 years" 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="qualification">Education Qualification</label>
                <input 
                  type="text" 
                  id="qualification" 
                  name="qualification" 
                  placeholder="e.g. B.Tech in Computer Science" 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="skills">Required Skills</label>
                <input 
                  type="text" 
                  id="skills" 
                  name="skills" 
                  placeholder="e.g. React, Node.js, MongoDB" 
                  onChange={handleChange} 
                />
                <small className="hint">Separate skills with commas</small>
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h3 className="section-title">Job Details</h3>
            <div className="form-group">
              <label htmlFor="description">Job Description*</label>
              <textarea 
                id="description" 
                name="description" 
                rows="6" 
                placeholder="Describe the responsibilities, expectations, and role details..." 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="perks">Perks & Benefits</label>
                <input 
                  type="text" 
                  id="perks" 
                  name="perks" 
                  placeholder="e.g. WFH, Health insurance, Bonus" 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="workingDays">Working Days/Hours</label>
                <input 
                  type="text" 
                  id="workingDays" 
                  name="workingDays" 
                  placeholder="e.g. Monday-Friday, 9am-6pm" 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="tags">Job Tags</label>
                <input 
                  type="text" 
                  id="tags" 
                  name="tags" 
                  placeholder="e.g. #Remote, #Urgent, #Tech" 
                  onChange={handleChange} 
                />
                <small className="hint">Helps candidates find your job</small>
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h3 className="section-title">Company Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="logo">Company Logo</label>
                <div className="file-upload">
                  <input 
                    type="file" 
                    id="logo" 
                    name="logo" 
                    accept="image/*" 
                    onChange={handleChange} 
                  />
                  <label htmlFor="logo" className="file-upload-label">
                    {formData.logo ? formData.logo.name : "Choose file..."}
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="website">Company Website</label>
                <input 
                  type="url" 
                  id="website" 
                  name="website" 
                  placeholder="https://yourcompany.com" 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Contact Email*</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="recruiter@company.com" 
                  onChange={handleChange} 
                  required 
                />
                <small className="hint">For applicant communications</small>
              </div>
            </div>
          </div>
          
          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Posting..." : "Post Job Opportunity"}
            </button>
            <small className="form-note">* indicates required field</small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add_job;