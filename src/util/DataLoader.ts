/**
 * Fetches JSON data from a specified path within the /src/data folder.
 * @param filename The name of the JSON file to fetch without the extension.
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
