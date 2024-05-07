import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AccountingProvider } from "@/contexts/AccountingContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AccountingProvider>
      <App />
    </AccountingProvider>
  </React.StrictMode>
);
