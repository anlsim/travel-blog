const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    state:{
        type:String,
        required: true,
    },
    location:{
        type: Array,
        of: Number,
        required: false,
        default: null,

    },
    }
);

module.exports = mongoose.model("State", StateSchema);