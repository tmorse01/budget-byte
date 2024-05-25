export async function getExpenseData() {
  return fetch(`${import.meta.env.VITE_API_URL}/api/test`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
}
