export const VIEW_MODE_TABS = {
  LIST: 'list',
  GRID: 'grid',
} as const;

export type ViewModeTab = (typeof VIEW_MODE_TABS)[keyof typeof VIEW_MODE_TABS];
