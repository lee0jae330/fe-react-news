import type { RelatedArticle } from './relatedArticle';

export interface News {
  category: string;
  totalPage: string;
  logo: string;
  press: string;
  time: string;
  mainTitle: string;
  mainLink: string;
  mainImg: string;
  darkLogo: string;
  relatedArticles: RelatedArticle[];
}
