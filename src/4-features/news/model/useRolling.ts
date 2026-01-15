import { useCallback, useEffect, useRef, useState } from 'react';

import type { LatestNewsList } from '@/5-entities/news';

interface UseRollingProps {
  latestNewsList: LatestNewsList['latestNewsList'];
  delay?: number;
  isMouseEnter: boolean;
}

export const useRolling = ({
  latestNewsList,
  delay,
  isMouseEnter,
}: UseRollingProps) => {
  const currentItemRef = useRef<HTMLDivElement>(null);
  const nextItemRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const totalLength = latestNewsList.length;

  const currentItem = latestNewsList[currentIndex];
  const nextItem = latestNewsList[(currentIndex + 1) % totalLength];

  const rollup = useCallback(() => {
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
  }, []);

  const updateNews = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalLength);
  }, [totalLength]);

  const returnToInitialPosition = useCallback(() => {
    if (!currentItemRef.current || !nextItemRef.current) {
      return;
    }
    [currentItemRef, nextItemRef].forEach((item) => {
      if (item.current) {
        item.current.style.transition = 'none';
      }
    });
    currentItemRef.current.style.transform = 'translateY(0)';
    nextItemRef.current.style.transform = 'translateY(48px)';
  }, []);

  useEffect(() => {
    const timeoutIdList: number[] = [];
    if (isMouseEnter) {
      timeoutIdList.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
      return;
    }

    const rolling = () => {
      const timeoutId1 = setTimeout(() => {
        rollup();
        const timeoutId2 = setTimeout(() => {
          updateNews();
          returnToInitialPosition();
          rolling();
        }, 500);
        timeoutIdList.push(timeoutId2);
      }, 5000);
      timeoutIdList.push(timeoutId1);
    };

    if (delay) {
      const timeoutId = setTimeout(() => {
        rolling();
      }, delay);
      timeoutIdList.push(timeoutId);
    } else {
      rolling();
    }

    return () => {
      timeoutIdList.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
    };
  }, [rollup, updateNews, returnToInitialPosition, delay, isMouseEnter]);

  return {
    currentItem,
    nextItem,
    currentItemRef,
    nextItemRef,
  };
};
