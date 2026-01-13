import { PressTabGroup } from './PressTabGroup';
import { ViewModeTabGroup } from './ViewModeTabGroup';

export const NewsStandTabBar = () => {
  return (
    <div className="mt-8 flex items-center justify-between">
      <PressTabGroup />
      <ViewModeTabGroup />
    </div>
  );
};
