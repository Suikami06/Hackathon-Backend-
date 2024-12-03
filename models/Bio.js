const mongoose = require("mongoose");

const bioSchema = new mongoose.Schema({
  bio: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bio", bioSchema);
