import React from 'react';
import styled from 'styled-components';

import Form from './Components/Form';

const Container = styled.div`
  max-width: 480px;
  margin: auto;
  padding: 48px 15px;
`;

const Title = styled.h1 `
  margin-bottom: 40px;

  font-size: 24px;
  font-weight: normal;
  color: #4a4a4a;
  text-align: center;
`;

function Signup() {
  return (
    <Container>
      <Title>회원가입</Title>
      <Form />
    </Container>
  );
}

export default Signup;
