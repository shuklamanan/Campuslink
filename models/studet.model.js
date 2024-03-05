const { url } = require('inspector')
const mongoose =require('mongoose')

const studentschema = mongoose.Schema({
    enrollment:{
        type:Number,
        required:true,
        maxlength:12,
        unique:true,
    },
    name:{
        firstname:{
            type:String,
            lowercase:true,
            required:true,
        },
        lastname:{
            type:String,
            lowercase:true,
            required:true,
        },
    },
    dob:{
        type:Date,
    },
    mail:{
        type:String,
        required:true,
        lowercase:true,
    },
    phoneno:{
        type:Number,
        minlength:10,
        maxlength:10,
        required:true,
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:true,
    },
    linkedin:{
        type:String,
        required:false,
        lowercase:true,
    },
    batch:{
        startingdate:{
            type:Date,
            required:true,
        },
        endingdate:{
            type:Date,
            required:true,
        }, //doubt
    },
    deptno:{
        type:String,
        required:true,
        default:"Computer",
        // enum:["Computer","Information Technology","Mechanical","Electrical","Electronics"]
    },
    no:{
        type:Number,
        required:true,
    }
},{timestamps:true,versionKey:false});