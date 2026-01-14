import { setupWorker } from 'msw/browser';

import { pressSubscriptionsHandler } from './handlers.ts';

export const worker = setupWorker(...pressSubscriptionsHandler);
