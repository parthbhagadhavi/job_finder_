const mongoose = require("mongoose");
const multer=require('multer')
const path=require('path')
const imgpath='/uploads/images'
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Internship", "Freelance", "Contract"],
    required: true
  },
  salary: {
    type: String,
    default: "Not Disclosed"
  },
  deadline: {
    type: Date,
    required: true
  },
  experience: {
    type: String
  },
  qualification: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  skills: {
    type: String
  },
  logo: {
    type: String 
  },
  website: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  perks: {
    type: String
  },
  workingDays: {
    type: String
  },
  tags: {
    type: String
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(__dirname,'..',imgpath))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

jobSchema.statics.upload = multer({ storage: storage }).single('logo')
jobSchema.statics.adPath = imgpath;

module.exports = mongoose.model("Jobdata", jobSchema);
