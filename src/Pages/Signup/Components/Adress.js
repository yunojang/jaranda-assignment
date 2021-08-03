import React, { useState } from 'react';
import styled from 'styled-components';
import Input from 'Components/input';
import Button from 'Components/button';
import COLOR from 'constant/colorCode';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

const AdressContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputAddress = styled(Input)`
  width: 60%;
  ::placeholder {
    text-align: center;
  }
`;

const ButtonAddress = styled(Button)`
  width: 38%;
  height: 44px;
  border: none;
  background: ${COLOR.SINGUP_MAIN};
  color: #fff;
  font-size: 12px;

  &:hover {
    background-color: ${COLOR.SINGUP_MAIN};
  }
`;

function Adress() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  const closePostCode = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <AdressContainer>
        <InputAddress type="text" placeholder="주소" readOnly />
        <ButtonAddress type="button" onClick={openPostCode}>
          주소 찾기
        </ButtonAddress>
        <div id="popupDom">
          {isPopupOpen && (
            <PopupDom>
              <PopupPostCode onClose={closePostCode} />
            </PopupDom>
          )}
        </div>
      </AdressContainer>

      <Input type="text" placeholder="상세 주소" />
    </>
  );
}

export default Adress;
