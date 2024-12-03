const express = require("express");
const { getLanguages, updateLanguages } = require("../controllers/languageController");

const router = express.Router();

router.get("/", getLanguages);
router.put("/", updateLanguages);

module.exports = router;
