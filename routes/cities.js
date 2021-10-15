const express = require('express')
const router = express.Router()
const City = require("../models/City");

//NEW City
router.post("/", async(req, res)=>{
    const newCity = new City(req.body);
    try{
        const savedCity = await newCity.save();
        res.status(200).json(savedCity);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET City
router.get("/", async(req, res)=>{
    try{
        const cities = await City.find();
        res.status(200).json(cities);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
