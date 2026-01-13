import NewspaperIcon from '@/6-shared/assets/newspaper.svg?react';

export const NewsStandLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <NewspaperIcon className="text-text-point size-6" />
      <h1 className="text-text-strong display-bold-24">뉴스스탠드</h1>
    </div>
  );
};
