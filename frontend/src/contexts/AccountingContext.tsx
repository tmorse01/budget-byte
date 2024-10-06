import React, { createContext, ReactNode } from "react";
import { TransactionData, CategoryData } from "@/types/types";
import ExampleExpenseData from "@/data/ExampleExpenseData.json";
import ExampleCategoryData from "@/data/ExampleCategoryData.json";
import useFetch from "@/hooks/useFetch";
import { updateCategory } from "@/util/DataApi";

type AccountingContextType = {
  data: AccountContextStateType;
  isLoading: boolean;
  fetchData: () => Promise<void>;
  handleTransactionCategoryUpdate: (updatedItem: TransactionData) => void;
};

type AccountContextStateType = {
  transactions: TransactionData[];
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
    setData: setTransactionData,
    loading: transactionsLoading,
    fetchData: fetchExpenseData,
  } = useFetch<TransactionData[]>(
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

  const handleTransactionCategoryUpdate = async (
    updatedItem: TransactionData
  ) => {
    try {
      console.log("Category changed to:", updatedItem);
      setTransactionData((prevData: TransactionData[] | null) => {
        if (!prevData) return prevData;
        return prevData.map((item: TransactionData) => {
          if (item.key === updatedItem.key) {
            console.log("found ", item, updatedItem);
            return updatedItem;
          } else {
            return item;
          }
        });
      });
      updateCategory(updatedItem);
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const data = {
    transactions:
      transactionData ?? (ExampleExpenseData as unknown as TransactionData[]),
    categories:
      categoryData ?? (ExampleCategoryData as unknown as CategoryData[]),
  };
  const isLoading = transactionsLoading || categoriesLoading;
  console.log("Data:", data);
  return (
    <AccountingContext.Provider
      value={{ data, isLoading, fetchData, handleTransactionCategoryUpdate }}
    >
      {children}
    </AccountingContext.Provider>
  );
};
