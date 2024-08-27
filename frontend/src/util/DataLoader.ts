import {
  AccountingData,
  CategoryData,
  CategorySummary,
  CsvData,
  TransactionCategory,
  TransactionRecord,
} from "@/types/types";
import { v4 as uuidv4 } from "uuid";

/**
 * Fetches JSON data from a specified path within the /src/data folder.
 * @param filename - The name of the JSON file to fetch without the extension.
 * @returns A promise that resolves to the parsed JSON object.
 */
export async function fetchJsonData(filename: string): Promise<unknown> {
  const basePath = "/data/";
  try {
    const response = await fetch(`${basePath}${filename}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching JSON data:", error);
    return null;
  }
}

/**
 * Converts CSV data to JSON format.
 * @param csvData - The CSV data to convert.
 * @returns An array of transaction records in JSON format.
 */
export function convertCsvToJson(csvData: CsvData): TransactionRecord[] {
  // Extract headers from the first row
  const headers = csvData[0];
  // Convert the rest of the rows into JSON objects
  const jsonData = csvData.slice(1).map((row) => {
    const obj = {} as TransactionRecord;
    row.forEach((cell, index) => {
      obj[headers[index] as keyof TransactionRecord] = cell;
    });
    return obj;
  });
  return jsonData;
}

export function convertToAccountingData(
  transactions: TransactionRecord[]
): AccountingData[] {
  return transactions.map((transaction) => {
    return {
      key: uuidv4(),
      date: transaction.Date,
      description: transaction.Description,
      amount: parseFloat(transaction.Amount.replace(/[^\d.-]/g, "") || "0"),
      balance: parseFloat(transaction.Balance.replace(/[^\d.-]/g, "")),
      category: undefined,
    };
  });
}

export function summarizeAccountingData(
  userCategories: CategoryData[],
  accountingData: AccountingData[]
): CategorySummary[] {
  const categoryTotals: Record<TransactionCategory, number> =
    Object.fromEntries(
      userCategories.map((category) => [
        category.name as TransactionCategory,
        0,
      ])
    );

  // Accumulate totals for each category
  accountingData.forEach((transaction) => {
    categoryTotals[transaction.category as TransactionCategory] +=
      transaction.amount;
  });
  // Create an array from the totals
  const summaries: CategorySummary[] = Object.entries(categoryTotals)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_category, amount]) => amount !== 0)
    .map(([category, amount]) => ({
      category: category as TransactionCategory,
      amount,
    }));

  return summaries;
}

export async function getCategories() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/data/categories`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  console.log("Response: ", response);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const results = await response.json();
  console.log("Results: ", results);
  return results.data;
}
