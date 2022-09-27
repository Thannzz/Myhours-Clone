const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  companyName:{type:String , required:true},
  country:{type:String ,required:true },
  companySize:{type:Number , required:true},
  mobileNumber:{type:Number}
});

const User = mongoose.model("user", userSchema);
module.exports = User;
