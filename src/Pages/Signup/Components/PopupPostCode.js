import React from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import { GiCancel } from 'react-icons/gi';

const PostWrap = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 18px;
    right: 40px;

    cursor: pointer;
  }
`;

const PopupPostCode = props => {
  const handlePostCode = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? `(${extraAddress})` : '';
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
    props.onClose();
  };

  const postCodeStyle = {
    position: 'absolute',
    right: '1px',
    width: '480px',
    height: '510px',
    padding: '7px',
  };

  return (
    <PostWrap>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
      <button
        type="button"
        onClick={() => {
          props.onClose();
        }}
        className="postCode_btn"
      >
        <GiCancel size="24" />
      </button>
    </PostWrap>
  );
};

export default PopupPostCode;
