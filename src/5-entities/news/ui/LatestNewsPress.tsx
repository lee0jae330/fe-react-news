interface LatestNewsPressProps {
  pressName: Schema.Press['press'];
}

export const LatestNewsPress = ({ pressName }: LatestNewsPressProps) => {
  return <span className="display-bold-14 text-text-strong">{pressName}</span>;
};
