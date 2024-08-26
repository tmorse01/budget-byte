export type AccountingData = {
  key: string;
  date: string;
  description?: string;
  amount: number;
  balance: number;
  category: string | undefined;
};

export type TotalData = {
  expenses: number;
  income: number;
};

export type Breakpoint = "small" | "medium" | "large" | null;

export type ChartDimensions = {
  width: number;
  height: number;
  innerRadius: number;
};

export type CsvFile = {
  data: CsvData;
  errors: string[];
  meta: string[];
};

export type CsvData = string[][];

export interface TransactionRecord {
  Date: string;
  Description: string;
  Comments: string;
  CheckNumber: string;
  Amount: string;
  Balance: string;
}

export type TransactionCategory =
  | "Groceries"
  | "Transportation"
  | "Dining"
  | "Utilities"
  | "Entertainment"
  | "Healthcare"
  | "Clothing"
  | "Personal Care"
  | "Insurance"
  | "Education"
  | "Investments"
  | "Other";
export interface CategorySummary {
  category: TransactionCategory;
  amount: number;
}
