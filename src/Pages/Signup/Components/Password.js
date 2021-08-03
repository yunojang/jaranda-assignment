import React from "react";
import Input from 'Components/input';
import styled from "styled-components";
import { AiOutlineCheck as Check } from 'react-icons/ai';

const CHECK = ['숫자', '특수문자', '영문', '8자리 이상'];

const CheckList = styled.ul`
  display: flex;
  margin-bottom: 25px;
  li {
    font-size: 15px;
  }
  li + li {
    margin-left: 10px;
  }
  span {
    color: #aaa;
  }
`;

const CheckIcon = styled(Check)`
  margin-right: 2px;
  color: #aaa;
  ${props => props.checked && 'color : red'}
`;

function Password() {

  const renderCheck = () => {
    return CHECK.map((item, index) => <li key={index}><CheckIcon checked={false}/><span>{item}</span></li>)
  }

  return (
    <>
      <Input
        type='password'
        placeholder='비밀번호'
      />
      <CheckList>
        {renderCheck()}
      </CheckList>
      <Input
        type='password'
        placeholder='비밀번호 확인'
      />
    </>
  )
}

export default Password;