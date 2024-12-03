const express = require("express");
const {
  addExperience,
  updateExperience,
} = require("../controllers/experienceController");

const router = express.Router();

router.post("/", addExperience);
router.put("/:id", updateExperience);

module.exports = router;
