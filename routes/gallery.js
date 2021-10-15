const express = require('express')
const router = express.Router()
const Photo = require("../models/Photo");

//NEW photo
router.post("/", async(req, res)=>{
    const newPhoto = new Photo(req.body);
    try{
        const savedPhoto = await newPhoto.save();
        res.status(200).json(savedPhoto);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET Photo
router.get("/", async(req, res)=>{
    try{
        const Photos = await Photo.find();
        res.status(200).json(Photos);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;