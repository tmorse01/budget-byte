export interface IExpense {
  category: string;
  amount: number;
}

export const expenses: IExpense[] = [
  { category: "Groceries", amount: 300 },
  { category: "Utilities", amount: 200 },
  { category: "Entertainment", amount: 150 },
  { category: "Transportation", amount: 100 },
  { category: "Healthcare", amount: 80 },
  { category: "Education", amount: 250 },
  { category: "Dining Out", amount: 120 },
  { category: "Shopping", amount: 180 },
  { category: "Travel", amount: 300 },
  { category: "Miscellaneous", amount: 50 },
];
