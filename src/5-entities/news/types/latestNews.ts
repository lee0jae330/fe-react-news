interface LatestNews {
  pressId: Schema.Press['press'];
  pressName: Schema.Press['press'];
  title: Schema.Press['mainTitle'];
  url: Schema.Press['mainLink'];
}

export interface LatestNewsList {
  latestNews: LatestNews[];
}
