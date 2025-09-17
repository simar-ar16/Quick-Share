const express = require("express");
const Text = require("../models/Text.js");
const router = express.Router();


const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString();

router.post("/", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: "Text is required" });

  let code;
  let exists = true;

  while (exists) {
    code = generateCode();
    exists = await Text.findOne({ code });
  }

  try {
    const newText = await Text.create({ text, code });
    res.json({ code: newText.code });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:code", async (req, res) => {
  const { code } = req.params;

  try {
    const textEntry = await Text.findOne({ code });
    if (!textEntry) {
      return res.status(404).json({ message: "Code not found" });
    }

    res.json({ text: textEntry.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
