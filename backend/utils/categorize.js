const getClassifier = require("../utils/classifier");

// Function to categorize transactions
const categorizeTransactions = (transactions) => {
  transactions.forEach((transaction) => {
    const category = getClassifier().classify(transaction.description);
    transaction.category = category;
  });

  return transactions;
};

module.exports = categorizeTransactions;
