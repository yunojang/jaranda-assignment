import React from 'react';
import styled from 'styled-components';
import Input from 'Components/input';
import { AiOutlineCheck as Check } from 'react-icons/ai';

const CHECK = ['숫자', '특수문자', '영문', '8자리 이상'];

const CheckList = styled.ul`
  display: flex;
  margin-bottom: 25px;
  font-size: 15px;
  column-gap: 10px;
  
  span {
    color: #aaa;
  }
`;

const CheckIcon = styled(Check)`
  margin-right: 2px;
  color: #aaa;
  ${props => props.checked && 'color : red'}
`;

function Password(pwdInput) {

  const renderCheck = () => {
    return CHECK.map((item, index) => <li key={index}><CheckIcon checked={false}/><span>{item}</span></li>)
  }

  return (
    <>
      <Input
        required
        type='password'
        placeholder='비밀번호'
        {...pwdInput}
      />
      <CheckList>
        {renderCheck()}
      </CheckList>
      <Input
        required
        type='password'
        placeholder='비밀번호 확인'
      />
    </>
  );
}

export default Password;
