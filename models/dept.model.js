const mongoose = require('mongoose')

const dept = mongoose.Schema({
    deptno:{
        type:Number,
        required:true,
    },
    deptname:{
        type:String,
        required:true,
        default:"Computer",
        unique:true,
    },
},{timestamp:true,versionKey:false});