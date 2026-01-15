import type { LatestNewsList } from '@/5-entities/news';

import { useRolling } from '../model';

import { RollingItem } from './RollingItem';

interface RollingItemListProps {
  latestNewsList: LatestNewsList['latestNewsList'];
  delay?: number;
  isMouseEnter: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const RollingItemList = ({
  latestNewsList,
  delay,
  isMouseEnter,
  onMouseEnter,
  onMouseLeave,
}: RollingItemListProps) => {
  const { currentItem, nextItem, currentItemRef, nextItemRef } = useRolling({
    latestNewsList,
    delay,
    isMouseEnter,
  });

  return (
    <div
      className="bg-surface-alt border-default relative h-12 min-w-0 flex-1 overflow-hidden px-4 py-[13.5px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <RollingItem ref={currentItemRef} latestNews={currentItem} />
      <RollingItem
        ref={nextItemRef}
        latestNews={nextItem}
        style={{ transform: 'translateY(48px)' }}
      />
    </div>
  );
};
