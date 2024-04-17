import useSWR from 'swr';

const NEWS_API_URL = 'https://newsapi.org/v2/everything?q=apple&from=2024-04-16&to=2024-04-16&sortBy=popularity&apiKey=4ae7de8f989640a499d76121a8bf896a';

const fetcher = async () => {
  const response = await fetch(NEWS_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const useNewsData = () => {
  const { data, error, mutate } = useSWR(null, fetcher, { revalidateOnMount: false });

  return {
    newsData: data,
    isLoading: !error && !data,
    isError: error,
    fetchNews: mutate,
  };
};

export default useNewsData;
