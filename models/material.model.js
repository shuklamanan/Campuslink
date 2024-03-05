const mongoose = require('mongoose')

const material = mongoose.Schema({
    materialno:{
        type:String,
        required:true,
        // auto-increment
    },
    materialdetail:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        lowercase:true,
    }
},{timestamp:true,versionKey:false})