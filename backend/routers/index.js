const express=require('express')
const maincontroller=require('../controller/mainController')
const companylogincontroller=require('../controller/companylogincontroller')
const companyLoginTBL=require('../models/companyLoginTBL')

const routes=express.Router()

routes.post('/sign_up_user',maincontroller.signUp_user)

routes.post('/sign_in_user',maincontroller.signIn_user)

routes.post('/sign_up_company',companyLoginTBL.upload,companylogincontroller.company_sign_up)

routes.post('/sign_in_company',companylogincontroller.signIn_company)


module.exports=routes