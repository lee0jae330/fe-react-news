import { useCallback, useState } from 'react';

import { GridViewModeTab, ListViewModeTab } from '@/4-features/news';

import { VIEW_MODE_TABS, type ViewModeTabs } from '../constants';

export const ViewModeTabGroup = () => {
  const [selectedTab, setSelectedTab] = useState<ViewModeTabs>(
    VIEW_MODE_TABS.LIST,
  );

  const handleSelectTab = useCallback(
    (tab: ViewModeTabs) => () => {
      setSelectedTab(tab);
    },
    [],
  );

  return (
    <div className="flex items-center gap-2">
      <ListViewModeTab
        isSelected={selectedTab === VIEW_MODE_TABS.LIST}
        onClick={handleSelectTab(VIEW_MODE_TABS.LIST)}
      />
      <GridViewModeTab
        isSelected={selectedTab === VIEW_MODE_TABS.GRID}
        onClick={handleSelectTab(VIEW_MODE_TABS.GRID)}
      />
    </div>
  );
};
