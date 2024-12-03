const Education = require("../models/Education");

exports.addEducation = async (req, res) => {
  try {
    const newEducation = new Education(req.body);
    await newEducation.save();
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEducation = async (req, res) => {
  try {
    const updatedEducation = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedEducation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
