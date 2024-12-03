const SocialMedia = require("../models/SocialMedia");

exports.getSocialMedia = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findOne();
    res.status(200).json(socialMedia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSocialMedia = async (req, res) => {
  try {
    const updatedSocialMedia = await SocialMedia.findOneAndUpdate(
      {},
      req.body,
      { new: true }
    );
    res.status(200).json(updatedSocialMedia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
