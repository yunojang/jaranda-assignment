import React from 'react'
import { ROLE } from 'asset/role'

const SelectRole = ({currentRoleId, ...props}) => {
  return (
    <select {...props}
      name="role"
    >
      {Object.entries(ROLE).map(([id,role])=> {
        return  (
          <option
            selected={Number(id) === currentRoleId}
            key={id}
          >
            {role}
          </option>
        )
      }
      )}
    </select>
  )
}

export default SelectRole