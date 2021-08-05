import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import UserTable from './userTable';
import OptionalAccount from './optionalAccount';
import userListData from 'store/userList';
import useInput from 'hooks/useInput';
import { userStorage } from 'store';
import Error from 'Pages/Error/Error';

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

const Input = styled.input``;

function Admin({ match }) {
  const [users] = useState(userListData.load());
  const [user] = useState(userStorage.load());

  const [userList, setUserList] = useState(users);
  const [isModal, setIsModal] = useState(false);

  const [page, setPage] = useState(match.params.page || 0);
  const [limit] = useState(5);
  const search = useInput('');

  const toggleModal = () => {
    setIsModal(prev => !prev);
  };

  let pageable;
  pageable = userListData.findAllByUsername(page, limit, search.value);

  useEffect(() => {
    const { value } = search;
    pageable = userListData.findAllByUsername(page, limit, value);
    setPage(0);
  }, [search.value]);

  const findLastId = () => {
    return Math.max(...userList.map(v => v.id));
  };

  if (!user || !user.isAdmin) {
    return <Error />;
  }

  return (
    <Container>
      <AdminWrap>
        <Title>사용자 관리</Title>
        <Search>
          <Input placeholder="전체 사용자 검색" {...search} />
          <button onClick={toggleModal}>
            <img src="images/user-add.svg" alt="추가" />
            사용자 추가
          </button>
          {/* <Link to={}>1페이지</Link> */}
        </Search>
        <UserTable
          pageable={pageable}
          setPage={setPage}
          page={page}
          setUserList={setUserList}
          userList={userList}
        />
      </AdminWrap>
      <OptionalAccount
        show={isModal}
        toggle={toggleModal}
        setUserList={setUserList}
        lastId={findLastId() + 1}
      />
    </Container>
  );
}

export default Admin;
