import { useEffect, useState } from 'react';

import { getSubscriptions, SubscribedPressCount } from '@/5-entities/news';

interface SubscribedPressTabProps {
  isSelected: boolean;
  onClick: () => void;
}

export const SubscribedPressTab = ({
  isSelected,
  onClick,
}: SubscribedPressTabProps) => {
  const [subscriptionCount, setSubscriptionCount] = useState<number>(0);

  const fetchSubscriptionCount = () => {
    getSubscriptions()
      .then((response) => {
        setSubscriptionCount(response.subscriptions.length);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchSubscriptionCount();
  }, []);

  return (
    <button
      className={`flex cursor-pointer items-center gap-1 ${isSelected ? 'selected-bold-16 text-text-strong' : 'available-medium-16 text-text-weak'}`}
      onClick={onClick}
    >
      내가 구독한 언론사
      <SubscribedPressCount count={subscriptionCount} isActive={isSelected} />
    </button>
  );
};
