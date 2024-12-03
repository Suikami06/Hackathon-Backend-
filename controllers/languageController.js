const Language = require("../models/Language");

exports.getLanguages = async (req, res) => {
  try {
    const languages = await Language.findOne();
    res.status(200).json(languages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLanguages = async (req, res) => {
  try {
    const updatedLanguages = await Language.findOneAndUpdate({}, req.body, {
      new: true,
    });
    res.status(200).json(updatedLanguages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
