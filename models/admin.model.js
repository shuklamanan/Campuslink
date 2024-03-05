const mongoose = require('mongoose')

const admin = mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    mail:{
        type:String,
        lowercase:true,
        unique:true,
        required:true,
    },
    announcementno:{
        type:Number,
        // ref
    },
    materialno:{
        type:String,
        lowercase:true,
    },
    companyno:{
        type:Number,
        // ref:
    }
},{timestamp:true,versionKey:false});