import { AccountingContext } from "@/contexts/AccountingContext";
import { useContext } from "react";

export const useAccounting = () => {
  const context = useContext(AccountingContext);
  if (context === undefined) {
    throw new Error("useAccounting must be used within an AccountingProvider");
  }
  return context;
};
