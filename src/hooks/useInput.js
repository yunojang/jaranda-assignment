import { useState } from 'react';

const useInput = (initialValue, validate) => {
  const [value, setValue] = useState(initialValue);
  
  const onInput = event => {
    setValue(event.target.value);
  }

  return {
    value, onInput
  }
};

export default useInput;
