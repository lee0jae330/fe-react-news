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

export const isGridViewPressList = (
  data: unknown,
): data is GridViewPressList => {
  if (!data || typeof data !== 'object') {
    return false;
  }

  const obj = data as Partial<GridViewPressList>;
  if (!Array.isArray(obj.presses)) {
    return false;
  }

  for (const press of obj.presses) {
    if (
      typeof press !== 'object' ||
      press === null ||
      typeof press.pressId !== 'string' ||
      typeof press.pressName !== 'string' ||
      typeof press.logo !== 'string' ||
      typeof press.darkLogo !== 'string' ||
      typeof press.isSubscribed !== 'boolean'
    ) {
      return false;
    }
  }

  return true;
};
