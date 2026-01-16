import { type PropsWithChildren, useMemo, useState } from 'react';

import type { PressTabs } from '../constants';

import { PressTabContext } from './usePressTabContext';

export const PressTabProvider = ({ children }: PropsWithChildren) => {
  const [selectedTab, setSelectedTab] = useState<PressTabs>('total');

  const context = useMemo(
    () => ({
      selectedTab,
      setSelectedTab,
    }),
    [selectedTab, setSelectedTab],
  );

  return (
    <PressTabContext.Provider value={context}>
      {children}
    </PressTabContext.Provider>
  );
};
