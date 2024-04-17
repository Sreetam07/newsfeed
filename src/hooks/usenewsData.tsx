import useSWR from "swr";
import axios from "axios";

// Fetcher function to fetch data from the provided URL using axios
const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

// Custom hook to fetch news data using SWR
const useNewsData = (url: string) => {
  // Fetch news data using useSWR hook, passing the URL and fetcher function
  const { data, error } = useSWR(url, fetcher);

  // Return news data, loading state, and error state
  return {
    newsData: data, // Fetched news data
  };
};

export default useNewsData;
