import React, { useState } from 'react';
import Input from 'Components/input';
import styled from 'styled-components';
import Button from './SignupButton';
import Modal from 'Components/modal';

const InputList = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;

  input {
    max-width: calc(100% / 5);
  }
`;

const Title = styled.h1`
  font-size: 15px;
  margin-bottom: 10px;
  color: #4a4a4a;
`;

function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardNum, setCardNum] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const { first, second, third, fourth } = cardNum;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    onReset();
  };

  const finishModal = () => {
    setIsModalOpen(false);
  };

  const handleCardNum = e => {
    const { value, name } = e.target;
    setCardNum({
      ...cardNum,
      [name]: value,
    });
  };
  //카드 넘버 초기화 함수
  const onReset = () => {
    setCardNum({
      ...cardNum,
      first: '',
      second: '',
      third: '',
      fourth: '',
    });
  };

  return (
    <>
      <Title>카드 번호</Title>
      <InputList>
        <Input readOnly value={cardNum.first} />
        <Input readOnly value={cardNum.second} />
        <Input readOnly value={cardNum.third} />
        <Input readOnly value={cardNum.fourth} />
        <Button onClick={openModal}>카드 입력</Button>
      </InputList>
      <Modal show={isModalOpen} toggle={closeModal} width={'480px'}>
        <h1>카드번호를 입력하세요.</h1>
        <div>
          <Input name="first" onChange={handleCardNum} value={first} />
          <Input name="second" onChange={handleCardNum} value={second} />
          <Input name="third" onChange={handleCardNum} value={third} />
          <Input name="fourth" onChange={handleCardNum} value={fourth} />
        </div>
        <Button onClick={closeModal}>취소</Button>
        <Button onClick={finishModal}>확인</Button>
      </Modal>
    </>
  );
}

export default Card;
