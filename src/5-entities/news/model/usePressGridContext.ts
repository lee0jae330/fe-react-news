import { createContext, useContext } from 'react';

import type { GridViewPressList } from '../types';

interface PressGridProviderContext {
  gridPressList: GridViewPressList['presses'];
  setGridPressList: (gridPressList: GridViewPressList['presses']) => void;
}

export const PressGridContext = createContext<PressGridProviderContext | null>(
  null,
);
export const usePressGridContext = () => {
  const context = useContext(PressGridContext);
  if (!context) {
    throw new Error('PressGridProviderContext의 자식 컴포넌트가 아닙니다.');
  }
  return context;
};
