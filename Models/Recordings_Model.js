const mongoose = require("mongoose");

const recordingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    mediaLink: {
      type: String,
      required: true,
    },
    subjectId: { type: mongoose.Types.ObjectId, ref: "subject" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("recording", recordingSchema);
