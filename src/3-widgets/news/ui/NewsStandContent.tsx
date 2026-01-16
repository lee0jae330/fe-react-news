import { useEffect, useState } from 'react';

import { NextPageButton, PreviousPageButton } from '@/4-features/news';

import { API_ENDPOINTS, type GridViewPressList } from '@/5-entities/news';

import { HTTP_OPTION } from '@/6-shared/constants';

import { GridLayout } from './GridLayout';

export const NewsStandContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<GridViewPressList | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async <T extends GridViewPressList>({
    url,
    option,
  }: {
    url: string;
    option?: RequestInit;
  }) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(url, option);
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

  useEffect(() => {
    const fetchGridViewPressList = () =>
      fetchData<GridViewPressList>({
        url: API_ENDPOINTS.GRID_VIEW_PRESS_LIST,
        option: { ...HTTP_OPTION.GET },
      });

    // const fetcSubscribedPressList = () =>
    //   fetchData<GridViewPressList>({
    //     url: API_ENDPOINTS.SUBSCRIPTIONS,
    //     option: { ...HTTP_OPTION.GET },
    //   });

    fetchGridViewPressList();
  }, []);

  const [page, setPage] = useState<number>(0);

  const TOTAL_PAGES = Math.ceil((data?.presses.length ?? 0) / 24) ?? 4;

  const handlePreviousPage = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNextPage = () => {
    setPage((prev) => (prev < TOTAL_PAGES - 1 ? prev + 1 : TOTAL_PAGES - 1));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  const currentPresses = data?.presses.slice(page * 24, (page + 1) * 24);
  const hasPreviousPage = page > 0;
  const hasNextPage = page < TOTAL_PAGES - 1;
  return (
    <section className="relative mx-auto mt-6 h-97 w-232.5">
      <GridLayout presses={currentPresses ?? []} />
      {hasPreviousPage && <PreviousPageButton onClick={handlePreviousPage} />}
      {hasNextPage && <NextPageButton onClick={handleNextPage} />}
    </section>
  );
};
