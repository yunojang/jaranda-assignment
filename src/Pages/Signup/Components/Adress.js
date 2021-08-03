import React from 'react';
import Input from 'Components/input';
import styled from 'styled-components';

const AdressContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Adress() {
  return (
    <>
      <AdressContainer>
        <Input
          type='text'
          placeholder='주소'
          readOnly
        />
        <button>주소 찾기</button>
      </AdressContainer>

      <Input 
        type='text'
        placeholder='상세 주소'
      />
    </>
  )
}

export default Adress;
