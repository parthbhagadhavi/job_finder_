import React, { useState } from 'react';
import './Sign_up_company.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sign_up_company = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    since: '',
    email: '',
    password: '',
    logo: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      setForm({ ...form, logo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', form.name);
  formData.append('since', form.since);
  formData.append('email', form.email);
  formData.append('password', form.password);
  formData.append('logo', form.logo); // image file

  try {
    const res = await axios.post('http://localhost:3232/sign_up_company', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (res.status === 200 || res.status === 201) {
      alert("Company signed up successfully!");
      navigate('/sign_in_company');
    }
  } catch (err) {
    console.error("Company Signup error:", err);
    alert("Signup failed!");
  }
};


  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Register Your Company 🏢</h1>
        <p>Showcase your company and connect with top talent instantly.</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="company signup"
        />
      </div>

      <div className="signup-right">
        <form onSubmit={handleSubmit} className="signup-form" encType="multipart/form-data">
          <h2>Company Registration</h2>

          <div className="input-field">
            <span className="material-icons">business</span>
            <input
              type="text"
              name="name"
              placeholder="Company Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <span className="material-icons">calendar_today</span>
            <input
              type="text"
              name="since"
              placeholder="Since (e.g. 2005)"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <span className="material-icons">email</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <span className="material-icons">lock</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <span className="material-icons">image</span>
            <input
              type="file"
              name="logo"
              onChange={handleChange}
            />
          </div>

          <button type="submit">Register Company</button>

          <p className="signin-link">
            Already registered? <a href="/sign_in_company">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sign_up_company;
