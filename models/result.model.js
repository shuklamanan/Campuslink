const mongoose = require('mongoose')
const result = mongoose.Schema({
    resultno:{
        type:Number,
        required:true,
        unique:true,
    },
    resultlink:{
        type:String,
        required:true,
    }
},{timestamp:true,versionKey:false});