import { AccountingData, CsvData, TransactionRecord } from "@/types/types";
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
      category: "Undefined", // Placeholder, in real scenarios this might need logic to determine category
    };
  });
}
