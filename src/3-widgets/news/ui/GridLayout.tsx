import { GridViewItem } from '@/4-features/news';

export const GridLayout = () => {
  const gridItem = Array.from({ length: 24 }, () => ({
    press: '쿠키뉴스',
    logo: `https://s.pstatic.net/static/newsstand/up/2025/0421/nsd111533869.png`,
    darkLogo: `https://s.pstatic.net/static/newsstand/up/2025/0421/nsd111533869.png`,
  }));
  return (
    <ul className="bg-border-default grid h-full w-full grid-cols-6 grid-rows-4 gap-0.25 p-0.25">
      {gridItem.map(({ press, logo, darkLogo }, index) => (
        <GridViewItem
          key={index}
          press={press}
          logo={logo}
          darkLogo={darkLogo}
        />
      ))}
    </ul>
  );
};
