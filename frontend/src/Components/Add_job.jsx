import React, { useState } from 'react';
import './Add_job.css';
import Nav from './nav';
import Footer from './Footer';
import axios from 'axios'
const Add_job = () => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    type: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log('Job Submitted:', formData);
    alert("🎉 Job Added Successfully!");

    setFormData({
      company: '',
      title: '',
      type: '',
      location: '',
      description: ''
    });
  };

  return (
    <>
    
      <div className="job-form-container">
        <h2><i className="fas fa-briefcase"></i> Add New Job</h2>
        <form onSubmit={handleSubmit} className="job-form">
          <div className="input-group">
            <i className="fas fa-building"></i>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fas fa-id-badge"></i>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fas fa-clipboard-list"></i>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div className="input-group">
            <i className="fas fa-map-marker-alt"></i>
            <input
              type="text"
              name="location"
              placeholder="Job Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fas fa-align-left"></i>
            <textarea
              name="description"
              placeholder="Job Description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <i className="fas fa-plus-circle"></i> Add Job
          </button>
        </form>
      </div>

    </>
  );
};

export default Add_job;
