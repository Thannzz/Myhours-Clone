const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true ,  },
  companyName:{type:String , required:true},
  country:{type:String ,required:true },
  companySize:{type:Number , required:true},
  mobileNumber:{type:Number}
});

const Company = mongoose.model("company", companySchema);
module.exports = Company;
