import React, { useState } from 'react';
import './Sign_in_page.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sign_in_page = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post('http://localhost:3232/sign_in_user', formData);

    if (res.status === 200) {
      alert('Sign In Successful!');
       navigate('/') // ← Redirect if needed
      setFormData({ email: '', password: '' });
    }
  } catch (err) {
    if (err.response) {
      alert(err.response.data.message); // Show specific error
    } else {
      alert('Login failed!');
    }
  }
};

  return (
    <div className="signin-container">
      <div className="signin-left">
        <h1>Welcome Back 👋</h1>
        <p>Sign in to access your account and explore top job opportunities.</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="signin illustration"
        />
      </div>

      <div className="signin-right">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>

          <div className="input-field">
            <span className="material-icons">mail</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <span className="material-icons">lock</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Login</button>

          <p className="signup-link">
            Don’t have an account? <a href="/sign_up">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sign_in_page;
