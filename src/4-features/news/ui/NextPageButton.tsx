import ChevronRightIcon from '@/6-shared/assets/chevron-right.svg?react';
import { IconButton } from '@/6-shared/ui';

interface NextPageButtonProps {
  onClick: () => void;
}

export const NextPageButton = ({ onClick }: NextPageButtonProps) => {
  return (
    <IconButton
      onClick={onClick}
      icon={<ChevronRightIcon className="text-border-bold h-10 w-6" />}
      className="absolute top-1/2 right-[-48px] -translate-y-1/2"
    />
  );
};
