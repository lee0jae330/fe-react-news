import { GridViewItem } from '@/4-features/news';

import type { GridViewPressList } from '@/5-entities/news';

interface GridLayoutProps {
  presses: GridViewPressList['presses'];
}

export const GridLayout = ({ presses }: GridLayoutProps) => {
  return (
    <ul className="bg-border-default grid h-full w-full grid-cols-6 grid-rows-4 gap-0.25 p-0.25">
      {presses.map(({ pressId, pressName, logo, darkLogo, isSubscribed }) => (
        <GridViewItem
          key={pressId}
          pressName={pressName}
          logo={logo}
          darkLogo={darkLogo}
          isSubscribed={isSubscribed}
        />
      ))}
    </ul>
  );
};
