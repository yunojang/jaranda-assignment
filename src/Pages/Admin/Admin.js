import React, { useState, useEffect, useCallback } from 'react';
import USERS from 'asset/users.json';
import styled from 'styled-components/macro';
import UserTable from './userTable';
import UserSearch from './userSearch';
import { debounce } from 'lodash';
// import Error from 'Pages/Error/Error';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  padding-bottom: 100px;
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

  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');
  const [userList, setUserList] = useState([]);

  const handleInput = e => {
    delaySetValue(e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    setUserList(
      users?.filter(el => el.userName.includes(search)).slice(0, users.length),
    );
  }, [users, search]);

  const delaySetValue = useCallback(
    debounce(value => setSearch(value), 1000),
    [],
  );

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
        <UserSearch value={value} handleInput={handleInput} />
        <UserTable users={users} userList={userList} />
      </AdminWrap>
    </Container>
  );
}

export default Admin;
