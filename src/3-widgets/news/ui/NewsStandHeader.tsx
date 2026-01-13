import { NewsStandLogo } from '@/4-features/news';

import { TodaysDate } from '@/6-shared/ui';

export const NewsStandHeader = () => {
  return (
    <header className="flex justify-between">
      <NewsStandLogo />
      <TodaysDate />
    </header>
  );
};
