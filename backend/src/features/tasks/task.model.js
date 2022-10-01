const mongoose = require("mongoose");
// Todo:-
// rate per houre
// budgets in hours

const taskSchema = new mongoose.Schema({
  task: {
    type: String, 
    required: true 
  },
  assignedTo:{
    type:String , 
    required:true
  },
  description:{
    type:String
  },
  projectid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "project",
    required: true,
  },
  labourRate:{
    type:Number , 
    min:0 
  },
  budget:{
    type:Number , 
    min:0
  },
  status : {
    type:Boolean,
    default:false,
  }
});
const Task = mongoose.model("task", taskSchema);
module.exports = Task;
