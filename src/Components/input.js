import React from 'react';
import styled, { css } from "styled-components"

import COLOR from 'constant/colorCode';

const ACTIVE_STYLE = {
  'border': `1px solid ${COLOR.SINGUP_MAIN}`,
  'background': 'rgba(0,80,230,.1)',
  'color': COLOR.SINGUP_MAIN,
}

const InputWrap = styled.input`
  flex-grow : ${props => props.Fill ? '1' : ''};
  height: 44px;
  margin-bottom: 8px;
  padding: 0 15px;
  border: 1px solid rgba(154, 154, 154, 0.5);
  background : ${props => props.readOnly && 'rgba(100,100,100,.1);'};
  font-size: 12px;

  ${props => !props.readOnly && css`
    &:hover {
      ${ACTIVE_STYLE}
    }
    &:focus {
      ${ACTIVE_STYLE}
    }
  `}
`;

function Input({ ...props }) {
  return <InputWrap {...props}></InputWrap>
}

export default Input;