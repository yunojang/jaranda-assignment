import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineCheck as Check } from 'react-icons/ai';

import Input from 'Components/input';
import useInput from 'hooks/useInput';
import Alert from 'Components/inputAlert';
import { isInclude, minLen } from 'utils/validate';

const CHECK_LIST = ['숫자', '영어', '특수문자', '8자 이상'];
const CHECK_FUNC = [isInclude.bind(null, 'number'), isInclude.bind(null, 'string'), isInclude.bind(null, 'special'), minLen.bind(null, 8)];

const CheckList = styled.ul`
  display: flex;
  margin-bottom: 25px;
  font-size: 15px;
  column-gap: 10px;
`;

const CheckIcon = styled(Check)`
  margin-right: 2px;
  color: ${props => props.checked ? 'red' : '#aaa'};
`;

const CheckItem = styled.span`
  color: ${props => props.checked ? '#4a4a4a' : '#aaa'};
`;

function Password(props) {
  const [check, setCheck] = useState(CHECK_LIST.map(item => ({ name: item, checked: false })));
  const pwdCheck = useInput('');
  const [showAlert, setShowAlert] = useState(false);

  const validCheck = event => {
    const { value } = event.target;
    const passed = [];

    for (const index in CHECK_FUNC) {

      if (CHECK_FUNC[index](value)) {
        passed.push(Number(index));
      }
    }

    setCheck(check.map((v, i) =>
      passed.includes(i)
        ? { ...v, checked: true }
        : { ...v, checked: false }
    ))
  }

  const sameCheck = event => {
    if (props.value !== event.target.value) {
      setShowAlert(true);
    }
    else {
      setShowAlert(false);
    }
  }

  const renderChecks = () => {
    return check.map(({ name, checked }, index) =>
      <li key={index}>
        <CheckIcon checked={checked} />
        <CheckItem checked={checked}>{name}</CheckItem>
      </li>)
  }

  const samePwdExp = `^${props.value}$`;

  return (
    <>
      <Input
        required
        type='password'
        placeholder='비밀번호'
        onInput={validCheck}
        {...props}
      />

      <CheckList>
        {renderChecks()}
      </CheckList>

      <Input
        required
        pattern= {samePwdExp}
        type='password'
        placeholder='비밀번호 확인'
        onInput={sameCheck}
        {...pwdCheck}
      />
      <Alert show={showAlert}>비밀번호와 다릅니다.</Alert>
    </>
  );
}

export default Password;
