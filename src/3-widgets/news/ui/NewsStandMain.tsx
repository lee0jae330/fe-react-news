import { PressSection } from './PressSection';
import { RollingSection } from './RollingSection';

export const NewsStandMain = () => {
  return (
    <main className="flex flex-col">
      <RollingSection />
      <PressSection />
    </main>
  );
};
