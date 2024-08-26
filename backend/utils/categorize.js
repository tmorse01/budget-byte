const getClassifier = require("../utils/classifier");

// Function to categorize expenses
const categorizeExpenses = (expenses) => {
  expenses.forEach((expense) => {
    const category = getClassifier().classify(expense.description);
    expense.category = category;
  });

  return expenses;
};

module.exports = categorizeExpenses;
