const { Double } = require("bson");
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique: true,
    },
    imgUrl:{
        type:String,
        required: true,
    },
    content:{
        type:String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
      },
    state:{
        type: String,
        required: true,

    },
    city:{
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: false,
    }

    },{timestamps: true} 
);

module.exports = mongoose.model("Post", PostSchema);