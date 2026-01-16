import { createContext, useContext } from 'react';

import type { PressTabs } from '../constants';

interface PressTabProviderContext {
  selectedTab: PressTabs;
  setSelectedTab: (tab: PressTabs) => void;
}

export const PressTabContext = createContext<PressTabProviderContext | null>(
  null,
);

export const usePressTabContext = () => {
  const context = useContext(PressTabContext);
  if (!context) {
    throw new Error('PressTabProviderContext의 자식 컴포넌트가 아닙니다.');
  }
  return context;
};
