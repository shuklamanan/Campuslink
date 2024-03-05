const { Timestamp } = require('bson')
const mongoose = require('mongoose')
const aanouncement = mongoose.Schema({
    announcementno:{
        type:Number,
        // default:function getNextSequence() {
        //     console.log('what is this:',mongoose);//this is mongoose
        //     var ret = db.counters.findAndModify({
        //              query: { _id:'entityId' },
        //              update: { $inc: { seq: 1 } },
        //              new: true
        //            }
        //     );
        //     return ret.seq;
        //   }
    },
    announcementdetail:{
        type:String,
        required:true,
    },
    date:{
        type:Timestamp,
    }
},{Timestamp:true,versionKey:false});