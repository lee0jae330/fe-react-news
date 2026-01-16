import { type PropsWithChildren, useMemo, useState } from 'react';

import type { GridViewPressList } from '../types';

import { PressGridContext } from './usePressGridContext';

export const PressGridProvider = ({ children }: PropsWithChildren) => {
  const [gridPressList, setGridPressList] = useState<
    GridViewPressList['presses']
  >([]);

  const context = useMemo(
    () => ({
      gridPressList,
      setGridPressList,
    }),
    [gridPressList, setGridPressList],
  );

  return (
    <PressGridContext.Provider value={context}>
      {children}
    </PressGridContext.Provider>
  );
};
