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
  }
});

const Task = mongoose.model("task", taskSchema);
module.exports = Task;