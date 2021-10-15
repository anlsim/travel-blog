const express = require('express')
const router = express.Router()
const Comment = require("../models/Comment");

//NEW COMMENT
router.post("/", async(req, res)=>{
    const newComment = new Comment(req.body);
    try{
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET COMMENT
router.get("/", async(req, res)=>{
    try{
        const Comments = await Comment.find();
        res.status(200).json(Comments);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;