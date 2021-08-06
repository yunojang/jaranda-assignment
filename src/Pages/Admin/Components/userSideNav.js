import React from 'react';
import styled, { css } from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 155px;
  margin-right: 35px;
`;

const ClickedBtn = styled.button`
  padding: 20px 15px 15px 30px;
  width: 100%;
  font-size: 15px;
  text-align: left;
  background-color: #f5faff;
  color: #1685fd;
  font-weight: 600;
  border-bottom: 1px solid #1685fd;

  ${props =>
    !props.isChosen &&
    css`
      color: #4a4a4a;
      border-bottom: 1px solid #f8f8f8;
      background-color: white;

      &:hover {
        background-color: #f5faff;
        color: #1685fd;
        font-weight: 600;
        border-bottom: 1px solid #1685fd;
      }
    `}
`;

function UserSideNav({ onClickFilter, filterNumber }) {
  return (
    <Container>
      {USER_FILTER.map((filter, index) => (
        <ClickedBtn
          key={index}
          isChosen={filter?.role === filterNumber}
          onClick={() => {
            onClickFilter(filter?.role);
          }}
        >
          {filter?.title}
        </ClickedBtn>
      ))}
    </Container>
  );
}

export default UserSideNav;

const USER_FILTER = [
  { title: '전체 사용자', role: 100 },
  { title: '일반 사용자', role: 0 },
  { title: '프론트엔드', role: 11 },
  { title: '백엔드', role: 12 },
  { title: '서버', role: 13 },
  { title: '고객지원', role: 21 },
  { title: '인사관리', role: 22 },
];
