const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/jobfinder')

const db=mongoose.connection


db.once('open',(err)=>{
    console.log('db connected');
    
})