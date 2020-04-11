const mongoose = require("mongoose");

const submissionLikeSchema = new mongoose.Schema({
    submission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Submission",
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true,
    },
});

const SubmissionLike = mongoose.model("SubmissionLike", submissionLikeSchema);

module.exports = { SubmissionLike };