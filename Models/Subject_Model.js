const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: [true, "Subject name is required"],
  },
  subjectType: {
    type: String,
    enum: ["Compulsory", "Optional"],
  },
  subjectTeacher: { type: mongoose.Types.ObjectId, ref: "user" },
  coTeacher: { type: mongoose.Types.ObjectId, ref: "user" },
  standard: {
    classId: { type: mongoose.Types.ObjectId, ref: "class" },
    className: {
      type: String,
      required: [true, "Standard is required"],
    },
  },
});

module.exports = mongoose.model("subject", subjectSchema);
