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
//   assignedTo:{
//     type:
//   }
// }