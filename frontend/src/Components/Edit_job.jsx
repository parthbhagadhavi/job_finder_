import React, { useState, useEffect } from "react";
import "./Edit_job.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Edit_job = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // ✅ Restrict to companyAuth only
  useEffect(() => {
    const companyAuth = localStorage.getItem("companyAuth");
    if (!companyAuth) {
      alert("Only company accounts can access this page.");
      navigate("/sign_in_company");
    }
  }, [navigate]);

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

  // ✅ Pre-fill form
  useEffect(() => {
    const companyData = JSON.parse(localStorage.getItem("companyAuth"));
    if (state?.job) {
      setFormData({
        ...state.job,
        logo: null,
        company: companyData?.name || state.job.company || "",
        email: companyData?.email || state.job.email || ""
      });
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
      if (formData[key] !== null && formData[key] !== undefined) {
        data.append(key, formData[key]);
      }
    }

    try {
      await axios.put(`http://localhost:3232/update-job/${state.job._id}`, data, {
        headers: { "Content-Type": "multipart/form-data" }
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
          <h2>Edit Job</h2>
          <p>Update job details below</p>
        </div>

        <form onSubmit={handleSubmit} className="edit-job-form">
          <div className="form-grid">
            {/* Row 1 */}
            <div className="form-group">
              <label>Job Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" name="company" value={formData.company} readOnly />
            </div>

            {/* Row 2 */}
            <div className="form-group">
              <label>Location</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Job Type</label>
              <input type="text" name="type" value={formData.type} onChange={handleChange} required />
            </div>

            {/* Row 3 */}
            <div className="form-group">
              <label>Salary</label>
              <input type="number" name="salary" value={formData.salary} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Deadline</label>
              <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required />
            </div>

            {/* Row 4 */}
            <div className="form-group">
              <label>Experience</label>
              <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Qualification</label>
              <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
            </div>

            {/* Row 5 */}
            <div className="form-group full-width">
              <label>Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required />
            </div>

            <div className="form-group full-width">
              <label>Skills</label>
              <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
            </div>

            {/* Row 6 */}
            <div className="form-group">
              <label>Website</label>
              <input type="url" name="website" value={formData.website} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} readOnly />
            </div>

            {/* Row 7 */}
            <div className="form-group">
              <label>Category</label>
              <input type="text" name="category" value={formData.category} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Perks</label>
              <input type="text" name="perks" value={formData.perks} onChange={handleChange} />
            </div>

            {/* Row 8 */}
            <div className="form-group">
              <label>Working Days</label>
              <input type="text" name="workingDays" value={formData.workingDays} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Tags</label>
              <input type="text" name="tags" value={formData.tags} onChange={handleChange} />
            </div>

            {/* Logo Upload */}
            <div className="form-group full-width">
              <label>Logo</label>
              {oldLogo && !formData.logo && (
                <img src={oldLogo} alt="Old Logo" width="80" style={{ display: "block", marginBottom: "10px" }} />
              )}
              <input type="file" name="logo" accept="image/*" onChange={handleChange} />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Updating..." : "Update Job"}
            </button>
            <button type="button" className="cancel-button" onClick={() => navigate("/poster_page")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit_job;
