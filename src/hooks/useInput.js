import { useState } from 'react';

const useInput = (initialValue, validate) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setValid] = useState(true);

  const onInput = event => {
    const { value } = event.target;

    if (typeof validate === 'function') {
      setValid(validate(value));
    }

    setValue(value);
  };

  return {
    value,
    onInput,
    isValid,
  };
};

export default useInput;
