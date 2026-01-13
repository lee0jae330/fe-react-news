interface TotalPressTabProps {
  isSelected: boolean;
  onClick: () => void;
}

export const TotalPressTab = ({ isSelected, onClick }: TotalPressTabProps) => {
  return (
    <button
      className={`cursor-pointer ${isSelected ? 'selected-bold-16 text-text-strong' : 'available-medium-16 text-text-weak'}`}
      onClick={onClick}
    >
      전체 언론사
    </button>
  );
};
