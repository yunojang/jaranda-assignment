import Modal from 'Components/modal';
import SelectRole from 'Components/selectRole';
import useInput from 'hooks/useInput';
import React, { useState } from 'react';
import userData from 'store/userData';
import styled from 'styled-components';

const OptionalAccountWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 864px;
  margin: auto;
`;
const OptionalAccountContainer = styled.div`
  max-width: 480px;
  margin: 48px 0;
  padding: 0 15px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
  line-height: 1;
  font-size: 24px;
  color: #4a4a4a;
  margin-top: 10px;
`;

const InputContainer = styled.div`
  width: 350px;
  margin-bottom: 30px;
  input {
    display: block;
    height: 38px;
    width: 90%;
    margin-bottom: 8px;
    padding: 0 15px;
    border: 1px solid rgba(154, 154, 154, 0.5);
    border-radius: 2px;
    backround-color: #fff;
    font-size: 12px;
  }
`;

const SubmitButton = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;

  height: 38px;
  border-radius: 3px;
  background-color: #0085fd;
  color: #fff;
  text-align: center;
  line-height: 2;
  width: 100%;
`;

const CloseImg = styled.img`
  width: 16px;
  height: px;

  position: absolute;

  right: 20px;
  top: 20px;
`;

const OptionalAccount = ({ lastId, setUsers, show, toggle }) => {
  const userName = useInput('');
  const password = useInput('');
  const name = useInput('');
  const [role, setRole] = useState(0);
  const onSubmit = () => {
    const newAccount = {
      id: lastId,
      userName,
      address: '',
      cardNumber: '',
      password,
      role,
      isAdmin: 0,
    };
    userData.push(newAccount);
    setUsers(prev => [...prev, newAccount]);
  };

  return (
    <Modal show={show} height="470px" toggle={toggle}>
      <OptionalAccountWrap>
        <OptionalAccountContainer>
          <CloseImg src="images/close.svg" alt="close" onClick={toggle} />
          <Header>사용자 추가</Header>
          <InputContainer>
            <input {...name} placeholder="이름" />
            <input
              {...userName}
              type="id"
              placeholder="아이디"
            />
            <input
              {...password}
              placeholder="비밀번호"
            />
            <SelectRole currentRoleId={role} callback={setRole} />
          </InputContainer>
          <SubmitButton onClick={onSubmit}>생성</SubmitButton>
        </OptionalAccountContainer>
      </OptionalAccountWrap>
    </Modal>
  );
};

export default OptionalAccount;
