import { http, HttpResponse } from 'msw';

import { presses } from '../data/presses';
import type { Press } from '../types/press';

const subscriptions = new Set<string>();
presses.forEach((press: Press, index: number) => {
  if (index < 5) {
    // 첫 5개 구독으로 가정
    subscriptions.add(press.press);
  }
});

export const pressSubscriptionsHandler = [
  // 구독 언론사
  http.get('/api/presses/subscriptions', () => {
    return HttpResponse.json({
      subscriptions: Array.from(subscriptions).map((pressId) => ({ pressId })),
    });
  }),

  http.post('/api/presses/subscriptions/:pressId', ({ params }) => {
    subscriptions.add(params.pressId as string);
    return HttpResponse.json({
      subscriptionCount: subscriptions.size,
    });
  }),

  http.delete('/api/presses/subscriptions/:pressId', ({ params }) => {
    subscriptions.delete(params.pressId as string);
    return HttpResponse.json({
      subscriptionCount: subscriptions.size,
    });
  }),
];
