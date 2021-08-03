import React,{} from 'react'
import { ROLE } from 'asset/role'
import styled from 'styled-components'
const SelectWrap = styled.select`
  height: 30px;
  min-width: 130px;
  width: 25%;
`
const SelectRole = ({currentRoleId,callback,...props}) => {
  const onChangehandler = (e) => {
    e.preventDefault()
    if (callback) {
      callback(e.target.value)
    }
  }
  return (
    <SelectWrap {...props}
      name="role"
      value={currentRoleId}
      onChange={onChangehandler}
    >
      {Object.entries(ROLE).map(([id,role])=> {
        return  (
          <option
            key={id}
            name={id}
            value={id}
          >
            {role}
          </option>
        )
      }
      )}
    </SelectWrap>
  )
}

export default SelectRole