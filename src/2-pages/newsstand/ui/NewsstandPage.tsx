import { NewsStandHeader, NewsStandMain } from '@/3-widgets/news';

export const NewsstandPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-180 w-7xl flex-col gap-10">
        <NewsStandHeader />
        <NewsStandMain />
      </div>
    </div>
  );
};
