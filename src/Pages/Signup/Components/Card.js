import React from 'react';
import Input from 'Components/input';
import styled from 'styled-components';
import Button from './SignupButton';

const InputList = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;

  input {
    max-width: calc(100%/5);
  }
`;

const Title = styled.h1`
  font-size: 15px;
  margin-bottom: 10px;
  color: #4a4a4a;
`;


function Card() {
  return (
    <>
      <Title>카드 번호</Title>
      <InputList>
        <Input readOnly />
        <Input readOnly />
        <Input readOnly />
        <Input readOnly />
        <Button>카드 입력</Button>
      </InputList>
    </>
  )
}

export default Card;
