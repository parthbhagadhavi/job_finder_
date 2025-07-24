import React, { useState } from 'react';
import './ApplyForm.css';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    resume: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Application Submitted Successfully!");
    console.log('Form Data:', formData);
    setFormData({
      name: '',
      email: '',
      education: '',
      resume: '',
      message: ''
    });
  };

  return (
    <div className="apply-form-container">
      <h2><i className="fas fa-paper-plane"></i> Apply for this Job</h2>
      <form className="apply-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <i className="fas fa-graduation-cap"></i>
          <input
            type="text"
            name="education"
            placeholder="Your Education (e.g. B.Sc Computer Science)"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <i className="fas fa-link"></i>
          <input
            type="url"
            name="resume"
            placeholder="Link to Resume (Google Drive, etc.)"
            value={formData.resume}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <i className="fas fa-comment-alt"></i>
          <textarea
            name="message"
            placeholder="Cover Letter or Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          <i className="fas fa-paper-plane"></i> Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
