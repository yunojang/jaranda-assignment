import React from 'react';
import styled from 'styled-components';
import Button from './button';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
  margin-Right: 10px;
`;
const Account = styled.div`
  display:flex;
  margin-right: 10%;
`;

class Header extends React.Component {
  render() {
    const pathname = this.props.history.location.pathname;
    return (
      <HeaderWrap>
        <LeftLink to="/">
          <Button select={pathname === '/'}>Main</Button>
        </LeftLink>
        <Account>
          <RightLink to="/login">
            <Button select={pathname === '/login'}>Login</Button>
          </RightLink>
          <RightLink to="/signup">
            <Button select={pathname === '/signup'}>Sign Up</Button>
          </RightLink>
        </Account>
      </HeaderWrap>
    );
  }
}

export default withRouter(Header);
