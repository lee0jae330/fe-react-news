import type { ValueOf } from '@/6-shared/util';

export const PRESS_TABS = {
  TOTAL: 'total',
  SUBSCRIBED: 'subscribed',
} as const;

export type PressTabs = ValueOf<typeof PRESS_TABS>;
