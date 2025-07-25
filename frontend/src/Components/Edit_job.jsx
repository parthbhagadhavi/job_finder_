import React, { useState, useEffect } from "react";
import "./Add_job.css";
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

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
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
      alert("Error updating job.");
    }
  };

  return (
    <div className="job-form-container">
      <h2>Edit Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Job Location" value={formData.location} onChange={handleChange} required />

        <select name="type" value={formData.type} onChange={handleChange} required>
          <option value="">-- Job Type --</option>
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Internship</option>
          <option>Freelance</option>
          <option>Contract</option>
        </select>

        <input type="text" name="salary" placeholder="Salary Range (₹)" value={formData.salary} onChange={handleChange} />
        <input type="date" name="deadline" value={formData.deadline?.split('T')[0]} onChange={handleChange} required />
        <input type="text" name="experience" placeholder="Experience Required" value={formData.experience} onChange={handleChange} />
        <input type="text" name="qualification" placeholder="Qualification / Education" value={formData.qualification} onChange={handleChange} />
        <textarea name="description" rows="4" placeholder="Job Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="skills" placeholder="Required Skills" value={formData.skills} onChange={handleChange} />

        {/* Image Upload */}
        <input type="file" name="logo" onChange={handleChange} />
        {oldLogo && (
          <div className="old-logo-preview">
            <p>Old Logo:</p>
            <img
              src={`http://localhost:3232/uploads/images/${oldLogo}`}
              alt="Old Logo"
              style={{ width: "100px", height: "auto", marginTop: "10px" }}
            />
          </div>
        )}

        <input type="url" name="website" placeholder="Company Website" value={formData.website} onChange={handleChange} />
        <input type="email" name="email" placeholder="Recruiter Email" value={formData.email} onChange={handleChange} required />

        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">-- Job Category --</option>
          <option>IT</option>
          <option>Marketing</option>
          <option>HR</option>
          <option>Sales</option>
          <option>Finance</option>
        </select>

        <input type="text" name="perks" placeholder="Perks (e.g., WFH, Bonus)" value={formData.perks} onChange={handleChange} />
        <input type="text" name="workingDays" placeholder="Working Days" value={formData.workingDays} onChange={handleChange} />
        <input type="text" name="tags" placeholder="Tags (e.g., #Remote, #Urgent)" value={formData.tags} onChange={handleChange} />

        <button type="submit">Update Job</button>
      </form>
    </div>
  );
};

export default Edit_job;
