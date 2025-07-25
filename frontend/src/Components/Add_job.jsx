import React, { useState } from "react";
import "./Add_job.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add_job = () => {
  let navigate=useNavigate()
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
    await axios.post('http://localhost:3232/add-job', data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    alert("Job Posted Successfully!");
navigate('/poster_page')
  } catch (err) {
    console.error("Error posting job", err);
    alert("Error posting job.");
  }
};


  return (
    <div className="job-form-container">
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company Name" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Job Location" onChange={handleChange} required />

        <select name="type" onChange={handleChange} required>
          <option value="">-- Job Type --</option>
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Internship</option>
          <option>Freelance</option>
          <option>Contract</option>
        </select>

        <input type="text" name="salary" placeholder="Salary Range (₹)" onChange={handleChange} />
        <input type="date" name="deadline" onChange={handleChange} required />
        <input type="text" name="experience" placeholder="Experience Required" onChange={handleChange} />
        <input type="text" name="qualification" placeholder="Qualification / Education" onChange={handleChange} />
        <textarea name="description" rows="4" placeholder="Job Description" onChange={handleChange} required />
        <input type="text" name="skills" placeholder="Required Skills" onChange={handleChange} />
        <input type="file" name="logo" onChange={handleChange} />
        <input type="url" name="website" placeholder="Company Website" onChange={handleChange} />
        <input type="email" name="email" placeholder="Recruiter Email" onChange={handleChange} required />

        <select name="category" onChange={handleChange} required>
          <option value="">-- Job Category --</option>
          <option>IT</option>
          <option>Marketing</option>
          <option>HR</option>
          <option>Sales</option>
          <option>Finance</option>
        </select>

        <input type="text" name="perks" placeholder="Perks (e.g., WFH, Bonus)" onChange={handleChange} />
        <input type="text" name="workingDays" placeholder="Working Days" onChange={handleChange} />
        <input type="text" name="tags" placeholder="Tags (e.g., #Remote, #Urgent)" onChange={handleChange} />

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default Add_job;
