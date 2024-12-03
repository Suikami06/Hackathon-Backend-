const Experience = require("../models/Experience");

exports.addExperience = async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedExperience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
