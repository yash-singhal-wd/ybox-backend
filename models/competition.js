const mongoose = require("mongoose");

const competitionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Competition = mongoose.model("Competition", competitionSchema);

module.exports = { Competition };