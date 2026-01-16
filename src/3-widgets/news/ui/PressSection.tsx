import { PressGridProvider } from '@/5-entities/news';

import { PressTabProvider } from '../model';

import { NewsStandContent } from './NewsStandContent';
import { NewsStandTabBar } from './NewsStandTabBar';

export const PressSection = () => {
  return (
    <PressTabProvider>
      <NewsStandTabBar />
      <PressGridProvider>
        <NewsStandContent />
      </PressGridProvider>
    </PressTabProvider>
  );
};
