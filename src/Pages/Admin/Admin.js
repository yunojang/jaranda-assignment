import React, { useState, useEffect } from 'react';
import USERS from 'asset/users.json';
import styled from 'styled-components/macro';
import UserTable from './userTable';
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

const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input {
    position: relative;
    padding-left: 75px;
    margin-right: 25px;
    font-size: 17px;
    width: 595px;
    height: 60px;
    border-radius: 5px;
    background-color: white;
    background-image: url('images/search.svg');
    background-position: 30px 50%;
    background-repeat: no-repeat;
  }

  input::placeholder {
    font-size: 17px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    height: 60px;
    font-size: 18px;
    font-weight: 500;
    background-color: #1685fd;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  img {
    margin-right: 10px;
  }
`;

function Admin() {
  const [users] = useState(USERS);

  const [value, setValue] = useState('');
  const [userList, setUserList] = useState([]);

  const handleInput = e => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setUserList(
      users?.filter(el =>
        el.userName.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  }, [value, users]);

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
        <Search>
          <input placeholder="전체 사용자 검색" onChange={handleInput} />
          <button>
            <img src="images/user-add.svg" alt="추가" />
            사용자 추가
          </button>
        </Search>
        <UserTable users={users} userList={userList} value={value} />
      </AdminWrap>
    </Container>
  );
}

export default Admin;
