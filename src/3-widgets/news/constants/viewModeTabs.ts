import type { ValueOf } from '@/6-shared/util';

export const VIEW_MODE_TABS = {
  LIST: 'list',
  GRID: 'grid',
} as const;

export type ViewModeTab = ValueOf<typeof VIEW_MODE_TABS>;
