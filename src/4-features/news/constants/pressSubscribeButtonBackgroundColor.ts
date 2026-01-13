import type { ValueOf } from '@/6-shared/util';

export const PRESS_SUBSCRIBE_BUTTON_BACKGROUND_COLOR = {
  DEFAULT: 'default',
  ALT: 'alt',
} as const;

export type PressSubscribeButtonBackgroundColor = ValueOf<
  typeof PRESS_SUBSCRIBE_BUTTON_BACKGROUND_COLOR
>;
