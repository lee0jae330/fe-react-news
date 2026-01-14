export interface Press {
  category: string;
  totalPage: string;
  logo: string;
  press: string;
  time: string;
  mainTitle: string;
  mainLink: string;
  mainImg: string;
  relatedArticles: RelatedArticle[];
  darkLogo: string;
}

interface RelatedArticle {
  title: string;
  link: string;
}
