import { useCallback, useState } from 'react';

import { type News, PressLogo } from '@/5-entities/news';

import { PRESS_SUBSCRIBE_BUTTON_BACKGROUND_COLOR } from '../constants';

import { PressSubscribeToggle } from './PressSubscribeToggle';

interface GridViewItemProps {
  press?: News['press'];
  logo?: News['logo'];
  darkLogo?: News['darkLogo'];
}

export const GridViewItem = ({ press, logo, darkLogo }: GridViewItemProps) => {
  const isPress = press && logo && darkLogo;

  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return (
    <li
      className={`bg-surface-default col-span-1 row-span-1 flex items-center justify-center ${isPress && 'hover:bg-surface-alt'}`}
      onMouseEnter={isPress ? handleMouseEnter : undefined}
      onMouseLeave={isPress ? handleMouseLeave : undefined}
    >
      {isPress && !isHover && (
        <PressLogo press={press} logo={logo} darkLogo={darkLogo} />
      )}
      {isHover && (
        <PressSubscribeToggle
          isSubscribed={false}
          hasText={true}
          subscribeBackgroundColor={
            PRESS_SUBSCRIBE_BUTTON_BACKGROUND_COLOR.DEFAULT
          }
        />
      )}
    </li>
  );
};
