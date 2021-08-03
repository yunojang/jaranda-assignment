import React, { useState } from 'react';
import USERS from 'asset/users.json';
import styled from 'styled-components/macro';
import UserTable from './userTable';
import UserSearch from './userSearch';
// import Error from 'Pages/Error/Error';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  height: 100vh;
`;

const AdminWrap = styled.div``;

const Title = styled.h1`
  margin: 50px 0px 30px 0px;
  font-size: 28px;
  font-weight: 800;
  color: #252529;
`;

// const Left = styled.aside`
//   width: 155px;
// `;

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
    <Container>
      <AdminWrap>
        <Title>사용자 관리</Title>
        <UserSearch />
        <UserTable users={users} />
      </AdminWrap>
    </Container>
  );
}

export default Admin;
