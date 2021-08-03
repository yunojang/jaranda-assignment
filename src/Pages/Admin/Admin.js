import React, { useState } from 'react';
import USERS from 'asset/users.json';
import styled from 'styled-components';
import UserTable from './userTable';

const AdminWrap = styled.div``;
function Admin() {
  const [users, setUsers] = useState(USERS);
  return (
    <AdminWrap>
      <UserTable users={users} setUsers={setUsers} />
    </AdminWrap>
  );
}

export default Admin;
