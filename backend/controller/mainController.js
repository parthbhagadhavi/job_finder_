
const userSchema=require('../models/clientTBL')


module.exports.signUp_user= async (req, res) => {
  try {
    const { name, email, password } = req.body;

  

    const newUser = new userSchema({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User signed up successfully" });
  } catch (err) {
    console.error("Error signing up user:", err);
    res.status(500).json({ message: "Signup failed", error: err });
  }
}

module.exports.signIn_user=async(req,res)=>{
    const {  email, password } = req.body;

    let compare=await userSchema.findOne({email})

    if(compare.password==password){
      
 return res.status(200).json({ message: "Login successful!", userSchema });
    }

}