import { useRouter } from '@tanstack/react-router';
import { useEffect } from 'react';

const useResetOnUnmount = (cb) => {
  const {
    state: {
      location: { pathname },
    },
  } = useRouter();
  useEffect(() => {
    return () => {
      cb();
    };
  }, [pathname, cb]);
};

export default useResetOnUnmount;
