import { PressLogo } from '@/5-entities/news';

import { useMouseEnter } from '@/6-shared/model';

import { PRESS_SUBSCRIBE_BUTTON_BACKGROUND_COLOR } from '../constants';

import { PressSubscribeToggle } from './PressSubscribeToggle';

interface GridViewItemProps {
  press?: Schema.Press['press'];
  logo?: Schema.Press['logo'];
  darkLogo?: Schema.Press['darkLogo'];
}

export const GridViewItem = ({ press, logo, darkLogo }: GridViewItemProps) => {
  const isPress = press && logo && darkLogo;

  const { isMouseEnter, handleMouseEnter, handleMouseLeave } = useMouseEnter();

  return (
    <li
      className={`bg-surface-default col-span-1 row-span-1 flex items-center justify-center ${isPress && 'hover:bg-surface-alt'}`}
      onMouseEnter={isPress ? handleMouseEnter : undefined}
      onMouseLeave={isPress ? handleMouseLeave : undefined}
    >
      {isPress && !isMouseEnter && (
        <PressLogo press={press} logo={logo} darkLogo={darkLogo} />
      )}
      {isMouseEnter && (
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
