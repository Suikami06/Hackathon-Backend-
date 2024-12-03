const express = require("express");
const { getBio, updateBio } = require("../controllers/bioController");

const router = express.Router();

router.get("/", getBio);
router.put("/", updateBio);

module.exports = router;
