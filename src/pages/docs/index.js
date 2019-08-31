import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default () => {
  useEffect(() => {
    navigate('/docs/get-started/', { replace: true });
  }, []);
  return null;
};
