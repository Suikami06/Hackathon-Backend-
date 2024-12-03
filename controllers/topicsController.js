const Topics = require("../models/Topics");

exports.getTopics = async (req, res) => {
  try {
    const topics = await Topics.findOne();
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTopics = async (req, res) => {
  try {
    const updatedTopics = await Topics.findOneAndUpdate({}, req.body, {
      new: true,
    });
    res.status(200).json(updatedTopics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
