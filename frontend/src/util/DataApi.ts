import { AccountingData } from "@/types/types";

export const uploadCsvFile = (accountingData: AccountingData[]) => {
  return fetch(`${import.meta.env.VITE_API_URL}/api/data/upload`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "POST",
    body: JSON.stringify({ type: "debit", data: accountingData }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("CSV file upload successful");
      } else {
        console.log("CSV file upload failed");
        throw new Error("CSV file upload failed");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error uploading CSV file:", error);
      throw error;
    });
};
