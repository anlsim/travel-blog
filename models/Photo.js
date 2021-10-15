const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
    src:{
        type:String,
        required: true,
    },
    thumbnail:{
        type:String,
        required: true,
    },
    caption:{
        type:String,
        required: true,
    },
    postId: {
        type:String,
        required: true,
    },

    },{timestamps: true} 
);

module.exports = mongoose.model("Photo", PhotoSchema);