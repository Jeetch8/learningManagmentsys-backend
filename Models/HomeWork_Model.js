const mongoose = require("mongoose");

const homeworkSchema = new mongoose.Schema(
  {
    questioPaper: [{ type: String }],
    topic: { type: String },
    description: { type: String },
    submissionDate: {
      type: Date,
    },
    submissionTime: {
      type: String,
    },
    MaxMarks: {
      type: Number,
    },
    subjectId: { type: mongoose.Types.ObjectId, ref: "subject" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("homework", homeworkSchema);
