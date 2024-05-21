const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const categorizeExpenses = require("../utils/categorize");
const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), (req, res) => {
  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      const categorizedExpenses = categorizeExpenses(results);
      res.json(categorizedExpenses);
    });
});

router.get("/categories", (req, res) => {
  res.json({ categories: ["Food", "Travel", "Utilities", "Other"] });
});

module.exports = router;
