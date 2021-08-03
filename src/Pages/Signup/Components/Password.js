import React from "react";
import Input from 'Components/input';
import styled from "styled-components";

const CHECK = ['숫자', '특수문자', '영문', '8자리 이상'];

const CheckList = styled.ul`
  display: flex;
  margin-bottom: 25px;
  padding-left: 5px;
  li {
    color: #aaa;
    margin-right: 10px;
  }
`;

function Password() {
  
  const renderCheck = () => {
    return CHECK.map((item,index)=> <li key={index}>{item}</li>)
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