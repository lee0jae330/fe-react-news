import type { News } from '../types';

interface PressLogoProps {
  press: News['press'];
  logo: News['logo'];
  darkLogo: News['darkLogo'];
}

export const PressLogo = ({ press, logo, darkLogo }: PressLogoProps) => {
  const isDarkMode = false;
  return <img src={isDarkMode ? darkLogo : logo} alt={press} className="h-5" />;
};
