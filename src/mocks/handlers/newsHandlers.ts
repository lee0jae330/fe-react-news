// src/mocks/handlers/news.ts
import { http, HttpResponse } from 'msw';

import { presses } from '../data/presses';
import type { Press } from '../types/press';

export const newsHandlers = [
  http.get('/api/news/latest', ({ request }) => {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get('limit') ?? 10);

    const latest = presses.slice(0, limit).map((p: Press) => ({
      pressId: p.press,
      pressName: p.press,
      title: p.mainTitle,
      url: p.mainLink,
    }));

    return HttpResponse.json({
      latestNews: latest,
    });
  }),
];
