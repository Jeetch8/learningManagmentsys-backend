const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    subjectId: { type: mongoose.Types.ObjectId, ref: "subject" },
    topicId: { type: mongoose.Types.ObjectId, ref: "topic" },
    questionType: {
      type: String,
      enum: ["MCQ", "queAndAns"],
    },
    questions: [
      {
        question: { type: String },
        options: [
          {
            type: String,
          },
        ],
        solution: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("test", testSchema);
