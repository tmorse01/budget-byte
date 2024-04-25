export type AccountingData = {
  key: string;
  name: string;
  date: string;
  description?: string;
  amount: number;
  balance: number;
  type: string;
  category: string;
};

export type TotalData = {
  expenses: number;
  income: number;
  transfers: number;
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
  date: string;
  description: string;
  comments: string;
  checkNumber: string;
  amount: string;
  balance: string;
}
