import React from 'react';
import styled from 'styled-components';

const ErrorWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 250px;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    margin-top: 20px;
    text-align: center;
    font-size: 24px;
    line-height: 1.5;
    color: #4a4a4a;
  }
`;

const Error = () => {
  return (
    <>
      <ErrorWrap>
        <ErrorContainer>
          <img src="/images/warning.svg" width="200px" alt="error" />
          <p>
            죄송합니다. <br /> 이 페이지에는 접근 권한이 없습니다.
          </p>
        </ErrorContainer>
      </ErrorWrap>
    </>
  );
};

export default Error;
