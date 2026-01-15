import ChevronLeftIcon from '@/6-shared/assets/chevron-left.svg?react';
import { IconButton } from '@/6-shared/ui';

interface PreviousPageButtonProps {
  onClick: () => void;
}

export const PreviousPageButton = ({ onClick }: PreviousPageButtonProps) => {
  return (
    <IconButton
      onClick={onClick}
      icon={<ChevronLeftIcon className="text-border-bold h-10 w-6" />}
      className="absolute top-1/2 left-[-48px] -translate-y-1/2"
    />
  );
};
