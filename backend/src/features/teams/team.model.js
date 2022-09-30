const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String, 
    required: true 
  },
  assignedTo:{
    type:String
  },
  description:{
    type:String
  },
  projectid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "project",
    required: true,
  },
});

const Task = mongoose.model("task", taskSchema);
module.exports = Task;

// {
//   day1:{},
//   da2:{},

// }