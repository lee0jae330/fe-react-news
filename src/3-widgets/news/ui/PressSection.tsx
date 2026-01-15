import { useState } from 'react';

import { NextPageButton, PreviousPageButton } from '@/4-features/news';

import { API_ENDPOINTS, type GridViewPressList } from '@/5-entities/news';

import { useFetch } from '@/6-shared/model';

import { GridLayout } from './GridLayout';

export const PressSection = () => {
  const { data, error, isLoading, isError } = useFetch<GridViewPressList>({
    url: API_ENDPOINTS.GRID_VIEW_PRESS_LIST,
  });

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
    <section className="relative mx-auto mt-6 h-[388px] w-[930px]">
      <GridLayout presses={currentPresses ?? []} />
      {hasPreviousPage && <PreviousPageButton onClick={handlePreviousPage} />}
      {hasNextPage && <NextPageButton onClick={handleNextPage} />}
    </section>
  );
};
