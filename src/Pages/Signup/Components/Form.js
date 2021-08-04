import React, { useState } from "react";
import styled from "styled-components";

import Password from './Password';
import Address from './Address';
import Card from './Card';
import Policy from './Policy';
import Input from 'Components/input';
import Alert from "Components/inputAlert";
import { userListStorage } from "store";

import COLOR from 'constant/colorCode';
import useInput from "hooks/useInput";
import { validPassword, validCardNumber, existUsername } from "utils/validate";
import { useHistory } from "react-router";

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const Submit = styled.input.attrs({ type: 'submit' })`
  height: 44px;
  background : ${COLOR.SINGUP_MAIN};
  color: #fff;
  border : none;
  border-radius: 6px;
  font-size : 17px;
`;

function Form() {
  const history = useHistory();
  const id = useInput('');
  const password = useInput('');
  const [address, setAddress] = useState('');
  const [card, setCard] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showIdAlert, setIdAlert] = useState(false);

  const getLastId = () => {
    const list = userListStorage.load();
    return Math.max(...list.map(item => item.id))
  }

  const onSubmit = event => {
    event.preventDefault();

    const { value: idValue } = id;
    const { value: pwdValue } = password;

    if (existUsername(idValue)) {
      setIdAlert(true);
      return;
    }
    else {
      setIdAlert(false);
    }

    if (!validPassword(pwdValue) || !validCardNumber(card) || address.trim() === '') {
      setShowAlert(true);
      return;
    }

    setShowAlert(false);

    const formData = {
      id: getLastId() + 1,
      userName: idValue,
      password: pwdValue,
      address: address,
      cardNumber: card,
      accessMenus: [],
      isAdmin: 0,
    }

    userListStorage.push(formData);
    history.push('/')
  }

  return (
    <Container onSubmit={onSubmit}>
      <Input
        required
        type='text'
        placeholder='아이디'
        {...id}
      />
      <Alert show={showIdAlert}>존재하는 아이디 입니다.</Alert>

      <Password
        {...password}
      />

      <Address
        value={address}
        setValue={setAddress}
      />

      <Card
        value={card}
        setValue={setCard}
      />

      <Policy />

      <Alert show={showAlert} big>올바른 값을 모두 입력해주세요</Alert>
      <Submit
        type='submit'
        value='가입하기'
      />

    </Container>
  )
}

export default Form;
