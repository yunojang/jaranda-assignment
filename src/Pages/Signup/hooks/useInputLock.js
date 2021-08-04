import { useState } from 'react';

const useInput = (initialValue, validate) => {
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    const { value } = event.target;

    if (typeof validate === 'function') {
      if (value==='' || validate(value)) {
        setValue(value);
      }
    }
  };

  return {
    value, onChange
  }
};

export default useInput;
