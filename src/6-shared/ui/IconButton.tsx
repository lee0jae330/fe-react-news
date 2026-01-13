interface IconButtonProps {
  className?: string;
  onClick: () => void;
  icon: React.ReactNode;
}

export const IconButton = ({ className, onClick, icon }: IconButtonProps) => {
  return (
    <button className={`${className} cursor-pointer`} onClick={onClick}>
      {icon}
    </button>
  );
};
