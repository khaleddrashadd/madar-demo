import { useEffect } from 'react';
import { useLocation } from 'react-router';

const useResetOnUnmount = (cb) => {
  const { pathname } = useLocation();
  useEffect(() => {
    return () => {
      cb();
    };
  }, [pathname, cb]);
};

export default useResetOnUnmount;
