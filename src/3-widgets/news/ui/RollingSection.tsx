import { RollingItemList } from '@/4-features/news/ui/RollingItemList';

// import { API_ENDPOINTS } from '@/5-entities/news';

// import { useFetch } from '@/6-shared/model';

export const RollingSection = () => {
  // const { data, error, isLoading, isError } = useFetch({
  //   url: API_ENDPOINTS.LATEST_NEWS,
  // });
  return (
    <section className="flex gap-2">
      <RollingItemList />
      <RollingItemList />
    </section>
  );
};
