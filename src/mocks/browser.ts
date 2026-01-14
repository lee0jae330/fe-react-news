import { setupWorker } from 'msw/browser';

import {
  newsHandlers,
  pressHandlers,
  pressSubscriptionsHandler,
} from './handlers';

export const worker = setupWorker(
  ...pressSubscriptionsHandler,
  ...pressHandlers,
  ...newsHandlers,
);
