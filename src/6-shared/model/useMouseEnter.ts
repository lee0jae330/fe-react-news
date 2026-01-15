import { useCallback, useState } from 'react';

export const useMouseEnter = () => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setIsMouseEnter(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsMouseEnter(false);
  }, []);

  return {
    isMouseEnter,
    handleMouseEnter,
    handleMouseLeave,
  };
};
