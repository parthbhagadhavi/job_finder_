import React, { useState } from 'react';
import './Sign_in_company.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sign_up_company from './Sign_up_company';

const Sign_in_company = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3232/sign_in_company', form);
      if (res.status === 200 || res.status === 201) {
        alert("Login successful!");
        navigate('/poster_page');
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Login failed! Please check credentials.");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <h1>Welcome Back, Company! 👋</h1>
        <p>Log in to manage your account, jobs, and candidates.</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
          alt="signin"
        />
      </div>

      <div className="signin-right">
        <form onSubmit={handleSubmit} className="signin-form">
          <h2>Company Login</h2>

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

          <button type="submit">Login</button>

          <p className="signup-link">
            Don’t have an account? <a href="/sign_up_company">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sign_in_company;
