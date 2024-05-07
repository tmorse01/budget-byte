import React, { createContext, useContext, useState, ReactNode } from "react";
import { AccountingData } from "@/types/types";

type AccountingContextType = {
  data: AccountingData[];
  setData: React.Dispatch<React.SetStateAction<AccountingData[]>>;
};

const AccountingContext = createContext<AccountingContextType | undefined>(
  undefined
);

export const useAccounting = () => {
  const context = useContext(AccountingContext);
  if (context === undefined) {
    throw new Error("useAccounting must be used within an AccountingProvider");
  }
  return context;
};

type AccountingProviderProps = {
  children: ReactNode;
};

export const AccountingProvider: React.FC<AccountingProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<AccountingData[]>([]);
  //   const [isLoading, setIsLoading] = useState<boolean>(true);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setIsLoading(true);
  //       try {
  //         // Simulated fetch request
  //         setData(response.data);
  //       } catch (error) {
  //         console.error("Failed to fetch accounting data:", error);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <AccountingContext.Provider value={{ data, setData }}>
      {children}
    </AccountingContext.Provider>
  );
};
