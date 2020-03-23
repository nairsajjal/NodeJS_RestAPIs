const express = require('express');

const router = express.Router();
const Post = require('../models/Post');

router.get('/',(req,res)=>{
    res.send("This is the posts page from the routes directory");
});

router.get('/specific',(req,res)=>{
    res.send("This is a specific god damn post, use this to create a tree like structure");
});

router.post('/',(req,res)=>{
    console.log(req.body);
});

module.exports = router;