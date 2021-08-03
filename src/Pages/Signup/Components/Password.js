import React from 'react';
import styled from 'styled-components';
import Input from 'Components/input';
import { BsCheck } from 'react-icons/bs';

const CHECK = ['숫자', '특수문자', '영문', '8자리 이상'];

const PwdCheck = styled.ul`
  display: flex;
  column-gap: 8px;
  margin-bottom: 8px;

  li {
    display: flex;
  }
`;

const BsChecks = styled(BsCheck)`
  color: red;
`;

function Password() {
  const renderCheck = () => {
    return CHECK.map((item, index) => (
      <li key={index}>
        <BsChecks />
        <span>{item}</span>
      </li>
    ));
  };

  return (
    <>
      <Input type="password" placeholder="비밀번호" />
      <PwdCheck>{renderCheck()}</PwdCheck>
      <Input type="password" placeholder="비밀번호 확인" />
    </>
  );
}

export default Password;
