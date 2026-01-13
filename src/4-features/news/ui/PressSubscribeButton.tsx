import PlusIcon from '@/6-shared/assets/plus.svg?react';

interface PressSubscribeButtonProps {
  className?: string;
}
export const PressSubscribeButton = ({
  className,
}: PressSubscribeButtonProps) => {
  return (
    <button
      className={`text-text-weak flex h-6 items-center justify-center gap-0.5 rounded-full px-1.5 ${className}`}
    >
      <PlusIcon className="size-3" />
      구독하기
    </button>
  );
};
