require("../models/mongooseConnection");
const mongoose =require("mongoose")
const Schema =  new mongoose.Schema({

    task_date:{
        type:Date
    },
    task:{
        type:String
    },
    note:{
        type:String
    },
    completed:{
        type:Boolean
    }
    
})
module.exports = mongoose.model("Task",Schema)