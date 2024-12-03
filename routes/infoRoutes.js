const express = require("express");
const { getPersonalInfo, updatePersonalInfo } = require("../controllers/infoController");

const router = express.Router();

router.get("/", getPersonalInfo);
router.put("/", updatePersonalInfo);

module.exports = router;
