const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  school: {
    type:String,
    required: true,
  },
  degree: {
    type:String,
    required: true,
  },
  startDate: {
    type:String,
    required: true,
  },
  endDate: {
    type:String,
    required: true,
  },
});

module.exports = mongoose.model("Education", educationSchema);
