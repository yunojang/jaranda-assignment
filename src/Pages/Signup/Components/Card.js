import React, { useState } from 'react';
import Input from 'Components/input';
import styled from 'styled-components';

import Button from './SignupButton';
import CardModal from './CardModal';

const InputList = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;

  input {
    max-width: calc(100% / 5 - 5px);
  }
`;

const Title = styled.h1`
  font-size: 15px;
  margin-bottom: 10px;
  color: #4a4a4a;
`;

function Card() {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState('');

  const openModal = () => {
    setShow(true);
  }

  const closeModal = () => {
     setShow(false);
  }

  const resetNumber = () => {
    setNumber('');
  }

  const renderInputs = () => {
    const inputs = [];

    for (let i = 0; i < 4; i++) {
      const start = i * 4;
      const sliced = number.slice(start, start + 4);

      const input = <Input key={i} value={sliced} readOnly/>

      inputs.push(input)
    }

    return inputs
  }

  return (
    <>
      <Title>카드 번호</Title>

      <InputList>
        {renderInputs()}
        <Button onClick={() => { openModal(); resetNumber(); }}>카드 입력</Button>
      </InputList>

      <CardModal
        show={show}
        closeModal={closeModal}
        setNumber = {setNumber}
        resetNumber = {resetNumber}
      />
    </>
  );
}

export default Card;
