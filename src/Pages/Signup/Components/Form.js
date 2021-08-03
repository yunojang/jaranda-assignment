import React from "react";
import styled from "styled-components";

import Password from './Password';
import Adress from './Adress';
import Card from './Card';
import Policy from './Policy';
import Input from 'Components/input';

import COLOR from 'constant/colorCode';


const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const Submit = styled.input.attrs({ type: 'submit' })`
  height: 44px;
  background : ${COLOR.SINGUP_MAIN};
  color: #fff;
  border : none;
  border-radius: 6px;
  font-size : 14px;
`;

function Form() {
  return (
    <Container>
      <Input
        type='text'
        placeholder='아이디'
      />
      <Password />
      <Adress />
      <Card />
      <Policy />
      <Submit 
        type='submit' 
        value='가입하기' 
      />
    </Container>
  )
}

export default Form;
