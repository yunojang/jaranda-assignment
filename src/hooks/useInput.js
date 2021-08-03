import { useState, useCallback } from 'react';

const useInput = (initialInput = null) => {
  const [input, setInput] = useState(initialInput);
  const handler = useCallback(e => {
    setInput(e.target.value);
  }, []);

  return [input, handler, setInput];
};

export default useInput;
