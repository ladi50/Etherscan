import { useCallback } from "react";

export const useFetch = () => {
  const fetchHandler = useCallback(async (url) => {
    try {
      const response = await fetch(
        "https://api.etherscan.io/api?module=account&action=txlist&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&startblock=0&endblock=99999999&sort=asc&apikey=" +
          url
      );

      if (!response.ok) {
        throw new Error("Fetch failed!");
      }

      const res = await response.json();

      return res;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { fetchHandler };
};
