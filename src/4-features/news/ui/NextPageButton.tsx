import ChevronRightIcon from '@/6-shared/assets/chevron-right.svg?react';
import { IconButton } from '@/6-shared/ui';

export const NextPageButton = () => {
  return (
    <IconButton
      onClick={() => {}}
      icon={<ChevronRightIcon className="text-border-bold h-10 w-6" />}
      className="absolute top-1/2 right-[-48px] -translate-y-1/2"
    />
  );
};
