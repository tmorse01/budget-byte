const getClassifier = require("../utils/classifier");

// Function to categorize transactions
const categorizeTransactions = (transactions, categories) => {
  transactions.forEach((transaction) => {
    const categoryId = getClassifier().classify(transaction.description);
    const category = getCategoryById(categoryId, categories);
    transaction.categoryId = categoryId;
    transaction.category = category;
  });

  return transactions;
};

const getCategoryById = (key, categories) => {
  const category = categories.find((category) => category.key === key);
  return category ? category.name : null;
};

module.exports = {
  categorizeTransactions,
  getCategoryById,
};
