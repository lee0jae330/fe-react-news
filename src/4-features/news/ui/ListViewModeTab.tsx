import ListViewIcon from '@/6-shared/assets/list-view.svg?react';

interface ListViewModeTabProps {
  isSelected: boolean;
  onClick: () => void;
}

export const ListViewModeTab = ({
  isSelected,
  onClick,
}: ListViewModeTabProps) => {
  return (
    <button
      className={`${isSelected ? 'text-text-point' : 'text-text-weak'}`}
      onClick={onClick}
    >
      <ListViewIcon className="size-6" />
    </button>
  );
};
