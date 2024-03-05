const mongoose = require('mongoose')

const company = mongoose.Schema({
    companyno:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    cgpacriteria:{
        type:Number,
    },
    description:{
        type:String,
        required:true,
    },
    package:{
        type:Number,
        required:true,
    },
    bond:{
        type:Number,
    },
    position:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:"Active",
        enum:["Active","Expire"],
        required:true,
    }
})