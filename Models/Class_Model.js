const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  students: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  classTeacher: { type: mongoose.Types.ObjectId, ref: "user" },
  standard: {
    type: String,
  },
  section: {
    type: String,
  },
  subjectList: [{ type: mongoose.Schema.Types.ObjectId, ref: "subject" }],
});

module.exports = mongoose.model("clas", classSchema);
