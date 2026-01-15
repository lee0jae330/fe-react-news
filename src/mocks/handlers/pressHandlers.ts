// src/mocks/handlers/presses.ts
import { http, HttpResponse } from 'msw';

import { categories } from '../data/categories';
import { presses } from '../data/presses';

type Press = Schema.Press;

export const pressHandlers = [
  // 최신 뉴스 10개
  http.get('/api/presses/latest-news', ({ request }) => {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get('limit') ?? 10);

    const latest = presses.slice(0, limit).map((p: Press) => ({
      pressId: p.press,
      pressName: p.press,
      title: p.mainTitle,
      url: p.mainLink,
    }));

    return HttpResponse.json({
      latestNewsList: latest,
    });
  }),

  // 그리드 뷰 언론사 목록
  http.get('/api/presses/grid', () => {
    const gridViewPressList = presses.map((p: Press) => ({
      pressId: p.press,
      pressName: p.press,
      logo: p.logo,
      darkLogo: p.darkLogo,
    }));

    return HttpResponse.json({
      presses: gridViewPressList,
    });
  }),

  // 리스트 뷰 언론사 카테고리 목록
  http.get('/api/presses/categories', () => {
    const categoryList = categories.map((categoryName) => ({
      categoryId: categoryName,
      categoryName,
    }));

    return HttpResponse.json({
      categories: categoryList,
    });
  }),

  // 리스트 뷰 카테고리별 언론사 목록 및 주요 기사
  http.get('/api/presses/list/categories/:categoryName', ({ params }) => {
    const { categoryName } = params;

    if (!categoryName) {
      return new HttpResponse('categoryName is required', { status: 400 });
    }
    if (!categories.includes(categoryName as string)) {
      return new HttpResponse('invalid categoryName', { status: 400 });
    }

    const pressesInCategory = presses
      .filter((p: Press) => p.category === categoryName)
      .map((p: Press) => ({
        pressId: p.press,
        pressName: p.press,
        logo: p.logo,
        darkLogo: p.darkLogo,
        mainArticle: p.mainTitle,
        relatedArticles: p.relatedArticles,
      }));

    return HttpResponse.json({
      presses: pressesInCategory,
    });
  }),
];
