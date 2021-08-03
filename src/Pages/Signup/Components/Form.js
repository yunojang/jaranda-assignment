import React from "react";
import styled from "styled-components";

import Password from './Password';
import Adress from './Adress';
import Card from './Card';
import Policy from './Policy';
import Input from 'Components/input';


const Container = styled.form`
  display: flex;
  flex-direction: column;
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
    </Container>
  )
}

export default Form;
