const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    competition: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Competition",
        required: true,
    },
});

const Submission = mongoose.model("Submission", submissionSchema);

module.exports = { Submission };