const mongoose = require("mongoose");

const socialMediaSchema = new mongoose.Schema({
  linkedin: String,
  github: String,
  google: String,
  dribbble: String,
});

module.exports = mongoose.model("SocialMedia", socialMediaSchema);
