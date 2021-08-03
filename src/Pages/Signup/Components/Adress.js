import React from 'react';
import styled from 'styled-components';
import Button from './SignupButton';
import Input from 'Components/input';

const AdressContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchButton = styled(Button)`
  margin-left: 5px;
`;

function Adress() {
  return (
    <>
      <AdressContainer>
        <Input
          type='text'
          placeholder='주소'
          readOnly
          Fill
        />
        <SearchButton>주소 찾기</SearchButton>

      </AdressContainer>

      <Input type="text" placeholder="상세 주소" />
    </>
  );
}

export default Adress;
