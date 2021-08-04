import React from 'react';
import styled from 'styled-components'; 
import COLOR from 'constant/colorCode';

const ButtonWrap = styled.input.attrs({type:'button'})`
height: 44px;
border-radius: 5px;
padding: 0 ${props => props.wide ? '25px' : '10px'};
background: ${COLOR.SINGUP_MAIN};
color: white;
font-size: 14px;
font-weight: bold;
`

export default function Button({children, ...props}) {
  return <ButtonWrap {...props} value={children}></ButtonWrap>
}