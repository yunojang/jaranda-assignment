import React from "react";
import styled from "styled-components";

const AlertWrap = styled.span`
  ${props => !props.show && 'display:none'};
  font-size: 11px;
  color: red;
`;

function Alert({ children,...props }) {
  return <AlertWrap {...props}>{children}</AlertWrap>
}

export default Alert;