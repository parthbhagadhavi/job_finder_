const Jobdata = require('../models/Add_job_dataTBL');
const nodemailer = require("nodemailer");
module.exports.add_job_data = async (req, res) => {
  try {
   
    const {
      title,
      company,
      location,
      type,
      salary,
      deadline,
      experience,
      qualification,
      description,
      skills,
      website,
      email,
      category,
      perks,
      workingDays,
      tags
    } = req.body;

   
    let logo = "";
    if (req.file) {
      logo = req.file.filename; 
    }

    const job = new Jobdata({
      title,
      company,
      location,
      type,
      salary,
      deadline,
      experience,
      qualification,
      description,
      skills,
      logo,
      website,
      email,
      category,
      perks,
      workingDays,
      tags
    });

    await job.save();
    res.status(201).json({ message: "Job posted successfully ✅", job });

  } catch (error) {
    console.error("Error adding job:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};
module.exports.get_all_jobs = async (req, res) => {
  try {
    const jobs = await Jobdata.find();
    res.status(200).json(jobs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

module.exports.update_job = async (req, res) => {
  try {
    const jobId = req.params.id;

    const {
      title,
      company,
      location,
      type,
      salary,
      deadline,
      experience,
      qualification,
      description,
      skills,
      website,
      email,
      category,
      perks,
      workingDays,
      tags
    } = req.body;

    let logo = "";

    // Existing job fetch karo to retain old logo if new not provided
    const existingJob = await Jobdata.findById(jobId);
    if (!existingJob) {
      return res.status(404).json({ error: "Job not found!" });
    }

    // Agar new logo bheja gaya hai
    if (req.file) {
      logo = req.file.filename;
    } else {
      logo = existingJob.logo; // purani image retain karo
    }

    const updatedJob = await Jobdata.findByIdAndUpdate(
      jobId,
      {
        title,
        company,
        location,
        type,
        salary,
        deadline,
        experience,
        qualification,
        description,
        skills,
        logo,
        website,
        email,
        category,
        perks,
        workingDays,
        tags
      },
      { new: true }
    );

    res.status(200).json({ message: "Job updated successfully ✅", updatedJob });
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({ error: "Something went wrong while updating!" });
  }
};



module.exports.delete_job = async (req, res) => {
  try {
    const jobId = req.params.id;
    await Jobdata.findByIdAndDelete(jobId);
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    console.log("Error deleting job:", err);
    res.status(500).json({ error: "Failed to delete job" });
  }
};


module.exports.email_apply_page=async(req,res)=>{
try{

let data=req.body;
let email=req.body.email
let companyEmail = req.body.companyEmail;

     const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "pgadhavi878@gmail.com",
            pass: "wgcinfyxwqupzkux",
        },
    });
  


    const info = await transporter.sendMail({
        from: email,
        to: companyEmail,
        subject: "OTP for Password Reset",
        text: "Your OTP",
        html:  `
        <h3>You've received a new application!</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Education:</strong> ${data.education}</p>
        <p><strong>Resume Link:</strong> <a href="${data.resume}">${data.resume}</a></p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });



}catch(err){
    console.log(err);
    
}
}