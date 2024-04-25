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

export type Breakpoint = "small" | "medium" | "large" | null;

export type ChartDimensions = {
  width: number;
  height: number;
  innerRadius: number;
};
