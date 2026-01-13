import { SubscribedPressCount } from '@/5-entities/news';

interface SubscribedPressTabProps {
  isSelected: boolean;
  onClick: () => void;
}

export const SubscribedPressTab = ({
  isSelected,
  onClick,
}: SubscribedPressTabProps) => {
  return (
    <button
      className={`flex items-center gap-1 ${isSelected ? 'selected-bold-16 text-text-strong' : 'available-medium-16 text-text-weak'}`}
      onClick={onClick}
    >
      내가 구독한 언론사
      <SubscribedPressCount count={1} isActive={isSelected} />
    </button>
  );
};
