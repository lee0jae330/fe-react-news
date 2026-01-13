import { NewsStandHeader, NewsStandMain } from '@/3-widgets/news';

export const NewsstandPage = () => {
  return (
    <div className="flex flex-col">
      <NewsStandHeader />
      <NewsStandMain />
    </div>
  );
};
