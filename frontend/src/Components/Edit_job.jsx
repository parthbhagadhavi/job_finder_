import React, { useState, useEffect } from "react";
import "./Edit_job.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Edit_job = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
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

  const [oldLogo, setOldLogo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (state?.job) {
      setFormData({ ...state.job, logo: null });
      setOldLogo(state.job.logo);
    }
  }, [state]);

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
      if (formData[key] !== null) {
        data.append(key, formData[key]);
      }
    }

    try {
      await axios.put(`http://localhost:3232/update-job/${state.job._id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      alert("Job Updated Successfully!");
      navigate("/poster_page");
    } catch (err) {
      console.error("Error updating job", err);
      alert("Error updating job. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="edit-job-container">
      <div className="edit-job-card">
        <div className="form-header">
          <h2>Edit Job Listing</h2>
          <p>Update the details of your job posting</p>
        </div>

        <form onSubmit={handleSubmit} className="edit-job-form">
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
                  value={formData.title}
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
                  value={formData.company}
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
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">Job Type*</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
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
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
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
                  value={formData.salary}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="deadline">Application Deadline*</label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline?.split('T')[0]}
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
                  value={formData.experience}
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
                  value={formData.qualification}
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
                  value={formData.skills}
                  onChange={handleChange}
                />
                <small className="form-hint">Separate skills with commas</small>
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
                value={formData.description}
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
                  value={formData.perks}
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
                  value={formData.workingDays}
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
                  value={formData.tags}
                  onChange={handleChange}
                />
                <small className="form-hint">Helps candidates find your job</small>
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
                    {formData.logo ? formData.logo.name : "Choose new logo..."}
                  </label>
                </div>
                {oldLogo && (
                  <div className="logo-preview">
                    <p>Current Logo:</p>
                    <img
                      src={`http://localhost:3232/uploads/images/${oldLogo}`}
                      alt="Current Company Logo"
                      className="current-logo"
                    />
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="website">Company Website</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="https://yourcompany.com"
                  value={formData.website}
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <small className="form-hint">For applicant communications</small>
              </div>
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
                  <i className="fas fa-spinner fa-spin"></i> Updating...
                </>
              ) : (
                <>
                  <i className="fas fa-save"></i> Update Job Listing
                </>
              )}
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate("/poster_page")}
            >
              Cancel
            </button>
            <small className="form-note">* indicates required field</small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit_job;