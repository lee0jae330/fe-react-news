export interface GridViewPressList {
  presses: GridViewPress[];
}

interface GridViewPress {
  pressId: Schema.Press['press'];
  pressName: Schema.Press['press'];
  logo: Schema.Press['logo'];
  darkLogo: Schema.Press['darkLogo'];
  isSubscribed: boolean;
}
