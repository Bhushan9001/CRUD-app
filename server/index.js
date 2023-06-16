const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
require('dotenv').config();
const app = express();
app.use(Cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error);
    });

const bookRoutes = require('./src/routes/book');
const userRoutes = require('./src/routes/user');

app.use('/',bookRoutes);
app.use('/',userRoutes);

app.get('/',(req,res)=>{
    res.send("<h1>I am Inevitable!!</h1>");
})
app.listen(8080,()=>{
    console.log("server is running");
})
