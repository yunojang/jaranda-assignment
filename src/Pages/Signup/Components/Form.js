import React from "react";
import styled from "styled-components";

import Password from './Password';
import Address from './Address';
import Card from './Card';
import Policy from './Policy';
import Input from 'Components/input';

import COLOR from 'constant/colorCode';
import useInput from "hooks/useInput";
import { validPassword } from "utils/validate";

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
  font-size : 17px;
`;

function Form() {
  const idInput = useInput('');
  const pwdInput = useInput('',validPassword);
  const addressInput = useInput('');

  const onSubmit = event => {
    event.preventDefault();

    const formData = {
      id : idInput.value,
      password : pwdInput.value,
    }

    console.log(formData);
  }

  return (
    <Container onSubmit={onSubmit}>
      <Input
        required
        type='text'
        placeholder='아이디'
        {...idInput}
      />
      <Password 
        {...pwdInput}
      />
      <Address 
        {...addressInput}
      />
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
