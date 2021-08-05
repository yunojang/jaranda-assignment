import React from "react";
import styled from "styled-components";

const AlertWrap = styled.span`
  ${props => !props.show && 'display:none'};
  ${props => props.big && 'font-weight:bold'};
  font-size: ${props=>props.big ? '15px' : '11px'};
  margin-bottom: 6px;
  color: red;
`;

function Alert({ children,...props }) {
  return <AlertWrap {...props}>{children}</AlertWrap>
}

export default Alert;