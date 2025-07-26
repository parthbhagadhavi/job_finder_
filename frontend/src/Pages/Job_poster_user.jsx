import React, { useEffect, useState } from 'react';
import './pages/Job_poster_user.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from '../Components/nav';
import Footer from '../Components/Footer';
import { FiExternalLink, FiMail, FiMapPin, FiDollarSign, FiCalendar, FiBriefcase, FiAward, FiTag } from 'react-icons/fi';

const Job_poster_user = () => {
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

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading job listings...</p>
            </div>
        );
    }

    if (jobs.length === 0) {
        return (
            <div className="no-jobs-container">
                <Nav />
                <div className="no-jobs-message">
                    <h2>No Job Listings Available</h2>
                    <p>Check back later for new opportunities</p>
                </div>
                <Footer />
            </div>
        );
    }

    return (
           <div>
             <Nav />
             
        <div className="job-poster-user-container">
            
            <div className="jobs-header">
                <h1>Available Job Positions</h1>
                <p>Browse through our latest job openings</p>
            </div>

            <div className="jobs-grid-container">
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
                                        <span><FiMapPin /> {job.location}</span>
                                        <span><FiBriefcase /> {job.type}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="salary-info">
                                    <FiDollarSign />
                                    <span>₹{job.salary}</span>
                                </div>

                                <div className="job-description">
                                    <p>{job.description.length > 150 ? `${job.description.substring(0, 150)}...` : job.description}</p>
                                </div>

                                <div className="details-grid">
                                    <div className="detail-item">
                                        <FiCalendar />
                                        <div>
                                            <span>Deadline</span>
                                            <p>{new Date(job.deadline).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <FiBriefcase />
                                        <div>
                                            <span>Experience</span>
                                            <p>{job.experience}</p>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <FiAward />
                                        <div>
                                            <span>Qualification</span>
                                            <p>{job.qualification}</p>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <FiTag />
                                        <div>
                                            <span>Category</span>
                                            <p>{job.category}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="skills-container">
                                    {job.skills.split(",").map((skill, idx) => (
                                        <span key={idx} className="skill-tag">{skill.trim()}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="card-footer">
                                <button 
                                    className="apply-btn"
                                    onClick={() => navigate('/applyform', {
                                        state: {
                                            companyEmail: job.email,
                                            jobTitle: job.title,
                                            companyName: job.company
                                        }
                                    })}
                                >
                                    Apply Now
                                </button>
                                <a
                                    href={job.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="website-btn"
                                >
                                    <FiExternalLink /> Website
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

         
        </div>
           <Footer />
        </div>
    );
};

export default Job_poster_user;