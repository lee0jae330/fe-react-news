interface LatesNewsTitleProps {
  title: Schema.Press['mainTitle'];
}

export const LatesNewsTitle = ({ title }: LatesNewsTitleProps) => {
  return <span className="available-medium-14 text-text-default">{title}</span>;
};
