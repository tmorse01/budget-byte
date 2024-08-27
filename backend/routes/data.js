const express = require("express");
const categorizeExpenses = require("../utils/categorize");
const router = express.Router();

router.get("/user", (req, res) => {
  console.log("Get User expenses route");
});

router.post("/upload", (req, res) => {
  console.log("Accounting data upload", req.body);
  const { data, type } = req.body;
  const db = req.app.locals.db;

  if (!Array.isArray(data)) {
    return res.status(400).json({ error: "Invalid data format" });
  }

  const categorizedExpenses = categorizeExpenses(data);
  // Associate each expense with the user
  const userId = req.user.user.id;
  categorizedExpenses.forEach((expense) => {
    expense.userId = userId;
  });
  // Insert data into database
  db.collection("expenses").insertMany(categorizedExpenses);
});

router.get("/categories", (req, res) => {
  const db = req.app.locals.db;
  db.collection("categories")
    .find({ type: "default" })
    .toArray()
    .then((categories) => {
      res.json(categories);
    });
});

router.get("/expenses", async (req, res) => {
  const db = req.app.locals.db;
  const userId = req.user.user.id;
  const expenses = await db.collection("expenses").find({ userId }).toArray();
  res.json({ data: expenses });
});

module.exports = router;
