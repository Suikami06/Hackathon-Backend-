const express = require("express");
const { addEducation, updateEducation } = require("../controllers/educationController");

const router = express.Router();

router.post("/", addEducation);
router.put("/:id", updateEducation);

module.exports = router;
