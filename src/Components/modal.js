import React from 'react';
import styled from 'styled-components';

const ModalWrap = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Container = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  z-index: 10;
`;

const OutLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

function Modal({show,width,height,toggle,children}){
  return (
    <ModalWrap show={show}>
      <Container height={height} width={width}>{children}</Container>
      <OutLayer onClick={toggle}></OutLayer>
    </ModalWrap>
  );
}

export default Modal;
