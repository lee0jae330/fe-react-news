import { useEffect, useMemo, useState } from 'react';

interface UseFetchArgs {
  url: string;
  option?: RequestInit;
}
export const useFetch = <T>({ url, option }: UseFetchArgs) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const memoizedOption = useMemo(() => {
    return {
      ...option,
      headers: {
        'Content-Type': 'application/json',
        ...option?.headers,
      },
    };
  }, [option]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(url, memoizedOption);
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
  }, [url, memoizedOption]);

  return { isLoading, isError, data, error };
};
