import React from 'react';
import styled from 'styled-components'; 
import COLOR from 'constant/colorCode';

const ButtonWrap = styled.button`
height: 44px;
border-radius: 5px;
background: ${COLOR.SINGUP_MAIN};
color: white;
font-size: 14px;
`

export default function Button({children, ...props}) {
  return <ButtonWrap {...props}>{children}</ButtonWrap>
}