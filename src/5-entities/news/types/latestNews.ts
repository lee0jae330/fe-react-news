import type { News } from './news';

interface LatestNews {
  pressId: News['id'];
  pressName: News['press'];
  title: News['mainTitle'];
  url: News['mainLink'];
}

export interface LatestNewsList {
  latestNews: LatestNews[];
}
