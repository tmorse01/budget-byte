import { getIsLoggedIn } from "@/util/AuthApi";
import { useState, useEffect, useCallback } from "react";

interface FetchOptions {
  requiresAuth: boolean;
}

const useFetch = (url: string, options: FetchOptions) => {
  const [data, setData] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  const isLoggedIn = getIsLoggedIn();

  const fetchData = useCallback(async () => {
    if (options.requiresAuth && !isLoggedIn) {
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url, options.requiresAuth, isLoggedIn]);

  useEffect(() => {
    fetchData();
  }, [url, isLoggedIn, fetchData]);

  return { data, loading, error };
};

export default useFetch;
