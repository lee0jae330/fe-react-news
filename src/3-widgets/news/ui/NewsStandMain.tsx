import { NewsStandTabBar } from './NewsStandTabBar';
import { RollingSection } from './RollingSection';

export const NewsStandMain = () => {
  return (
    <main className="flex flex-col">
      <RollingSection />
      <NewsStandTabBar />
    </main>
  );
};
