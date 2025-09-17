const mongoose = require("mongoose");

const TextSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: "1d" } // auto-delete after 1 day
});

module.exports = mongoose.model("Text", TextSchema);
