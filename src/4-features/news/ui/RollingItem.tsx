import type { RefObject } from 'react';

import { LatesNewsTitle, LatestNewsPress } from '@/5-entities/news';

interface RollingItemProps {
  ref: RefObject<HTMLDivElement | null>;
}

export const RollingItem = ({ ref }: RollingItemProps) => {
  return (
    <div
      className="absolute flex items-center gap-4 transition-transform duration-500"
      ref={ref}
    >
      <LatestNewsPress />
      <LatesNewsTitle />
    </div>
  );
};
