import { useEffect, useState } from 'react';

interface UseFetchArgs {
  url: string;
  option?: RequestInit;
}
export const useFetch = <T>({ url, option }: UseFetchArgs) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(url, {
          ...option,
          headers: {
            'Content-Type': 'application/json',
            ...option?.headers,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: T = await response.json();
        setData(result);
      } catch (error) {
        setIsError(true);
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, option]);

  return { isLoading, isError, data, error };
};
