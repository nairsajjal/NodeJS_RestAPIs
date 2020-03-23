const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');


//Import Routes
const postsRoute = require('./routes/posts'); 


app.use('/posts',postsRoute);

//Routes
app.get('/',(req,res)=>{
    res.send("Home Page");
});

//connect to db
mongoose.connect(process.env.DB_Connection,{ useNewUrlParser: true }, ()=>{
    console.log("MongoDB connected");
});

//Start listening to the server
app.listen(3000);