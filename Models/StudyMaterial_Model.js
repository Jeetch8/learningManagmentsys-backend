const mongoose = require("mongoose");

const studtMaterialSchema = new mongoose.Schema({
  subjectId: { type: mongoose.Types.ObjectId, ref: "subject" },
});

module.exports = mongoose.model("studymaterial", studtMaterialSchema);
