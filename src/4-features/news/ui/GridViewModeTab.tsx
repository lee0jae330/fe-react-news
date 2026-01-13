import GridViewIcon from '@/6-shared/assets/grid-view.svg?react';

interface GridViewModeTabProps {
  isSelected: boolean;
  onClick: () => void;
}

export const GridViewModeTab = ({
  isSelected,
  onClick,
}: GridViewModeTabProps) => {
  return (
    <button
      className={`${isSelected ? 'text-text-point' : 'text-text-weak'}`}
      onClick={onClick}
    >
      <GridViewIcon className="size-6" />
    </button>
  );
};
