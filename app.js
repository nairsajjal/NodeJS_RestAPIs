const express = require('express');

const app = express();

//You can create Routes using this app const
//Routes
app.get('/',(req,res)=>{
    res.send("Home Page");
});
app.get('/posts',(req,res)=>{
    res.send("This is the posts page");
});
//Start listening to the server
app.listen(3000);