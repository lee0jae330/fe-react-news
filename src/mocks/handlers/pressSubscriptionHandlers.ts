import { http, HttpResponse } from 'msw';

import { presses } from '../data/presses';

type Press = Schema.Press;

export const subscriptions = new Map<string, Schema.Press>();
presses.forEach((press: Press, index: number) => {
  if (index < 5) {
    // 첫 5개 구독으로 가정
    subscriptions.set(press.press, press);
  }
});

export const pressSubscriptionsHandler = [
  // 구독 언론사
  http.get('/api/presses/subscriptions', () => {
    return HttpResponse.json({
      subscriptions: Array.from(subscriptions.values()).map(
        ({
          press,
          logo,
          darkLogo,
          mainTitle,
          mainLink,
          mainImg,
          relatedArticles,
          time,
        }) => ({
          pressId: press,
          pressName: press,
          logo: logo,
          darkLogo: darkLogo,
          mainTitle: mainTitle,
          mainLink: mainLink,
          mainImg: mainImg,
          relatedArticles: relatedArticles,
          time: time,
        }),
      ),
    });
  }),

  // 언론사 구독
  http.post<{ pressId: Schema.Press['press'] }>(
    '/api/presses/subscriptions/:pressId',
    ({ params }) => {
      const { pressId } = params;
      const press = presses.find((press: Press) => press.press === pressId);
      if (!press) {
        return new HttpResponse('press not found', { status: 404 });
      }
      subscriptions.set(pressId, press);
      return HttpResponse.json({ status: 204 });
    },
  ),

  // 언론사 구독 해지
  http.delete<{ pressId: Schema.Press['press'] }>(
    '/api/presses/subscriptions/:pressId',
    ({ params }) => {
      const { pressId } = params;
      if (!subscriptions.has(pressId as string)) {
        return new HttpResponse('press not found', { status: 404 });
      }
      subscriptions.delete(pressId);
      return HttpResponse.json({ status: 204 });
    },
  ),
];
