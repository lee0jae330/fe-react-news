import { setupWorker } from 'msw/browser';

import { pressHandlers, pressSubscriptionsHandler } from './handlers';

export const worker = setupWorker(
  ...pressSubscriptionsHandler,
  ...pressHandlers,
);
