import { NextPageButton, PreviousPageButton } from '@/4-features/news';

import { GridLayout } from './GridLayout';

export const PressSection = () => {
  return (
    <section className="relative mx-auto mt-6 h-[388px] w-[930px]">
      <GridLayout />
      <PreviousPageButton />
      <NextPageButton />
    </section>
  );
};
