import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './SignupButton';
import Input from 'Components/input';
import PopupDom from './daum/PopupDom';
import PopupPostCode from './daum/PopupPostCode';

const AdressContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchButton = styled(Button)`
  margin-left: 5px;
`;

function Adress({ setValue }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [roadAddress, setRoadAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  const openPostCode = event => {
    event.preventDefault();

    setIsPopupOpen(true);
  };

  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  const onDetailChange = event => {
    setDetailAddress(event.target.value);
    setValue(`${roadAddress} ${event.target.value}`)
  }

  return (
    <>
      <AdressContainer>
        <Input
          type="text"
          value={roadAddress}
          readOnly
          Fill
        />
        <SearchButton onClick={openPostCode}>주소 찾기</SearchButton>
        <div id="popupDom">
          {isPopupOpen && (
            <PopupDom>
              <PopupPostCode
                detailAddress={detailAddress}
                setValue={setValue}
                setRoadAddress={setRoadAddress}
                onClose={closePostCode}
              />
            </PopupDom>
          )}
        </div>
      </AdressContainer>

      <Input
        type="text"
        placeholder="상세 주소"
        value = {detailAddress}
        onChange = {onDetailChange}
      />
    </>
  );
}

export default Adress;
