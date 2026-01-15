import { PressLogo } from '@/5-entities/news';

import { useMouseEnter } from '@/6-shared/model';

import { PRESS_SUBSCRIBE_BUTTON_BACKGROUND_COLOR } from '../constants';

import { PressSubscribeToggle } from './PressSubscribeToggle';

interface GridViewItemProps {
  pressName?: Schema.Press['press'];
  logo?: Schema.Press['logo'];
  darkLogo?: Schema.Press['darkLogo'];
  isSubscribed: boolean;
}

export const GridViewItem = ({
  pressName,
  logo,
  darkLogo,
  isSubscribed,
}: GridViewItemProps) => {
  const isPress = pressName && logo && darkLogo;

  const { isMouseEnter, handleMouseEnter, handleMouseLeave } = useMouseEnter();

  return (
    <li
      className={`bg-surface-default col-span-1 row-span-1 flex items-center justify-center ${isPress && 'hover:bg-surface-alt'}`}
      onMouseEnter={isPress ? handleMouseEnter : undefined}
      onMouseLeave={isPress ? handleMouseLeave : undefined}
    >
      {isPress && !isMouseEnter && (
        <PressLogo press={pressName} logo={logo} darkLogo={darkLogo} />
      )}
      {isMouseEnter && (
        <PressSubscribeToggle
          isSubscribed={isSubscribed}
          hasText={true}
          subscribeBackgroundColor={
            PRESS_SUBSCRIBE_BUTTON_BACKGROUND_COLOR.DEFAULT
          }
        />
      )}
    </li>
  );
};
