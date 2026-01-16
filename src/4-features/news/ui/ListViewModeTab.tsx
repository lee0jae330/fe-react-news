import { memo } from 'react';

import ListViewIcon from '@/6-shared/assets/list-view.svg?react';
import { IconButton } from '@/6-shared/ui';

interface ListViewModeTabProps {
  isSelected: boolean;
  onClick: () => void;
}

export const ListViewModeTab = memo(
  ({ isSelected, onClick }: ListViewModeTabProps) => {
    return (
      <IconButton
        className={`${isSelected ? 'text-text-point' : 'text-text-weak'}`}
        onClick={onClick}
        icon={<ListViewIcon className="size-6" />}
      />
    );
  },
);

ListViewModeTab.displayName = 'ListViewModeTab';
