import React from 'react';
import styled from 'styled-components';

const ErrorWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 250px;
`;

const ErrorContainer = styled.div`
  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Error = () => {
  return (
    <>
      <ErrorWrap>
        <ErrorContainer>
          <img src="/images/error.png" alt="error" />
          <p>접근 권한이 없습니다.</p>
        </ErrorContainer>
      </ErrorWrap>
    </>
  );
};

export default Error;
