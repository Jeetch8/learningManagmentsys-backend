const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
  {
    topicName: {
      type: String,
      required: true,
    },
    classId: { type: mongoose.Types.ObjectId, ref: "clas" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("topic", topicSchema);
