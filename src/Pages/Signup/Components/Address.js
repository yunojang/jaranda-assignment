import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './SignupButton';
import Input from 'Components/input';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

const AdressContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchButton = styled(Button)`
  margin-left: 5px;
`;

function Adress(props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPostCode = event => {
    event.preventDefault();

    setIsPopupOpen(true);
  };

  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <AdressContainer>
        <Input
          type="text"
          value={props.value}
          readOnly
          Fill
        />
        <SearchButton onClick={openPostCode}>주소 찾기</SearchButton>
        <div id="popupDom">
          {isPopupOpen && (
            <PopupDom>
              <PopupPostCode
                setValue={props.setValue}
                onClose={closePostCode}
              />
            </PopupDom>
          )}
        </div>
      </AdressContainer>

      <Input type="text" placeholder="상세 주소" />
    </>
  );
}

export default Adress;
