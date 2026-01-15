declare namespace Schema {
  export interface Press {
    category: string;
    totalPage: string;
    logo: string;
    press: string;
    time: string;
    mainTitle: string;
    mainLink: string;
    mainImg: string;
    darkLogo: string;
    relatedArticles: Schema.RelatedArticle[];
  }
}
