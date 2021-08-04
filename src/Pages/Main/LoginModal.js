import React from 'react';
import styled from 'styled-components';
import Modal from '../../Components/modal';
import Button from '../../Components/button';
import useInput from '../../hooks/useInput';
import Input from 'Components/input';

const FormWrap = styled.form`
  padding: 2rem;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  justify-content: center;
  text-align: center;
`;
const Label = styled.label`
  display: block;
  padding-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 30px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-around;
`;

function LoginModal({ show, toggle, setIsLoggedIn, onLogin }) {
  const userName = useInput('');
  const password = useInput('');

  const onSubmitForm = e => {
    e.preventDefault();
    try {
      onLogin({ userName: userName.value, password: password.value });
      setIsLoggedIn(true);
    } catch (e) {
      alert('Failed to login');
    }
  };

  return (
    <Modal Small show={show} toggle={toggle}>
      <FormWrap onSubmit={onSubmitForm}>
        <Label>로그인</Label>
        <Body>
          <Input
            type="text"
            placeholder="이름을 입력하세요."
            name="userName"
            required
            {...userName}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요."
            name="password"
            required
            {...password}
          />
        </Body>
        <Footer>
          <Button type="submit" onClick={toggle}>
            로그인
          </Button>
          <Button type="button" onClick={toggle}>
            닫기
          </Button>
        </Footer>
      </FormWrap>
    </Modal>
  );
}
export default LoginModal;
