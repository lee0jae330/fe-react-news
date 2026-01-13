import type { ValueOf } from '@/6-shared/util';

export const PRESS_TABS = {
  TOTAL: 'total',
  PRESS: 'press',
} as const;

export type PressTab = ValueOf<typeof PRESS_TABS>;
