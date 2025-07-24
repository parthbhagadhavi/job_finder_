import React from "react";
import "./JobPoster.css";

const JobPoster = () => {
  return (
    <section className="job-poster">
      <div className="poster-content">
        <h1 className="poster-heading">
          Find Your <span>Dream Job</span> Today!
        </h1>
        <p className="poster-text">
          Join thousands of job seekers and land the perfect opportunity. Whether you're a fresher or an experienced professional — we've got the right job for you.
        </p>
        <a href="/sign_in_company" className="poster-btn">Add Job</a>
        <a href="/sign_in"  className="poster-btn2">Find Job</a>
      </div>

      <div className="poster-image">
        <img src="https://img.freepik.com/free-vector/job-hunting-concept-illustration_114360-476.jpg" alt="Job Advertisement" />
      </div>
    </section>
  );
};

export default JobPoster;
