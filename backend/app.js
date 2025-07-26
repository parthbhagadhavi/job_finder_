let express=require('express')
let app=express()
let db=require('./configs/db')
const multer=require('multer')

const cors = require('cors');
require('dotenv').config()
const PORT = process.env.PORT || 3333;
app.use(cors());
app.use(express.json())

app.use('/',require('./routers/index'))
app.use('/uploads', express.static('uploads'));
app.listen(PORT,(Error)=>{
    console.log(`http://localhost:${PORT}`);
})