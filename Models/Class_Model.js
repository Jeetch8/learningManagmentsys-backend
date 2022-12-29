const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  students: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  classTeacher: { type: mongoose.Types.ObjectId, ref: "user" },
  coTeacher: { type: mongoose.Types.ObjectId, ref: "user" },
  standard: {
    type: Number,
  },
  section: {
    type: String,
  },
});

module.exports = mongoose.model("clas", classSchema);
