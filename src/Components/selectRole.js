import React from 'react'
import { ROLE } from 'asset/role'

const SelectRole = ({currentRoleId, ...props}) => {
  const filtered = Object.entries(ROLE).filter(([id,role]) => Number(id) !== currentRoleId)
  return (
    <select {...props}
      name="role"
    >
      {filtered.map(([id,role])=> {
        return  (
          <option key={id}>{role}</option>
        )
      }
      )}
    </select>
  )
}

export default SelectRole