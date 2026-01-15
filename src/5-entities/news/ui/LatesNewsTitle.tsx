interface LatesNewsTitleProps {
  title: Schema.Press['mainTitle'];
}

export const LatesNewsTitle = ({ title }: LatesNewsTitleProps) => {
  return (
    <span className="available-medium-14 text-text-default hover:hover-medium-14 cursor-pointer truncate">
      {title}
    </span>
  );
};
