import React, { createContext, useState, ReactNode, useEffect } from "react";
import { AccountingData } from "@/types/types";

type AccountingContextType = {
  data: AccountingData[];
  setData: React.Dispatch<React.SetStateAction<AccountingData[]>>;
  isLoading: boolean;
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
  const [data, setData] = useState<AccountingData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/data/expenses`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch accounting data");
        }
        const results = await response.json();
        setData(results.data);
      } catch (error) {
        console.error("Failed to fetch accounting data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AccountingContext.Provider value={{ data, setData, isLoading }}>
      {children}
    </AccountingContext.Provider>
  );
};
