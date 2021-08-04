import { useState } from 'react';

const useInput = (initialValue, validate) => {
  const [value, setValue] = useState(initialValue);
  const [isCorrect, setCorrect] = useState(true);

  const onChange = event => {
    const { value } = event.target;

    if (typeof validate === 'function') {
      setCorrect(validate(value));
    }

    setValue(value);
  };

  return {
    value, onChange, isCorrect
  }
};

export default useInput;
