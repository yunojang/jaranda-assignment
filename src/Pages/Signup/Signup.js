import React from 'react';
import styled from 'styled-components';
import Button from 'Components/button';
// import { isUserName, isPassword } from './validate';

function Signup() {
  return (
    <Container>
      <SignupWrap>
        <AccountTitle>
          10초 만에 가입하고 <br />
          선생님 정보를 받아보세요
        </AccountTitle>
        <Input type="id" maxLength="64" placeholder="아이디" />
        <Input
          type="password"
          maxLength="64"
          placeholder="비밀번호"
          autoComplete="on"
        />
        <PasswordCheckWrap>
          {PASSWORD_CHECK.map((v, idx) => {
            return (
              <div key={idx}>
                <span>{v}</span>
              </div>
            );
          })}
        </PasswordCheckWrap>
        <Input type="password" maxLength="64" placeholder="비밀번호 확인" />
        <PostInput>
          <Input type="address" placeholder="주소" />
          <Button small="true">주소검색</Button>
        </PostInput>
        <CardCheck>
          <div>카드 정보</div>
          <Input type="number" placeholder="카드 번호" />
          <div className="card_expcode">
            <Input type="number" placeholder="카드 만료일" />
            <Input type="number" placeholder="보안코드" />
          </div>
        </CardCheck>
        <SignupPolicy>
          <div id="all_check">
            <label>
              <input type="checkbox" />
              모두 동의합니다.
            </label>
          </div>
          {SIGNUP_POLICY.map((v, idx) => {
            return (
              <div key={idx}>
                <label>
                  <input type="checkbox" />
                  {v}
                </label>
              </div>
            );
          })}
        </SignupPolicy>
        <SignupSubmit>가입하기</SignupSubmit>
      </SignupWrap>
    </Container>
  );
}

export default Signup;

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 864px;
  margin: auto;
`;

const SignupWrap = styled.div`
  max-width: 480px;
  margin: 48px 0;
  padding: 0 15px;
`;

const AccountTitle = styled.div`
  text-align: center;
  margin-bottom: 48px;
  line-height: 1;
  font-size: 24px;
  color: #4a4a4a;
`;

const Input = styled.input`
  display: block;
  height: 44px;
  width: 90%;
  margin-bottom: 8px;
  padding: 0 15px;
  border: 1px solid rgba(154, 154, 154, 0.5);
  border-radius: 2px;
  background-color: #fff;
  font-size: 12px;

  ::placeholder {
    color: gray;
  }
`;

const PasswordCheckWrap = styled.div`
  width: 100%;
  margin-bottom: 8px;
  display: flex;

  div {
    margin-right: 11px;

    span {
      display: block;
      min-height: 20px;
      line-height: 20px;
      height: 20px;
      color: #acb0b4;
      font-size: 14px;
      letter-spacing: -0.5px;
    }
  }
`;

const PostInput = styled.div`
  display: flex;
  width: 100%;

  Button {
    height: 46px;
    border: none;
    background-color: #0085fd;
    color: #fff;
    font-size: 16px;
  }
`;

const CardCheck = styled.div`
  font-size: 14px;

  div {
    margin-bottom: 8px;
  }

  .card_expcode {
    display: flex;
    column-gap: 8px;
  }
`;

const SignupPolicy = styled.div`
  width: 100%;
  padding: 12px 0 24px;
  color: #55585c;
  font-size: 16px;

  #all_check {
    font-weight: bold;
  }

  div {
    height: 24px;
    line-height: 24px;
    margin-bottom: 20px;
    letter-spacing: -0.5px;
  }

  input {
    display: none;
  }

  label {
    cursor: pointer;
  }
`;

const SignupSubmit = styled.div`
  height: 44px;
  margin-bottom: 38px;
  background-color: #0085fd;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  line-height: 3;
  font-size: 16px;
`;

const SIGNUP_POLICY = [
  '이용약관 동의(필수)',
  '개인정보 처리방침 동의(필수)',
  '자동결제 서비스 업무 위탁(필수)',
  '개인정보 취급방침 동의(선택)',
];

const PASSWORD_CHECK = ['숫자', '특수문자', '영문', '8자리 이상'];
