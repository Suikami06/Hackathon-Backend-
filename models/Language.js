const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  languages: [String], // Array of strings for preferred languages
});

module.exports = mongoose.model("Language", languageSchema);
