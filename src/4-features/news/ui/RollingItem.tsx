import type { CSSProperties, RefObject } from 'react';

import {
  LatesNewsTitle,
  type LatestNewsList,
  LatestNewsPress,
} from '@/5-entities/news';

interface RollingItemProps {
  ref: RefObject<HTMLDivElement | null>;
  latestNews: LatestNewsList['latestNewsList'][number];
  style?: CSSProperties;
}

export const RollingItem = ({
  ref,
  latestNews,
  style = {},
}: RollingItemProps) => {
  return (
    <div
      style={style}
      className="absolute flex min-w-0 items-center gap-4 transition-transform duration-500"
      ref={ref}
    >
      <LatestNewsPress pressName={latestNews.pressName} />
      <LatesNewsTitle title={latestNews.title} />
    </div>
  );
};
