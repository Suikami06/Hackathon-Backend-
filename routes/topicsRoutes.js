const express = require("express");
const { getTopics, updateTopics } = require("../controllers/topicsController");

const router = express.Router();

router.get("/", getTopics);
router.put("/", updateTopics);

module.exports = router;
