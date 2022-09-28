const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectname: { type: String, required: true },
  clientName: { type: String, required: true },
  description: { type: String },
  companyID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  billing: { type: Boolean },
});

const Project = mongoose.model("project", projectSchema);
module.exports = Project;
