import React from "react";
import Modal from "Components/modal"
import Input from "Components/input";
import styled from "styled-components";
import Button from './SignupButton';
import useInput from "hooks/useInput";
import { validCardSection } from "utils/validate";

const Title = styled.h1`
  margin-bottom: 20px;
`;

const InputList = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 4px;
  margin-bottom: 10px;

  input {
    width: 100px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;
`;

function CardModal({ show, close, setNumber, resetNumber }) {
  const inputs = [];
  inputs[0] = useInput('',validCardSection);
  inputs[1] = useInput('',validCardSection);
  inputs[2] = useInput('',validCardSection);
  inputs[3] = useInput('',validCardSection);

  const resetInputs = () => {
    inputs.forEach(input=> input.setValue(''));
  }

  const onConfirm = () => {
    const unionNumber = inputs.reduce((union,{value})=>`${union}${value.padEnd(4,' ')}`,'');

    setNumber(unionNumber);
    
    resetInputs();
    close();
  }

  const onCancle = () => {
    resetNumber();
    resetInputs();
    close();
  }

  const renderInputs = () => {
    return inputs.map((input,index)=> <Input key={index} {...input}/>);
  }

  return (
    <Modal show={show} width={'auto'} height={'auto'}>
      <Title>
        카드 번호 입력
      </Title>

      <InputList>
        {renderInputs()}
      </InputList>

      <ButtonContainer>
        <Button wide onClick={onCancle}>취소</Button>
        <Button wide onClick={onConfirm}>확인</Button>
      </ButtonContainer>

    </Modal>
  )
}

export default CardModal;