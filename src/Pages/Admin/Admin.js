import React, { useState } from 'react';
import USERS from 'asset/users.json';
import styled from 'styled-components';
import UserTable from './userTable';
// import Error from 'Pages/Error/Error';

const AdminWrap = styled.div``;

function Admin() {
  const [users] = useState(USERS);

  // if (!users.isAdmin) {
  //   return (
  //     <>
  //       <Error />
  //     </>
  //   );
  // }

  return (
    <AdminWrap>
      <UserTable users={users} />
    </AdminWrap>
  );
}

export default Admin;
