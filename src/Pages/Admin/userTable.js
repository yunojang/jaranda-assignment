import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import PageButton from 'Components/pageButton';
import UserModal from './userModal';
import { ROLE } from 'constant/role';
import { cardNumberFormat } from 'utils/format';

const Container = styled.div`
  margin-top: 30px;
  padding: 30px;
  width: 795px;
  background-color: white;
  color: #252529;

  button {
    border: none;
  }
`;

const Total = styled.div`
  margin-bottom: 35px;
  font-size: 17px;
  font-weight: bold;
  color: #252529;

  span {
    color: #1685fd;
  }
`;

const Td = styled.td`
  padding: 20px 30px 20px 0px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const AdminTd = styled.td`
  padding: 20px 35px 20px 0px;

  span {
    border-radius: 50px;
    padding: 8px 15px;
    background-color: #4a4a4a;
    color: white;
  }
`;

const Table = styled.table`
  margin-bottom: 45px;
`;
const THead = styled.thead`
  margin: 8px 0px;
  tr {
    color: #9a9a9a;
  }
`;
const TBody = styled.tbody``;

const ModifyBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  background-color: #fafafa;
  cursor: pointer;
  color: #7e7e7e;

  img {
    width: 18px;
    margin-right: 5px;
  }
`;

const User = ({ user, onClickhandler }) => {
  const { id, userName, address, cardNumber, role, isAdmin } = user;
  return (
    <tr>
      <Td>{id}</Td>
      <Td>{userName}</Td>
      <Td>{address}</Td>
      <Td>{cardNumberFormat(cardNumber)}</Td>
      <Td>{ROLE[role]}</Td>
      <AdminTd>{isAdmin ? '관리자' : ''}</AdminTd>
      <ModifyBtn onClick={onClickhandler}>
        <img src="images/edit-alt.svg" alt="아이콘" />
        수정
      </ModifyBtn>
    </tr>
  );
};

const UserTable = ({ users }) => {
  const [isModal, setIsModal] = useState(false);
  const [modalId, setModalId] = useState(0);
  const [limit] = useState(3);
  const [showUsers, setShowUsers] = useState([]);
  const openModal = idx => {
    setIsModal(true);
    setModalId(idx);
  };

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    setShowUsers(users.slice(0, limit));
  }, []);

  return (
    <Container>
      <Total>
        전체 사용자 <span>100</span>명
      </Total>
      <Table>
        <THead>
          <tr>
            <Td>아이디</Td>
            <Td>이름</Td>
            <Td>주소</Td>
            <Td>카드번호</Td>
            <Td>권한</Td>
            {/* <Td>admin</Td> */}
          </tr>
        </THead>
        <TBody>
          {showUsers.map((user, idx) => (
            <User key={idx} user={user} onClickhandler={() => openModal(idx)} />
          ))}
        </TBody>
      </Table>
      <PageButton
        items={users}
        setItems={setShowUsers}
        limit={limit}
        size={5}
      />
      <UserModal
        user={users[modalId]}
        show={isModal}
        toggleModal={toggleModal}
      ></UserModal>
    </Container>
  );
};

export default UserTable;
