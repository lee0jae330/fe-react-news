interface BadgeProps {
  text: string;
  isActive?: boolean;
}

export const Badge = ({ text, isActive = false }: BadgeProps) => {
  return (
    <div
      className={`display-medium-12 rounded-100 flex h-5 w-5 items-center justify-center ${isActive ? 'bg-surface-brand-default text-text-white-default' : 'bg-surface-brand-alt text-text-white-weak'}`}
    >
      {text}
    </div>
  );
};
