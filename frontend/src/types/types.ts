export type AccountingData = {
  id_?: string;
  key: string;
  date: string;
  description?: string;
  amount: number;
  balance: number;
  category: string | undefined;
};

export type CategoryData = {
  id_?: string;
  key: string;
  name: string;
  type: "default" | "custom";
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

export type TransactionCategory = string;
export interface CategorySummary {
  category: TransactionCategory;
  amount: number;
}
