import { useEffect, useRef, useState } from 'react';

import type { LatestNewsList } from '@/5-entities/news';

import { RollingItem } from './RollingItem';

interface RollingItemListProps {
  latestNewsList: LatestNewsList['latestNewsList'];
}

export const RollingItemList = ({ latestNewsList }: RollingItemListProps) => {
  const currentItemRef = useRef<HTMLDivElement>(null);
  const nextItemRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const totalLength = latestNewsList.length;

  const currentItem = latestNewsList[currentIndex];
  const nextItem = latestNewsList[(currentIndex + 1) % totalLength];

  useEffect(() => {
    if (!currentItemRef.current || !nextItemRef.current) {
      return;
    }

    currentItemRef.current.style.transform = 'translateY(-48px)';
    nextItemRef.current.style.transform = 'translateY(0)';
  }, [currentIndex]);

  useEffect(() => {
    if (!currentItemRef.current || !nextItemRef.current) {
      return;
    }

    const rolling = () => {
      setTimeout(() => {
        if (!currentItemRef.current || !nextItemRef.current) {
          return;
        }

        [currentItemRef, nextItemRef].forEach((item) => {
          if (item.current) {
            item.current.style.transition = 'transform 500ms ease-in-out';
          }
        });
        currentItemRef.current.style.transform = 'translateY(-48px)';
        nextItemRef.current.style.transform = 'translateY(0)';

        setTimeout(() => {
          if (!currentItemRef.current || !nextItemRef.current) {
            return;
          }
          [currentItemRef, nextItemRef].forEach((item) => {
            if (item.current) {
              item.current.style.transition = 'none';
            }
          });
          setCurrentIndex((currentIndex + 1) % totalLength);
        }, 500);
      }, 2000);
    };

    rolling();
  }, [currentIndex, totalLength]);

  return (
    <div className="bg-surface-alt border-default relative h-12 flex-1 overflow-hidden px-4 py-[13.5px]">
      <RollingItem ref={currentItemRef} latestNews={currentItem} />
      <RollingItem
        ref={nextItemRef}
        latestNews={nextItem}
        style={{ transform: 'translateY(48px)' }}
      />
    </div>
  );
};
