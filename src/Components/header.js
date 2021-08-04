import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './button';
import Navbar from '../Pages/Main/Navbar';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginModal from '../Pages/Main/loginModal';

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
const RightLink = styled(Link)`
  margin-right: 10px;
`;
const Account = styled.div`
  display: flex;
  margin-right: 10%;
`;

function Header({ history }) {
  const pathname = history.location.pathname;
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <HeaderWrap>
      <LeftLink to="/">
        <Button select={pathname === '/'}>Main</Button>
      </LeftLink>
      <Navbar />

      <Account>
        <RightLink to="/">
          <Button onClick={toggleModal} select={pathname === '/login'}>
            Login
          </Button>
        </RightLink>
        <div>
          <LoginModal show={modal} toggle={toggleModal}></LoginModal>
        </div>
        <RightLink to="/signup">
          <Button select={pathname === '/signup'}>Sign Up</Button>
        </RightLink>
      </Account>
    </HeaderWrap>
  );
}

export default withRouter(Header);
