import React from 'react';
import styled from 'styled-components'
import Modal from '../../Components/modal'
import Button from '../../Components/button'

const FormWrap = styled.form`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`
const Body = styled.div`
 	margin: 0;
 	margin-bottom: 1rem;
  justify-content: center;
	text-align: center;
  display: flex;
  flex-direction: column;
  height: 70%;
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
  margin-top:auto;
  display:flex;
  justify-content:space-around;
`
const loginModal = ({ show,toggle }) =>{
    return (
      <Modal 
        Small
        show={show}
        toggle={toggle}
			>
        <FormWrap>
          <Label>
            로그인
          </Label>
					<Body>
						<Input
							type="text"
							placeholder="아이디를 입력하세요."
							name="id"
						/>
						<Input
							type="password"
							placeholder="비밀번호를 입력하세요."
							name="password"
						/>
          </Body>
          <Footer>
						<Button
							type="button"
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
export default loginModal;