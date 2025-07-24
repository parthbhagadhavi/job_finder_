import React, { useState } from 'react';
import './Sign_up_page.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Sign_up_page = () => {
  let navigate=useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (form.password !== form.confirm) {
    alert("Passwords don't match!");
 
  }

else{
    try {
    const res = await axios.post('http://localhost:3232/sign_up_user', form);
    if (res.status === 200 || res.status === 201) {
      alert("Signed up successfully!");
      navigate('/sign_in');
    }
  } catch (err) {
    console.log("Signup error:", err);
    alert("Signup failed!");
  }
}
};


  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Join JobFinder 🚀</h1>
        <p>Discover top jobs, apply easily and shape your future with the best companies.</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="signup illustration"
        />
      </div>

      <div className="signup-right">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Create Account</h2>

          <div className="input-field">
            <span className="material-icons">person</span>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <span className="material-icons">email</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <span className="material-icons">lock</span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <span className="material-icons">lock</span>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirm"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Sign Up</button>

          <p className="signin-link">
            Already have an account? <a href="/sign_in">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sign_up_page;
