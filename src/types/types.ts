export type AccountingData = {
  key: string;
  name: string;
  description?: string;
  amount: number;
  type: string;
  category: string;
};

export type TotalData = {
  expenses: number;
  income: number;
  transfers: number;
};
