import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineCheck as Check } from 'react-icons/ai';

import Input from 'Components/input';
import useInput from 'hooks/useInput';
import Alert from 'Components/inputAlert';
import { samed, isInclude, minLen } from 'utils/validate';

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
  const pwdCheck = useInput('', samed.bind(null, props.value));
  const [check, setCheck] = useState(CHECK_LIST.map(item => ({ name: item, checked: false })));

  const renderCheck = () => {
    return check.map(({ name, checked }, index) =>
      <li key={index}>
        <CheckIcon checked={checked} />
        <CheckItem checked={checked}>{name}</CheckItem>
      </li>)
  }

  const passwordInput = event => {
    const { value } = event.target;
    const checked = [];

    for (const i in CHECK_LIST) {

      if (CHECK_FUNC[i](value)) {
        checked.push(Number(i));
      }
    }

    setCheck(check => check.map((v, i) => checked.includes(i) ? { ...v, checked: true } : { ...v, checked: false }))
  }

  return (
    <>
      <Input
        required
        type='password'
        placeholder='비밀번호'
        onInput={passwordInput}
        {...props}
      />

      <CheckList>
        {renderCheck()}
      </CheckList>

      <Input
        required
        type='password'
        placeholder='비밀번호 확인'
        {...pwdCheck}
      />
      <Alert show={!pwdCheck.isCorrect}>비밀번호와 다릅니다.</Alert>
    </>
  );
}

export default Password;
