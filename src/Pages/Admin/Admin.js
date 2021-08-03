import React, { useState } from 'react';
import USERS from 'asset/users.json';
import styled from 'styled-components';
import UserTable from './userTable';
import Error from 'Pages/Error/Error';

const AdminWrap = styled.div``;

function Admin() {
  const [users, setUsers] = useState(USERS);

  if (!users.isAdmin) {
    return (
      <>
        <Error />
      </>
    );
  }
  return (
    <AdminWrap>
      <UserTable users={users} setUsers={setUsers} />
    </AdminWrap>
  );
}

export default Admin;
