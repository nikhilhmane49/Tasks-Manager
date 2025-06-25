
const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const mongoDB = require('./config/configmonogo.js');
// const connectcloudinary = require('./Config/cloudinary.js');

const userroutes =require('./Routes/userroute.js');



const app = express();


//midleware
app.use(express.json());
// app.use(cors({
//     origin:process.env.FORNT_END
// }))


const port = process.env.PORT || 4000;

 mongoDB();

// //*cloudinary
// connectcloudinary();

app.use(cors({
    origin: '*', // Allows requests from any origin
}));

//APi end point

app.use('/api/user',userroutes);
app.get('/', (req,res)=> {
  res.send("<h1>Running.......</h1>")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})