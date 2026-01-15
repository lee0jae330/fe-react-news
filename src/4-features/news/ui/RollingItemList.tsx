import { useEffect, useRef } from 'react';

import { RollingItem } from './RollingItem';

export const RollingItemList = () => {
  const currentItemRef = useRef<HTMLDivElement>(null);
  const nextItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!currentItemRef.current || !nextItemRef.current) {
      return;
    }

    nextItemRef.current.style.transform = 'translateY(48px)';
    setTimeout(() => {
      if (!currentItemRef.current || !nextItemRef.current) {
        return;
      }
      currentItemRef.current.style.transform = 'translateY(-48px)';
      nextItemRef.current.style.transform = 'translateY(0)';
    }, 1000);
  }, []);

  return (
    <div className="bg-surface-alt border-default relative h-12 flex-1 overflow-hidden px-4 py-[13.5px]">
      <RollingItem ref={currentItemRef} />
      <RollingItem ref={nextItemRef} />
    </div>
  );
};
