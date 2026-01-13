import { useCallback, useState } from 'react';

import { SubscribedPressTab, TotalPressTab } from '@/4-features/news';

import { PRESS_TABS, type PressTab } from '../constants';

export const PressTabGroup = () => {
  const [selectedTab, setSelectedTab] = useState<PressTab>(PRESS_TABS.TOTAL);

  const handleSelectTab = useCallback(
    (tab: PressTab) => () => {
      setSelectedTab(tab);
    },
    [],
  );

  return (
    <div className="flex items-center gap-6">
      <TotalPressTab
        isSelected={selectedTab === PRESS_TABS.TOTAL}
        onClick={handleSelectTab(PRESS_TABS.TOTAL)}
      />
      <SubscribedPressTab
        isSelected={selectedTab === PRESS_TABS.PRESS}
        onClick={handleSelectTab(PRESS_TABS.PRESS)}
      />
    </div>
  );
};
