const mongoose = require("mongoose");

const personalInfoSchema = new mongoose.Schema({
  firstName: {
    type:String,
    required: true,
  },
  lastName: {
    type:String,
    required: true,
  },
  age: Number,
  gender: {
    type:String,
    required: true,
  },
  address: String,
  email: String,
  phoneNumber: String,
});

module.exports = mongoose.model("PersonalInfo", personalInfoSchema);
