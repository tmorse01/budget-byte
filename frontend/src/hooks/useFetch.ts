import { isLoggedIn } from "@/util/AuthApi";
import { useState, useEffect, useCallback } from "react";

interface FetchOptions {
  requiresAuth: boolean;
}

const useFetch = <T>(url: string, options?: FetchOptions) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  const fetchData = useCallback(async () => {
    if (options?.requiresAuth && !isLoggedIn()) {
      setData(null);
      return;
    }
    try {
      setLoading(true);
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (options?.requiresAuth) {
        headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      }

      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url, options?.requiresAuth]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { data, setData, loading, error, fetchData };
};

export default useFetch;
