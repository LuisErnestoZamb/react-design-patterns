import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDatasource = getResourceFunc => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getResourceFunc();
      setResource(result);
    })();
  }, [getResourceFunc]);

  return resource;
}
