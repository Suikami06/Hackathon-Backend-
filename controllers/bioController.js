const Bio = require("../models/Bio");

exports.getBio = async (req, res) => {
  try {
    const bio = await Bio.findOne();
    res.status(200).json(bio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBio = async (req, res) => {
  try {
    const updatedBio = await Bio.findOneAndUpdate({}, req.body, { new: true });
    res.status(200).json(updatedBio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
