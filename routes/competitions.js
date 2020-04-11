const express = require("express");
const router = express.Router();

const { Competition } = require("../models/competition");
const { Submission } = require("../models/submission");

router.get("/", async(req, res) => {
    const result = await Competition.find().populate("author");
    res.send(result);
});

router.get("/:id/submission", async(req, res) => {
    const result = await Submission.find({ competition: req.params.id });
    res.send(result);
});

module.exports = router;