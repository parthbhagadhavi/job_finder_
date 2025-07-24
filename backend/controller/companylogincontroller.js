let companySchema=require('../models/companyLoginTBL')

module.exports.company_sign_up=async(req,res)=>{
try{
 let logo = '';
    if (req.file) {
logo = companySchema.adPath + "/" + req.file.filename;
    }

    let {
        name,
      since,
      email,
      password,
      
    } = req.body;

    await companySchema.create({
        name,
      since,
      email,
      password,
      logo
    });
    res.status(201).json({ message: "company signed up successfully" });

}catch(err){
    console.log(err);
    
}
}
module.exports.signIn_company=async(req,res)=>{
    const {  email, password } = req.body;

    let compare=await companySchema.findOne({email})

    if(compare.password==password){
 return res.status(200).json({ message: "Login successful!", companySchema });
    }

}