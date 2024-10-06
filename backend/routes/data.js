const express = require("express");
const categorizeTransactions = require("../utils/categorize");
const router = express.Router();

router.get("/user", (req, res) => {
  console.log("Get User transactions route");
});

router.post("/upload", (req, res) => {
  console.log("Accounting data upload", req.body);
  const { data, type } = req.body;
  const db = req.app.locals.db;

  if (!Array.isArray(data)) {
    return res.status(400).json({ error: "Invalid data format" });
  }

  const categorizedTransactions = categorizeTransactions(data);
  // Associate each expense with the user
  const userId = req.user.user.id;
  categorizedTransactions.forEach((expense) => {
    expense.userId = userId;
  });
  // Insert data into database
  db.collection("transactions").insertMany(categorizedTransactions);
});

router.get("/categories", (req, res) => {
  const db = req.app.locals.db;
  db.collection("categories")
    .find({ type: "default" })
    .toArray()
    .then((categories) => {
      res.json({ data: categories });
    });
});

router.get("/transactions", async (req, res) => {
  const db = req.app.locals.db;
  const userId = req.user.user.id;
  const transactions = await db
    .collection("transactions")
    .find({ userId })
    .toArray();
  res.json({ data: transactions });
});

router.post("/update-category", async (req, res) => {
  const db = req.app.locals.db;
  const { key, category } = req.body;
  const userId = req.user.user.id;

  try {
    const result = await db
      .collection("transactions")
      .updateOne(
        { key: key, userId: userId },
        { $set: { category: category } }
      );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json({ message: "Category updated successfully", data: result });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
