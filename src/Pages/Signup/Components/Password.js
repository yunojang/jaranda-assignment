import React from "react";
import Input from 'Components/input';

const CHECK = ['숫자', '특수문자', '영문', '8자리 이상'];

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
      <ul>
        {renderCheck()}
      </ul>
      <Input
        type='password'
        placeholder='비밀번호 확인'
      />
    </>
  )
}

export default Password;