interface PressLogoProps {
  press: Schema.Press['press'];
  logo: Schema.Press['logo'];
  darkLogo: Schema.Press['darkLogo'];
}

export const PressLogo = ({ press, logo, darkLogo }: PressLogoProps) => {
  const isDarkMode = false;
  return <img src={isDarkMode ? darkLogo : logo} alt={press} className="h-5" />;
};
