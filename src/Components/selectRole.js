import React from 'react';
import { ROLE } from 'constant/role';
import styled from 'styled-components';
const SelectWrap = styled.select`
  height: 45px;
  padding: 0px 15px;
  min-width: 130px;
  width: 25%;
  border: 1px solid #cccccc;
  border-radius: 3px;
  font-size: 15px;
  color: #757575;

  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url('images/chevron-down.svg');
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 45%;
`;
const SelectRole = ({ currentRoleId, callback, ...props }) => {
  const onChangehandler = e => {
    e.preventDefault();
    if (callback) {
      callback(Number(e.target.value));
    }
  };
  return (
    <SelectWrap
      {...props}
      name="role"
      value={currentRoleId}
      onChange={onChangehandler}
    >
      {Object.entries(ROLE).map(([id, role]) => {
        return (
          <option key={id} name={id} value={id}>
            {role}
          </option>
        );
      })}
    </SelectWrap>
  );
};

export default SelectRole;
