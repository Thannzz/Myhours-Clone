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
  billing: { type: Boolean, required: true },
  hours: { type: Number, required: true },
  billingAmount: { type: Number, required: true },
  budgetSpent: { type: Number, required: true },
  createdOn: { type: String, default: Date, required: true },
  status: { type: Boolean, required: true, default: true },
});

const Project = mongoose.model("project", projectSchema);
module.exports = Project;
