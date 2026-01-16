import { useCallback } from 'react';

import { SubscribedPressTab, TotalPressTab } from '@/4-features/news';

import { PRESS_TABS, type PressTabs } from '../constants';
import { usePressTabContext } from '../model';

export const PressTabGroup = () => {
  const { selectedTab, setSelectedTab } = usePressTabContext();

  const handleSelectTab = useCallback(
    (tab: PressTabs) => () => {
      setSelectedTab(tab);
    },
    [setSelectedTab],
  );

  return (
    <div className="flex items-center gap-6">
      <TotalPressTab
        isSelected={selectedTab === PRESS_TABS.TOTAL}
        onClick={handleSelectTab(PRESS_TABS.TOTAL)}
      />
      <SubscribedPressTab
        isSelected={selectedTab === PRESS_TABS.SUBSCRIBED}
        onClick={handleSelectTab(PRESS_TABS.SUBSCRIBED)}
      />
    </div>
  );
};
