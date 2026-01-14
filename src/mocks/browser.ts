import { setupWorker } from 'msw/browser';

import { pressSubscriptionsHandler } from './handlers/pressSubscriptionHandlers.ts';

export const worker = setupWorker(...pressSubscriptionsHandler);
