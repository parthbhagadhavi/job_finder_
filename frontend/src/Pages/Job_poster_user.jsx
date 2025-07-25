import React, { useEffect, useState } from 'react'
import '../Components/Job_Card.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from '../Components/nav';
import Footer from '../Components/Footer';
const Job_poster_user = () => {
    const [jobs, setJobs] = useState([]);
    let navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3232/get-jobs')
            .then(res => {
                setJobs(res.data);
            })
            .catch(err => {
                console.error("Error fetching jobs:", err);
            });
    }, []);

  





    return (
        <div>
<Nav/>
            {jobs.map((job, index) => (
                <div key={index} className="job-card">
                    <div className="job-header">
                        <img
                            src={`http://localhost:3232/uploads/images/${job.logo}`}
                            alt="Company Logo"
                        />

                        <div>
                            <h2>{job.title}</h2>
                            <p>{job.company}</p>
                        </div>
                    </div>

                    <div className="job-info">
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Type:</strong> {job.type}</p>
                        <p><strong>Salary:</strong> ₹{job.salary}</p>
                        <p><strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
                        <p><strong>Experience:</strong> {job.experience}</p>
                        <p><strong>Qualification:</strong> {job.qualification}</p>
                        <p><strong>Description:</strong> {job.description}</p>
                        <p><strong>Skills:</strong> {job.skills}</p>
                        <p><strong>Email:</strong> {job.email}</p>
                        <p><strong>Category:</strong> {job.category}</p>
                        <p><strong>Perks:</strong> {job.perks}</p>
                        <p><strong>Working Days:</strong> {job.workingDays}</p>
                        <p><strong>Tags:</strong> {job.tags}</p>
                    </div>

                    <div className="job-tags">
                        {job.skills.split(" ").map((skill, idx) => (
                            <span key={idx}>{skill}</span>
                        ))}
                    </div>

                    <a
                        href={job.website}
                        target="_blank"
                        rel="noreferrer"
                        className="apply-btn"
                    >
                        Visit Company Website
                    </a>

                    <a
                        onClick={() => navigate('/applyform', {
                            state: {
                                companyEmail: job.email
                            }
                        })}
                        className="apply-btn"
                    >
                        Apply Now
                    </a> 


                    
                           </div>
            ))}

            <Footer/>
        </div>

    )
}

export default Job_poster_user
