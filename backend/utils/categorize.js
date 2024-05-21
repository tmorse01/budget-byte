const categorizeExpenses = (expenses) => {
  const categories = {
    Food: [],
    Travel: [],
    Utilities: [],
    Other: [],
  };

  expenses.forEach((expense) => {
    if (
      expense.description.includes("food") ||
      expense.description.includes("restaurant")
    ) {
      categories.Food.push(expense);
    } else if (
      expense.description.includes("flight") ||
      expense.description.includes("taxi")
    ) {
      categories.Travel.push(expense);
    } else if (
      expense.description.includes("electricity") ||
      expense.description.includes("water")
    ) {
      categories.Utilities.push(expense);
    } else {
      categories.Other.push(expense);
    }
  });

  return categories;
};

module.exports = categorizeExpenses;
