import React from 'react';
import styled from "styled-components"

const COLOR = {
  MAIN : '#0085FD'
}

const ACTIVE_STYLE = {
  'border' : `1px solid ${COLOR.MAIN}`,
  'background' : 'rgba(0,80,230,.1)',
  'color' : COLOR.MAIN,
}

const InputWrap = styled.input`
  height: 44px;
  margin-bottom: 8px;
  padding: 0 15px;
  border: 1px solid rgba(154, 154, 154, 0.5);;

  font-size: 12px;

  &:hover {
    ${ACTIVE_STYLE}
  }
  &:focus {
    outline: none;
    ${ACTIVE_STYLE}
  }
`;

function Input({children, ...props}) {
  return <InputWrap {...props}>{children}</InputWrap>
}

export default Input;