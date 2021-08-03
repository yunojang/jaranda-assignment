import React from 'react';
import styled from 'styled-components';
import { ROLE } from 'asset/role';

import Modal from 'Components/modal';
import Button from 'Components/button';
import SelectRole from 'Components/selectRole';
import { cardNumberFormat } from 'utils/format';

const Container = styled.div``;
const UserModal = ({ show, toggleModal, user }) => {
  const { id, userName, address, cardNumber, role, isAdmin } = user;
  const changeUserData = () => {};
  return (
    <Modal show={show} height="90%" width="90%" toggle={toggleModal}>
      <Container>
        <div>ID : {id}</div>
        <div>이름 : {userName}</div>
        <div>주소 : {address}</div>
        <div>카드 번호 : {cardNumberFormat(cardNumber)}</div>
        <div>
          {ROLE[role]}
          <SelectRole currentRoleId={role} />
        </div>
        <div>{isAdmin ? '관리자' : ' '}</div>
      </Container>
      <Button Small onClick={changeUserData}>
        수정
      </Button>
      <Button Small onClick={toggleModal}>
        닫기
      </Button>
    </Modal>
  );
};

export default UserModal;
