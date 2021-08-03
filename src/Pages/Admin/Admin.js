import React, { useState } from 'react';
import USERS from 'asset/users.json'
import styled from 'styled-components'
import UserTable from './userTable'

const AdminWrap = styled.div`
`
function Admin() {
  const [users] = useState(USERS)
  return (
    <AdminWrap>
      <UserTable users={users}/>
    </AdminWrap>
  )
}

export default Admin;
