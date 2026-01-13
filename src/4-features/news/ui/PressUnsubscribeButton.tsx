import ClosedIcon from '@/6-shared/assets/closed.svg?react';

interface PressUnsubscribeButtonProps {
  hasText: boolean;
  className?: string;
}

export const PressUnsubscribeButton = ({
  hasText,
  className,
}: PressUnsubscribeButtonProps) => {
  return (
    <button className={`bg-transparent ${className}`}>
      <ClosedIcon className="size-3" />
      {hasText && '해지하기'}
    </button>
  );
};
