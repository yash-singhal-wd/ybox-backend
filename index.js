const express = require("express");
const mongoose = require("mongoose");
const { url, options } = require("./utils/db");

const app = express();
app.use(express.json());

const competitions = require("./routes/competitions");
const { User } = require("./models/user");
const { Submission } = require("./models/submission");
const { SubmissionLike } = require("./models/submissionLike");
const { Competition } = require("./models/competition");

const port = process.env.PORT || 4000;

mongoose
    .connect(url, options)
    .then((res) => {
        app.listen(port, () =>
            console.log(`listening on port ${port} and connected to mongodb`)
        );
    })
    .catch((err) => {
        console.log("here is the error", err);
    });

app.use("/competitions", competitions);

// async function createUser(name, email) {
//     const user = new User({
//         name,
//         email,
//     });

//     const result = await user.save();
//     console.log(result);
// }

// async function createSubmission(image, author, competition) {
//     const submission = new Submission({
//         image,
//         author,
//         competition,
//     });
//     const result = await submission.save();
//     console.log(result);
// }

// async function createSubmissionLike(submission, author) {
//     const submissionLike = new SubmissionLike({
//         submission,
//         author,
//     });
//     const result = await submissionLike.save();
//     console.log(result);
// }

// createSubmission(
//     "url here...",
//     "5e9183e7ffbdf9ccdf60ff5f",
//     "5e9186fde4d783aa5fe4a9aa"
// );

// createSubmission(
//     "url here...",
//     "5e9183e7ffbdf9ccdf60ff60",
//     "5e9186fde4d783aa5fe4a9aa"
// );

// createSubmission(
//     "url here...",
//     "5e9183e7ffbdf9ccdf60ff5f",
//     "5e9183e7ffbdf9ccdf60ff64"
// );

// createSubmission(
//     "url here...",
//     "5e9183e7ffbdf9ccdf60ff5f",
//     "5e9183e7ffbdf9ccdf60ff65"
// );

// createSubmissionLike("5e919f01f2f07a2ccd515634", "5e9183e7ffbdf9ccdf60ff60");
// createSubmissionLike("5e919f01f2f07a2ccd515635", "5e9183e7ffbdf9ccdf60ff5f");
// createSubmissionLike("5e919f01f2f07a2ccd515636", "5e9183e7ffbdf9ccdf60ff5f");
// createSubmissionLike("5e919f01f2f07a2ccd515637", "5e9183e7ffbdf9ccdf60ff5f");
// createSubmissionLike("5e919f01f2f07a2ccd515634", "5e9183e7ffbdf9ccdf60ff61");
// createSubmissionLike("5e919f01f2f07a2ccd515637", "5e9183e7ffbdf9ccdf60ff61");
// createSubmissionLike("5e919f01f2f07a2ccd515635", "5e9183e7ffbdf9ccdf60ff62");
// createSubmissionLike("5e919f01f2f07a2ccd515634", "5e9183e7ffbdf9ccdf60ff62");