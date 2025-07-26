import React, { useEffect, useState } from 'react';
import './Job_Card.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Job_Card = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get('http://localhost:3232/get-jobs');
                setJobs(res.data);
            } catch (err) {
                console.error("Error fetching jobs:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const handleEdit = (job) => {
        navigate(`/edit-job/${job._id}`, { state: { job } });
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this job posting?")) {
            try {
                await axios.delete(`http://localhost:3232/delete-job/${id}`);
                setJobs(prevJobs => prevJobs.filter(job => job._id !== id));
            } catch (error) {
                console.error("Error deleting job:", error);
                alert("Failed to delete job. Please try again.");
            }
        }
    };

    const handleApply = (job) => {
        navigate('/applyform', {
            state: {
                companyEmail: job.email,
                jobTitle: job.title,
                companyName: job.company
            }
        });
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading jobs...</p>
            </div>
        );
    }

    if (jobs.length === 0) {
        return (
            <div className="no-jobs">
                <h2>No job listings available</h2>
                <p>Be the first to post a job!</p>
                <a href="/add-job" className="add-job-btn">➕ Post a Job</a>
            </div>
        );
    }

    return (
        <div className="jobs-container">
            <div className="jobs-header">
                <h1>Available Job Positions</h1>
                <a href="/add-job" className="add-job-btn">
                    <i className="fas fa-plus"></i> Post New Job
                </a>
            </div>

            <div className="jobs-grid">
                {jobs.map((job) => (
                    <div key={job._id} className="job-card">
                        <div className="card-header">
                            <div className="company-logo-container">
                                <img
                                    src={`http://localhost:3232/uploads/images/${job.logo}`}
                                    alt={`${job.company} logo`}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/100?text=Logo";
                                    }}
                                />
                            </div>
                            <div className="company-info">
                                <h2>{job.title}</h2>
                                <h3>{job.company}</h3>
                                <div className="job-meta">
                                    <span><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                                    <span><i className="fas fa-clock"></i> {job.type}</span>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="salary-info">
                                <i className="fas fa-rupee-sign"></i>
                                <span>₹{job.salary}</span>
                            </div>

                            <div className="job-description">
                                <p>{job.description.length > 150 ? `${job.description.substring(0, 150)}...` : job.description}</p>
                            </div>

                            <div className="skills-container">
                                {job.skills.split(",").map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill.trim()}</span>
                                ))}
                            </div>

                            <div className="details-grid">
                                <div className="detail-item">
                                    <i className="fas fa-calendar-alt"></i>
                                    <div>
                                        <span>Deadline</span>
                                        <p>{new Date(job.deadline).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <i className="fas fa-briefcase"></i>
                                    <div>
                                        <span>Experience</span>
                                        <p>{job.experience}</p>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <i className="fas fa-graduation-cap"></i>
                                    <div>
                                        <span>Qualification</span>
                                        <p>{job.qualification}</p>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <i className="fas fa-tag"></i>
                                    <div>
                                        <span>Category</span>
                                        <p>{job.category}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer">
                            
                            <a
                                href={job.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="website-btn"
                            >
                                <i className="fas fa-globe"></i> Website
                            </a>
                        </div>

                        <div className="admin-actions">
                            <button 
                                className="edit-btn"
                                onClick={() => handleEdit(job)}
                            >
                                <i className="fas fa-edit"></i> Edit
                            </button>
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(job._id)}
                            >
                                <i className="fas fa-trash-alt"></i> Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Job_Card;