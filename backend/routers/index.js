const express=require('express')
const maincontroller=require('../controller/mainController')
const companylogincontroller=require('../controller/companylogincontroller')
const companyLoginTBL=require('../models/companyLoginTBL')
const Add_job_dataTBL = require('../models/Add_job_dataTBL')
const Add_job_Controller=require('../controller/Add_job_Controller')
const routes=express.Router()

routes.post('/sign_up_user',maincontroller.signUp_user)

routes.post('/sign_in_user',maincontroller.signIn_user)

routes.post('/sign_up_company',companyLoginTBL.upload,companylogincontroller.company_sign_up)

routes.post('/add-job', Add_job_dataTBL.upload, Add_job_Controller.add_job_data);


routes.post('/sign_in_company',companylogincontroller.signIn_company)

routes.get('/get-jobs', Add_job_Controller.get_all_jobs);

routes.put('/update-job/:id', Add_job_dataTBL.upload, Add_job_Controller.update_job);

routes.delete('/delete-job/:id', Add_job_Controller.delete_job);

routes.post('/email_apply', Add_job_Controller.email_apply_page);

module.exports=routes