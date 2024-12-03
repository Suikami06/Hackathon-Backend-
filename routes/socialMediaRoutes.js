const express = require("express");
const { getSocialMedia, updateSocialMedia } = require("../controllers/socialMediaController");

const router = express.Router();

router.get("/", getSocialMedia);
router.put("/", updateSocialMedia);

module.exports = router;
