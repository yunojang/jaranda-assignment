import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './button';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginModal from '../Pages/Main/LoginModal';
import { userStorage } from 'store';

const HeaderWrap = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px 0px;
  z-index: 10;
  background-color: #f9f9f9;
`;
const LeftLink = styled(Link)`
  margin-left: 10%;
`;

const PageLink = styled(Link)`
  margin-right: 10px;
`;
const Account = styled.div`
  display: flex;
  margin-right: 10%;
`;

function Header({ history }) {
  const pathname = history.location.pathname;
  const [modal, setModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); //로그인중인지확인userData

  const toggleModal = () => {
    setModal(!modal);
  };

  const onLogin = ({ userName, password }) => {
    const user = Login({ userName, password });
    console.log(user);
    if (user) {
      userStorage.save(user);
      setIsLoggedIn(true);
    } else {
      throw new Error();
    }
  };

  const onLogout = () => {
    setModal(false);
    setIsLoggedIn(false);
  };

  return (
    <HeaderWrap>
      <LeftLink to="/">
        <Button select={pathname === '/'}>Main</Button>
      </LeftLink>
      <Account>
        {isLoggedIn ? (
          <>
            <PageLink to="/admin">관리페이지</PageLink>
            <PageLink to="/">마이페이지</PageLink>
            <PageLink to="/">
              <Button onClick={onLogout}>Logout</Button>
            </PageLink>
          </>
        ) : (
          <>
            <PageLink to="/">
              <Button onClick={toggleModal} select={pathname === '/login'}>
                Login
              </Button>
            </PageLink>
            <PageLink to="/signup">
              <Button select={pathname === '/signup'}>Sign Up</Button>
            </PageLink>
          </>
        )}

        <LoginModal
          show={modal}
          toggle={toggleModal}
          setIsLoggedIn={setIsLoggedIn}
          onLogin={onLogin}
        ></LoginModal>
      </Account>
    </HeaderWrap>
  );
}

export default withRouter(Header);
