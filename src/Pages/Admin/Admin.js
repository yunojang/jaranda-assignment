import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import userListData from 'store/userList';
import useInput from 'hooks/useInput';
import UserTable from './Components/userTable';
import OptionalAccount from './Components/optionalAccount';
import UserSideNav from './Components/userSideNav';
import { userStorage } from 'store';
import Error from 'Pages/Error/Error';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #f8f8f8;
  padding-bottom: 150px;
`;

const AdminWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Title = styled.h1`
  margin: 50px 0px 30px 0px;
  width: 985px;
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
    height: 55px;
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
    height: 55px;
    font-size: 18px;
    font-weight: 500;
    background-color: #1685fd;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    white-space: nowrap;
  }

  img {
    margin-right: 10px;
  }
`;

const Input = styled.input``;

function Admin() {
  const users = userListData.load();
  const user = userStorage.load();
  const [filterNumber, setFilterNumber] = useState(100);

  const [userList, setUserList] = useState(users);
  const [isModal, setIsModal] = useState(false);

  const [page, setPage] = useState(0);
  const [showUser, setShowUser] = useState(userList)
  const search = useInput('');

  const toggleModal = () => {
    setIsModal(prev => !prev);
  };
  
  useEffect(()=>{
    const filteredUser = userList.filter(user => {
      const roleFilter = filterNumber === 100 || user.role === filterNumber
      if (!roleFilter){
        return false
      }
      const nameFilter = search.value.length === 0 ||  user.userName.toLowerCase().includes(search.value.toLowerCase())
      if (!nameFilter) {
        return false
      }
      return true
    })
    setShowUser(filteredUser)
    setPage(0)
  },[search.value, filterNumber, userList])
  const onClickFilter = role => {
    setFilterNumber(role);
  };

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
        <Wrapper>
          <UserSideNav
            filterNumber={filterNumber}
            onClickFilter={onClickFilter}
          />
          <div>
            <Search>
              <Input placeholder="전체 사용자 검색" {...search} />
              <button onClick={toggleModal}>
                <img src="images/user-add.svg" alt="추가" />
                사용자 추가
              </button>
              {/* <Link to={}>1페이지</Link> */}
            </Search>
            <UserTable
              allUserNum={userList.length}
              setPage={setPage}
              page={page}
              showUser={showUser}
              setUserList={setUserList}
            />
          </div>
        </Wrapper>
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
