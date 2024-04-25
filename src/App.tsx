import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Categories from "./pages/Categories";

import "./App.css";
import { AccountingData } from "./types/types";

const App: React.FC = () => {
  const [data, setData] = React.useState<AccountingData[]>([]);

  const handleDataChange = (newData: AccountingData[]) => {
    setData(newData);
  };

  const totals = React.useMemo(() => {
    const { expenses, income, transfers } = data.reduce(
      (acc, item) => {
        if (item.type === "Income") {
          acc.income += item.amount;
        } else if (item.type === "Transfer") {
          acc.transfers += item.amount;
        } else {
          acc.expenses += item.amount;
        }
        return acc;
      },
      { expenses: 0, income: 0, transfers: 0 }
    );

    return { expenses, income, transfers };
  }, [data]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard data={data} totals={totals} />} />
          <Route
            path="expenses"
            element={
              <Expenses data={data} handleDataChange={handleDataChange} />
            }
          />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
