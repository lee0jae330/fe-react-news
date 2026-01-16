import { memo } from 'react';

import GridViewIcon from '@/6-shared/assets/grid-view.svg?react';
import { IconButton } from '@/6-shared/ui';

interface GridViewModeTabProps {
  isSelected: boolean;
  onClick: () => void;
}

export const GridViewModeTab = memo(
  ({ isSelected, onClick }: GridViewModeTabProps) => {
    return (
      <IconButton
        className={`${isSelected ? 'text-text-point' : 'text-text-weak'}`}
        onClick={onClick}
        icon={<GridViewIcon className="size-6" />}
      />
    );
  },
);
GridViewModeTab.displayName = 'GridViewModeTab';
