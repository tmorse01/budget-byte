const express = require("express");
const categorizeExpenses = require("../utils/categorize");
const router = express.Router();

router.get("/user", (req, res) => {
  console.log("Get User expenses route");
  res.json({
    expenses: [
      {
        id: 1,
        date: "2021-01-01",
        description: "Groceries",
        category: "Food",
        amount: 100,
      },
      {
        id: 2,
        date: "2021-01-02",
        description: "Train ticket",
        category: "Travel",
        amount: 50,
      },
    ],
  });
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
  res.json({ categories: ["Food", "Travel", "Utilities", "Other"] });
});

module.exports = router;
