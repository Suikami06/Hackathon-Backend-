const mongoose = require("mongoose");

const topicsSchema = new mongoose.Schema({
  topics: [String], // Array of strings for interested topics
});

module.exports = mongoose.model("Topics", topicsSchema);
