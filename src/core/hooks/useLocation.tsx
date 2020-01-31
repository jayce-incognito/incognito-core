import * as React from 'react';
import { useLocation } from 'react-router-dom';

export const useLocationEffect = (): any => {
  const { pathname } = useLocation();
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  React.useEffect(() => {
    scrollToTop();
  }, [pathname]);
  return [];
};
