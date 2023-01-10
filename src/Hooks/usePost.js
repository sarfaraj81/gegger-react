import { useState, useEffect } from "react";
import axios from "axios";

function usePost(url, headers, body) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const controller = new AbortController();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.post(url, body, {
          headers: headers,
          signal: controller.signal,
        });
        setResponse(res);
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled", error.message);
        } else {
          setError(error);
        }
      }
    };
    fetchData();
    return () => controller.abort();
  }, []);

  return { response, error, isLoading };
}
