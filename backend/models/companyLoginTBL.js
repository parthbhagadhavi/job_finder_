const mongoose = require('mongoose');
const multer=require('multer')
const path=require('path')
const imgpath='/uploads/images'
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  since: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  logo: {
    type: String, 
    required: false
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

companySchema.statics.upload = multer({ storage: storage }).single('logo')
companySchema.statics.adPath = imgpath;


module.exports = mongoose.model('CompanyTBL', companySchema);
