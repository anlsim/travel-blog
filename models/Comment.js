const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
    userName:{
        type:String,
        required: true,
        
    },
    comment:{
        type:String,
        required: true,
    },
    postId: {
        type:String,
        required: true,
    },
    },{timestamps: true} 
);

module.exports = mongoose.model("Comment", CommentsSchema);