const express = require ('express');
const cors = require ('cors')
const app = express();

const mongoose = require ('mongoose');
const biodataRoute = require ('./Routes/biodataRoute');
const usersRoute = require ('./Routes/usersRoute')


//environmentfile
require('dotenv').config();

//body parser
app.use(express.json());

//cors policy

app.use(cors())


//connect to server port

const PORT = process.env.PORT || 3001

app.listen(PORT , ()=>{
    console.log(`Server is running on your port ${PORT}`);
})


//routers
app.use('/',biodataRoute);
app.use('/auth',usersRoute)

//Manogo connection
const URL = process.env.MONGO_CON
mongoose.connect(URL, (err,result)=>{
    try {
        console.log("Database connected Successfully")     
    } catch (error) {
        console.log(error)
    }
})
 