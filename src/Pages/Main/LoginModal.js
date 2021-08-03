import React from 'react';
import styled from 'styled-components'
import Modal from '../../Components/modal'
import Button from '../../Components/button'
import useInput from '../../hooks/useInput'

const FormWrap = styled.form` 
  padding: 2rem;
`
const Body = styled.div`
 	margin: 0;
 	margin-bottom: 1rem;
  justify-content: center;
	text-align: center;
`
const Label = styled.label`
  display: block;
  padding-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
	font-size: 30px;
`
const Input = styled.input`
	font-size: 1rem;
  border: none;
  border-bottom: 1px solid #ced4da;
  padding-bottom: 0.5rem;
  outline: none;
  width: 90%;
  &:focus {
    border-bottom: 1px solid #868e96;
  }
  & + & {
    margin-top: 1rem;
  }
`;
const Footer = styled.div`
  display:flex;
  justify-content:space-around;
`;

function LoginModal({ show,toggle,setIsLoggedIn }) {
  const id = useInput('');
  const password = useInput('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    console.log(id,password);
  }

  return (
    <Modal 
      Small
      show={show}
      toggle={toggle}
    >
      <FormWrap onSubmit={onSubmitForm}>
        <Label>
          로그인
        </Label>
        <Body>
          <Input
            type="text"
            placeholder="아이디를 입력하세요."
            name="id"
            required
            {...id}
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
          <Button
            type="submit"
            onClick={toggle}
          >
            로그인
          </Button>
          <Button
            type="button"
            onClick={toggle}
          >
            닫기
          </Button>
        </Footer>
      </FormWrap>
    </Modal>
  )
}
export default LoginModal;