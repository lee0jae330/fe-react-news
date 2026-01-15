import { RollingItemList } from '@/4-features/news/ui/RollingItemList';

import { API_ENDPOINTS, type LatestNewsList } from '@/5-entities/news';

import { useFetch, useMouseEnter } from '@/6-shared/model';

export const RollingSection = () => {
  const { data, error, isLoading, isError } = useFetch<LatestNewsList>({
    url: API_ENDPOINTS.LATEST_NEWS,
  });

  const { isMouseEnter, handleMouseEnter, handleMouseLeave } = useMouseEnter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  const leftRollingNewsList = data?.latestNewsList.slice(0, 5);
  const rightRollingNewsList = data?.latestNewsList.slice(5);

  return (
    <section className="flex gap-2">
      <RollingItemList
        latestNewsList={leftRollingNewsList ?? []}
        isMouseEnter={isMouseEnter}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <RollingItemList
        latestNewsList={rightRollingNewsList ?? []}
        delay={1000}
        isMouseEnter={isMouseEnter}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </section>
  );
};
