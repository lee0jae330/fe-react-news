import { LatesNewsTitle, LatestNewsPress } from '@/5-entities/news';

export const RollingItem = () => {
  return (
    <div className="bg-surface-alt border-default flex flex-1 items-center gap-4 p-4">
      <LatestNewsPress />
      <LatesNewsTitle />
    </div>
  );
};
