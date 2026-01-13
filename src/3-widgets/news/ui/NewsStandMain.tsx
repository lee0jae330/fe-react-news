import { NewsStandTabBar } from './NewsStandTabBar';
import { PressSection } from './PressSection';
import { RollingSection } from './RollingSection';

export const NewsStandMain = () => {
  return (
    <main className="flex flex-col">
      <RollingSection />
      <NewsStandTabBar />
      <PressSection />
    </main>
  );
};
