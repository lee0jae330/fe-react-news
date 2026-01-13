export const PRESS_TABS = {
  TOTAL: 'total',
  PRESS: 'press',
} as const;

export type PressTab = (typeof PRESS_TABS)[keyof typeof PRESS_TABS];
