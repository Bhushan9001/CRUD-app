const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
require('dotenv').config();
const app = express();
app.use(Cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true, useUnifiedTopology: true
    
},()=>{
    console.log("Database Connected");
})

const bookRoutes = require('./src/routes/book')
app.use('/',bookRoutes);
app.get('/',(req,res)=>{
    res.send("<h1>I am Inevitable!!</h1>");
})
app.listen(8080,()=>{
    console.log("server is running");
})
