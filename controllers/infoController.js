const PersonalInfo = require("../models/info");

exports.getPersonalInfo = async (req, res) => {
  try {
    const info = await PersonalInfo.findOne();
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePersonalInfo = async (req, res) => {
  try {
    const updatedInfo = await PersonalInfo.findOneAndUpdate({}, req.body, {
      new: true,
    });
    res.status(200).json(updatedInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
