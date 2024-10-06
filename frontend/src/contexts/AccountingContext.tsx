import React, { createContext, ReactNode } from "react";
import { AccountingData, CategoryData } from "@/types/types";
import ExampleExpenseData from "@/data/ExampleExpenseData.json";
import ExampleCategoryData from "@/data/ExampleCategoryData.json";
import useFetch from "@/hooks/useFetch";

type AccountingContextType = {
  data: AccountContextStateType;
  isLoading: boolean;
  fetchData: () => Promise<void>;
};

type AccountContextStateType = {
  transactions: AccountingData[];
  categories: CategoryData[];
};

export const AccountingContext = createContext<
  AccountingContextType | undefined
>(undefined);

type AccountingProviderProps = {
  children: ReactNode;
};

export const AccountingProvider: React.FC<AccountingProviderProps> = ({
  children,
}) => {
  const {
    data: transactionData,
    loading: transactionsLoading,
    fetchData: fetchExpenseData,
  } = useFetch<AccountingData[]>(
    `${import.meta.env.VITE_API_URL}/api/data/transactions`,
    {
      requiresAuth: true,
    }
  );

  const {
    data: categoryData,
    loading: categoriesLoading,
    fetchData: fetchCategoryData,
  } = useFetch<CategoryData[]>(
    `${import.meta.env.VITE_API_URL}/api/data/categories`,
    {
      requiresAuth: true,
    }
  );

  const fetchData = async () => {
    fetchExpenseData();
    fetchCategoryData();
  };

  const data = {
    transactions:
      transactionData ?? (ExampleExpenseData as unknown as AccountingData[]),
    categories:
      categoryData ?? (ExampleCategoryData as unknown as CategoryData[]),
  };
  const isLoading = transactionsLoading || categoriesLoading;

  return (
    <AccountingContext.Provider value={{ data, isLoading, fetchData }}>
      {children}
    </AccountingContext.Provider>
  );
};
