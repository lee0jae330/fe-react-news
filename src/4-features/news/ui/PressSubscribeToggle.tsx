import type { PressSubscribeButtonBackgroundColor } from '../constants';

import { PressSubscribeButton } from './PressSubscribeButton';
import { PressUnsubscribeButton } from './PressUnsubscribeButton';

interface PressSubscribeToggleProps {
  isSubscribed: boolean;
  hasText?: boolean;
  subscribeBackgroundColor: PressSubscribeButtonBackgroundColor;
}

export const PressSubscribeToggle = ({
  isSubscribed,
  hasText = true,
  subscribeBackgroundColor,
}: PressSubscribeToggleProps) => {
  const defaultClassName = `text-text-weak flex h-6 items-center justify-center gap-0.5 rounded-full px-1.5 border-default available-medium-12 cursor-pointer hover:text-text-bold hover:border-border-bold`;
  const subscribeBackgroundColorClassName =
    subscribeBackgroundColor === 'default'
      ? 'bg-surface-default'
      : 'bg-surface-alt';
  if (isSubscribed) {
    return (
      <PressUnsubscribeButton
        hasText={hasText}
        className={`${defaultClassName}`}
      />
    );
  }
  return (
    <PressSubscribeButton
      className={`${defaultClassName} ${subscribeBackgroundColorClassName}`}
    />
  );
};
