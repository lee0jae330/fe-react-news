import { useEffect, useRef, useState } from 'react';

import { NextPageButton, PreviousPageButton } from '@/4-features/news';

import {
  API_ENDPOINTS,
  type GridViewPressList,
  isGridViewPressList,
  usePressGridContext,
} from '@/5-entities/news';

import { HTTP_OPTION } from '@/6-shared/constants';

import { PRESS_TABS } from '../constants';
import { usePressTabContext } from '../model';

import { GridLayout } from './GridLayout';

export const NewsStandContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { gridPressList, setGridPressList } = usePressGridContext();
  const [error, setError] = useState<Error | null>(null);

  const { selectedTab } = usePressTabContext();

  const fetchData = useRef(
    async <T extends GridViewPressList>({
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
        if (isGridViewPressList(result)) {
          setGridPressList(result.presses);
        }
      } catch (error) {
        setIsError(true);
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    },
  );

  useEffect(() => {
    const fetchGridViewPressList = () =>
      fetchData.current<GridViewPressList>({
        url: API_ENDPOINTS.GRID_VIEW_PRESS_LIST,
        option: { ...HTTP_OPTION.GET },
      });

    const fetcSubscribedPressList = () =>
      fetchData.current<GridViewPressList>({
        url: API_ENDPOINTS.SUBSCRIPTIONS,
        option: { ...HTTP_OPTION.GET },
      });

    if (selectedTab === PRESS_TABS.TOTAL) {
      fetchGridViewPressList();
    } else if (selectedTab === PRESS_TABS.SUBSCRIBED) {
      fetcSubscribedPressList();
    }

    setPage(0);
  }, [selectedTab]);

  const [page, setPage] = useState<number>(0);

  const TOTAL_PAGES = Math.ceil((gridPressList?.length ?? 0) / 24) ?? 4;

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

  const currentPresses = gridPressList?.slice(page * 24, (page + 1) * 24);
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
