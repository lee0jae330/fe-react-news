// src/mocks/handlers/presses.ts
import { http, HttpResponse } from 'msw';

import { categories } from '../data/categories';
import { presses } from '../data/presses';
import { shuffle } from '../utils';

import { subscriptions } from './pressSubscriptionHandlers';

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
    const gridViewPressList = presses.map(({ press, logo, darkLogo }) => ({
      pressId: press,
      pressName: press,
      logo: logo,
      darkLogo: darkLogo,
      isSubscribed: subscriptions.has(press),
    }));

    const shuffledGridViewPressList = shuffle(gridViewPressList).slice(0, 96);

    return HttpResponse.json({
      presses: shuffledGridViewPressList,
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

    const pressesInCategory = shuffle(
      presses
        .filter((p: Press) => p.category === categoryName)
        .map(
          ({
            press,
            logo,
            darkLogo,
            mainTitle,
            mainLink,
            mainImg,
            relatedArticles,
            time,
          }: Press) => ({
            pressId: press,
            pressName: press,
            logo: logo,
            darkLogo: darkLogo,
            mainTitle: mainTitle,
            mainLink: mainLink,
            mainImg: mainImg,
            relatedArticles: relatedArticles,
            time: time,
            isSubscribed: subscriptions.has(press),
          }),
        ),
    );

    return HttpResponse.json({
      presses: pressesInCategory,
    });
  }),
];
