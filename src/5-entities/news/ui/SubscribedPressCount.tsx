import { Badge } from '@/6-shared/ui';

interface SubscribedPressCountProps {
  count: number;
  isActive: boolean;
}

export const SubscribedPressCount = ({
  count,
  isActive,
}: SubscribedPressCountProps) => {
  return <Badge text={count.toString()} isActive={isActive} />;
};
